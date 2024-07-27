import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Faq</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="max-w-lg text-lg text-muted-foreground text-center">
        For any other questions, please feel free to contact us.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
        <AccordionItem value="item-0" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Why can&apos;t I just use SAP / oracle?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Most existing ERP solutions like SAP and Oracle look customisable, but the flexibility
            comes at the cost of a huge learning curve. We have seen time and again customers suffer
            due to this
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Will I have to pay for every new feature/upgrade?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Absolutely not! We follow agile development methods. This means, that we will create a 3
            month, 6 month and 1 year roadmap with you. Any changes and alternations to the plan
            will not affect how much you are paying us.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Do I need an in-house ERP expert to operate the platform?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Our success metrics are aligned to ensure that all your existing employees and
            co-workers have a minimal learning curve.{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Will I have to pay for hosting separately?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            While we do not cover hosting fees, we will help you secure amazon and azure credits. We
            have been able to get upto a year worth of free hosting for our past clients.{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Will I need a huge engineering team to manage the ERP?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            When you work with console labs, we will help you with hiring competent engineers who
            can keep the platform running long after we are gone. But if you do not want the
            overhead of employees, we are happy to maintain and grow your ERP for as long as you
            want!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
