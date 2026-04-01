"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function PremiumHero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24">
      <div className="hero-glow" />
      <div className="mx-auto grid w-[min(1120px,94%)] items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 inline-flex rounded-full border border-border/70 bg-card/80 px-4 py-1 text-xs tracking-[0.15em] text-primary uppercase">
            Product-minded full stack builder
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building serious web products{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              with startup focus.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            I am Sudhanshu Rounak, a 2nd-year developer crafting full-stack experiences that ship fast, scale cleanly,
            and feel polished to end users.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full px-6">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-full px-6">
              <a href="/Rounak-CV.pdf" download="Rounak-CV.pdf">
                Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/30 to-cyan-400/20 blur-2xl" />
          <div className="relative rounded-[2rem] border border-border/70 bg-card/90 p-4 shadow-lg backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image src="/mypic.png" alt="Sudhanshu Rounak profile photo" fill className="object-cover object-[center_12%]" priority />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 flex justify-center">
        <a href="#about" aria-label="Scroll to about">
          <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
