'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      themes={["light", "dark", "forest", "ocean", "sunset"]}
      value={{
        light: "light",
        dark: "dark",
        forest: "forest",
        ocean: "ocean",
        sunset: "sunset"
      }}
    >
      {children}
    </NextThemesProvider>
  )
}
