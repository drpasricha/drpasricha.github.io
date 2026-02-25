import type { Metadata } from "next"
import Image from "next/image"
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
        {/* Bio with profile image */}
        <Section title="Biography">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="shrink-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-accent/20 shadow-md">
                <Image
                  src="/images/profile-placeholder.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
               aBCD.
              </p>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                Add a second paragraph about your research journey, methodology, and what drives your academic work.
              </p>
            </div>
          </div>
        </Section>

        <div className="border-t border-border" />

        {/* Education */}
        <Section title="Education">
          <ul className="flex flex-col gap-5">
            {[
              { degree: "Ph.D. in Your Field", institution: "University Name", year: "20XX" },
              { degree: "M.S. in Your Field", institution: "University Name", year: "20XX" },
              { degree: "B.S. in Your Field", institution: "University Name", year: "20XX" },
            ].map((edu, i) => (
              <li key={i} className="group flex items-start gap-4">
                <div className="mt-1.5 flex flex-col items-center">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-accent bg-background transition-colors group-hover:bg-accent" />
                  {i < 2 && <span className="mt-1 h-8 w-px bg-border" />}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">{edu.degree}</span>
                  <span className="text-sm text-muted-foreground">{edu.institution}</span>
                  <span className="text-xs font-medium text-accent/80">{edu.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <div className="border-t border-border" />

        {/* Research interests */}
        <Section title="Research Interests">
          <div className="flex flex-wrap gap-2.5">
            {["Interest 1", "Interest 2", "Interest 3", "Interest 4", "Interest 5"].map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:border-accent/30 hover:bg-accent/5"
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
