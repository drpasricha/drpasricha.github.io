"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/projects", label: "Projects" },
  { href: "/extracurriculars", label: "Extracurriculars" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
]

function MobileDrawer({
  open,
  onClose,
  pathname,
}: {
  open: boolean
  onClose: () => void
  pathname: string
}) {
  // Only render portal on the client
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return createPortal(
    <div className="lg:hidden">
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* Drawer — rendered in <body> so it escapes the header's backdrop-filter */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 max-w-full border-l border-border p-6 shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
        style={{ backgroundColor: "var(--background)" }}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between mb-6">
          <span className="font-serif text-lg font-semibold">Menu</span>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent mr-2 shrink-0" />
                  )}
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>,
    document.body
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b backdrop-blur transition-all duration-300",
          scrolled
            ? "border-border bg-background/90 shadow-sm shadow-foreground/[0.03]"
            : "border-transparent bg-background/70"
        )}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="group flex items-center gap-2 font-serif text-lg font-semibold tracking-tight text-foreground"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
            Dr. Pasricha
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "link-underline relative rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[1.5px] w-4 rounded-full bg-accent" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Drawer rendered via portal — outside header, unaffected by backdrop-blur */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  )
}