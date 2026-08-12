import { Link } from "@tanstack/react-router";
import { Clock, IndianRupee, Leaf, ShieldCheck } from "lucide-react";

import heroImage from "@/assets/hero-groceries.jpg";

export function Hero() {
  return (
    <section className="border-b border-border bg-primary-tint">
      <div className="zen-container grid items-center gap-8 py-10 lg:grid-cols-2 lg:py-14">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs font-semibold text-primary-dark">
            <Clock className="size-3.5" aria-hidden="true" />
            Delivering in 10–20 minutes
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-5xl">
            Fresh groceries,
            <br />
            delivered to your doorstep.
          </h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
            Everything you need for your kitchen — picked this morning, delivered fresh and fast at
            honest prices.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/category/$categorySlug"
              params={{ categorySlug: "fruits-vegetables" }}
              className="inline-flex h-12 items-center rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Shop Now
            </Link>
            <Link
              to="/categories"
              className="inline-flex h-12 items-center rounded-xl border border-border bg-background px-7 text-sm font-semibold transition-colors hover:bg-surface"
            >
              Explore Categories
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Leaf className="size-4 text-primary" aria-hidden="true" /> Farm fresh daily
            </li>
            <li className="flex items-center gap-1.5">
              <IndianRupee className="size-4 text-primary" aria-hidden="true" /> Everyday low prices
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" aria-hidden="true" /> Quality checked
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-card)]">
          <img
            src={heroImage}
            alt="Fresh vegetables, fruits and milk arranged on a bright white surface"
            width={1600}
            height={1008}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
