import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MockupProps = {
  business: string;
  town: string;
  phone: string;
  line: string;
  accent: "plum" | "dental" | "lawn" | "auto";
};

const accents = {
  plum: {
    bar: "bg-[#1f4d3a]",
    chip: "bg-[#d9783a]",
    hero: "from-[#2e6b4f] to-[#1f4d3a]",
  },
  dental: {
    bar: "bg-[#2f5f73]",
    chip: "bg-[#c9a45c]",
    hero: "from-[#3d7a90] to-[#2f5f73]",
  },
  lawn: {
    bar: "bg-[#3f6b2d]",
    chip: "bg-[#c45c26]",
    hero: "from-[#5a8f3c] to-[#3f6b2d]",
  },
  auto: {
    bar: "bg-[#3a3f4a]",
    chip: "bg-[#c45c26]",
    hero: "from-[#4c5566] to-[#3a3f4a]",
  },
};

export function BeforeFrame({ business, town }: Pick<MockupProps, "business" | "town">) {
  return (
    <div className="overflow-hidden rounded-xl border border-stone-400 bg-[#ece9d8] shadow-sm">
      <div className="flex items-center gap-1 border-b border-stone-400 bg-[#c0c0c0] px-2 py-1.5">
        <span className="size-2 rounded-full bg-[#ef4444]" />
        <span className="size-2 rounded-full bg-[#eab308]" />
        <span className="size-2 rounded-full bg-[#22c55e]" />
        <span className="ml-2 truncate font-mono text-[10px] text-stone-700">
          {business.toLowerCase().replaceAll(" ", "")}.com
        </span>
      </div>
      <div className="space-y-2 p-3 font-[Times_New_Roman,Times,serif] text-stone-900">
        <p className="bg-blue-800 text-center text-[11px] font-bold tracking-widest text-yellow-200 uppercase">
          Welcome to our website!!!
        </p>
        <p className="text-center text-sm font-bold text-blue-800 underline">
          {business}
        </p>
        <p className="text-center text-[10px] text-red-700">
          Best viewed in Internet Explorer · Last updated 2011
        </p>
        <div className="grid grid-cols-3 gap-1 text-center text-[10px]">
          <span className="border border-blue-800 bg-blue-100 p-1">Home</span>
          <span className="border border-blue-800 bg-blue-100 p-1">About Us</span>
          <span className="border border-blue-800 bg-blue-100 p-1">Email</span>
        </div>
        <p className="text-[11px] leading-snug">
          We have been serving {town} for years. Click here for more information
          about our many quality services and to see our Flash photo album.
        </p>
        <p className="text-[10px] text-blue-800 underline">click here to email the webmaster</p>
        <p className="text-center text-[10px] text-stone-600">Visitor counter: 004821</p>
      </div>
    </div>
  );
}

export function AfterFrame({ business, town, phone, line, accent }: MockupProps) {
  const colors = accents[accent];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center gap-1 border-b border-border bg-muted px-2 py-1.5">
        <span className="size-2 rounded-full bg-black/20" />
        <span className="size-2 rounded-full bg-black/20" />
        <span className="size-2 rounded-full bg-black/20" />
        <span className="ml-2 truncate text-[10px] text-muted-foreground">
          {business.toLowerCase().replaceAll(" ", "")}.com
        </span>
      </div>
      <div className={cn("px-3 py-4 text-white", colors.bar)}>
        <p className="text-[10px] tracking-wide uppercase opacity-80">{town}</p>
        <p className="font-heading text-sm font-semibold">{business}</p>
        <p className="mt-2 text-lg font-semibold tracking-tight">{phone}</p>
        <p className="mt-1 text-[11px] opacity-90">{line}</p>
        <span
          className={cn(
            "mt-3 inline-block rounded-full px-2.5 py-1 text-[10px] font-medium text-white",
            colors.chip,
          )}
        >
          Call now
        </span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-border text-center text-[10px]">
        <div className="bg-card p-2">Hours</div>
        <div className="bg-card p-2">Map</div>
        <div className="bg-card p-2">Services</div>
      </div>
    </div>
  );
}

export function AfterPhone({ business, town, phone, line, accent }: MockupProps) {
  const colors = accents[accent];

  return (
    <div className="relative w-[260px] rounded-[2rem] border-8 border-[#1c2a22] bg-[#1c2a22] shadow-2xl">
      <div className="absolute top-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-black/40" />
      <div className="overflow-hidden rounded-[1.4rem] bg-card">
        <div className={cn("bg-gradient-to-br px-4 pt-8 pb-6 text-white", colors.hero)}>
          <p className="text-[11px] tracking-wide uppercase opacity-80">{town}</p>
          <p className="mt-1 font-heading text-xl leading-tight font-semibold">
            {business}
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-tight">{phone}</p>
          <p className="mt-2 text-sm text-white/90">{line}</p>
          <div className="mt-5 rounded-full bg-white px-3 py-2 text-center text-sm font-medium text-foreground">
            Tap to call
          </div>
        </div>
        <div className="grid gap-3 p-4 text-sm">
          <div className="rounded-xl bg-muted p-3">
            <p className="text-xs text-muted-foreground">Today</p>
            <p className="font-medium">Open · 7:30am – 5:00pm</p>
          </div>
          <div className="rounded-xl bg-muted p-3">
            <p className="text-xs text-muted-foreground">Service area</p>
            <p className="font-medium">Fowlerville, Howell, Webberville</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExampleLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-center text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
      {children}
    </p>
  );
}
