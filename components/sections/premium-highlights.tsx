"use client"

import { motion } from "framer-motion"
import { Code2, Globe, Rocket, Trophy } from "lucide-react"

import { SectionHeading } from "@/components/common/section-heading"

const highlights = [
  { icon: Rocket, title: "Live Deployments", value: "8+", note: "Apps deployed on Vercel and Render with active links." },
  { icon: Code2, title: "Core Stack Depth", value: "MERN + Next.js", note: "Hands-on work across frontend and backend layers." },
  { icon: Globe, title: "Shipping Habit", value: "Consistent", note: "Frequent iterations, UI polish, and production updates." },
  { icon: Trophy, title: "Growth Mindset", value: "High", note: "Focused on practical outcomes over tutorial-only learning." },
]

export function PremiumHighlights() {
  return (
    <section id="highlights" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,hsl(var(--primary)/0.15),transparent_45%)]" />
      <div className="mx-auto w-[min(1120px,94%)]">
        <SectionHeading
          eyebrow="Highlights"
          title="Proof of momentum and credibility."
          description="Signals that reflect consistency, execution quality, and practical delivery across real-world projects."
          center
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card to-card/70 p-5 shadow-[0_18px_45px_-30px_rgba(249,115,22,0.7)]"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/15 blur-2xl transition group-hover:bg-primary/25" />
              <div className="relative">
                <span className="inline-flex rounded-xl border border-primary/25 bg-primary/10 p-2.5">
                  <item.icon className="h-5 w-5 text-primary" />
                </span>
                <p className="mt-4 text-xs tracking-[0.08em] text-muted-foreground uppercase">{item.title}</p>
                <p className="mt-1 text-2xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
