import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FeatureWithImageLeft() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="relative flex-1">
        <video
          width={713}
          height={497.7}
          preload="none"
          loop
          autoPlay
          muted
          className="rounded-xl border border-border shadow-lg"
        >
          <source src="/videos/dragonfly-demo.mp4" type="video/mp4" />
          <track
            src="/videos/dragonfly-demo.mp4"
            kind="subtitles"
            srcLang="en"


            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-primary text-left">Batch systems</span>
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-left">
            ERP used by one of the largest cannabis agencies in Los Angeles
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-lg text-left">
          Build at the speed of no-code and then export to Next.js, Tailwind &amp; Shadcn UI code
          for full customization.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Get started quickly with templates.</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">See your changes in real-time.</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Export code for full customization.</span>
          </li>
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button size="lg" asChild variant="outline">
            <Link href="#" className="h-12 cursor-pointer border-border text-base md:px-9">
              Learn More
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="#" className="h-12 cursor-pointer text-base md:px-9">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
