import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Toaster 
          position="top-center"
          expand={true}
          richColors
          theme="system"
        />
      </body>
    </html>
  )
}
