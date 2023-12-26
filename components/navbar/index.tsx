"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { links } from "@/constants/links";
import { cn } from "@/lib/utils";

import { MobileLinks } from "./mobile-links";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="h-16 border-b shadow-sm border-input flex flex-col justify-center">
      <div className="px-4 sm:px-8 lg:px-16 flex items-center justify-between">
        <div>Logo</div>
        <nav className="hidden sm:flex items-center justify-center gap-x-6">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-muted-foreground text-sm hover:underline underline-offset-4 decoration-muted-foreground",
                  isActive && "text-primary font-medium decoration-primary"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        {/* Actions */}
        <div className="flex items-center gap-x-4">
          <MobileLinks />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
