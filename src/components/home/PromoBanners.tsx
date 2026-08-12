import { Link } from "@tanstack/react-router";
import { BadgeIndianRupee, Leaf, ShieldCheck, Truck } from "lucide-react";

import bannerProduce from "@/assets/banner-produce.jpg";
import bannerDairy from "@/assets/banner-dairy.jpg";
import bannerSnacks from "@/assets/banner-beverages.jpg";

const banners = [
  {
    image: bannerProduce,
    alt: "Fresh fruits and vegetables on a light green background",
    kicker: "Fresh Fruits & Vegetables",
    title: "Up to 30% OFF",
    copy: "Picked this morning, at your door in minutes.",
    slug: "fruits-vegetables",
  },
  {
    image: bannerDairy,
    alt: "Milk bottle, butter, cheese and eggs on a cream background",
    kicker: "Daily Essentials",
    title: "Milk & more, delivered fast",
    copy: "Milk, curd, paneer, bread and eggs before breakfast.",
    slug: "dairy-bread-eggs",
  },
  {
    image: bannerSnacks,
    alt: "Coffee beans, orange juice and citrus fruits on a beige background",
    kicker: "Brew Break",
    title: "Tea, coffee & juices",
    copy: "Stock up on your everyday cup and chilled refreshers.",
    slug: "beverages",
  },
];

export function PromoBanners() {
  return (
    <section className="py-8">
      <div className="zen-container grid gap-4 md:grid-cols-3">
        {banners.map((banner) => (
          <Link
            key={banner.slug}
            to="/category/$categorySlug"
            params={{ categorySlug: banner.slug }}
            className="group relative overflow-hidden rounded-2xl border border-border"
          >
            <img
              src={banner.image}
              alt={banner.alt}
              loading="lazy"
              width={1200}
              height={600}
              className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-5">
              <p className="text-[11px] font-bold uppercase tracking-wide text-primary-dark">
                {banner.kicker}
              </p>
              <p className="mt-1 max-w-[15rem] text-lg font-extrabold leading-tight">
                {banner.title}
              </p>
              <p className="mt-1 max-w-[14rem] text-xs text-muted-foreground">{banner.copy}</p>
              <span className="mt-3 w-fit rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                Shop now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const values = [
  { Icon: Leaf, title: "Fresh Quality", copy: "Carefully selected produce, quality-checked twice." },
  { Icon: Truck, title: "Fast Delivery", copy: "Essentials at your door in 10–20 minutes." },
  { Icon: BadgeIndianRupee, title: "Best Prices", copy: "Honest everyday pricing on 5,000+ items." },
  { Icon: ShieldCheck, title: "Secure Shopping", copy: "Safe, reliable and easy returns." },
];

export function TrustSection() {
  return (
    <section className="py-8">
      <div className="zen-container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ Icon, title, copy }) => (
          <div key={title} className="rounded-2xl border border-border bg-surface p-5">
            <span className="grid size-10 place-items-center rounded-xl bg-primary-tint text-primary-dark">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-3 text-sm font-bold">{title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
