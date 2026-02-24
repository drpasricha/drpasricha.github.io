import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, FlaskConical } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Welcome
          </p>
          <h1 className="max-w-2xl font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl text-balance">
            Your Name
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Position / Title at Your University. Brief one-line description of your research focus and academic interests.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              About Me
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View Research
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/research"
            className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
          >
            <FlaskConical className="h-6 w-6 text-accent" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Research</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Publications, working papers, and current research projects.
            </p>
            <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
              Explore <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          <Link
            href="/teaching"
            className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
          >
            <GraduationCap className="h-6 w-6 text-accent" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Teaching</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Courses, seminars, and teaching philosophy.
            </p>
            <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
              Explore <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          <Link
            href="/projects"
            className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
          >
            <BookOpen className="h-6 w-6 text-accent" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Projects</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Grants, collaborations, and ongoing academic projects.
            </p>
            <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
              Explore <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Recent news placeholder */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 font-serif text-2xl font-semibold tracking-tight text-foreground">
            Recent News
          </h2>
          <ul className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <li
                key={i}
                className="flex flex-col gap-1 border-l-2 border-accent/40 pl-4 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <span className="shrink-0 text-sm font-medium text-muted-foreground">
                  2026
                </span>
                <p className="text-sm leading-relaxed text-foreground">
                  Placeholder news item {i} -- replace with your latest updates.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
