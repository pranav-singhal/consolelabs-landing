import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-8 pt-20 sm:gap-10">
      <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary hover:bg-secondary/60 py-1 px-4">
        <span className="text-sm text-secondary-foreground">Book a free consultation today</span>
        <ArrowRight size={16} />
      </div>
      <h1 className="text-center font-heading text-4xl font-semibold sm:text-5xl sm:leading-tight max-w-5xl">
        Your business deservers an ERP tailored for you!
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        Each business is different. Let us help you create the perfect ERP solution for your
        enterprise!
      </p>
      <div className="grid gap-3">
        <Button
          size="lg"
          asChild
          className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
        >
          <Link href="https://calendly.com/pranavsinghal96/1-on-1">Get in Touch</Link>
        </Button>
      </div>
      <div className="relative sm:mt-8">
        <Image
          alt="SaaS Dashboard"
          src="/images/dashboard.png"
          width={1000}
          height={698}
          priority
          className="rounded-xl"
        />
        <div className="absolute inset-0 -z-10 [filter:blur(180px)] bg-primary/10" />
      </div>
    </section>
  );
}
