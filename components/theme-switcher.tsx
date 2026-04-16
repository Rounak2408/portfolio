"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { 
  SunIcon, 
  MoonIcon, 
  TreesIcon,
  Waves as WaveIcon,
  Sunset as SunsetIcon
} from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Return null on first render to avoid hydration mismatch
  }

  const themes = [
    {
      name: "light",
      icon: <SunIcon className="h-4 w-4 mr-2" />,
      label: "Light",
      color: "text-yellow-500"
    },
    {
      name: "dark",
      icon: <MoonIcon className="h-4 w-4 mr-2" />,
      label: "Dark",
      color: "text-slate-900"
    },
    {
      name: "forest",
      icon: <TreesIcon className="h-4 w-4 mr-2" />,
      label: "Forest",
      color: "text-green-600"
    },
    {
      name: "ocean",
      icon: <WaveIcon className="h-4 w-4 mr-2" />,
      label: "Ocean",
      color: "text-blue-600"
    },
    {
      name: "sunset",
      icon: <SunsetIcon className="h-4 w-4 mr-2" />,
      label: "Sunset",
      color: "text-orange-500"
    }
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {themes.find(t => t.name === theme)?.icon || <SunIcon className="h-4 w-4" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.name}
            onClick={() => setTheme(t.name)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="flex items-center">
              {t.icon}
              {t.label}
            </span>
            {theme === t.name && (
              <span className="h-2 w-2 rounded-full bg-primary ml-2" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 