import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const tones = [
  "oklch(0.96 0.035 150)",
  "oklch(0.965 0.03 90)",
  "oklch(0.96 0.03 40)",
  "oklch(0.96 0.025 250)",
  "oklch(0.96 0.03 330)",
  "oklch(0.965 0.03 200)",
];

const toneFor = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) % 997;
  return tones[hash % tones.length];
};

export function ProductImage({
  emoji,
  name,
  seed,
  src,
  className,
  size = "md",
  priority = false,
  fit = "contain",
}: {
  emoji: string;
  name: string;
  seed: string;
  src?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  fit?: "contain" | "cover";
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  const sizes = {
    sm: "text-3xl",
    md: "text-5xl sm:text-6xl",
    lg: "text-7xl sm:text-8xl",
  } as const;

  const padding = { sm: "p-1.5", md: "p-3", lg: "p-6" } as const;

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={name}
        className={cn(
          "flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl",
          className,
        )}
        style={{ backgroundColor: toneFor(seed) }}
      >
        <span
          aria-hidden="true"
          className={cn(
            "select-none transition-transform duration-300 ease-out group-hover:scale-110",
            sizes[size],
          )}
        >
          {emoji}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-background",
        padding[size],
        className,
      )}
    >
      <img
        src={src}
        alt={name}
        width={600}
        height={600}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
        className={cn(
          "relative h-full w-full transition-transform duration-300 ease-out group-hover:scale-105",
          fit === "cover" ? "object-cover" : "object-contain",
        )}
      />
    </div>
  );
}
