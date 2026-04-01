"use client"

import { motion } from "framer-motion"
import { CalendarDays, ChevronRight, ExternalLink, Github, Star, Users } from "lucide-react"
import Image from "next/image"

import { SectionHeading } from "@/components/common/section-heading"
import { Button } from "@/components/ui/button"

const featured = [
  {
    title: "R-Mart E-Commerce Platform",
    impact: "End-to-end shopping workflow with admin controls.",
    description:
      "Built a full-stack commerce app with catalog, cart, checkout flow, and management operations designed for practical product behavior.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    live: "https://r-mart-1.onrender.com/",
    code: "https://github.com/Rounak2408/R-mart",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "QuizForge AI",
    impact: "AI-generated assessments from uploaded learning content.",
    description:
      "Designed an AI-powered quiz engine with clean UX, configurable difficulty, and structured outputs that help users practice faster.",
    stack: ["Next.js", "TypeScript", "AI APIs", "Tailwind"],
    live: "https://ai-quizeforge.onrender.com",
    code: "https://github.com/Rounak2408/AI-Quizeforge",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1470&auto=format&fit=crop",
  },
]

const others = [
  {
    title: "Task Manager",
    type: "Web Dev",
    description: "Task and notes manager focused on clean workflows and practical productivity.",
    stack: ["Next.js", "Tailwind", "Node.js", "TypeScript", "MongoDB"],
    period: "June 2025",
    team: "Team: 1",
    rating: 4,
    live: "https://task-manager-and-notes-manger.vercel.app/",
    code: "https://github.com/Rounak2408/Task-Manager-and-Notes-manger",
  },
  {
    title: "Weather App",
    type: "Web Dev",
    description: "Fast weather lookup interface with city search and responsive UI.",
    stack: ["React", "Tailwind", "Weather API"],
    period: "October 2025",
    team: "Team: 1",
    rating: 3,
    live: "https://weather-app-git-main-ounaks-projects.vercel.app",
    code: "https://github.com/Rounak2408/Weather-App",
  },
  {
    title: "Live Chat",
    type: "Web Dev",
    description: "Realtime chat rooms with sockets and lightweight authentication flow.",
    stack: ["Node.js", "Express", "Socket.IO", "MongoDB"],
    period: "September 2025",
    team: "Team: 1",
    rating: 4,
    live: "https://live-chat-752g.onrender.com",
    code: "https://github.com/Rounak2408/live-chat",
  },
  {
    title: "Online Mini Games Hub",
    type: "Web Dev",
    description: "Browser-based gaming collection with clean navigation and quick interactions.",
    stack: ["Next.js", "TypeScript", "Tailwind", "+1 more"],
    period: "July 2025",
    team: "Team: 1",
    rating: 3,
    live: "https://rounak-gaminghub-1.onrender.com/",
    code: "https://github.com/Rounak2408/Rounak-gaminghub",
  },
  {
    title: "AI-Qr-Generator",
    type: "Web Dev",
    description: "Smart QR and barcode generator with upload support, downloads, history, and favorites.",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion", "+2 more"],
    period: "April 2026",
    team: "Team: 1",
    rating: 4,
    live: "https://ai-qr-generator.onrender.com/",
    code: "https://github.com/Rounak2408/AI-Qr-Generator",
  },
  {
    title: "Appointment-booking",
    type: "Web Dev",
    description: "Full-stack appointment booking app with auth, dashboards, scheduling, and payment-ready workflow.",
    stack: ["React", "Node.js", "Express", "MongoDB", "+2 more"],
    period: "April 2026",
    team: "Team: 1",
    rating: 4,
    live: "https://appointment-booking-866p.onrender.com/",
    code: "https://github.com/Rounak2408/Appointment-booking",
  },
]

export function PremiumProjects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto w-[min(1120px,94%)]">
        <SectionHeading
          eyebrow="Projects"
          title="Product-focused builds, not assignment-style demos."
          description="A selection of applications where I handled implementation details across frontend, backend, APIs, deployment, and user experience."
        />

        <div className="mt-12 space-y-8">
          {featured.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-6 rounded-3xl border border-border/70 bg-card/90 p-5 shadow-sm backdrop-blur md:grid-cols-2"
            >
              <div className={idx % 2 ? "md:order-2" : ""}>
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 hover:scale-105" />
                </div>
              </div>
              <div className={idx % 2 ? "md:order-1" : ""}>
                <p className="text-xs tracking-[0.15em] text-primary uppercase">Featured Case Study</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-primary/90">{project.impact}</p>
                <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <Button asChild className="rounded-full">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-semibold">Other Projects</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {others.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm transition hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full bg-blue-500/15 px-2.5 py-1 text-[11px] text-blue-300">{project.type}</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={`${project.title}-${idx}`}
                        className={`h-3.5 w-3.5 ${idx < project.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/40"}`}
                      />
                    ))}
                  </div>
                </div>

                <a href={project.live} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-semibold hover:text-primary">
                  {project.title}
                  <ChevronRight className="h-4 w-4" />
                </a>

                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-border/70 bg-background/80 px-2.5 py-1 text-[11px] text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {project.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {project.team}
                  </span>
                </div>

                <div className="mt-4 flex gap-3">
                  <a className="inline-flex items-center text-sm text-primary hover:underline" href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                    Live
                  </a>
                  <a className="inline-flex items-center text-sm text-primary hover:underline" href={project.code} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1.5 h-3.5 w-3.5" />
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
