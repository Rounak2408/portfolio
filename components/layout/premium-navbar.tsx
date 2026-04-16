"use client"

import { motion } from "framer-motion"
import { BriefcaseBusiness, FolderKanban, Home, Menu, Sparkles, User, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { ThemeToggle } from "@/components/common/theme-toggle"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Journey", href: "#journey", icon: BriefcaseBusiness },
  { label: "Contact", href: "#contact", icon: BriefcaseBusiness },
]

export function PremiumNavbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActiveSection(`#${visible.target.id}`)
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[min(1120px,94%)] rounded-2xl border border-border/70 bg-background/85 px-4 py-3 shadow-sm backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            Sudhanshu Rounak
          </Link>

          <nav className="hidden items-center rounded-full border border-border/70 bg-card/60 p-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button asChild size="sm" className="rounded-full">
              <a href="/Rounak-CV.pdf" download="Rounak-CV.pdf">
                Resume
              </a>
            </Button>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card/80 p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 space-y-3 border-t border-border/60 pt-4 md:hidden"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm ${
                    isActive ? "bg-primary/15 font-medium text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <Button asChild size="sm" className="rounded-full">
                <a href="/Rounak-CV.pdf" download="Rounak-CV.pdf">
                  Resume
                </a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </div>
    </header>
  )
}
