import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DepositButton } from "@/components/deposit-button";
import { AfterPhone } from "@/components/site-mockups";
import { deposit, formatUsdFromCents, site } from "@/lib/site";

export function Hero() {
  const amount = formatUsdFromCents(deposit.cents);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--leaf-soft),transparent_42%),radial-gradient(circle_at_80%_20%,var(--maple-soft),transparent_36%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            {site.heroTowns.join(" · ")}
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.35rem]">
            A clean website that actually gets you phone calls.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            I&apos;m {site.owner}. I build simple, modern sites for Mid-Michigan
            shops — usually live in about two weeks. No agency pitch. No
            six-month project. Just a site neighbors can use on their phone.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full px-6 text-base sm:w-auto"
            >
              <a href="#contact">
                <Phone className="size-4" />
                Get a site
              </a>
            </Button>
            <DepositButton
              variant="outline"
              className="h-12 w-full rounded-full px-6 text-base sm:w-auto"
            >
              Pay {amount} deposit
            </DepositButton>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            The {amount} deposit holds a Starter or Growth slot and comes off
            your project total. We talk before anything else is charged.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <AfterPhone
            business="Fowlerville Plumbing Co."
            town="Fowlerville, MI"
            phone="(517) 555-0142"
            line="Same-day service. Real person. Local."
            accent="plum"
          />
        </div>
      </div>
    </section>
  );
}
