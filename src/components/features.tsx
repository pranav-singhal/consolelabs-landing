import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Why our clients love us
        </span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          We don&apos;t operate like a consultancy
        </h2>
      </div>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Business comes first!</h4>
              <p className="text-muted-foreground">
                We understand that if you are coming to us, you need a custom solution. We will not
                modify an existing platform for you, or give you a pre-built solution
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                We don&apos;t want you forever
              </h4>
              <p className="text-muted-foreground">
                Our primary goal from Day 1 will be to offboard you as soon as possible. We will
                help you setup an in-house engineering team that can take care of all future
                upgrades, without you relying on us forever
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Security over everything!
              </h4>
              <p className="text-muted-foreground">
                We understand that all information flowing through an ERP is private and requires
                state of the art security. We can proudly say that none of clients have ever
                reported a data breach in the past.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
