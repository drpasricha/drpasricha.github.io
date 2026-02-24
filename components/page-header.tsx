interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-secondary/30">
      {/* Decorative dots */}
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6 py-14 md:py-16">
        <div className="animate-fade-in-up flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-accent" />
            <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              {title}
            </h1>
          </div>
          {description && (
            <p className="animate-fade-in-up animate-delay-100 ml-11 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
