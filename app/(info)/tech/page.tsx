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
            Technologies Used in Genetic Manipulation
          </h2>
          <p>
            In order to fully comprehend the scope of these new technologies,
            some background information about the world of genome editing is in
            order. All of the following information will be expanded upon in
            further sections.
          </p>
          <p>
            Genome editing is a technique that allows researchers to make
            precise modifications to the DNA of an organism. This can involve
            adding, deleting, or changing specific sequences of{" "}
            <Ref
              description={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.who.int/health-topics/human-genome-editing"
                  className="text-foreground"
                >
                  World Health Organisation, What is Genome Editing?
                </a>
              }
            >
              DNA.
            </Ref>
          </p>
          <p>
            Genome editing has many potential applications, including in
            agriculture, medicine, and biotechnology. For example, it could be
            used to develop crops that are more resistant to pests or climate
            change, or to cure genetic diseases in humans.
          </p>
          <p>
            However, genome editing also raises a number of ethical and social
            issues, particularly when it comes to using it on human embryos or
            reproductive cells. There are concerns about the potential for
            unintended consequences, as well as the possibility of creating
            so-called {"designer babies"} with enhanced{" "}
            <Ref
              description={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.genome.gov/about-genomics/policy-issues/Genome-Editing/ethical-concerns"
                  className="text-foreground"
                >
                  National Human Genome Research Institute, Ethical Concerns
                </a>
              }
            >
              traits.
            </Ref>
          </p>
          <Image
            src={"/crispr.png"}
            alt={""}
            width={750}
            height={750}
            className="rounded shadow-md"
          />
          <Divider />
          <h3 className="text-foreground">CRISPR-Cas9</h3>
          <p>
            One of the most widely used genome editing technologies is
            CRISPR-Cas9, which uses a specific RNA molecule to guide a protein
            called Cas9 to a specific location in the DNA where it can make a
            cut. Researchers can then introduce a new piece of DNA to the cell,
            which is then inserted into the gap left by the{" "}
            <Ref
              description={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.nature.com/articles/s41467-018-04252-2"
                  className="text-foreground"
                >
                  Nature Education, {"CRISPR-Cas9"}
                </a>
              }
            >
              cut.
            </Ref>
          </p>
          <Divider />

          <h3 className="text-foreground">TALENs </h3>
          <p>
            TALENs work by using a specific type of protein called a nuclease
            that can cut DNA at a specific location. The TALEN nuclease is
            designed to recognize and bind to a specific DNA sequence, and once
            it has bound, it cuts the DNA. Researchers can then introduce a new
            piece of DNA to the cell, which is then inserted into the{" "}
            <Ref
              description={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.nature.com/articles/nrm3486"
                  className="text-foreground"
                >
                  TALENs: a widely applicable technology for targeted genome
                  editing
                </a>
              }
            >
              gap.
            </Ref>
          </p>
          <Divider />

          <h3 className="text-foreground">ZFNs </h3>
          <p>
            Zinc-finger nucleases (ZFNs): Like TALENs, ZFNs are engineered
            nucleases that can be designed to target specific DNA sequences.
            They use a different type of DNA-binding protein called a zinc
            finger to recognize the target sequence, and a nuclease to cut the
            DNA.
          </p>
          <Divider />

          <h3 className="text-foreground">Homing endonucleases </h3>
          <p>
            Homing endonucleases are natural enzymes that can be engineered to
            target specific DNA sequences. They are used primarily in research
            applications, but have potential for use in gene{" "}
            <Ref
              description={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pubmed.ncbi.nlm.nih.gov/19915993/"
                  className="text-foreground"
                >
                  Homing Endonucleases and Their Applications
                </a>
              }
            >
              therapy.
            </Ref>
          </p>
          <Divider />

          <Footnotes BackLink={(props) => <a {...props}></a>} />
        </FootnotesProvider>
      </article>
    </div>
  )
}

export default page
