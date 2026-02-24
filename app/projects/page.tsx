import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
}

const projects = [
  {
    title: "Project Title One",
    status: "Active",
    period: "2024 -- Present",
    description:
      "Brief description of the project, its goals, methodology, and expected outcomes. Replace with your actual project details.",
    tags: ["Tag A", "Tag B", "Tag C"],
    link: "#",
  },
  {
    title: "Project Title Two",
    status: "Active",
    period: "2023 -- Present",
    description:
      "Brief description of another project. Replace with your actual project details.",
    tags: ["Tag D", "Tag E"],
    link: "#",
  },
  {
    title: "Completed Project Title",
    status: "Completed",
    period: "2021 -- 2023",
    description:
      "Brief description of a completed project and its outcomes. Replace with your actual project details.",
    tags: ["Tag F", "Tag G"],
    link: null,
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        description="Grants, collaborations, and ongoing academic projects."
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
