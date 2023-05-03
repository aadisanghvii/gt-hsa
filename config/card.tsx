import Image from "next/image"

import { CardData } from "@/types/card"

export const card: CardData[] = [
  {
    title: "CRISPR",
    description:
      "Unique technology that enables geneticists and medical researchers to edit parts of the genome",
    icon: <Image src="/dna.svg" alt={"DNA"} height={56} width={56} />,
  },
]
