const steps = [
  {
    n: "1",
    title: "You send a note",
    body: "Tell me the town, what you do, and whether you have photos. A 15-minute call works too.",
  },
  {
    n: "2",
    title: "I mock up the homepage",
    body: "In a few days you see a real layout with your name, phone number, and hours — not a 40-page proposal.",
  },
  {
    n: "3",
    title: "We swap in the real stuff",
    body: "You pick photos and wording. I keep it short enough that a customer can use it in a parking lot.",
  },
  {
    n: "4",
    title: "It goes live",
    body: "Usually about two weeks. You own the site. I can stay on with Care for small edits if you want.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-t border-border bg-[color:var(--leaf-soft)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          How it works
        </p>
        <h2 className="mt-2 max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Four short steps. Then your phone can start ringing.
        </h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-border bg-background p-5 shadow-sm"
            >
              <span className="font-heading text-3xl font-semibold text-primary">
                {step.n}
              </span>
              <h3 className="mt-3 font-heading text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
