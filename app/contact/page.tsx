import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { Mail, MapPin, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact"
        description="Get in touch for academic inquiries, collaborations, or speaking invitations."
      />
      <div className="mx-auto max-w-5xl px-6">
        <Section>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div className="card-hover flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-foreground">Email</span>
                  <a
                    href="mailto:your.email@university.edu"
                    className="link-underline relative text-sm text-muted-foreground"
                  >
                    puneet.pasricha@iitrpr.ac.in
                  </a>
                </div>
              </div>

              <div className="card-hover flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-foreground">Office</span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Room C-318, Third Floor, SAB<br />
                    Department of Mathematics<br />
                    Indian Institute of Technology Ropar<br />
                    Rupnagar, Punjab 140001
                  </p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Profiles</h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=zafqrsUAAAAJ&hl=en" },
                  { label: "ORCID", href: "#" },
                  { label: "ResearchGate", href: "#" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/puneet-p-11128b6a/" },
                  // { label: "GitHub", href: "#" },
                ].map((profile) => (
                  <li key={profile.label}>
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-accent/60 transition-colors group-hover:text-accent" />
                      {profile.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
