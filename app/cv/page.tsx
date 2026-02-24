import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "CV",
}

const cvSections = [
  {
    heading: "Academic Positions",
    items: [
      { primary: "Position Title, Department", secondary: "University Name", date: "20XX -- Present" },
      { primary: "Previous Position, Department", secondary: "University Name", date: "20XX -- 20XX" },
    ],
  },
  {
    heading: "Education",
    items: [
      { primary: "Ph.D. in Your Field", secondary: "University Name", date: "20XX" },
      { primary: "M.S. in Your Field", secondary: "University Name", date: "20XX" },
      { primary: "B.S. in Your Field", secondary: "University Name", date: "20XX" },
    ],
  },
  {
    heading: "Awards & Honors",
    items: [
      { primary: "Award Name", secondary: "Granting Organization", date: "20XX" },
      { primary: "Fellowship Name", secondary: "Granting Organization", date: "20XX" },
    ],
  },
  {
    heading: "Professional Service",
    items: [
      { primary: "Reviewer", secondary: "Journal Name", date: "20XX -- Present" },
      { primary: "Committee Member", secondary: "Organization", date: "20XX -- 20XX" },
    ],
  },
]

export default function CVPage() {
  return (
    <div>
      <PageHeader
        title="Curriculum Vitae"
        description="Academic positions, education, awards, and service."
      />
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-end py-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        {cvSections.map((section, idx) => (
          <div key={section.heading}>
            {idx > 0 && <div className="border-t border-border" />}
            <Section title={section.heading}>
              <ul className="flex flex-col gap-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="shrink-0 text-xs font-medium text-muted-foreground sm:w-32 sm:text-right">
                      {item.date}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-foreground">{item.primary}</span>
                      <span className="text-sm text-muted-foreground">{item.secondary}</span>
                    </div>
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
