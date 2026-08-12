import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

import { ProductGrid } from "@/components/product/ProductGrid";
import { EmptyState } from "@/components/ui/empty-state";
import { ZenButton } from "@/components/ui/zen-button";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export type SortKey = "recommended" | "price-asc" | "price-desc" | "rating" | "discount";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Rating" },
  { value: "discount", label: "Discount" },
];

const priceBands = [
  { id: "u100", label: "Under ₹100", test: (p: Product) => p.price < 100 },
  { id: "100-250", label: "₹100 – ₹250", test: (p: Product) => p.price >= 100 && p.price <= 250 },
  { id: "250-500", label: "₹250 – ₹500", test: (p: Product) => p.price > 250 && p.price <= 500 },
  { id: "500p", label: "₹500 & above", test: (p: Product) => p.price > 500 },
];

const ratingBands = [
  { id: "4", label: "4★ & above", min: 4 },
  { id: "3", label: "3★ & above", min: 3 },
];

const discountBands = [
  { id: "10", label: "10% and above", min: 10 },
  { id: "20", label: "20% and above", min: 20 },
  { id: "30", label: "30% and above", min: 30 },
];

type Filters = {
  brands: string[];
  price: string[];
  rating: string | null;
  discount: string | null;
  availability: string | null;
};

const emptyFilters: Filters = {
  brands: [],
  price: [],
  rating: null,
  discount: null,
  availability: null,
};

function CheckRow({
  label,
  checked,
  onChange,
  type = "checkbox",
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
  type?: "checkbox" | "radio";
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-sm">
      <input
        type={type}
        checked={checked}
        onChange={onChange}
        className="size-4 accent-[var(--primary)]"
      />
      <span className={cn(checked ? "font-medium text-foreground" : "text-muted-foreground")}>
        {label}
      </span>
    </label>
  );
}

function FilterPanel({
  brands,
  filters,
  setFilters,
}: {
  brands: string[];
  filters: Filters;
  setFilters: (f: Filters) => void;
}) {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-sm font-semibold">Brand</h3>
        <div className="mt-2 max-h-56 overflow-y-auto pr-1">
          {brands.map((brand) => (
            <CheckRow
              key={brand}
              label={brand}
              checked={filters.brands.includes(brand)}
              onChange={() =>
                setFilters({
                  ...filters,
                  brands: filters.brands.includes(brand)
                    ? filters.brands.filter((b) => b !== brand)
                    : [...filters.brands, brand],
                })
              }
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold">Price</h3>
        <div className="mt-2">
          {priceBands.map((band) => (
            <CheckRow
              key={band.id}
              label={band.label}
              checked={filters.price.includes(band.id)}
              onChange={() =>
                setFilters({
                  ...filters,
                  price: filters.price.includes(band.id)
                    ? filters.price.filter((p) => p !== band.id)
                    : [...filters.price, band.id],
                })
              }
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold">Rating</h3>
        <div className="mt-2">
          {ratingBands.map((band) => (
            <CheckRow
              key={band.id}
              type="radio"
              label={band.label}
              checked={filters.rating === band.id}
              onChange={() =>
                setFilters({ ...filters, rating: filters.rating === band.id ? null : band.id })
              }
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold">Availability</h3>
        <div className="mt-2">
          {["In Stock", "Out of Stock"].map((label) => (
            <CheckRow
              key={label}
              type="radio"
              label={label}
              checked={filters.availability === label}
              onChange={() =>
                setFilters({
                  ...filters,
                  availability: filters.availability === label ? null : label,
                })
              }
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold">Discount</h3>
        <div className="mt-2">
          {discountBands.map((band) => (
            <CheckRow
              key={band.id}
              type="radio"
              label={band.label}
              checked={filters.discount === band.id}
              onChange={() =>
                setFilters({ ...filters, discount: filters.discount === band.id ? null : band.id })
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export function ProductBrowser({
  products,
  searchable = true,
  emptyAction,
}: {
  products: Product[];
  searchable?: boolean;
  emptyAction?: React.ReactNode;
}) {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [sort, setSort] = useState<SortKey>("recommended");
  const [query, setQuery] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);

  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    [products],
  );

  const activeCount =
    filters.brands.length +
    filters.price.length +
    (filters.rating ? 1 : 0) +
    (filters.discount ? 1 : 0) +
    (filters.availability ? 1 : 0);

  const visible = useMemo(() => {
    let list = products;
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q)),
      );
    }
    if (filters.brands.length) list = list.filter((p) => filters.brands.includes(p.brand));
    if (filters.price.length) {
      list = list.filter((p) =>
        filters.price.some((id) => priceBands.find((b) => b.id === id)?.test(p)),
      );
    }
    if (filters.rating) {
      const min = ratingBands.find((b) => b.id === filters.rating)?.min ?? 0;
      list = list.filter((p) => p.rating >= min);
    }
    if (filters.discount) {
      const min = discountBands.find((b) => b.id === filters.discount)?.min ?? 0;
      list = list.filter((p) => p.discount >= min);
    }
    if (filters.availability) {
      list = list.filter((p) => (filters.availability === "In Stock" ? p.inStock : !p.inStock));
    }

    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    if (sort === "discount") sorted.sort((a, b) => b.discount - a.discount);
    return sorted;
  }, [products, query, filters, sort]);

  return (
    <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8">
      <aside className="hidden lg:block">
        <div className="sticky top-28 rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold">Filters</h2>
            {activeCount > 0 ? (
              <button
                type="button"
                onClick={() => setFilters(emptyFilters)}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Clear all
              </button>
            ) : null}
          </div>
          <div className="mt-4">
            <FilterPanel brands={brands} filters={filters} setFilters={setFilters} />
          </div>
        </div>
      </aside>

      <div>
        <div className="mb-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          {searchable ? (
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search within these products"
              aria-label="Search within results"
              className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none focus:border-primary focus:bg-background"
            />
          ) : (
            <div />
          )}
          <div className="flex items-center gap-2">
            <ZenButton
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setSheetOpen(true)}
            >
              <SlidersHorizontal />
              Filters{activeCount ? ` (${activeCount})` : ""}
            </ZenButton>
            <label className="sr-only" htmlFor="sortby">
              Sort products
            </label>
            <select
              id="sortby"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="h-9 rounded-xl border border-border bg-background px-3 text-sm font-medium outline-none focus:border-primary"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="mb-4 text-sm text-muted-foreground">
          {visible.length} {visible.length === 1 ? "product" : "products"}
        </p>

        {visible.length ? (
          <ProductGrid products={visible} className="xl:grid-cols-4" />
        ) : (
          <EmptyState
            emoji="🔍"
            title="No products found"
            description="Try removing a filter or searching for something else — we have thousands of fresh picks."
            action={
              emptyAction ?? (
                <ZenButton
                  variant="soft"
                  onClick={() => {
                    setFilters(emptyFilters);
                    setQuery("");
                  }}
                >
                  Clear filters
                </ZenButton>
              )
            }
          />
        )}
      </div>

      {sheetOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setSheetOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[82vh] overflow-y-auto rounded-t-3xl bg-background p-5 pb-24">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold">Filters</h2>
              <button type="button" onClick={() => setSheetOpen(false)} aria-label="Close filters">
                <X className="size-5" />
              </button>
            </div>
            <FilterPanel brands={brands} filters={filters} setFilters={setFilters} />
            <div className="sticky bottom-0 mt-6 flex gap-3 bg-background pt-3">
              <ZenButton
                variant="outline"
                className="flex-1"
                onClick={() => setFilters(emptyFilters)}
              >
                Clear all
              </ZenButton>
              <ZenButton className="flex-1" onClick={() => setSheetOpen(false)}>
                Show {visible.length} results
              </ZenButton>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
