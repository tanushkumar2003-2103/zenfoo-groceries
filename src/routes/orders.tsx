import { Link, createFileRoute } from "@tanstack/react-router";

import { EmptyState } from "@/components/ui/empty-state";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "Your orders — Zenfoo" },
      { name: "description", content: "See your past Zenfoo grocery orders and reorder in a tap." },
      { property: "og:title", content: "Your orders — Zenfoo" },
      { property: "og:description", content: "See your past Zenfoo grocery orders." },
    ],
  }),
  component: OrdersPage,
});

function OrdersPage() {
  return (
    <div className="zen-container py-10">
      <h1 className="text-2xl font-extrabold sm:text-3xl">Your orders</h1>
      <div className="mt-6">
        <EmptyState
          emoji="📦"
          title="No orders yet"
          description="Order history appears here once checkout goes live. For now, fill your basket with fresh picks."
          action={
            <Link
              to="/categories"
              className="inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
            >
              Start Shopping
            </Link>
          }
        />
      </div>
    </div>
  );
}
