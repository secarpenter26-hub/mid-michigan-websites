import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { packages } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Packages
        </p>
        <h2 className="mt-2 max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Straight prices. No discovery retainer.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Most shops land on Starter or Growth. Care is optional after launch if
          you would rather not touch the site yourself.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <Card
              key={item.id}
              className={cn(
                "h-full",
                item.featured && "ring-2 ring-primary/40",
              )}
            >
              <CardHeader>
                {item.featured ? (
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    Most shops pick this
                  </p>
                ) : null}
                <CardTitle className="font-heading text-2xl">{item.name}</CardTitle>
                <p className="font-heading text-3xl font-semibold">{item.price}</p>
                <CardDescription>{item.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm font-medium">{item.bestFor}</p>
                <ul className="grid gap-2">
                  {item.includes.map((line) => (
                    <li key={line} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="bg-transparent">
                <Button asChild className="w-full rounded-full">
                  <a href="#contact">
                    {item.id === "care" ? "Ask about Care" : `Start with ${item.name}`}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
