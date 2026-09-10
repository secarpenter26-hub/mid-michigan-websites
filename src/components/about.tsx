import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex items-start gap-4">
          <div
            aria-hidden="true"
            className="grid size-24 shrink-0 place-items-center rounded-2xl bg-primary font-heading text-3xl font-semibold text-primary-foreground"
          >
            SC
          </div>
          <div>
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              About
            </p>
            <h2 className="mt-1 font-heading text-3xl font-semibold tracking-tight">
              {site.owner}
            </h2>
            <p className="mt-1 text-muted-foreground">Mid-Michigan neighbor</p>
          </div>
        </div>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-pretty">
          <p>
            I live around here and I like websites that a customer can use on
            their phone while they are sitting in the parking lot. Most of the
            shops I talk to have an old site, no site, or a Facebook page they
            are tired of fighting with.
          </p>
          <p>
            I keep the work small on purpose: a few good pages, your hours and
            map, a way to call or write, and a site that does not look like
            2009. I am not an agency, I do not have a sales team, and I will not
            sell you a 12-page strategy deck.
          </p>
          <p>
            If you are in {site.heroTowns.slice(0, 3).join(", ")},{" "}
            {site.heroTowns[3]}, or a nearby town and you want something live in
            about two weeks, we should talk.
          </p>
        </div>
      </div>
    </section>
  );
}
