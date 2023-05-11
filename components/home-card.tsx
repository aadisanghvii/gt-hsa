import Image from "next/image"
import Link from "next/link"

import { CardData } from "@/types/card"

const HomeCard = ({ title, image, description }: CardData) => {
  return (
    <Link
      className="dark:shadow- relative overflow-hidden rounded-lg border bg-background p-2 shadow-md"
      href={`/${title.toLowerCase()}`}
    >
      <div className="float-right pr-5 pt-5">
        <Image {...image} alt={image.alt} />
      </div>
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default HomeCard
