import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-b7dj.vercel.app"),
  title: "Rounak Keshri | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer portfolio showcasing React, Next.js, Node.js, and real-world projects.",
  generator: "Rounak",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rounak Keshri | Full Stack Developer Portfolio",
    description:
      "Explore projects in web development, full-stack engineering, and data analytics.",
    url: "https://portfolio-b7dj.vercel.app",
    siteName: "Rounak Portfolio",
    type: "website",
  },
  verification: {
    google: "oHU9IigcFWD1Ko1G9WBR7MqdIVxlhHliHJOL5eYDzdE",
  },
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
