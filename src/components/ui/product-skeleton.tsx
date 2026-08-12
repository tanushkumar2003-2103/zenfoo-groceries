export function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-3">
      <div className="aspect-square w-full animate-pulse rounded-xl bg-muted" />
      <div className="mt-3 h-3 w-1/3 animate-pulse rounded bg-muted" />
      <div className="mt-2 h-4 w-4/5 animate-pulse rounded bg-muted" />
      <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-muted" />
      <div className="mt-4 h-9 w-full animate-pulse rounded-xl bg-muted" />
    </div>
  );
}

export function ProductGridSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
