'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="default"
      enableSystem={false}
      themes={["light", "dark", "default", "ocean", "forest", "sunset", "lavender", "monochrome"]}
      value={{
        light: "light",
        dark: "dark",
        default: "default",
        forest: "forest",
        ocean: "ocean",
        sunset: "sunset",
        lavender: "lavender",
        monochrome: "monochrome",
      }}
    >
      {children}
    </NextThemesProvider>
  )
}
