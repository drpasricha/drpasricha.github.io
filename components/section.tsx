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
        <h2 className="mb-6 font-serif text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
