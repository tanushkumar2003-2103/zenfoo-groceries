import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export function Rating({
  value,
  count,
  className,
  showCount = true,
}: {
  value: number;
  count?: number;
  className?: string;
  showCount?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-1 text-xs", className)}>
      <span className="inline-flex items-center gap-0.5 rounded-md bg-primary-tint px-1.5 py-0.5 font-semibold text-primary-dark">
        {value.toFixed(1)}
        <Star className="size-3 fill-current" aria-hidden="true" />
      </span>
      {showCount && count ? (
        <span className="text-muted-foreground">({count.toLocaleString("en-IN")})</span>
      ) : null}
      <span className="sr-only">Rated {value} out of 5</span>
    </div>
  );
}
