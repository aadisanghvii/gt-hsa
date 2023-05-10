import Image from "next/image"

import { CardData } from "@/types/card"

export const card: CardData[] = [
  {
    title: "Technology",
    description:
      "The different technologies and methods used by scientists to modify the genes of organisms.",
    icon: <Image src="/tech.svg" alt="Technology" width={60} height={60} />,
  },
  {
    title: "Ethics",
    description: "The moral issues surrounding the use of genetic engineering.",
    icon: <Image src="/ethics.svg" alt="Ethics" width={60} height={60} />,
  },
  {
    title: "Applications",
    description:
      "The different ways genetic engineering is used in the real world.",
    icon: <Image src="/tech.svg" alt="Applications" width={60} height={60} />,
  },
  {
    title: "History",
    description: "The history of genetic engineering.",
    icon: <Image src="/tech.svg" alt="History" width={60} height={60} />,
  },
  {
    title: "Future",
    description: "The future of genetic engineering.",
    icon: <Image src="/tech.svg" alt="Future" width={60} height={60} />,
  },
  {
    title: "Science",
    description: "The science behind genetic engineering.",
    icon: <Image src="/tech.svg" alt="Science" width={60} height={60} />,
  },
]
