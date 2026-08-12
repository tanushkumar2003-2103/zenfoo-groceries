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
  className,
  size = "md",
}: {
  emoji: string;
  name: string;
  seed: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-3xl",
    md: "text-5xl sm:text-6xl",
    lg: "text-7xl sm:text-8xl",
  } as const;

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
