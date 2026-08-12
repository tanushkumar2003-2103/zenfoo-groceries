import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

import { QuantityStepper } from "@/components/product/QuantityStepper";
import { ProductImage } from "@/components/product/ProductImage";
import { Rating } from "@/components/ui/rating";
import { useStore } from "@/context/store";
import type { Product } from "@/data/products";
import { formatINR } from "@/lib/format";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const { qtyOf, addToCart, setQty, isWishlisted, toggleWishlist } = useStore();
  const qty = qtyOf(product.id);
  const saved = isWishlisted(product.id);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-border bg-card p-3 transition-shadow duration-200 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <div className="relative">
        <Link
          to="/product/$productId"
          params={{ productId: product.id }}
          className="block focus-visible:rounded-xl"
          aria-label={product.name}
        >
          <ProductImage emoji={product.emoji} name={product.name} seed={product.id} />
        </Link>

        {product.discount > 0 ? (
          <span className="absolute left-2 top-2 rounded-md bg-primary px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
            {product.discount}% off
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={saved}
          className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-background/90 text-muted-foreground shadow-sm transition-colors hover:text-destructive"
        >
          <Heart
            className={cn("size-4 transition-transform", saved && "scale-110 fill-destructive text-destructive")}
            aria-hidden="true"
          />
        </button>

        {!product.inStock ? (
          <div className="absolute inset-0 grid place-items-center rounded-xl bg-background/70">
            <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
              Out of Stock
            </span>
          </div>
        ) : null}
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {product.brand}
        </p>
        <h3 className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug">
          <Link to="/product/$productId" params={{ productId: product.id }}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">{product.unit}</p>
        <Rating value={product.rating} count={product.reviewCount} className="mt-2" />

        <div className="mt-auto pt-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold">{formatINR(product.price)}</span>
            {product.mrp > product.price ? (
              <span className="text-xs text-muted-foreground line-through">
                {formatINR(product.mrp)}
              </span>
            ) : null}
          </div>

          <div className="mt-2">
            {!product.inStock ? (
              <button
                type="button"
                disabled
                className="h-9 w-full cursor-not-allowed rounded-xl border border-border bg-muted text-xs font-semibold text-muted-foreground"
              >
                Out of Stock
              </button>
            ) : qty > 0 ? (
              <QuantityStepper
                size="sm"
                value={qty}
                label={product.name}
                onChange={(next) => setQty(product.id, next)}
              />
            ) : (
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="h-9 w-full rounded-xl border border-primary bg-primary-tint text-sm font-semibold text-primary-dark transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
