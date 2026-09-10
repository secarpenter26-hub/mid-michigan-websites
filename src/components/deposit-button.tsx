"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { deposit, formatUsdFromCents } from "@/lib/site";

type DepositButtonProps = {
  selectedPackage?: string;
  className?: string;
  variant?: "default" | "outline" | "secondary";
  children?: ReactNode;
};

export function DepositButton({
  selectedPackage = "starter-or-growth",
  className,
  variant = "default",
  children,
}: DepositButtonProps) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const amount = formatUsdFromCents(deposit.cents);

  async function startCheckout() {
    setPending(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ package: selectedPackage }),
      });
      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Checkout is not available right now.");
      }

      window.location.assign(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed.");
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col items-stretch gap-2 sm:items-start">
      <Button
        type="button"
        size="lg"
        variant={variant}
        onClick={startCheckout}
        disabled={pending}
        className={className}
      >
        {pending ? "Sending you to checkout…" : children ?? `Pay ${amount} deposit`}
      </Button>
      {error ? (
        <p role="alert" className="max-w-sm text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
