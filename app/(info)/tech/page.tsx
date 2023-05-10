"use client"

import {
  Footnotes,
  FootnotesProvider,
  FootnoteRef as Ref,
} from "react-a11y-footnotes"

import "../../../styles/footnotes/styles.css"

const Page = () => {
  return (
    <article className="prose-ul prose p-10 text-muted-foreground lg:prose-lg">
      <FootnotesProvider>
        <h1 className="text-foreground">Technology</h1>
        <p>
          Start editing to see some{" "}
          <Ref
            description={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://example.com"
              >
                Gene control (CRISPR-Cas9)
              </a>
            }
          >
            magic
          </Ref>{" "}
          happen!
        </p>

        <p className="pb-32">
          Maintaining{" "}
          <Ref description="Footnotes are notes placed at the bottom of a page. They cite references or comment on a designated part of the text above it.">
            <strong>footnotes</strong>
          </Ref>{" "}
          manually can be a pain. By using{" "}
          <Ref description="Cascading Style Sheets">CSS</Ref>{" "}
          <Ref
            id="with-custom-id"
            description={
              <>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS counters
                </a>{" "}
                are, in essence, variables maintained by CSS whose values may be
                incremented by CSS rules to track how many times they’re used.
              </>
            }
          >
            counters
          </Ref>{" "}
          to add the numbered references in the text and an ordered list to
          display the actual footnotes in the footer, it becomes extremely easy.
        </p>

        <Footnotes/>
      </FootnotesProvider>
    </article>
  )
}

export default Page
