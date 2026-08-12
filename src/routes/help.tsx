import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help, shipping & policies — Zenfoo" },
      {
        name: "description",
        content: "Zenfoo FAQs, delivery and returns information, privacy policy and terms of use.",
      },
      { property: "og:title", content: "Help, shipping & policies — Zenfoo" },
      { property: "og:description", content: "FAQs, delivery, returns and policies for Zenfoo." },
    ],
  }),
  component: HelpPage,
});

const faqs = [
  {
    q: "How fast is delivery?",
    a: "Most orders reach you in 10–20 minutes from the nearest Zenfoo store, depending on distance and weather.",
  },
  {
    q: "Is there a minimum order value?",
    a: "No minimum. Delivery is free on orders above ₹199; below that a small ₹25 delivery fee applies.",
  },
  {
    q: "What if an item is out of stock?",
    a: "Out-of-stock items are clearly marked and cannot be added to the cart, so your basket always reflects live availability.",
  },
];

function HelpPage() {
  return (
    <div className="zen-container max-w-3xl py-10">
      <h1 className="text-3xl font-extrabold">Help centre</h1>

      <section className="mt-8">
        <h2 className="text-xl font-bold">FAQs</h2>
        <dl className="mt-3 divide-y divide-border rounded-2xl border border-border">
          {faqs.map((item) => (
            <div key={item.q} className="p-4">
              <dt className="text-sm font-semibold">{item.q}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="shipping" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-bold">Shipping</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We deliver across six metros between 7 AM and midnight. A ₹5 handling fee applies to every
          order; delivery is free above ₹199.
        </p>
      </section>

      <section id="returns" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-bold">Returns</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Damaged, spoiled or incorrect items can be reported within 24 hours for a full refund to
          your original payment method.
        </p>
      </section>

      <section id="privacy" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-bold">Privacy policy</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Zenfoo is a frontend demo. Cart, wishlist and sign-in state stay in your browser's local
          storage and are never sent to a server.
        </p>
      </section>

      <section id="terms" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-bold">Terms & conditions</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Prices, product images and availability shown here are illustrative and used for a
          demonstration of the Zenfoo shopping experience.
        </p>
      </section>
    </div>
  );
}
