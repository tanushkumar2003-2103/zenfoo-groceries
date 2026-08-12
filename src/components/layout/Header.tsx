import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Heart, MapPin, Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";

import { useStore } from "@/context/store";
import { cn } from "@/lib/utils";

const cities = ["Hyderabad", "Bengaluru", "Mumbai", "Delhi NCR", "Pune", "Chennai"];

function SearchField({ className }: { className?: string }) {
  const navigate = useNavigate();
  const search = useRouterState({
    select: (s) => (s.location.pathname === "/search" ? (s.location.search as { q?: string }).q : ""),
  });
  const [value, setValue] = useState(search ?? "");

  useEffect(() => {
    setValue(search ?? "");
  }, [search]);

  return (
    <form
      role="search"
      className={cn("relative w-full", className)}
      onSubmit={(e) => {
        e.preventDefault();
        navigate({ to: "/search", search: { q: value.trim() } });
      }}
    >
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Search products"
        placeholder="Search for fruits, vegetables, milk, snacks..."
        className="h-11 w-full rounded-xl border border-border bg-surface pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-background"
      />
    </form>
  );
}

export function Header() {
  const { cartCount, location, setLocation, user } = useStore();
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="zen-container">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 lg:flex lg:gap-6">
          <div className="flex min-w-0 items-center gap-3">
            <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Zenfoo home">
              <span className="grid size-9 place-items-center rounded-xl bg-primary text-lg text-primary-foreground">
                🌿
              </span>
              <span className="text-xl font-extrabold tracking-tight">
                Zen<span className="text-primary">foo</span>
              </span>
            </Link>

            <div className="relative hidden min-w-0 md:block">
              <button
                type="button"
                onClick={() => setPickerOpen((v) => !v)}
                aria-expanded={pickerOpen}
                className="flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-left text-sm hover:bg-surface"
              >
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[11px] leading-none text-muted-foreground">
                    Deliver to
                  </span>
                  <span className="block truncate font-semibold">{location}</span>
                </span>
                <ChevronDown className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              </button>
              {pickerOpen ? (
                <ul className="absolute left-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-popover py-1 shadow-[var(--shadow-lift)]">
                  {cities.map((city) => (
                    <li key={city}>
                      <button
                        type="button"
                        onClick={() => {
                          setLocation(city);
                          setPickerOpen(false);
                        }}
                        className={cn(
                          "w-full px-3 py-2 text-left text-sm hover:bg-surface",
                          city === location && "font-semibold text-primary",
                        )}
                      >
                        {city}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          <div className="hidden flex-1 lg:block">
            <SearchField />
          </div>

          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Account and cart">
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="hidden size-10 place-items-center rounded-xl text-foreground hover:bg-surface sm:grid"
            >
              <Heart className="size-5" aria-hidden="true" />
            </Link>
            <Link
              to={user ? "/account" : "/login"}
              className="hidden h-10 items-center gap-2 rounded-xl px-3 text-sm font-medium hover:bg-surface md:flex"
            >
              <User className="size-5" aria-hidden="true" />
              <span className="max-w-24 truncate">{user ? user.name.split(" ")[0] : "Login"}</span>
            </Link>
            <Link
              to="/cart"
              className="relative flex h-10 items-center gap-2 rounded-xl bg-primary px-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              <ShoppingCart className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">Cart</span>
              <span
                key={cartCount}
                className="animate-pop grid min-w-5 place-items-center rounded-full bg-primary-foreground px-1 text-xs font-bold text-primary"
              >
                {cartCount}
              </span>
              <span className="sr-only">items in cart</span>
            </Link>
          </nav>
        </div>

        <div className="pb-3 lg:hidden">
          <SearchField />
        </div>
      </div>
    </header>
  );
}
