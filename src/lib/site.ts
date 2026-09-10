export const site = {
  name: "Mid-Michigan Websites",
  owner: "Scott Carpenter",
  shortName: "Scott",
  title: "Mid-Michigan Websites — Scott Carpenter",
  description:
    "Simple, modern websites for local Michigan small businesses. Scott Carpenter builds clean mobile-first sites for shops in Webberville, Okemos, Lansing, Fowlerville, and nearby — usually live in about two weeks.",
  towns: [
    "Webberville",
    "Okemos",
    "Lansing",
    "Fowlerville",
    "Howell",
    "Williamston",
    "East Lansing",
    "Mason",
    "Haslett",
    "Perry",
  ],
  heroTowns: ["Webberville", "Okemos", "Lansing", "Fowlerville"],
} as const;

export const contact = {
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "scott@midmichiganwebsites.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
};

export const deposit = {
  cents: Number(
    process.env.NEXT_PUBLIC_DEPOSIT_AMOUNT_CENTS ??
      process.env.STRIPE_DEPOSIT_AMOUNT_CENTS ??
      30000,
  ),
};

export function formatUsdFromCents(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

export const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "$800–$1,200",
    summary: "A clean 1–3 page site so people can find you, call you, and show up.",
    bestFor: "Shops that need a real website, not a Facebook page.",
    featured: false,
    includes: [
      "1–3 pages (home, about, contact)",
      "Click-to-call phone number",
      "Hours, map, and service area",
      "Simple contact form",
      "Mobile-first layout",
      "Live in about two weeks",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$1,500–$2,500",
    summary:
      "More pages, a gallery, and the Google polish so you show up when neighbors search.",
    bestFor: "Businesses ready to look current and get found.",
    featured: true,
    includes: [
      "Everything in Starter",
      "Services or treatment pages",
      "Photo gallery",
      "Google Business Profile polish",
      "Basic local SEO (titles, towns, hours)",
      "A homepage built to get the phone to ring",
    ],
  },
  {
    id: "care",
    name: "Care",
    price: "$75–$150/mo",
    summary: "Small edits and a watchful eye after launch, so the site does not go stale.",
    bestFor: "Owners who do not want to log into a website builder.",
    featured: false,
    includes: [
      "Small copy and photo updates",
      "Uptime checks",
      "Seasonal hours and holiday notes",
      "Light ongoing help by email or text",
    ],
  },
] as const;
