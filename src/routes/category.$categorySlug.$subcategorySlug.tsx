import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductBrowser } from "@/components/product/ProductBrowser";
import { getCategory, getSubcategories, getSubcategory } from "@/data/categories";
import { productsBySubcategory, subcategoryImage } from "@/data/products";

export const Route = createFileRoute("/category/$categorySlug/$subcategorySlug")({
  loader: ({ params }) => {
    const category = getCategory(params.categorySlug);
    const subcategory = category
      ? getSubcategory(category.id, params.subcategorySlug)
      : undefined;
    if (!category || !subcategory) throw notFound();
    return { category, subcategory };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Products unavailable — Zenfoo" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.subcategory.name} — ${loaderData.category.name} — Zenfoo`;
    const description = `Buy ${loaderData.subcategory.name.toLowerCase()} online at Zenfoo. Fresh stock, honest prices and delivery in minutes.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: SubcategoryPage,
});

function SubcategoryPage() {
  const { category, subcategory } = Route.useLoaderData();
  const items = productsBySubcategory(subcategory.id);
  const siblings = getSubcategories(category.id);

  return (
    <div className="zen-container py-6">
      <Breadcrumbs>
        {[
          <Link key="cats" to="/categories" className="hover:text-primary">
            Categories
          </Link>,
          <Link
            key="cat"
            to="/category/$categorySlug"
            params={{ categorySlug: category.slug }}
            className="hover:text-primary"
          >
            {category.name}
          </Link>,
          <span key="sub" className="font-medium text-foreground">
            {subcategory.name}
          </span>,
        ]}
      </Breadcrumbs>

      <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">{subcategory.name}</h1>
      <p className="text-xs text-muted-foreground">{items.length} products</p>

      <nav aria-label="Other subcategories" className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
        {siblings.map((sub) => (
          <Link
            key={sub.id}
            to="/category/$categorySlug/$subcategorySlug"
            params={{ categorySlug: category.slug, subcategorySlug: sub.slug }}
            activeProps={{ className: "border-primary bg-primary-tint text-primary-dark" }}
            className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium hover:border-primary"
          >
            {subcategoryImage(sub.id) ? (
              <img
                src={subcategoryImage(sub.id)}
                alt=""
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
                className="size-6 shrink-0 object-contain"
              />
            ) : (
              <span aria-hidden="true">{sub.emoji}</span>
            )}
            {sub.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8">
        <ProductBrowser products={items} />
      </div>
    </div>
  );
}
