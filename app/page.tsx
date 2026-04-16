"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { SystemDiagnostics } from "@/components/common/system-diagnostics"
import { PremiumFooter } from "@/components/layout/premium-footer"
import { PremiumNavbar } from "@/components/layout/premium-navbar"
import { PremiumAbout } from "@/components/sections/premium-about"
import { PremiumContact } from "@/components/sections/premium-contact"
import { PremiumEducation } from "@/components/sections/premium-education"
import { PremiumHero } from "@/components/sections/premium-hero"
import { PremiumHighlights } from "@/components/sections/premium-highlights"
import { PremiumJourney } from "@/components/sections/premium-journey"
import { PremiumProjects } from "@/components/sections/premium-projects"
import { PremiumSkills } from "@/components/sections/premium-skills"

export default function Home() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const next = total > 0 ? (window.scrollY / total) * 100 : 0
      setProgress(next)
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-primary/20">
        <motion.div className="h-full bg-primary" animate={{ width: `${progress}%` }} />
      </div>
      <PremiumNavbar />
      <main>
        <PremiumHero />
        <PremiumAbout />
        <PremiumEducation />
        <PremiumSkills />
        <PremiumProjects />
        <PremiumJourney />
        <PremiumHighlights />
        <PremiumContact />
      </main>
      <SystemDiagnostics />
      <PremiumFooter />
    </div>
  )
}

