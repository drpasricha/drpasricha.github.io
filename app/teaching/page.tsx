import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Teaching",
}

const courses = [
  {
    period: "At IIT Ropar",
    items: [
      {
        code: "MA203 / MA423",
        name: "Probability & Stochastic Processes / Stochastic Processes",
        term: "Jan 2026 – May 2026",
        description:
          "Probability and stochastic processes courses taught at IIT Ropar.",
      },
      {
        code: "MA634",
        name: "Financial Risk Management",
        term: "July 2025 – November 2025",
        description:
          "Course on financial risk management taught at IIT Ropar.",
      },
      {
        code: "DS523",
        name: "Advanced Operations Research",
        term: "July–November 2024; July–November 2025",
        description:
          "Half-course offering in advanced operations research.",
      },
      {
        code: "MA515",
        name: "Foundations of Data Science",
        term: "July 2024 – November 2024",
        description:
          "Course on foundational topics in data science taught at IIT Ropar.",
      },
      {
        code: "MA202",
        name: "Probability & Statistics",
        term: "Jan–May 2024; June–July 2024; Jan–May 2025; June–July 2025",
        description:
          "Course on probability and statistics, including summer/self-study sessions.",
      },
      {
        code: "DS513",
        name: "Foundations of Data Science",
        term: "Jan–May 2024; Jan–May 2025",
        description:
          "Half-course offering on foundational topics in data science.",
      },
    ],
  },
  {
    period: "Co-taught Courses",
    items: [
      {
        code: "FIN472",
        name: "Computational Finance",
        term: "Fall Sessions 2020–2021, 2021–2022, and 2022–2023",
        description:
          "Co-taught 6 out of 14 weeks with Professor Glau Kathrin Beatrice and Professor Pulido Nino Sergio Andres for Master in Financial Engineering students at Swiss Finance Institute, EPFL.",
      },
      {
        code: "MATH142",
        name: "Essentials of Engineering Mathematics",
        term: "Spring 2019",
        description:
          "Co-taught 7 out of 13 weeks with Professor Song-Ping Zhu for undergraduate engineering students at the University of Wollongong.",
      },
    ],
  },
  {
    period: "Teaching Assistantships",
    items: [
      {
        code: "MTL100",
        name: "Calculus",
        term: "Jan 2015 – July 2018",
        description:
          "Teaching assistant at the Department of Mathematics, Indian Institute of Technology Delhi.",
      },
      {
        code: "MTL106",
        name: "Introduction to Probability Theory and Stochastic Processes",
        term: "Jan 2015 – July 2018",
        description:
          "Teaching assistant at the Department of Mathematics, Indian Institute of Technology Delhi.",
      },
      {
        code: "MTL108",
        name: "Introduction to Statistics",
        term: "Jan 2015 – July 2018",
        description:
          "Teaching assistant at the Department of Mathematics, Indian Institute of Technology Delhi.",
      },
      {
        code: "MTL390",
        name: "Statistical Methods",
        term: "Jan 2015 – July 2018",
        description:
          "Teaching assistant at the Department of Mathematics, Indian Institute of Technology Delhi.",
      },
      {
        code: "MTL510",
        name: "Measure and Integration",
        term: "Jan 2015 – July 2018",
        description:
          "Teaching assistant at the Department of Mathematics, Indian Institute of Technology Delhi.",
      },
      {
        code: "NPTEL",
        name: "Stochastic Processes-I and Stochastic Processes",
        term: "July 2016 – April 2018",
        description:
          "Teaching assistant for online NPTEL MOOC courses taught by Professor Selvamuthu Dharmaraja, IIT Delhi. Assisted three times during this period.",
      },
    ],
  },
]

export default function TeachingPage() {
  return (
    <div>
      <PageHeader
        title="Teaching"
        description="Courses taught, co-taught courses, and teaching assistantships."
      />

      <div className="mx-auto max-w-5xl px-6">
        {courses.map((section, idx) => (
          <div key={section.period}>
            {idx > 0 && <div className="border-t border-border" />}

            <Section title={section.period}>
              <div className="flex flex-col gap-5">
                {section.items.map((course) => (
                  <div
                    key={`${course.code}-${course.name}-${course.term}`}
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
      </div>
    </div>
  )
}
