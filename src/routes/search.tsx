import { Link, createFileRoute } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

import { ProductBrowser } from "@/components/product/ProductBrowser";
import { EmptyState } from "@/components/ui/empty-state";
import { products } from "@/data/products";
import { categories, subcategories } from "@/data/categories";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Search groceries — Zenfoo" },
      {
        name: "description",
        content: "Search thousands of fresh groceries and daily essentials on Zenfoo.",
      },
      { property: "og:title", content: "Search groceries — Zenfoo" },
      {
        property: "og:description",
        content: "Find fruits, vegetables, dairy, snacks and more on Zenfoo.",
      },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const query = q.trim().toLowerCase().slice(0, 80);

  const results = query
    ? products.filter((p) => {
        const category = categories.find((c) => c.id === p.categoryId)?.name.toLowerCase() ?? "";
        const sub = subcategories.find((s) => s.id === p.subcategoryId)?.name.toLowerCase() ?? "";
        return (
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          category.includes(query) ||
          sub.includes(query) ||
          p.tags.some((t) => t.includes(query))
        );
      })
    : products;

  return (
    <div className="zen-container py-6">
      <h1 className="text-2xl font-extrabold sm:text-3xl">
        {query ? `${results.length} results for “${q}”` : "Everything in store"}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {query
          ? "Refine with filters or sort to find exactly what you need."
          : "Browse the full Zenfoo catalogue, or search from the header."}
      </p>

      <div className="mt-6">
        {results.length ? (
          <ProductBrowser products={results} searchable={false} />
        ) : (
          <EmptyState
            emoji="🥕"
            title="No products found"
            description={`We couldn't find anything for “${q}”. Try a different spelling or browse our aisles.`}
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
