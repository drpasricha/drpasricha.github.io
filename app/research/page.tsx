import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"

export const metadata: Metadata = {
  title: "Research",
}

const publications = [
  {
    category: "Journal Articles",
    items: [
      {
        title: "Placeholder Publication Title One",
        authors: "Your Name, Co-Author A, Co-Author B",
        venue: "Journal of Placeholder Studies, Vol. 1, 2026",
        link: "#",
      },
      {
        title: "Placeholder Publication Title Two",
        authors: "Co-Author C, Your Name",
        venue: "International Review of Examples, Vol. 12, 2025",
        link: "#",
      },
    ],
  },
  {
    category: "Conference Papers",
    items: [
      {
        title: "Placeholder Conference Paper Title",
        authors: "Your Name, Co-Author D",
        venue: "Proceedings of the Annual Conference on Placeholder Research, 2025",
        link: "#",
      },
    ],
  },
  {
    category: "Working Papers",
    items: [
      {
        title: "Placeholder Working Paper Title",
        authors: "Your Name",
        venue: "In preparation",
        link: null,
      },
    ],
  },
]

export default function ResearchPage() {
  return (
    <div>
      <PageHeader
        title="Research"
        description="Publications, working papers, and ongoing research."
      />
      <div className="mx-auto max-w-5xl px-6">
        {publications.map((section, idx) => (
          <div key={section.category}>
            {idx > 0 && <div className="border-t border-border" />}
            <Section title={section.category}>
              <ul className="flex flex-col gap-6">
                {section.items.map((pub, i) => (
                  <li key={i} className="flex flex-col gap-1 border-l-2 border-accent/40 pl-4">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        className="text-sm font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-foreground">{pub.title}</span>
                    )}
                    <span className="text-sm text-muted-foreground">{pub.authors}</span>
                    <span className="text-xs italic text-muted-foreground">{pub.venue}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        ))}
      </div>
    </div>
  )
}
