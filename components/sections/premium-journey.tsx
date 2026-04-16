"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

const items = [
  { title: "Currently Building", text: "Production-grade portfolio upgrades, full-stack side projects, and polished user flows." },
  { title: "Exploring", text: "System design basics, AI-assisted product features, and performance-oriented frontend patterns." },
  { title: "Current Focus", text: "Shipping faster, writing cleaner TypeScript, and improving backend reliability for deployed apps." },
]

export function PremiumJourney() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = items[activeIndex]

  const prev = () => setActiveIndex((p) => (p - 1 + items.length) % items.length)
  const next = () => setActiveIndex((p) => (p + 1) % items.length)

  return (
    <section id="journey" className="py-24">
      <div className="mx-auto w-[min(1120px,94%)]">
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-primary/80 uppercase">Learning Journey</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Growing with deliberate practice and real deployments.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            I am early in my career, but intentional about building real products, learning from production feedback, and leveling up fast.
          </p>
          <div className="mx-auto mt-4 h-0.5 w-56 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <motion.article
          key={activeItem.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border/70 bg-gradient-to-br from-card to-card/70 p-6 shadow-[0_20px_60px_-30px_rgba(249,115,22,0.45)]"
        >
          <div className="mb-3 flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-foreground">{activeItem.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">{activeItem.text}</p>

          <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
            <span>Roadmap Area</span>
            <Quote className="h-5 w-5 text-primary/80" />
          </div>
        </motion.article>

        <div className="mt-6 flex items-center justify-between">
          <Button type="button" variant="outline" size="icon" className="rounded-full border-border/70" onClick={prev} aria-label="Previous journey item">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2">
            {items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === activeIndex ? "w-6 bg-primary" : "w-2.5 bg-muted-foreground/40"}`}
                aria-label={`Show ${item.title}`}
              />
            ))}
          </div>

          <Button type="button" variant="outline" size="icon" className="rounded-full border-border/70" onClick={next} aria-label="Next journey item">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
