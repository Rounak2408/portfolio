"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  MoonIcon, 
  SunIcon, 
  MenuIcon, 
  XIcon,
  Palette,
  Globe,
  ChevronDown
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { themes } from "@/lib/themes"
import { ThemeSwitcher } from "./theme-switcher"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMobile = useIsMobile()

  // Add language state and toggle function
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en')
    // You can add your language switching logic here
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          href="#home" 
          className="text-2xl font-bold text-primary cursor-pointer" 
          onClick={handleRefresh}
        >
          Portfolio
        </Link>

        <nav className="flex items-center gap-8">
          {/* Navigation links */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Theme Dropdown */}
          <ThemeSwitcher />


        </nav>

        {/* Mobile menu button */}
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </Button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return isMobile
}

