import { contact, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[color:var(--pine-deep)] text-[color:var(--cream)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-heading text-2xl font-semibold">{site.name}</p>
          <p className="mt-2 max-w-md text-sm text-[color:var(--cream)]/75">
            Simple modern websites for local shops — built by {site.owner}, a
            neighbor, not an agency.
          </p>
        </div>
        <div className="grid gap-2 text-sm">
          <a className="underline-offset-2 hover:underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          {contact.phone ? (
            <a className="underline-offset-2 hover:underline" href={`tel:${contact.phone}`}>
              {contact.phone}
            </a>
          ) : null}
          <a className="underline-offset-2 hover:underline" href="#packages">
            Packages
          </a>
          <a className="underline-offset-2 hover:underline" href="#contact">
            Get a site
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm leading-relaxed text-[color:var(--cream)]/70 sm:px-6">
          Proud to work with shops in {site.towns.slice(0, -1).join(", ")}, and{" "}
          {site.towns.at(-1)} — plus the towns in between.
        </p>
      </div>
    </footer>
  );
}
