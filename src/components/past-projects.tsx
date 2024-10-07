import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function PastProjects() {
    return (
        <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
            <div className="flex flex-col gap-3">
                <span className="font-bold uppercase text-primary text-center">Projects</span>
                <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
                    Our Past Projects
                </h2>
            </div>

            <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 max-w-4xl mx-auto">
                <Card className="shadow-lg">
                    <CardContent className="flex flex-col items-start gap-5 p-7">
                        <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary">
                            <Image src="/images/punji.png" alt="Punji Capital" width={28} height={28} className="rounded-md" />
                        </div>
                        <div>
                            <h4 className="mb-2 text-lg font-semibold text-foreground">Punji Capital</h4>
                            <p className="text-muted-foreground">
                                Punji Capital is a first-of-its-kind ERP tailored for MSMEs operating in India.<br />
                                It offers a comprehensive solution that includes features such as inventory management,
                                order management, customer management, and financial management.
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-lg">
                    <CardContent className="flex flex-col items-start gap-5 p-7">
                        <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                            <Image src="/images/batch.png" alt="Batch" width={28} height={28} className="rounded-md" />
                        </div>
                        <div>
                            <h4 className="mb-2 text-lg font-semibold text-foreground">Batch Systems</h4>
                            <p className="text-muted-foreground">
                                Batch is an ERP for a major Los Angeles cannabis agency, pioneering integrated in-store and online sales.  <br />
                                It features inventory management, live order tracking, and POS, while ensuring compliance with local regulations through government API integrations.
                                <br />
                                To date, it has processed over 100,000 orders and $1 million in sales.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
