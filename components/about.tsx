"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DownloadIcon, BriefcaseIcon } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="pt-4 pb-12 sm:py-16 lg:py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-4xl font-bold 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
            animate-gradient-xy"
          >
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-2"
          >
            <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] 
              rounded-full overflow-hidden 
              shadow-lg hover:shadow-xl 
              transition-all duration-300
              hover:scale-105
              group"
            >
              <Image
                src="/about.jpg"
                alt="About Me"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-semibold">
              Full Stack Developer & Data Analytics Enthusiast
            </h3>
            <p className="text-foreground/80 text-base sm:text-lg">
              I specialize in building modern web applications using cutting-edge technologies.
              With a passion for both frontend and backend development, I create seamless user
              experiences while ensuring robust server-side functionality.
            </p>
            <p className="text-foreground/80 text-base sm:text-lg">
              My expertise includes React, Node.js, TypeScript, and various modern frameworks.
              I'm also deeply interested in data analytics and visualization.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-4">
              <Button asChild className="w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">
                  <BriefcaseIcon size={20} />
                  Hire Me
                </Link>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <DownloadIcon size={20} />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

