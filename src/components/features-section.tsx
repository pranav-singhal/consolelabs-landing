import { Check } from "lucide-react";


export function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="text-left font-bold uppercase text-primary">Brahma</span>
          <h2 className="text-left font-heading text-3xl font-semibold sm:text-4xl">
            ERP for one of the largest grain merchants in India
          </h2>
        </div>
        <p className="max-w-lg text-left text-lg text-muted-foreground">
          Brahma is a fully customised ERP that integrates into existing
          workflows of the business. Key features include:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Slack integration for real-time updates</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Integration into Accounting software for invoice management</span>
          </li>
          

          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Permission based access management for secure and managed data access</span>
          </li>

          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Inventory Management across multiple manufacturing units, warehouses and retail outlets</span>
          </li>
        </ul>
        
      </div>
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
      <source src="/videos/brahma-demo.mp4" type="video/mp4" />
      <track
        src="/videos/brahma-demo.mp4"
        kind="subtitles"
        srcLang="en"
        
        
        label="English"
      />
      Your browser does not support the video tag.
    </video>
        
      </div>
    </section>
  );
}
