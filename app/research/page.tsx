import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { FileText, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Research",
}

const publications = [
  {
    category: "Journal Articles",
    icon: FileText,
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
    icon: FileText,
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
    icon: FileText,
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
              <ul className="flex flex-col gap-5">
                {section.items.map((pub, i) => (
                  <li
                    key={i}
                    className="card-hover group rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      {pub.link ? (
                        <a
                          href={pub.link}
                          className="link-underline relative text-sm font-semibold text-foreground"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-foreground">{pub.title}</span>
                      )}
                      {pub.link && (
                        <a
                          href={pub.link}
                          className="mt-0.5 shrink-0 text-muted-foreground transition-colors hover:text-accent"
                          aria-label={`Link to ${pub.title}`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{pub.authors}</p>
                    <p className="mt-1 text-xs italic text-muted-foreground/80">{pub.venue}</p>
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
