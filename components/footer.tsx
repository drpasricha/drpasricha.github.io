import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm text-muted-foreground">
          {'Your Name. All rights reserved.'}
        </p>
        <nav className="flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <span className="text-border">|</span>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
          <span className="text-border">|</span>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            ORCID
          </a>
        </nav>
      </div>
    </footer>
  )
}
