import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <div className="flex">
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Gene editing
          </h1>
          <p className="max-w-[700px] text-sm text-muted-foreground md:text-xl lg:text-2xl">
            Programmed from{" "}
            <span className="gradient hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-400">
              scratch
            </span>{" "}
            by Aadi Sanghvi
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={
              buttonVariants({ size: "lg" }) + " shadow-md shadow-foreground/60"
            }
          >
            Explore
            <Icons.arrow />
          </Link>
        </div>
      </section>
      <div className="float-right"></div>
    </div>
  )
}
