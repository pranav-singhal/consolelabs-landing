import { Check } from "lucide-react";


export function DragonflyFeature() {
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
                    <source src="/videos/dragonfly-automation.mp4" type="video/mp4" />
                    <track
                        src="/videos/dragonfly-automation.mp4"
                        kind="subtitles"
                        srcLang="en"


                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <span className="font-bold uppercase text-primary text-left">Dragonfly Automation</span>
                    <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-left">
                        ERP used by one of the largest VC firms in the web3 space
                    </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-lg text-left">
                    Dragonfly Automation is a 2 part system. The first part is a CRM that
                    allows the portfolio managers to record all investment activity and updates.
                    The second part is a reporting dashboard that gives the partners and portfolio managers
                    access to the data in a format that is easy to understand.
                </p>
                <ul className="mt-4 space-y-3">
                    <li className="flex items-center gap-2">
                        <Check size={24} className="size-5 text-primary" />
                        <span className="text-muted-foreground">Robust data security and auditability.</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={24} className="size-5 text-primary" />
                        <span className="text-muted-foreground">Real time analytics and reporting.</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={24} className="size-5 text-primary" />
                        <span className="text-muted-foreground">Manages over 7 different types of investments totalling over $200M in value.</span>
                    </li>
                </ul>

            </div>

        </section>
    );
}
