"use client"

import { Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { toast } from "sonner"

import { SectionHeading } from "@/components/common/section-heading"
import { Button } from "@/components/ui/button"

const links = [
  {
    title: "Email",
    value: "rounakkeshri79@gmail.com",
    href: "mailto:rounakkeshri79@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+91 8294341139",
    href: "tel:+918294341139",
    icon: Phone,
  },
  {
    title: "Location",
    value: "Rajkot, Gujarat, India",
    href: "https://www.google.com/maps/search/?api=1&query=Rajkot%2C+Gujarat%2C+India",
    icon: MapPin,
    external: true,
  },
]

export function PremiumContact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-[min(1120px,94%)]">
        <SectionHeading
          eyebrow="Contact"
          title="Open to internships, collaborations, and serious product work."
          description="If you are hiring or building, I would love to contribute with execution speed, clean engineering, and thoughtful UI quality."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <p className="mt-4 text-sm text-muted-foreground">{item.title}</p>
              <p className="mt-1 font-medium">{item.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild className="rounded-full">
            <a href="mailto:rounakkeshri79@gmail.com">Start a Conversation</a>
          </Button>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={async () => {
              await navigator.clipboard.writeText("rounakkeshri79@gmail.com")
              toast.success("Email copied to clipboard")
            }}
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy Email
          </Button>
          <Button asChild variant="ghost" className="rounded-full">
            <a href="https://github.com/Rounak2408" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="ghost" className="rounded-full">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
