"use client"

import { motion } from "framer-motion"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { TypeAnimation } from 'react-type-animation'
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row items-center justify-start pt-24 sm:pt-28 lg:pt-16 px-4 lg:px-0 relative overflow-hidden">
      {/* Image section - adjusted to match reference */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-8 order-1 lg:order-2 mt-8 sm:mt-12 lg:mt-0 mb-8 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden 
            shadow-lg
            transition-all duration-700 ease-in-out 
            hover:scale-105
            hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)]
            cursor-pointer"
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src="/mypic.png"
              alt="Profile picture"
              width={400}
              height={400}
              className="w-full h-full object-cover scale-[1.8] translate-y-12 -translate-x-2
                transition-transform duration-700 ease-in-out
                group-hover:scale-[1.9]"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Content section - adjusted spacing */}
      <div className="w-full lg:w-1/2 lg:ml-[200px] lg:mr-[40px] order-2 lg:order-1 mt-2 lg:mt-0">
        <div className="container">
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-rainbow bg-[length:200%_auto]">
                  Hi, I'm{" "}
                </span>
                <TypeAnimation
                  sequence={[
                    'Sudhanshu Rounak',
                    1000,
                    '',
                    500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-primary"
                  cursor={true}
                />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-3"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-semibold">
                Full Stack Developer and Data Analytics
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I build modern, responsive web applications with React, Node.js, and cutting-edge technologies. Let's
                create something amazing together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <Button asChild size="lg" className="w-full sm:w-auto px-8 text-lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 text-lg">
                <Link href="#projects">View My Work</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <Button variant="ghost" size="icon" asChild className="hover:scale-110">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon size={24} />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]" />
    </section>
  )
}

