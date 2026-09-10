"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact, site } from "@/lib/site";

const packageOptions = [
  { value: "starter", label: "Starter" },
  { value: "growth", label: "Growth" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export function ContactForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [town, setTown] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("not-sure");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `${site.name} — site for ${business || name || "a local shop"}`;
    const body = [
      `Name: ${name}`,
      `Business: ${business}`,
      `Town: ${town}`,
      `Phone: ${phone}`,
      `Package: ${selectedPackage}`,
      "",
      message || "(No extra note.)",
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-11"
          />
        </Field>
        <Field label="Business name" htmlFor="business">
          <Input
            id="business"
            name="business"
            required
            value={business}
            onChange={(event) => setBusiness(event.target.value)}
            className="h-11"
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Town" htmlFor="town">
          <Input
            id="town"
            name="town"
            placeholder="Fowlerville, Okemos…"
            required
            value={town}
            onChange={(event) => setTown(event.target.value)}
            className="h-11"
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="h-11"
          />
        </Field>
      </div>
      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium">What are you looking at?</legend>
        <div className="flex flex-wrap gap-2">
          {packageOptions.map((option) => (
            <label
              key={option.value}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm has-[:checked]:border-primary has-[:checked]:bg-primary/10"
            >
              <input
                type="radio"
                name="package"
                value={option.value}
                checked={selectedPackage === option.value}
                onChange={() => setSelectedPackage(option.value)}
                className="accent-primary"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="What do you need the site to do?" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Phone calls from people in town, a gallery of jobs, online hours…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-28"
        />
      </Field>
      <Button type="submit" size="lg" className="h-12 w-full rounded-full px-6 text-base sm:w-auto">
        Email Scott
      </Button>
      {opened ? (
        <p className="text-sm text-muted-foreground">
          Your email app should open with a note ready to send. If it does not,
          write me at{" "}
          <a className="underline underline-offset-2" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
