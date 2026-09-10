import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { DepositButton } from "@/components/deposit-button";
import { contact, deposit, formatUsdFromCents } from "@/lib/site";

export function Contact() {
  const amount = formatUsdFromCents(deposit.cents);

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-card/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Contact
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Tell me the town and what you do.
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            I write back myself. If we are a fit, you can pay the {amount}{" "}
            deposit when you are ready — it comes off Starter or Growth.
          </p>
          <div className="mt-6 grid gap-3 text-sm">
            <a
              className="inline-flex items-center gap-2 font-medium underline-offset-2 hover:underline"
              href={`mailto:${contact.email}`}
            >
              <Mail className="size-4" />
              {contact.email}
            </a>
            {contact.phone ? (
              <a
                className="inline-flex items-center gap-2 font-medium underline-offset-2 hover:underline"
                href={`tel:${contact.phone}`}
              >
                <Phone className="size-4" />
                {contact.phone}
              </a>
            ) : null}
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-background p-5">
            <h3 className="font-heading text-xl font-semibold">
              Pay a {amount} deposit
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Holds a Starter or Growth slot. Applied to your project. Stripe
              Checkout in test mode until you add live keys. No extra charges
              until we agree on the work.
            </p>
            <div className="mt-4">
              <DepositButton className="h-12 w-full rounded-full px-6 text-base sm:w-auto">
                Pay {amount} deposit with Stripe
              </DepositButton>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-background p-5 shadow-sm sm:p-6">
          <h3 className="font-heading text-xl font-semibold">Send a note</h3>
          <p className="mt-1 mb-5 text-sm text-muted-foreground">
            Opens your email with the details filled in.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
