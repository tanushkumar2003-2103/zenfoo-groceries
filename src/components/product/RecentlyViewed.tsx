import { Link } from "@tanstack/react-router";

import { ProductCard } from "@/components/product/ProductCard";
import { useStore } from "@/context/store";
import { getProduct } from "@/data/products";

export function RecentlyViewed() {
  const { recentlyViewed } = useStore();
  const items = recentlyViewed.map(getProduct).filter(Boolean).slice(0, 6);

  if (items.length < 2) return null;

  return (
    <section className="py-8">
      <div className="zen-container">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold sm:text-2xl">Recently viewed</h2>
          <Link to="/categories" className="text-sm font-semibold text-primary hover:underline">
            Keep shopping
          </Link>
        </div>
        <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-2">
          {items.map((product) => (
            <div
              key={product!.id}
              className="w-[46%] shrink-0 sm:w-[31%] lg:w-[23%] xl:w-[19%]"
            >
              <ProductCard product={product!} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
