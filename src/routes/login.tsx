import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { ZenButton } from "@/components/ui/zen-button";
import { useStore } from "@/context/store";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Zenfoo" },
      { name: "description", content: "Sign in to Zenfoo to track orders and save your favourites." },
      { property: "og:title", content: "Login — Zenfoo" },
      { property: "og:description", content: "Sign in to your Zenfoo account." },
    ],
  }),
  component: LoginPage,
});

export function GoogleButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-background text-sm font-semibold transition-colors hover:bg-surface"
    >
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <path fill="#4285F4" d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.46a5.5 5.5 0 0 1-2.4 3.6v3h3.88c2.27-2.09 3.56-5.17 3.56-8.63Z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.94-2.92l-3.88-3c-1.08.72-2.45 1.16-4.06 1.16-3.12 0-5.77-2.11-6.71-4.95H1.28v3.1A12 12 0 0 0 12 24Z" />
        <path fill="#FBBC05" d="M5.29 14.29a7.2 7.2 0 0 1 0-4.58v-3.1H1.28a12 12 0 0 0 0 10.78l4.01-3.1Z" />
        <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.61 4.59 1.8l3.43-3.43C17.95 1.18 15.24 0 12 0A12 12 0 0 0 1.28 6.61l4.01 3.1C6.23 6.86 8.88 4.75 12 4.75Z" />
      </svg>
      Continue with Google
    </button>
  );
}

function LoginPage() {
  const { signIn } = useStore();
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const complete = (provider: "email" | "google") => {
    const name = provider === "google" ? "Zen Shopper" : identifier.split("@")[0] || "Zen Shopper";
    signIn({ name, email: identifier || "shopper@zenfoo.in", provider });
    toast.success(
      provider === "google" ? "Signed in with Google (demo)" : "Welcome back to Zenfoo",
    );
    navigate({ to: "/account" });
  };

  return (
    <div className="zen-container flex justify-center py-10">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Log in to track orders, save favourites and check out faster.
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            complete("email");
          }}
        >
          <div>
            <label htmlFor="identifier" className="text-sm font-medium">
              Mobile number or email
            </label>
            <input
              id="identifier"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="you@example.com"
              className="mt-1.5 h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none focus:border-primary focus:bg-background"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1.5 h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none focus:border-primary focus:bg-background"
            />
          </div>
          <button
            type="button"
            onClick={() => toast("Password reset is part of the Zenfoo demo.")}
            className="text-xs font-semibold text-primary hover:underline"
          >
            Forgot password?
          </button>
          <ZenButton type="submit" className="w-full" size="lg">
            Login
          </ZenButton>
        </form>

        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
        </div>
        <GoogleButton onClick={() => complete("google")} />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-primary hover:underline">
            Create account
          </Link>
        </p>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Demo experience — no real authentication is performed.
        </p>
      </div>
    </div>
  );
}
