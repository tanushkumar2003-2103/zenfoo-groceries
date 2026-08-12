import { Link, createFileRoute } from "@tanstack/react-router";
import { Heart, MapPin, Receipt, ShoppingCart } from "lucide-react";

import { EmptyState } from "@/components/ui/empty-state";
import { ZenButton } from "@/components/ui/zen-button";
import { useStore } from "@/context/store";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Your account — Zenfoo" },
      { name: "description", content: "Manage your Zenfoo profile, address and saved products." },
      { property: "og:title", content: "Your account — Zenfoo" },
      { property: "og:description", content: "Manage your Zenfoo profile and saved products." },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const { user, signOut, location, wishlist, cartCount } = useStore();

  if (!user) {
    return (
      <div className="zen-container py-10">
        <EmptyState
          emoji="👋"
          title="You're not signed in"
          description="Log in to see your profile, saved products and order history."
          action={
            <Link
              to="/login"
              className="inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
            >
              Login to Zenfoo
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="zen-container py-6">
      <div className="rounded-3xl border border-border bg-card p-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary-tint text-2xl">
              🌿
            </span>
            <div className="min-w-0">
              <h1 className="truncate text-xl font-extrabold sm:text-2xl">{user.name}</h1>
              <p className="truncate text-sm text-muted-foreground">{user.email}</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-primary" aria-hidden="true" /> {location}
              </p>
            </div>
          </div>
          <ZenButton variant="outline" size="sm" onClick={signOut}>
            Sign out
          </ZenButton>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Link
          to="/orders"
          className="rounded-2xl border border-border bg-card p-5 hover:shadow-[var(--shadow-card)]"
        >
          <Receipt className="size-5 text-primary" aria-hidden="true" />
          <p className="mt-3 text-sm font-bold">My orders</p>
          <p className="text-xs text-muted-foreground">Track and reorder</p>
        </Link>
        <Link
          to="/wishlist"
          className="rounded-2xl border border-border bg-card p-5 hover:shadow-[var(--shadow-card)]"
        >
          <Heart className="size-5 text-primary" aria-hidden="true" />
          <p className="mt-3 text-sm font-bold">Wishlist</p>
          <p className="text-xs text-muted-foreground">{wishlist.length} saved products</p>
        </Link>
        <Link
          to="/cart"
          className="rounded-2xl border border-border bg-card p-5 hover:shadow-[var(--shadow-card)]"
        >
          <ShoppingCart className="size-5 text-primary" aria-hidden="true" />
          <p className="mt-3 text-sm font-bold">Cart</p>
          <p className="text-xs text-muted-foreground">{cartCount} items ready</p>
        </Link>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Signed in with {user.provider === "google" ? "Google (demo)" : "email (demo)"}. Zenfoo is a
        frontend demo — no real account data is stored.
      </p>
    </div>
  );
}
