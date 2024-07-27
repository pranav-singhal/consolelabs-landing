import { MobileNavbar } from "@/components/mobile-navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="#" className="flex items-center gap-3">
      <Image
          alt="Console Labs"
          src="/images/logo.png"
          width={100}
          height={100}
          // className="rounded-xl border border-border shadow-lg"
        />
      </Link>
      <div className="flex items-center gap-10">
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="https://calendly.com/pranavsinghal96/1-on-1" className="cursor-pointer">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              href="#"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
