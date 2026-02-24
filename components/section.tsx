import { cn } from "@/lib/utils"

interface SectionProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <section className={cn("py-12", className)}>
      {title && (
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-5 bg-accent/50" />
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  )
}
