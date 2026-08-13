import { Link, createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { Clock, Heart, MapPin, RotateCcw, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductImage } from "@/components/product/ProductImage";
import { ProductSection } from "@/components/home/ProductSection";
import { QuantityStepper } from "@/components/product/QuantityStepper";
import { Rating } from "@/components/ui/rating";
import { ZenButton } from "@/components/ui/zen-button";
import { useStore } from "@/context/store";
import { categories, subcategories } from "@/data/categories";
import { getProduct, productsBySubcategory } from "@/data/products";
import { getReviews } from "@/data/reviews";
import { formatINR } from "@/lib/format";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — Zenfoo" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} ${product.unit} — Zenfoo`;
    const description = `Buy ${product.name} (${product.unit}) by ${product.brand} at ${formatINR(product.price)} on Zenfoo. Delivered fresh in minutes.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();
  const { qtyOf, addToCart, setQty, isWishlisted, toggleWishlist, trackView } = useStore();
  const qty = qtyOf(product.id);
  const saved = isWishlisted(product.id);
  const reviews = getReviews(product.id);

  const category = categories.find((c) => c.id === product.categoryId)!;
  const subcategory = subcategories.find((s) => s.id === product.subcategoryId)!;
  const related = productsBySubcategory(product.subcategoryId)
    .filter((p) => p.id !== product.id)
    .slice(0, 10);

  useEffect(() => {
    setActiveImage(0);
    trackView(product.id);
  }, [product.id, trackView]);

  return (
    <div className="zen-container py-6">
      <Breadcrumbs>
        {[
          <Link
            key="cat"
            to="/category/$categorySlug"
            params={{ categorySlug: category.slug }}
            className="hover:text-primary"
          >
            {category.name}
          </Link>,
          <Link
            key="sub"
            to="/category/$categorySlug/$subcategorySlug"
            params={{ categorySlug: category.slug, subcategorySlug: subcategory.slug }}
            className="hover:text-primary"
          >
            {subcategory.name}
          </Link>,
          <span key="p" className="font-medium text-foreground">
            {product.name}
          </span>,
        ]}
      </Breadcrumbs>

      <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <ProductImage
              emoji={product.emoji}
              name={product.name}
              seed={product.id}
              src={product.images[activeImage] ?? product.thumbnail}
              size="lg"
              priority
              className="rounded-2xl"
            />
          </div>
          {product.images.length > 1 ? (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {product.images.map((image, i) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`${product.name} image ${i + 1}`}
                  aria-pressed={activeImage === i}
                  className={cn(
                    "rounded-xl border bg-card p-2",
                    activeImage === i ? "border-primary" : "border-border",
                  )}
                >
                  <ProductImage
                    emoji={product.emoji}
                    name={`${product.name} view ${i + 1}`}
                    seed={`${product.id}-${i}`}
                    src={image}
                    size="sm"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {product.brand}
          </p>
          <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">{product.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Rating value={product.rating} count={product.reviewCount} />
            <span className="text-sm text-muted-foreground">{product.unit}</span>
          </div>

          <div className="mt-5 flex flex-wrap items-baseline gap-3">
            <span className="text-3xl font-extrabold">{formatINR(product.price)}</span>
            {product.mrp > product.price ? (
              <>
                <span className="text-base text-muted-foreground line-through">
                  MRP {formatINR(product.mrp)}
                </span>
                <span className="rounded-md bg-primary-tint px-2 py-0.5 text-sm font-bold text-primary-dark">
                  {product.discount}% OFF
                </span>
              </>
            ) : null}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Inclusive of all taxes</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="w-36">
              {product.inStock ? (
                qty > 0 ? (
                  <QuantityStepper
                    value={qty}
                    label={product.name}
                    onChange={(next) => setQty(product.id, next)}
                  />
                ) : (
                  <ZenButton className="w-full" onClick={() => addToCart(product)}>
                    Add to Cart
                  </ZenButton>
                )
              ) : (
                <ZenButton className="w-full" variant="outline" disabled>
                  Out of Stock
                </ZenButton>
              )}
            </div>
            <ZenButton
              variant="soft"
              disabled={!product.inStock}
              onClick={() => {
                if (qty === 0) addToCart(product);
                navigate({ to: "/cart" });
              }}
            >
              Buy Now
            </ZenButton>
            <ZenButton
              variant="outline"
              size="icon"
              aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
              aria-pressed={saved}
              onClick={() => toggleWishlist(product)}
            >
              <Heart className={cn(saved && "fill-destructive text-destructive")} />
            </ZenButton>
          </div>

          <div className="mt-6 grid gap-3 rounded-2xl border border-border bg-surface p-4 sm:grid-cols-3">
            <p className="flex items-center gap-2 text-xs">
              <Clock className="size-4 text-primary" aria-hidden="true" /> Delivery in 10–20 mins
            </p>
            <p className="flex items-center gap-2 text-xs">
              <MapPin className="size-4 text-primary" aria-hidden="true" /> Available at your
              location
            </p>
            <p className="flex items-center gap-2 text-xs">
              <RotateCcw className="size-4 text-primary" aria-hidden="true" /> Easy returns on
              damage
            </p>
          </div>

          <section className="mt-8">
            <h2 className="text-base font-bold">Product description</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-base font-bold">Product information</h2>
            <dl className="mt-3 divide-y divide-border rounded-2xl border border-border">
              {product.info.map((row) => (
                <div key={row.label} className="grid grid-cols-[8rem_minmax(0,1fr)] gap-3 p-3 text-sm">
                  <dt className="text-muted-foreground">{row.label}</dt>
                  <dd className="min-w-0">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      <section className="mt-12">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
          <h2 className="text-lg font-bold">Customer reviews</h2>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={review.id} className="rounded-2xl border border-border bg-card p-4">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <p className="truncate text-sm font-semibold">{review.author}</p>
                <Rating value={review.rating} showCount={false} />
              </div>
              <h3 className="mt-2 text-sm font-semibold">{review.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{review.body}</p>
              <p className="mt-2 text-xs text-muted-foreground">{review.date}</p>
            </article>
          ))}
        </div>
        <ZenButton
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={() => toast("Reviews are part of the Zenfoo demo experience.")}
        >
          Write a review
        </ZenButton>
      </section>

      {related.length ? (
        <div className="mt-6 -mx-4 md:-mx-6 xl:-mx-8">
          <ProductSection
            title="Similar products"
            products={related}
            viewAllTo={`/category/${category.slug}/${subcategory.slug}`}
          />
        </div>
      ) : null}
    </div>
  );
}
