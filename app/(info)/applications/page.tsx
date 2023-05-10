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
        <h1 className="text-foreground">Applications</h1>
        <p>
          While genetic engineering has many potential benefits, it is also
          important to consider the potential risks and ethical implications of
          these applications. As citizens, it is important to hold the
          government and private companies accountable for the ethical use of
          genetic engineering technologies.
        </p>

        <h2 className="text-foreground">Healthcare</h2>
        <p>
          Genetic engineering holds great promise for treating genetic diseases.
          For example, gene therapy, which involves inserting genes into a
          patient&apos;s cells to correct a genetic defect, has shown promise in
          treating diseases such as cystic fibrosis and sickle cell anemia.
          Genetic engineering can also be used to produce proteins or other
          biological molecules that can be used as drugs to treat a variety of{" "}
          <Ref
            description={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.nih.gov/news-events/gene-editing-digital-press-kit"
              >
                Gene Editing – Digital Media Kit
              </a>
            }
          >
            diseases.
          </Ref>
        </p>
        <h2 className="text-foreground">Agriculture </h2>
        <p>
          Genetic engineering can be used to produce crops that are resistant to
          pests and diseases, have higher yields, and are more nutritious. For
          example, genetically modified crops can be engineered to produce their
          own pesticides, reducing the need for harmful chemical pesticides.
          Genetic engineering can also be used to produce crops that are more
          drought-resistant, which is especially important in areas with limited
          water{" "}
          <Ref
            description={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cabiagbio.biomedcentral.com/articles/10.1186/s43170-022-00091-w"
              >
                Advancing Genome Editing to Improve the Sustainability and
                Resiliency of Animal Agriculture
              </a>
            }
          >
            resources.
          </Ref>
        </p>
        <h2 className="text-foreground">Energy production </h2>
        <p>
          Genetic engineering can be used to produce biofuels, which are
          renewable sources of energy. For example, researchers are using
          genetic engineering to produce algae that can produce biofuels more
          efficiently.
        </p>
        <h2 className="text-foreground">Environmental remediation </h2>
        <p>
          Genetic engineering can be used to clean up environmental pollutants.
          For example, bacteria can be engineered to break down toxic chemicals
          such as oil spills or heavy{" "}
          <Ref
            description={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.sciencedirect.com/science/article/pii/S0045653522032441"
              >
                Genetically engineered microorganisms for environmental
                remediation
              </a>
            }
          >
            metals.
          </Ref>
        </p>
        <Footnotes />
      </FootnotesProvider>
    </article>
  )
}

export default page
