import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Teaching",
}

const courses = [
  {
    period: "Current",
    items: [
      {
        code: "SUBJ 101",
        name: "Introduction to Placeholder Subject",
        term: "Spring 2026",
        description: "Undergraduate introductory course. Replace with your course description.",
      },
    ],
  },
  {
    period: "Previous",
    items: [
      {
        code: "SUBJ 301",
        name: "Advanced Placeholder Methods",
        term: "Fall 2025",
        description: "Graduate-level seminar. Replace with your course description.",
      },
      {
        code: "SUBJ 201",
        name: "Intermediate Placeholder Theory",
        term: "Spring 2025",
        description: "Undergraduate course. Replace with your course description.",
      },
    ],
  },
]

export default function TeachingPage() {
  return (
    <div>
      <PageHeader
        title="Teaching"
        description="Courses, advising, and teaching philosophy."
      />
      <div className="mx-auto max-w-5xl px-6">
        {courses.map((section, idx) => (
          <div key={section.period}>
            {idx > 0 && <div className="border-t border-border" />}
            <Section title={`${section.period} Courses`}>
              <div className="flex flex-col gap-5">
                {section.items.map((course) => (
                  <div
                    key={course.code}
                    className="card-hover rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <BookOpen className="h-4 w-4 text-accent" />
                      </div>
                      <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-sm font-semibold text-foreground">
                          {course.code}: {course.name}
                        </h3>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                          {course.term}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 ml-11 text-sm leading-relaxed text-muted-foreground">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        ))}

        <div className="border-t border-border" />

        <Section title="Teaching Philosophy">
          <div className="rounded-xl border border-dashed border-accent/30 bg-accent/5 p-6">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Replace this with a brief statement of your teaching philosophy, approach, and goals as an educator.
            </p>
          </div>
        </Section>
      </div>
    </div>
  )
}
