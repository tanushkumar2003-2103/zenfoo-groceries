import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Zenfoo — fresh groceries, beautifully presented" },
      {
        name: "description",
        content: "Zenfoo is an Indian quick-commerce grocery service delivering fresh food in minutes.",
      },
      { property: "og:title", content: "About Zenfoo" },
      { property: "og:description", content: "Fresh groceries, beautifully presented, in minutes." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="zen-container max-w-3xl py-10">
      <h1 className="text-3xl font-extrabold">About Zenfoo</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Zenfoo is a modern Indian grocery service built around one idea: a weekly kitchen run
        should take minutes, not hours. We stock 5,000+ everyday items across fourteen aisles,
        source produce every morning, and deliver from neighbourhood stores so orders reach you in
        10–20 minutes.
      </p>

      <section id="careers" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-bold">Careers</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          We hire store leads, delivery partners, category managers, designers and engineers across
          Hyderabad, Bengaluru, Mumbai, Delhi NCR, Pune and Chennai. Write to us and tell us what
          you'd like to build.
        </p>
      </section>

      <section id="contact" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-bold">Contact</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Support: support@zenfoo.in · Partnerships: partners@zenfoo.in · Press: press@zenfoo.in
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Zenfoo is a frontend demo experience — these details are illustrative.
        </p>
      </section>
    </div>
  );
}
