import { Link, createFileRoute } from "@tanstack/react-router";

import { ProductGrid } from "@/components/product/ProductGrid";
import { EmptyState } from "@/components/ui/empty-state";
import { useStore } from "@/context/store";
import { getProduct, type Product } from "@/data/products";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Your wishlist — Zenfoo" },
      { name: "description", content: "Products you saved for later on Zenfoo." },
      { property: "og:title", content: "Your wishlist — Zenfoo" },
      { property: "og:description", content: "Products you saved for later on Zenfoo." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist } = useStore();
  const items = wishlist.map(getProduct).filter(Boolean) as Product[];

  return (
    <div className="zen-container py-6">
      <h1 className="text-2xl font-extrabold sm:text-3xl">Your wishlist</h1>
      <p className="mt-1 text-sm text-muted-foreground">{items.length} saved products</p>

      <div className="mt-6">
        {items.length ? (
          <ProductGrid products={items} />
        ) : (
          <EmptyState
            emoji="💚"
            title="Nothing saved yet"
            description="Tap the heart on any product to keep it here for your next order."
            action={
              <Link
                to="/categories"
                className="inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
              >
                Browse Categories
              </Link>
            }
          />
        )}
      </div>
    </div>
  );
}
