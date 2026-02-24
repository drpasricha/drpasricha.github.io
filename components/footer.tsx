import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <span className="font-serif text-sm font-semibold text-foreground">Academic Portfolio</span>
          <p className="text-xs text-muted-foreground">
            {"Your Name. All rights reserved."}
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {[
            { label: "Contact", href: "/contact", internal: true },
            { label: "Google Scholar", href: "#", internal: false },
            { label: "ORCID", href: "#", internal: false },
            { label: "GitHub", href: "#", internal: false },
          ].map((item) =>
            item.internal ? (
              <Link
                key={item.label}
                href={item.href}
                className="link-underline relative text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline relative text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </footer>
  )
}
