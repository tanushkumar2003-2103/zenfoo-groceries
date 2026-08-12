import { Link } from "@tanstack/react-router";
import { Home, LayoutGrid, Receipt, Search, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", Icon: Home, exact: true },
  { to: "/categories", label: "Categories", Icon: LayoutGrid, exact: false },
  { to: "/search", label: "Search", Icon: Search, exact: false },
  { to: "/orders", label: "Orders", Icon: Receipt, exact: false },
  { to: "/account", label: "Account", Icon: User, exact: false },
] as const;

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-5">
        {items.map(({ to, label, Icon, exact }) => (
          <li key={to}>
            <Link
              to={to}
              activeOptions={{ exact }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium"
            >
              <Icon className="size-5" aria-hidden="true" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
