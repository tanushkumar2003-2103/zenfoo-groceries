import { Link, createFileRoute } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { ProductImage } from "@/components/product/ProductImage";
import { QuantityStepper } from "@/components/product/QuantityStepper";
import { EmptyState } from "@/components/ui/empty-state";
import { ZenButton } from "@/components/ui/zen-button";
import { useStore } from "@/context/store";
import { formatINR } from "@/lib/format";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your cart — Zenfoo" },
      { name: "description", content: "Review your Zenfoo basket and check out in seconds." },
      { property: "og:title", content: "Your cart — Zenfoo" },
      { property: "og:description", content: "Review your Zenfoo basket and check out in seconds." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { cart, totals, setQty, removeFromCart, hydrated } = useStore();

  if (!hydrated) {
    return (
      <div className="zen-container py-10">
        <div className="h-40 animate-pulse rounded-2xl bg-muted" />
      </div>
    );
  }

  if (!cart.length) {
    return (
      <div className="zen-container py-10">
        <h1 className="mb-6 text-2xl font-extrabold sm:text-3xl">Your cart</h1>
        <EmptyState
          emoji="🧺"
          title="Your cart is waiting for some fresh picks."
          description="Add fruits, veggies or your daily essentials and they'll show up right here."
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
    );
  }

  return (
    <div className="zen-container py-6">
      <h1 className="text-2xl font-extrabold sm:text-3xl">Your cart</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {cart.length} {cart.length === 1 ? "item" : "items"} · saving{" "}
        {formatINR(totals.savings)} on this order
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <ul className="space-y-3">
          {cart.map((item) => (
            <li
              key={item.productId}
              className="grid grid-cols-[72px_minmax(0,1fr)] gap-4 rounded-2xl border border-border bg-card p-3 sm:grid-cols-[88px_minmax(0,1fr)_auto]"
            >
              <Link to="/product/$productId" params={{ productId: item.productId }}>
                <ProductImage
                  emoji={item.product.emoji}
                  name={item.product.name}
                  seed={item.productId}
                  src={item.product.thumbnail}
                  size="sm"
                />
              </Link>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  {item.product.brand}
                </p>
                <h2 className="truncate text-sm font-semibold">
                  <Link to="/product/$productId" params={{ productId: item.productId }}>
                    {item.product.name}
                  </Link>
                </h2>
                <p className="text-xs text-muted-foreground">{item.product.unit}</p>
                <p className="mt-1 text-sm font-bold">{formatINR(item.product.price)}</p>
                <div className="mt-2 flex items-center gap-3 sm:hidden">
                  <div className="w-28">
                    <QuantityStepper
                      size="sm"
                      value={item.qty}
                      label={item.product.name}
                      onChange={(next) => setQty(item.productId, next)}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.productId)}
                    aria-label={`Remove ${item.product.name}`}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
              <div className="hidden flex-col items-end justify-between sm:flex">
                <button
                  type="button"
                  onClick={() => removeFromCart(item.productId)}
                  aria-label={`Remove ${item.product.name}`}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="size-4" />
                </button>
                <div className="w-28">
                  <QuantityStepper
                    size="sm"
                    value={item.qty}
                    label={item.product.name}
                    onChange={(next) => setQty(item.productId, next)}
                  />
                </div>
                <p className="text-sm font-bold">{formatINR(item.product.price * item.qty)}</p>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-border bg-card p-5 lg:sticky lg:top-28">
          <h2 className="text-base font-bold">Order summary</h2>
          <dl className="mt-4 space-y-2.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Item total</dt>
              <dd>{formatINR(totals.itemTotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Delivery</dt>
              <dd className={totals.delivery === 0 ? "font-semibold text-primary" : ""}>
                {totals.delivery === 0 ? "FREE" : formatINR(totals.delivery)}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Handling</dt>
              <dd>{formatINR(totals.handling)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Discount</dt>
              <dd className="text-primary">-{formatINR(totals.discount)}</dd>
            </div>
            <div className="mt-3 flex justify-between border-t border-border pt-3 text-base font-extrabold">
              <dt>Total</dt>
              <dd>{formatINR(totals.grandTotal)}</dd>
            </div>
          </dl>

          <ZenButton
            className="mt-5 w-full"
            size="lg"
            onClick={() =>
              toast("Checkout demo", {
                description: "Backend and payment integration will be added later.",
              })
            }
          >
            Proceed to Checkout
          </ZenButton>
          <Link
            to="/categories"
            className="mt-3 block text-center text-sm font-semibold text-primary hover:underline"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
