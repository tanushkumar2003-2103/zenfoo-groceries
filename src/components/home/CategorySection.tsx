import { Link } from "@tanstack/react-router";

import { categories } from "@/data/categories";

export function CategorySection() {
  return (
    <section className="py-8">
      <div className="zen-container">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">Shop by category</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fourteen aisles, one basket, ten minutes.
            </p>
          </div>
          <Link to="/categories" className="text-sm font-semibold text-primary hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/category/$categorySlug"
              params={{ categorySlug: category.slug }}
              className="group rounded-2xl border border-border bg-card p-3 text-center transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <div
                className="mx-auto grid aspect-square w-full max-w-24 place-items-center rounded-xl text-3xl sm:text-4xl"
                style={{ backgroundColor: category.tone }}
                aria-hidden="true"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {category.emoji}
                </span>
              </div>
              <p className="mt-2.5 text-xs font-semibold leading-tight sm:text-sm">
                {category.shortName}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
