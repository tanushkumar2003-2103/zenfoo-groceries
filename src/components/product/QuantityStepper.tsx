import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

export function QuantityStepper({
  value,
  onChange,
  size = "md",
  label,
}: {
  value: number;
  onChange: (next: number) => void;
  size?: "sm" | "md";
  label: string;
}) {
  const h = size === "sm" ? "h-9" : "h-11";
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between rounded-xl bg-primary text-primary-foreground",
        h,
      )}
    >
      <button
        type="button"
        aria-label={`Decrease quantity of ${label}`}
        onClick={() => onChange(value - 1)}
        className="grid h-full w-10 shrink-0 place-items-center rounded-l-xl transition-colors hover:bg-primary-dark"
      >
        <Minus className="size-4" aria-hidden="true" />
      </button>
      <span key={value} className="animate-pop text-sm font-semibold tabular-nums">
        {value}
      </span>
      <button
        type="button"
        aria-label={`Increase quantity of ${label}`}
        onClick={() => onChange(value + 1)}
        className="grid h-full w-10 shrink-0 place-items-center rounded-r-xl transition-colors hover:bg-primary-dark"
      >
        <Plus className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
