import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/data/products";

export function ProductSection({
  title,
  subtitle,
  products,
  viewAllTo,
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllTo: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    scroller.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  };

  if (!products.length) return null;

  return (
    <section className="py-8">
      <div className="zen-container">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold sm:text-2xl">{title}</h2>
            {subtitle ? (
              <p className="mt-1 truncate text-sm text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              to={viewAllTo}
              className="rounded-lg px-2 py-1 text-sm font-semibold text-primary hover:underline"
            >
              View all
            </Link>
            <div className="hidden gap-1 sm:flex">
              <button
                type="button"
                aria-label={`Scroll ${title} left`}
                onClick={() => scroll(-1)}
                className="grid size-9 place-items-center rounded-full border border-border bg-background hover:bg-surface"
              >
                <ChevronLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label={`Scroll ${title} right`}
                onClick={() => scroll(1)}
                className="grid size-9 place-items-center rounded-full border border-border bg-background hover:bg-surface"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[46%] shrink-0 snap-start sm:w-[31%] lg:w-[23%] xl:w-[19%]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
