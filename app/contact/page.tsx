import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { Mail, MapPin } from "lucide-react"

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
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-foreground">Email</span>
                  <a
                    href="mailto:your.email@university.edu"
                    className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    your.email@university.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-foreground">Office</span>
                  <p className="text-sm text-muted-foreground">
                    Room XXX, Building Name<br />
                    Department of Your Department<br />
                    University Name<br />
                    City, State ZIP
                  </p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg font-semibold text-foreground">Profiles</h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Google Scholar", href: "#" },
                  { label: "ORCID", href: "#" },
                  { label: "ResearchGate", href: "#" },
                  { label: "LinkedIn", href: "#" },
                  { label: "GitHub", href: "#" },
                ].map((profile) => (
                  <li key={profile.label}>
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
                    >
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
