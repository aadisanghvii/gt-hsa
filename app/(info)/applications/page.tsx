"use client"

import {
  Footnotes,
  FootnotesProvider,
  FootnoteRef as Ref,
} from "react-a11y-footnotes"

import "../../../styles/footnotes/styles.css"
import Image from "next/image"

import Divider from "@/components/ui/divider"

const page = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] dark:from-gray-900 dark:to-background">
      <article className="prose-ul container prose p-10 text-muted-foreground lg:prose-lg">
        <FootnotesProvider>
          <h2 className="text-foreground">
            Applications of Genetic Engineering Technology
          </h2>
          <p>
            While genetic engineering has many potential benefits, it is also
            important to consider the potential risks and ethical implications
            of these applications.{" "}
          </p>{" "}
          <p>
            As citizens, it is important to hold the government and private
            companies accountable for the ethical use of genetic engineering
            technologies. I urge you to take the information this website will
            provide you, and answer the clarion call we sound to you today. It
            is the duty of every law abiding citizen to understand and
            participate in the debates regarding genetic engineering. The future
            of our species depends on it.
          </p>
          <Image
            src={"/plant-dna.jpg"}
            alt={""}
            width={750}
            height={750}
            className="rounded shadow-md"
          />
          <Divider />
          <h3 className=" text-foreground">Healthcare</h3>
          <p>
            Genetic engineering holds great promise for treating genetic
            diseases. For example, gene therapy, which involves inserting genes
            into a patient&apos;s cells to correct a genetic defect, has shown
            promise in treating diseases such as cystic fibrosis and sickle cell
            anemia. Genetic engineering can also be used to produce proteins or
            other biological molecules that can be used as drugs to treat a
            variety of{" "}
            <Ref
              description={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.nih.gov/news-events/gene-editing-digital-press-kit"
                  className="text-foreground"
                >
                  Gene Editing – Digital Media Kit
                </a>
              }
            >
              diseases.
            </Ref>
          </p>
          <Divider />
          <h3 className=" text-foreground">Agriculture </h3>
          <p>
            Genetic engineering can be used to produce crops that are resistant
            to pests and diseases, have higher yields, and are more nutritious.
            For example, genetically modified crops can be engineered to produce
            their own pesticides, reducing the need for harmful chemical
            pesticides. Genetic engineering can also be used to produce crops
            that are more drought-resistant, which is especially important in
            areas with limited water{" "}
            <Ref
              description={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cabiagbio.biomedcentral.com/articles/10.1186/s43170-022-00091-w"
                  className="text-foreground"
                >
                  Advancing Genome Editing to Improve the Sustainability and
                  Resiliency of Animal Agriculture
                </a>
              }
            >
              resources.
            </Ref>
          </p>
          <Divider />
          <h3 className="text-foreground">Energy production </h3>
          <p>
            Genetic engineering can be used to produce biofuels, which are
            renewable sources of energy. For example, researchers are using
            genetic engineering to produce algae that can produce biofuels more
            efficiently.
          </p>
          <Divider />
          <h3 className="text-foreground">Environmental remediation</h3>
          <p>
            Genetic engineering can be used to clean up environmental
            pollutants. For example, bacteria can be engineered to break down
            toxic chemicals such as oil spills or heavy{" "}
            <Ref
              description={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.sciencedirect.com/science/article/pii/S0045653522032441"
                  className="text-foreground"
                >
                  Genetically engineered microorganisms for environmental
                  remediation
                </a>
              }
            >
              metals.
            </Ref>
            This is just one of many potential uses for genetic engineering in
            environmental applications. Another use case would be using
            genetically engineering a more biodegradable plastic, or more
            eco-friendly materials. The applications for genetic engineering are
            essentially limitless -- one could construct an organism capable of
            breaking down non-biodegradable materials, solving some of the
            worlds&apos; landfill problems.
          </p>
          <Divider />
          <Footnotes BackLink={(props) => <a {...props}></a>} />
        </FootnotesProvider>
      </article>
    </div>
  )
}

export default page
