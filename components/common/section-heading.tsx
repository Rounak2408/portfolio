"use client"

import { motion } from "framer-motion"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}

export function SectionHeading({ eyebrow, title, description, center = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={center ? "text-center" : ""}
    >
      {eyebrow ? <p className="text-sm font-medium tracking-[0.2em] text-primary/80 uppercase">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className={`mt-4 max-w-2xl text-muted-foreground ${center ? "mx-auto" : ""}`}>{description}</p> : null}
    </motion.div>
  )
}
