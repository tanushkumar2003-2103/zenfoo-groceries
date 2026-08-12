import { createFileRoute } from "@tanstack/react-router";

import { CategorySection } from "@/components/home/CategorySection";
import { Hero } from "@/components/home/Hero";
import { ProductSection } from "@/components/home/ProductSection";
import { PromoBanners, TrustSection } from "@/components/home/PromoBanners";
import { RecentlyViewed } from "@/components/product/RecentlyViewed";
import { dealsOfTheDay, products, productsByCategory } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenfoo — Fresh groceries delivered in minutes" },
      {
        name: "description",
        content:
          "Shop fruits, vegetables, dairy, staples, snacks and household essentials on Zenfoo. Fresh quality, honest prices, delivered in 10–20 minutes.",
      },
      { property: "og:title", content: "Zenfoo — Fresh groceries delivered in minutes" },
      {
        property: "og:description",
        content: "Fresh groceries, beautifully presented. Delivered to your door in minutes.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const freshPicks = productsByCategory("fruits-vegetables").slice(0, 12);
  const essentials = [
    ...productsByCategory("dairy-bread-eggs").slice(0, 7),
    ...productsByCategory("atta-rice-oil-dals").slice(0, 5),
  ];
  const snacks = productsByCategory("snacks-munchies");
  const beverages = [
    ...productsByCategory("cold-drinks-juices").slice(0, 6),
    ...productsByCategory("beverages").slice(0, 5),
  ];
  const sweet = [
    ...productsByCategory("chocolates"),
    ...productsByCategory("ice-creams").slice(0, 5),
  ];

  return (
    <>
      <Hero />
      <CategorySection />
      <PromoBanners />
      <ProductSection
        title="Fresh Picks"
        subtitle="Fruits and vegetables sourced this morning"
        products={freshPicks}
        viewAllTo="/category/fruits-vegetables"
      />
      <ProductSection
        title="Daily Essentials"
        subtitle="Milk, bread, eggs, atta, rice and oil"
        products={essentials}
        viewAllTo="/category/dairy-bread-eggs"
      />
      <ProductSection
        title="Deals of the Day"
        subtitle="Biggest savings across the store"
        products={dealsOfTheDay()}
        viewAllTo="/search"
      />
      <ProductSection
        title="Snacks & Munchies"
        subtitle="Chips, namkeen and chai-time biscuits"
        products={snacks}
        viewAllTo="/category/snacks-munchies"
      />
      <ProductSection
        title="Beverages"
        subtitle="Juices, soft drinks, tea and coffee"
        products={beverages}
        viewAllTo="/category/cold-drinks-juices"
      />
      <ProductSection
        title="Sweet Cravings"
        subtitle="Chocolates, ice creams and desserts"
        products={sweet}
        viewAllTo="/category/chocolates"
      />
      <RecentlyViewed />
      <TrustSection />
      <section className="zen-container pb-4">
        <p className="text-xs text-muted-foreground">
          {products.length} products across 14 categories, restocked every morning.
        </p>
      </section>
    </>
  );
}
