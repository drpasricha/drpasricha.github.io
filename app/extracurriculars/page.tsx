import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { Trophy, Music, Globe, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Extracurriculars",
}

const categories = [
  {
    title: "Leadership & Organizations",
    icon: Users,
    items: [
      {
        name: "Organization Name",
        role: "Your Role",
        period: "20XX -- Present",
        description: "Brief description of your involvement and contributions.",
      },
      {
        name: "Another Organization",
        role: "Your Role",
        period: "20XX -- 20XX",
        description: "Brief description of your involvement and contributions.",
      },
    ],
  },
  {
    title: "Competitions & Awards",
    icon: Trophy,
    items: [
      {
        name: "Competition / Award Name",
        role: "Achievement",
        period: "20XX",
        description: "Brief description of the competition or award.",
      },
    ],
  },
  {
    title: "Community & Volunteering",
    icon: Globe,
    items: [
      {
        name: "Volunteer Activity",
        role: "Your Role",
        period: "20XX -- Present",
        description: "Brief description of your community involvement.",
      },
    ],
  },
  {
    title: "Hobbies & Interests",
    icon: Music,
    items: [
      {
        name: "Hobby / Interest",
        role: "",
        period: "",
        description: "Brief description of this hobby or personal interest.",
      },
    ],
  },
]

export default function ExtracurricularsPage() {
  return (
    <div>
      <PageHeader
        title="Extracurriculars"
        description="Leadership, community involvement, and personal interests beyond academia."
      />
      <div className="mx-auto max-w-5xl px-6">
        {categories.map((category, idx) => (
          <div key={category.title}>
            {idx > 0 && <div className="border-t border-border" />}
            <Section title={category.title}>
              <div className="flex flex-col gap-5">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="card-hover flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <category.icon className="h-4.5 w-4.5 text-accent" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5">
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
                        {item.period && (
                          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                            {item.period}
                          </span>
                        )}
                      </div>
                      {item.role && (
                        <span className="text-xs font-medium text-accent">{item.role}</span>
                      )}
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
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
