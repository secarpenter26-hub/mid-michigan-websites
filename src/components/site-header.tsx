"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const nav = [
  { href: "#work", label: "Examples" },
  { href: "#packages", label: "Packages" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="min-w-0">
          <p className="truncate font-heading text-lg leading-tight font-semibold tracking-tight">
            {site.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {site.owner} · Mid-Michigan
          </p>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="lg" className="h-10 rounded-full px-4">
            <a href="#contact">Get a site</a>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="grid gap-1 border-t border-border px-4 py-3 md:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-2 text-sm hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg px-2 py-2 text-sm hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      ) : null}
    </header>
  );
}
