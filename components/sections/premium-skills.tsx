"use client"

import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import { BadgeCheck, BrainCircuit, BriefcaseBusiness, Cloud, Code2, Database, Gauge, Globe2, Wrench } from "lucide-react"

import { SectionHeading } from "@/components/common/section-heading"
import { Button } from "@/components/ui/button"

const skillTabs = [
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Database },
  { id: "web", label: "Web Development", icon: Globe2 },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
  { id: "ai", label: "AI / APIs", icon: BrainCircuit },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "transfer", label: "Transferable Skills", icon: BriefcaseBusiness },
]

const tabRadarColors: Record<string, { stroke: string; fill: string }> = {
  frontend: { stroke: "#f97316", fill: "rgba(249, 115, 22, 0.30)" },
  backend: { stroke: "#22c55e", fill: "rgba(34, 197, 94, 0.30)" },
  web: { stroke: "#3b82f6", fill: "rgba(59, 130, 246, 0.30)" },
  cloud: { stroke: "#06b6d4", fill: "rgba(6, 182, 212, 0.30)" },
  ai: { stroke: "#a855f7", fill: "rgba(168, 85, 247, 0.30)" },
  tools: { stroke: "#eab308", fill: "rgba(234, 179, 8, 0.30)" },
  transfer: { stroke: "#f97316", fill: "rgba(249, 115, 22, 0.30)" },
}

const tabSkills: Record<string, { name: string; score: number }[]> = {
  frontend: [
    { name: "React", score: 92 },
    { name: "Next.js", score: 90 },
    { name: "TypeScript", score: 88 },
    { name: "Tailwind CSS", score: 94 },
    { name: "Framer Motion", score: 82 },
    { name: "Redux / Zustand", score: 78 },
  ],
  backend: [
    { name: "Node.js", score: 90 },
    { name: "Express", score: 88 },
    { name: "REST APIs", score: 91 },
    { name: "Authentication & JWT", score: 84 },
    { name: "WebSockets", score: 80 },
    { name: "MongoDB / Mongoose", score: 86 },
  ],
  web: [
    { name: "React", score: 90 },
    { name: "Next.js", score: 92 },
    { name: "HTML/CSS", score: 95 },
    { name: "Tailwind CSS", score: 94 },
    { name: "Node.js", score: 89 },
    { name: "Express.js", score: 86 },
    { name: "MongoDB", score: 88 },
    { name: "PostgreSQL", score: 82 },
    { name: "REST APIs", score: 91 },
    { name: "GraphQL", score: 74 },
    { name: "Redux", score: 82 },
    { name: "Webpack", score: 76 },
    { name: "Testing", score: 78 },
    { name: "CI/CD", score: 75 },
    { name: "SEO Basics", score: 81 },
    { name: "Performance Optimization", score: 84 },
  ],
  cloud: [
    { name: "Vercel Deployments", score: 90 },
    { name: "Render Services", score: 84 },
    { name: "CI Basics", score: 75 },
    { name: "Environment Setup", score: 88 },
    { name: "Deployment Debugging", score: 86 },
    { name: "Monitoring Basics", score: 74 },
  ],
  ai: [
    { name: "OpenRouter", score: 86 },
    { name: "Groq", score: 80 },
    { name: "Prompt UX", score: 82 },
    { name: "API Integration", score: 90 },
    { name: "Structured Output Handling", score: 84 },
    { name: "RAG Fundamentals", score: 72 },
  ],
  tools: [
    { name: "Git", score: 90 },
    { name: "GitHub", score: 90 },
    { name: "VS Code", score: 93 },
    { name: "Postman", score: 84 },
    { name: "Figma", score: 76 },
    { name: "Chrome DevTools", score: 88 },
  ],
  transfer: [],
}

const transferable = [
  { name: "Project Management", score: 90 },
  { name: "Technical Documentation", score: 80 },
  { name: "Data-Driven Decisions", score: 88 },
  { name: "Innovation & Problem-Solving", score: 92 },
  { name: "Collaboration", score: 86 },
  { name: "Communication", score: 85 },
  { name: "Leadership", score: 82 },
  { name: "Time Management", score: 84 },
]

export function PremiumSkills() {
  const [activeTab, setActiveTab] = useState("transfer")

  const currentSkills = useMemo(
    () => (activeTab === "transfer" ? transferable : tabSkills[activeTab]),
    [activeTab]
  )

  const radarData = useMemo(
    () =>
      currentSkills.map((item) => ({
        subject: item.name
          .replace("Data-Driven Decisions", "Data")
          .replace("Innovation & Problem-Solving", "Problem Solving")
          .replace("Performance Optimization", "Performance")
          .replace("Authentication & JWT", "Auth/JWT")
          .replace("Environment Setup", "Env Setup"),
        value: item.score,
      })),
    [currentSkills]
  )

  const radarPoints = useMemo(() => {
    const cx = 145
    const cy = 145
    const maxR = 105
    const len = radarData.length
    return radarData
      .map((item, i) => {
        const angle = (-Math.PI / 2) + (2 * Math.PI * i) / len
        const r = (item.value / 100) * maxR
        const x = cx + Math.cos(angle) * r
        const y = cy + Math.sin(angle) * r
        return `${x},${y}`
      })
      .join(" ")
  }, [radarData])

  const activeRadarColors = tabRadarColors[activeTab] ?? tabRadarColors.transfer

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto w-[min(1120px,94%)]">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="A comprehensive overview of my practical abilities across frontend, backend, cloud, AI integrations, and high-impact transferable skills."
          center
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {skillTabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <Button
                key={tab.id}
                type="button"
                variant={isActive ? "default" : "outline"}
                size="sm"
                className="rounded-full text-xs"
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon className="mr-1.5 h-3.5 w-3.5" />
                {tab.label}
              </Button>
            )
          })}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-8 rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm backdrop-blur sm:p-6"
        >
          <div className="mb-5 flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">
              {skillTabs.find((t) => t.id === activeTab)?.label} Proficiency
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {currentSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-primary">{skill.score}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-orange-300"
                      style={{ width: `${skill.score}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-dashed border-border/70 bg-background/40 p-3 text-xs text-muted-foreground">
                <Gauge className="mr-1 inline h-3.5 w-3.5" />
                Actively improving depth via deployment-focused project work and iteration.
              </div>
            </div>

            <div className={`rounded-xl border border-border/70 bg-background/50 p-3 ${activeTab === "web" ? "mt-4 lg:mt-8" : ""}`}>
              <svg viewBox="0 0 290 290" className="h-[290px] w-full">
                <circle cx="145" cy="145" r="105" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
                <circle cx="145" cy="145" r="78" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
                <circle cx="145" cy="145" r="52" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
                <circle cx="145" cy="145" r="26" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
                <polygon points={radarPoints} fill={activeRadarColors.fill} stroke={activeRadarColors.stroke} strokeWidth="2" />
                {radarData.map((item, i) => {
                  const angle = (-Math.PI / 2) + (2 * Math.PI * i) / radarData.length
                  const labelRadius = 125
                  const x = 145 + Math.cos(angle) * labelRadius
                  const y = 145 + Math.sin(angle) * labelRadius
                  return (
                    <text
                      key={item.subject}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="hsl(var(--muted-foreground))"
                      fontSize="10"
                    >
                      {item.subject}
                    </text>
                  )
                })}
              </svg>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
