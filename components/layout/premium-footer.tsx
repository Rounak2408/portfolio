 "use client"

import { ArrowUp, Check, Github, Linkedin, Mail, MapPin, Palette, Phone, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function PremiumFooter() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const accentThemes = [
    { key: "default", label: "Default", color: "bg-[#F08A5D]" },
    { key: "ocean", label: "Ocean", color: "bg-[#2D7FF9]" },
    { key: "forest", label: "Forest", color: "bg-[#17B26A]" },
    { key: "sunset", label: "Sunset", color: "bg-[#F24E1E]" },
    { key: "lavender", label: "Lavender", color: "bg-[#B140E5]" },
    { key: "monochrome", label: "Monochrome", color: "bg-[#374151]" },
  ] as const

  const activeTheme = mounted ? theme : "default"

  return (
    <footer className="border-t border-border/70 bg-card/70 py-14 backdrop-blur">
      <div className="mx-auto w-[min(1120px,94%)]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] text-primary uppercase">Sudhanshu Rounak</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Full Stack Developer focused on product-grade web apps, strong UI polish, and reliable backend architecture.
            </p>
            <div className="mt-5 flex items-center gap-3 text-muted-foreground">
              <a href="https://github.com/Rounak2408" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:rounakkeshri79@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Quick Links</p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <Link href="#home" className="block hover:text-foreground">Home</Link>
              <Link href="#skills" className="block hover:text-foreground">Skills</Link>
              <Link href="#projects" className="block hover:text-foreground">Projects</Link>
              <Link href="#journey" className="block hover:text-foreground">Journey</Link>
              <Link href="#contact" className="block hover:text-foreground">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Contact Info</p>
            <div className="mt-3 space-y-3 text-sm text-muted-foreground">
              <a href="mailto:rounakkeshri79@gmail.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4 text-primary" />
                rounakkeshri79@gmail.com
              </a>
              <a href="tel:+918294341139" className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +91 8294341139
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rajkot%2C+Gujarat%2C+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <MapPin className="h-4 w-4 text-primary" />
                Rajkot, India
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-border/70 bg-background/60 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                <Palette className="h-4 w-4 text-primary" />
                Theme Customization
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant={activeTheme === "light" ? "default" : "outline"}
                  className="h-8 rounded-md"
                  onClick={() => setTheme("light")}
                >
                  Light Mode
                </Button>
                <Button
                  type="button"
                  variant={activeTheme !== "light" ? "default" : "outline"}
                  className="h-8 rounded-md"
                  onClick={() => setTheme("default")}
                >
                  Dark Mode
                </Button>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-x-3 gap-y-4">
                {accentThemes.map((accent) => {
                  const isActive = activeTheme === accent.key
                  return (
                    <button
                      key={accent.key}
                      type="button"
                      className="group flex flex-col items-center gap-1"
                      onClick={() => setTheme(accent.key)}
                    >
                      <span className="relative">
                        <span className={`block h-8 w-8 rounded-full ${accent.color}`} />
                        {isActive ? (
                          <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-card">
                            <Check className="h-3 w-3 text-primary" />
                          </span>
                        ) : null}
                      </span>
                      <span className="text-[11px] text-muted-foreground group-hover:text-foreground">{accent.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Newsletter</p>
            <p className="mt-3 text-sm text-muted-foreground">Subscribe for project updates and new builds.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Your email" className="h-9" />
              <Button type="submit" size="icon" className="h-9 w-9 rounded-md">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border/70 pt-6">
          <p className="text-xs text-muted-foreground">Developed by Sudhanshu Rounak. All rights reserved.</p>
          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-background/70 text-muted-foreground hover:text-foreground"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
