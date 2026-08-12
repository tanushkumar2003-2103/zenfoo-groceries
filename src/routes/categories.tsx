import { Link, createFileRoute } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { categories, getSubcategories } from "@/data/categories";
import { productsByCategory } from "@/data/products";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "All grocery categories — Zenfoo" },
      {
        name: "description",
        content:
          "Browse every Zenfoo aisle: fruits and vegetables, dairy, staples, snacks, beverages, personal care and more.",
      },
      { property: "og:title", content: "All grocery categories — Zenfoo" },
      {
        property: "og:description",
        content: "Fourteen aisles of fresh groceries and daily essentials on Zenfoo.",
      },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="zen-container py-6">
      <Breadcrumbs>{[<span key="c">Categories</span>]}</Breadcrumbs>
      <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">Shop by category</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Everything for your kitchen and home, organised the way you shop.
      </p>

      <div className="mt-7 space-y-8">
        {categories.map((category) => (
          <section key={category.id}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-xl text-2xl"
                  style={{ backgroundColor: category.tone }}
                  aria-hidden="true"
                >
                  {category.emoji}
                </span>
                <div className="min-w-0">
                  <h2 className="truncate text-base font-bold sm:text-lg">{category.name}</h2>
                  <p className="truncate text-xs text-muted-foreground">
                    {productsByCategory(category.id).length} products
                  </p>
                </div>
              </div>
              <Link
                to="/category/$categorySlug"
                params={{ categorySlug: category.slug }}
                className="shrink-0 text-sm font-semibold text-primary hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {getSubcategories(category.id).map((subcategory) => (
                <Link
                  key={subcategory.id}
                  to="/category/$categorySlug/$subcategorySlug"
                  params={{ categorySlug: category.slug, subcategorySlug: subcategory.slug }}
                  className="group flex items-center gap-2.5 rounded-xl border border-border bg-card p-3 transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface text-lg transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {subcategory.emoji}
                  </span>
                  <span className="min-w-0 truncate text-xs font-semibold sm:text-sm">
                    {subcategory.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
