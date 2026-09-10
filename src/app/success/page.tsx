import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contact, deposit, formatUsdFromCents, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Deposit received",
};

type SuccessPageProps = {
  searchParams: Promise<{ session_id?: string; mock?: string }>;
};

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const amount = formatUsdFromCents(deposit.cents);
  const isMock = params.mock === "1";

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-sm font-medium tracking-wide text-primary uppercase">
        Thank you
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight">
        {isMock ? "Checkout is in demo mode." : `Your ${amount} deposit is in.`}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {isMock
          ? `Stripe keys are not set yet, so nothing was charged. When ${site.owner} adds test keys, this button will send people to Stripe Checkout.`
          : `${site.owner} will email you at the address you used in Stripe. The ${amount} comes off a Starter or Growth project.`}
      </p>
      <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
        <li>We talk through pages, photos, and the town you serve.</li>
        <li>You get a homepage mockup before any more money is due.</li>
        <li>
          Questions now?{" "}
          <a className="text-foreground underline underline-offset-2" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </li>
      </ul>
      {params.session_id ? (
        <p className="mt-4 font-mono text-xs break-all text-muted-foreground">
          Stripe session: {params.session_id}
        </p>
      ) : null}
      <div className="mt-8">
        <Button asChild className="h-11 rounded-full px-5">
          <Link href="/">Back to the site</Link>
        </Button>
      </div>
    </div>
  );
}
