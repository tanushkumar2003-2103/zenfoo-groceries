import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { GoogleButton } from "@/routes/login";
import { ZenButton } from "@/components/ui/zen-button";
import { useStore } from "@/context/store";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your Zenfoo account" },
      { name: "description", content: "Sign up for Zenfoo and get fresh groceries in minutes." },
      { property: "og:title", content: "Create your Zenfoo account" },
      { property: "og:description", content: "Sign up for Zenfoo and get fresh groceries in minutes." },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const { signIn } = useStore();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="zen-container flex justify-center py-10">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold">Create your account</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Join Zenfoo for fresh groceries delivered in 10–20 minutes.
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            signIn({ name: name || "Zen Shopper", email, provider: "email" });
            toast.success("Account created (demo)");
            navigate({ to: "/account" });
          }}
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Full name
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none focus:border-primary focus:bg-background"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Mobile number or email
            </label>
            <input
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none focus:border-primary focus:bg-background"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="new-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none focus:border-primary focus:bg-background"
            />
          </div>
          <ZenButton type="submit" className="w-full" size="lg">
            Create account
          </ZenButton>
        </form>

        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
        </div>
        <GoogleButton
          onClick={() => {
            signIn({ name: "Zen Shopper", email: "shopper@zenfoo.in", provider: "google" });
            toast.success("Signed up with Google (demo)");
            navigate({ to: "/account" });
          }}
        />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
