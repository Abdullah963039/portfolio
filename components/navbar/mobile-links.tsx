"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { links } from "@/constants/links";
import { cn } from "@/lib/utils";

export const MobileLinks = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="sm:hidden">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Links</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col items-center justify-center">
          <nav className="space-y-6 w-full">
            {links.map(({ href, label, icon: Icon }) => {
              const isActive = href === pathname;

              return (
                <Link
                  key={href}
                  href="/"
                  className={cn(
                    "flex items-center w-full gap-x-4 hover:bg-primary-foreground transition px-4 py-2 rounded text-muted-foreground first-letter:capitalize text-base",
                    isActive && "font-medium text-primary bg-primary-foreground"
                  )}
                >
                  <Icon className="h-6 w-6" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
