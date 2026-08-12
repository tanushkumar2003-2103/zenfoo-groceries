import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";

const shop = [
  { label: "Fruits & Vegetables", slug: "fruits-vegetables" },
  { label: "Dairy, Bread & Eggs", slug: "dairy-bread-eggs" },
  { label: "Snacks & Munchies", slug: "snacks-munchies" },
  { label: "Cold Drinks & Juices", slug: "cold-drinks-juices" },
  { label: "Personal Care", slug: "personal-care" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="zen-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-lg text-primary-foreground">
              🌿
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              Zen<span className="text-primary">foo</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Fresh groceries, beautifully presented. Everything your kitchen needs, delivered in
            minutes across India.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <span
                key={i}
                className="grid size-9 place-items-center rounded-xl border border-border bg-background text-muted-foreground"
                aria-hidden="true"
              >
                <Icon className="size-4" />
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Zenfoo mobile apps for Android and iOS — coming soon.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Zenfoo</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-primary">
                About Zenfoo
              </Link>
            </li>
            <li>
              <Link to="/about" hash="careers" className="hover:text-primary">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/about" hash="contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/orders" className="hover:text-primary">
                My orders
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Shop</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {shop.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/category/$categorySlug"
                  params={{ categorySlug: item.slug }}
                  className="hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Help & Legal</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/help" className="hover:text-primary">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/help" hash="shipping" className="hover:text-primary">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/help" hash="returns" className="hover:text-primary">
                Returns
              </Link>
            </li>
            <li>
              <Link to="/help" hash="privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/help" hash="terms" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="zen-container flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Zenfoo Retail Pvt. Ltd. All rights reserved.</p>
          <p>Made for fresh kitchens across India.</p>
        </div>
      </div>
    </footer>
  );
}
