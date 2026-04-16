"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { SectionHeading } from "@/components/common/section-heading"

const stats = [
  { label: "Deployed Projects", value: "10+" },
  { label: "Tech Stack Breadth", value: "20+" },
  { label: "Build Consistency", value: "Daily" },
]

export function PremiumAbout() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto w-[min(1120px,94%)]">
        <SectionHeading
          eyebrow="About"
          title="A 2nd-year developer focused on real product outcomes."
          description="I care about shipping usable software, learning deeply, and improving every release with better UX, stronger architecture, and measurable product impact."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border/70 bg-card/90 p-4 shadow-sm backdrop-blur"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src="/about.jpg" alt="Sudhanshu Rounak portrait" fill className="object-cover object-[center_8%]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm sm:p-8 backdrop-blur"
          >
            <p className="text-muted-foreground">
              My journey started with curiosity and quickly evolved into building full applications end-to-end. I enjoy turning
              ideas into polished experiences: from frontend motion and accessibility to backend APIs and deployment pipelines.
            </p>
            <p className="mt-4 text-muted-foreground">
              I am especially interested in products where design and engineering meet: dashboards, developer tools, and
              AI-assisted experiences that feel simple and fast for users.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/70 bg-background/80 p-4">
                  <p className="text-2xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
