"use client"

import { motion } from "framer-motion"
import { GraduationCap, School } from "lucide-react"

import { SectionHeading } from "@/components/common/section-heading"

export function PremiumEducation() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto w-[min(1120px,94%)]">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          description="My formal learning foundation that supports my practical full-stack development work."
        />

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                <School className="h-3.5 w-3.5" />
                Marwadi University
              </p>
              <h3 className="mt-3 text-xl font-semibold">Bachelor of Technology</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Focused on core computing fundamentals, problem solving, and practical software development.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-background/70 px-4 py-3">
              <p className="text-xs text-muted-foreground">CGPA</p>
              <p className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-primary">
                <GraduationCap className="h-5 w-5" />
                7.5
              </p>
            </div>
          </div>
        </motion.article>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              <School className="h-3.5 w-3.5" />
              Diploma
            </p>
            <h3 className="mt-3 text-lg font-semibold">Diploma in Advance Programming</h3>
            <p className="mt-2 text-sm text-muted-foreground">All India Council for Technical Education (AICTE)</p>
            <p className="mt-1 text-sm text-muted-foreground">Grade: A+</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              <School className="h-3.5 w-3.5" />
              Diploma
            </p>
            <h3 className="mt-3 text-lg font-semibold">Advance Diploma in Computer Application</h3>
            <p className="mt-2 text-sm text-muted-foreground">All India Council for Technical Education (AICTE)</p>
            <p className="mt-1 text-sm text-muted-foreground">Grade: A+</p>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
