import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"

export const metadata: Metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About"
        description="Background, education, and research interests."
      />
      <div className="mx-auto max-w-5xl px-6">
        <Section title="Biography">
          <div className="prose prose-neutral max-w-none">
            <p className="leading-relaxed text-muted-foreground">
              Replace this with your biography. Describe your academic background, current position, and general research interests.
            </p>
          </div>
        </Section>

        <div className="border-t border-border" />

        <Section title="Education">
          <ul className="flex flex-col gap-4">
            {[
              { degree: "Ph.D. in Your Field", institution: "University Name", year: "20XX" },
              { degree: "M.S. in Your Field", institution: "University Name", year: "20XX" },
              { degree: "B.S. in Your Field", institution: "University Name", year: "20XX" },
            ].map((edu, i) => (
              <li key={i} className="flex flex-col gap-0.5 border-l-2 border-accent/40 pl-4">
                <span className="text-sm font-medium text-foreground">{edu.degree}</span>
                <span className="text-sm text-muted-foreground">{edu.institution}, {edu.year}</span>
              </li>
            ))}
          </ul>
        </Section>

        <div className="border-t border-border" />

        <Section title="Research Interests">
          <div className="flex flex-wrap gap-2">
            {["Interest 1", "Interest 2", "Interest 3", "Interest 4", "Interest 5"].map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {interest}
              </span>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
