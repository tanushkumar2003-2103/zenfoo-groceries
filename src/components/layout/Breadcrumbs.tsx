import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Fragment, type ReactNode } from "react";

export type Crumb = { label: string; to?: ReactNode };

export function Breadcrumbs({ children }: { children: ReactNode[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        {children.map((child, i) => (
          <Fragment key={i}>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <li className="max-w-[60vw] truncate">{child}</li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
