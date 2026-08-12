import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductBrowser } from "@/components/product/ProductBrowser";
import { getCategory, getSubcategories } from "@/data/categories";
import { productsByCategory, productsBySubcategory } from "@/data/products";

export const Route = createFileRoute("/category/$categorySlug/")({
  loader: ({ params }) => {
    const category = getCategory(params.categorySlug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Category unavailable — Zenfoo" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.category.name} — Zenfoo`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const subs = getSubcategories(category.id);
  const all = productsByCategory(category.id);

  return (
    <div className="zen-container py-6">
      <Breadcrumbs>
        {[
          <Link key="cats" to="/categories" className="hover:text-primary">
            Categories
          </Link>,
          <span key="cur" className="font-medium text-foreground">
            {category.name}
          </span>,
        ]}
      </Breadcrumbs>

      <div className="mt-3 flex items-center gap-3">
        <span
          className="grid size-12 shrink-0 place-items-center rounded-2xl text-2xl"
          style={{ backgroundColor: category.tone }}
          aria-hidden="true"
        >
          {category.emoji}
        </span>
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-extrabold sm:text-3xl">{category.name}</h1>
          <p className="text-xs text-muted-foreground">{all.length} products</p>
        </div>
      </div>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{category.description}</p>

      <nav aria-label="Subcategories" className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
        {subs.map((sub) => (
          <Link
            key={sub.id}
            to="/category/$categorySlug/$subcategorySlug"
            params={{ categorySlug: category.slug, subcategorySlug: sub.slug }}
            className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium hover:border-primary hover:text-primary"
          >
            <span aria-hidden="true">{sub.emoji}</span>
            {sub.name}
            <span className="text-xs text-muted-foreground">
              {productsBySubcategory(sub.id).length}
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-8">
        <ProductBrowser products={all} />
      </div>
    </div>
  );
}
