import Image from "next/image"

import { CardData } from "@/types/card"

export const card: CardData[] = [
  {
    title: "Gene Editing",
    description:
      "A process that allows scientists to make precise changes to an organism's DNA, potentially offering solutions to genetic disorders and diseases",
    icon: <Image src="/dna.svg" alt={"Gene Editing"} height={56} width={56} />,
  },
  {
    title: "CRISPR-Cas9",
    description:
      "A gene editing tool that utilizes a bacterial protein to target specific sequences of DNA, enabling the ability to cut and edit genes with high precision",
    icon: (
      <Image
        src="https://source.unsplash.com/random/56x56"
        alt={"CRISPR-Cas9"}
        height={56}
        width={56}
      />
    ),
  },
  {
    title: "Gene Drive",
    description:
      "A genetic engineering technique that biases the inheritance of certain genes to increase their prevalence in a population, offering potential solutions to eradicate disease-carrying pests",
    icon: (
      <Image
        src="https://source.unsplash.com/random/56x56"
        alt={"Gene Drive"}
        height={56}
        width={56}
      />
    ),
  },
  {
    title: "RNA Interference",
    description:
      "A gene editing tool that utilizes RNA molecules to silence the expression of specific genes, offering potential solutions to genetic disorders and diseases",
    icon: (
      <Image
        src="https://source.unsplash.com/random/56x56"
        alt={"RNA Interference"}
        height={56}
        width={56}
      />
    ),
  },
  {
    title: "TALENs",
    description: "Enables targeted changes to an organism's DNA sequence",
    icon: (
      <Image
        src="https://source.unsplash.com/random/56x56"
        alt={"TALENs"}
        height={56}
        width={56}
      />
    ),
  },
  {
    title: "Gene Therapy",
    description:
      "A medical field that utilizes gene editing techniques to treat or cure diseases caused by genetic mutations",
    icon: (
      <Image
        src="https://source.unsplash.com/random/56x56"
        alt={"Gene Therapy"}
        height={56}
        width={56}
      />
    ),
  },
]
