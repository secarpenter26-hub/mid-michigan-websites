import {
  AfterFrame,
  BeforeFrame,
  ExampleLabel,
} from "@/components/site-mockups";
import { Badge } from "@/components/ui/badge";

const examples = [
  {
    niche: "Plumber",
    town: "Fowlerville",
    business: "Fowlerville Plumbing Co.",
    phone: "(517) 555-0142",
    line: "Burst pipe? We answer the phone.",
    accent: "plum" as const,
    note: "Old brochure site vs. a page built to get the call.",
  },
  {
    niche: "Dental",
    town: "Okemos",
    business: "Okemos Family Dental",
    phone: "(517) 555-0198",
    line: "New patients welcome. Easy to find us.",
    accent: "dental" as const,
    note: "Hours, map, and a number you can tap from the parking lot.",
  },
  {
    niche: "Landscaper",
    town: "Lansing",
    business: "Lansing Lawn & Landscape",
    phone: "(517) 555-0164",
    line: "Spring cleanup through fall color.",
    accent: "lawn" as const,
    note: "Services, a photo strip, and a town people recognize.",
  },
  {
    niche: "Auto shop",
    town: "Webberville",
    business: "Webberville Auto Care",
    phone: "(517) 555-0117",
    line: "Honest repairs. Same-week appointments.",
    accent: "auto" as const,
    note: "A homepage that works when someone is already on the shoulder.",
  },
];

export function Examples() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Before / after
        </p>
        <h2 className="mt-2 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          What a typical local site looks like vs. what I ship.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          These are labeled examples — not real client sites — so you can see
          the difference on a phone. Same idea for a dentist in Okemos or a
          plumber in Fowlerville.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {examples.map((example) => (
            <article
              key={example.business}
              className="rounded-2xl border border-border bg-background p-4 shadow-sm sm:p-5"
            >
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge>{example.niche}</Badge>
                <span className="text-sm text-muted-foreground">
                  {example.town}, MI · example mockup
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <ExampleLabel>Before</ExampleLabel>
                  <BeforeFrame business={example.business} town={example.town} />
                </div>
                <div>
                  <ExampleLabel>After</ExampleLabel>
                  <AfterFrame {...example} />
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{example.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
