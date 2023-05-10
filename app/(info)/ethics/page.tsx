"use client"

import {
  Footnotes,
  FootnotesProvider,
  FootnoteRef as Ref,
} from "react-a11y-footnotes"

import "../../../styles/footnotes/styles.css"

const page = () => {
  return (
    <article className="prose-ul prose p-10 text-muted-foreground lg:prose-lg">
      <FootnotesProvider>
        <h1 className="text-foreground">Ethics Issues</h1>
        <p>
          As genetic modification technology continues to advance, it is
          important to carefully consider the ethical implications of its use.
          It will be necessary to weigh the potential benefits against the
          potential risks and ensure that decisions about genetic modification
          are made with input from a wide range of stakeholders, including
          scientists, policymakers, ethicists, and members of the public.{" "}
        </p>
        <p>
          The age old adage of:{" "}
          <blockquote className="text-muted-foreground/30">
            <q>Just because we can, doesn&apos;t mean we should</q>
          </blockquote>{" "}
          is extremely relevant to this matter. Modification of a non-human
          organism with human genetic material will open a pandora&apos;s box
          unlike the world has ever seen. A possible nightmare scenario could
          not be too far away -- Imagine a world where pigs have human brains
          and are able to speak. Other such atrocities now have the capability
          to be executed -- saying nothing of illegal activities that will
          likely{" "}
          <Ref
            description={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pubmed.ncbi.nlm.nih.gov/30905297/"
              >
                The ethics of genome editing in non-human animals
              </a>
            }
          >
            occur.
          </Ref>
        </p>

        <h2 className="text-foreground">Safety concerns</h2>
        <p>
          Genetic modification of organisms can involve the introduction of new
          traits or characteristics that may have unintended consequences. For
          example, a genetically modified crop may have enhanced resistance to
          pests, but this may also have the unintended consequence of disrupting
          the ecosystem by eliminating certain species of insects or birds.
          Similarly, modifying human genes could potentially cause unexpected
          side effects or unforeseen health{" "}
          <Ref
            description={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.downtoearth.org/label-gmos/risks-genetic-engineering"
              >
                Risks of Genetic Engineering
              </a>
            }
          >
            risks.
          </Ref>
        </p>
        <h2 className="text-foreground">Equity issues </h2>
        <p>
          There are concerns about the potential for genetic modification to
          exacerbate existing social and economic inequalities. For example,
          genetically modified crops could give wealthier farmers an unfair
          advantage over smaller farmers who cannot afford the technology.
          Genetic modification of humans could also lead to disparities in
          access to healthcare and other{" "}
          <Ref
            description={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://oar.princeton.edu/bitstream/88435/pr1657k/1/InterrogatingEquity.pdf"
              >
                A disability justice approach to genetic engineering
              </a>
            }
          >
            resources.
          </Ref>
        </p>
        <h2 className="text-foreground">Religious and cultural concerns </h2>
        <p>
          Some people have religious or cultural objections to genetic
          modification, viewing it as playing God or interfering with the
          natural order of things. Others may have concerns about the use of
          genetic modification to alter non-disease traits, such as intelligence
          or physical appearance.
        </p>
        <h2 className="text-foreground">Consent issues </h2>
        <p>
          There are also questions about who has the right to make decisions
          about genetic modification. Should parents have the right to modify
          their child&apos;s genes to prevent disease, even if it means passing
          on those modifications to future generations? Should individuals be
          allowed to modify their own genes for non-medical reasons?
        </p>
        <Footnotes />
      </FootnotesProvider>
    </article>
  )
}

export default page
