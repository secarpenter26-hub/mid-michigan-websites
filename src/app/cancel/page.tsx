import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DepositButton } from "@/components/deposit-button";
import { contact, deposit, formatUsdFromCents } from "@/lib/site";

export const metadata: Metadata = {
  title: "Deposit canceled",
};

export default function CancelPage() {
  const amount = formatUsdFromCents(deposit.cents);

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-sm font-medium tracking-wide text-primary uppercase">
        No charge
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight">
        Checkout was canceled.
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Nothing was taken. You can try the {amount} deposit again, or just send
        a note and we will figure out the next step.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <DepositButton className="h-12 rounded-full px-6 text-base">
          Try deposit again
        </DepositButton>
        <Button asChild variant="outline" className="h-12 rounded-full px-6 text-base">
          <a href={`mailto:${contact.email}`}>Email Scott instead</a>
        </Button>
      </div>
      <p className="mt-6 text-sm">
        <Link className="underline underline-offset-2" href="/">
          Back to the site
        </Link>
      </p>
    </div>
  );
}
