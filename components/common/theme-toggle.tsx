"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <Button variant="outline" size="icon" className="rounded-full" aria-label="Toggle theme" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative rounded-full border-border/70 bg-card/80 backdrop-blur-md"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <motion.span
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 1 : 0.95 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </motion.span>
    </Button>
  )
}
