"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";

export default function GlobalBreadcrumb() {
  const pathname = usePathname();

  // Remove leading slash and split
  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Always show Home */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {/* Extra pages only if they exist */}
        {segments.length > 0 && <BreadcrumbSeparator />}

        {segments.map((segment, i) => {
          const href = "/" + segments.slice(0, i + 1).join("/");
          const formatted = segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <BreadcrumbItem key={i}>
              <BreadcrumbLink href={href}>{formatted}</BreadcrumbLink>
              {i < segments.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
