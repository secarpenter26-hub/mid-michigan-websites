import { NextResponse } from "next/server";
import { deposit, formatUsdFromCents, site } from "@/lib/site";
import { getStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;

  let selectedPackage = "starter-or-growth";
  try {
    const body = (await request.json()) as { package?: string };
    if (body?.package) {
      selectedPackage = body.package;
    }
  } catch {
    // Empty body is fine — default package metadata still applies.
  }

  const stripe = getStripe();
  if (!stripe) {
    const url = new URL("/success", origin);
    url.searchParams.set("mock", "1");
    return NextResponse.json({ url: url.toString(), mock: true });
  }

  const priceId = process.env.STRIPE_PRICE_ID;
  const amountCents = Number(
    process.env.STRIPE_DEPOSIT_AMOUNT_CENTS ?? deposit.cents,
  );
  const amountLabel = formatUsdFromCents(amountCents);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      allow_promotion_codes: false,
      billing_address_collection: "auto",
      metadata: {
        owner: site.owner,
        site: site.name,
        package: selectedPackage,
        kind: "website-deposit",
      },
      line_items: priceId
        ? [{ price: priceId, quantity: 1 }]
        : [
            {
              quantity: 1,
              price_data: {
                currency: "usd",
                unit_amount: amountCents,
                product_data: {
                  name: `Website deposit — ${site.name}`,
                  description: `${amountLabel} deposit applied to a Starter or Growth site with ${site.owner}.`,
                },
              },
            },
          ],
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 502 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not start checkout.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
