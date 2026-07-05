import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
}

const projects = [
  {
    title: "Machine Learning Solutions for Effective Financial Risk Management",
    status: "Active",
    period: "2024 -- Present, ISIRD (IIT Ropar)",
    description:
      "The overall objective is to explore, advance and exploit machine learning methods with financial risk management.",
    tags: ["Machine Learning", "Risk Management"],
    link: "#",
  },
  {
    title: "Learning State-Dependent Hawkes Processes with Gaussian Process Kernels for Modeling Dynamic Contagion",
    status: "Active",
    period: "2026 -- Present, PM-ECRG (ANRF)",
    description:
      "Combining stochastic analysis, nonparametric learning, and scalable inference, it focuses on applications in financial markets, including limit order book dynamics and insurance risk.",
    tags: ["Hawkes Processes", "Gaussian Process", "Kernel Methods", "Contagion"],
    link: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        description="Grants and ongoing academic projects."
      />
      <div className="mx-auto max-w-5xl px-6">
        <Section>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="card-hover flex flex-col rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          className="text-muted-foreground transition-colors hover:text-accent"
                          aria-label={`External link for ${project.title}`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      project.status === "Active"
                        ? "border border-accent/20 bg-accent/10 text-accent"
                        : "border border-border bg-secondary text-muted-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
