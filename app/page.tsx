import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, FlaskConical, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero with banner */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Banner image */}
        <div className="absolute inset-0">
          <Image
            src="/images/header-banner.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
          <div className="dot-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:gap-12 md:py-28">
          {/* Profile photo */}
          <div className="animate-fade-in-up shrink-0">
            <div className="relative h-36 w-36 overflow-hidden rounded-2xl border-2 border-accent/20 shadow-lg md:h-44 md:w-44">
              <Image
                src="/images/profile-placeholder.jpg"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4">
            <div className="animate-fade-in-up flex items-center gap-2">
              <span className="h-[3px] w-6 rounded-full bg-accent" />
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Welcome
              </p>
            </div>
            <h1 className="animate-fade-in-up animate-delay-100 max-w-2xl font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl text-balance">
              Your Name
            </h1>
            <p className="animate-fade-in-up animate-delay-200 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Position / Title at Your University. Brief one-line description of your research focus and academic interests.
            </p>
            <div className="animate-fade-in-up animate-delay-300 flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                About Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/80 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-secondary hover:shadow-md"
              >
                View Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-5 bg-accent/50" />
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Explore
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              href: "/research",
              icon: FlaskConical,
              title: "Research",
              desc: "Publications, working papers, and current research projects.",
            },
            {
              href: "/teaching",
              icon: GraduationCap,
              title: "Teaching",
              desc: "Courses, seminars, and teaching philosophy.",
            },
            {
              href: "/projects",
              icon: BookOpen,
              title: "Projects",
              desc: "Grants, collaborations, and ongoing academic projects.",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="card-hover group flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <card.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.desc}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all group-hover:gap-2">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent news */}
      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-8 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-accent" />
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Recent News
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <li
                key={i}
                className="group flex flex-col gap-1 rounded-lg border border-transparent py-3 pl-4 transition-colors hover:border-border hover:bg-card sm:flex-row sm:items-baseline sm:gap-4"
              >
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
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
