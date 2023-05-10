import Link from "next/link"

import { card } from "@/config/card"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import HomeCard from "@/components/home-card"

export default function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            HSA Technology Project: Gene Editing
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A website about how gene editing tools have, and will continue to
            change the world. Programmed from{" "}
            <span className="gradient hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-400">
              scratch
            </span>{" "}
            by Aadi Sanghvi
          </p>
          <div className="space-x-4">
            <Link href="/tech" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 rounded-2xl bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Contains
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This website contains information about the science, ethics,
            methods, applications, history, and future of genetic engineering.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {card.map((card) => (
            <HomeCard {...card} />
          ))}
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Inspiration for this project came from{" "}
            <a
              href="https://tx.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-200"
            >
              Taxonomy
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
