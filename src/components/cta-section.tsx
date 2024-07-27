import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-6 rounded-xl bg-primary px-6 py-24 sm:gap-10">
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl max-w-xl sm:leading-tight text-center text-primary-foreground">
          Talk to us Today
        </h2>
        <p className="max-w-xl text-lg text-primary-foreground/80 text-center">
          Schedule a free consultation where we will help you figure out the right solutions for you
        </p>
        <Button
          size="lg"
          asChild
          variant="outline"
          className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
        >
          <Link href="https://calendly.com/pranavsinghal96/1-on-1">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
