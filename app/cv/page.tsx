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
      { primary: "Assistant Professor, Department of Mathematics", secondary: "Indian Institute of Technology Ropar", date: "October 2023 -- Present" },
      { primary: "Scientific Collaborator, CDM", secondary: "École Polytechnique Fédérale de Lausanne (EPFL), Switzerland", date: "February 2020 -- September 2023" },
      { primary: "Visiting Associate Fellow, SMAS", secondary: "University of Wollongong, Australia", date: "February 2019 -- December 2019" },
    ],
  },
  {
    heading: "Education",
    items: [
      { primary: "Ph.D., Mathematics", secondary: "Indian Institute of Technology Delhi", date: "2018" },
      { primary: "M.Sc. Mathematics", secondary: "Indian Institute of Technology Delhi", date: "2014" },
      // { primary: "B.S. in Your Field", secondary: "University Name", date: "2012" },
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
    heading: "Administrative Responsibilities",
    items: [
      { primary: "Position 1", secondary: "University", date: "20XX -- Present" },
      { primary: "Position 2", secondary: "Organization", date: "20XX -- 20XX" },
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
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-secondary hover:shadow-md"
          >
            <Download className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5" />
            Download PDF
          </a>
        </div>

        {cvSections.map((section, idx) => (
          <div key={section.heading}>
            {idx > 0 && <div className="border-t border-border" />}
            <Section title={section.heading}>
              <ul className="flex flex-col gap-5">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="group flex flex-col gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-secondary/50 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <span className="shrink-0 rounded-full bg-accent/8 px-2.5 py-0.5 text-xs font-medium text-accent sm:w-36 sm:text-right">
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
