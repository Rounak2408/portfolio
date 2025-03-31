"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            )}
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center md:hidden">
            {/* Theme toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="mr-2"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            )}
            
            {/* Menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border"
          >
            <div className="container mx-auto py-4">
              <div className="flex flex-col space-y-3 px-2">
                <Link
                  href="#home"
                  className="text-foreground/70 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-foreground/70 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="text-foreground/70 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="text-foreground/70 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="text-foreground/70 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// NavLinks component for desktop view
function NavLinks() {
  return (
    <div className="flex items-center space-x-8">
      <Link href="#home" className="text-foreground/70 hover:text-primary transition-colors">
        Home
      </Link>
      <Link href="#about" className="text-foreground/70 hover:text-primary transition-colors">
        About
      </Link>
      <Link href="#skills" className="text-foreground/70 hover:text-primary transition-colors">
        Skills
      </Link>
      <Link href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
        Projects
      </Link>
      <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
        Contact
      </Link>
    </div>
  )
} 