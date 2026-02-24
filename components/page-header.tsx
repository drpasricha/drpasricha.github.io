interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
