"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon, GithubIcon, Code2, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart, checkout, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "fullstack",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "A responsive dashboard for social media analytics with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Chart.js", "Tailwind CSS", "Firebase"],
    category: "frontend",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Task Management API",
    description: "RESTful API for task management with authentication, task CRUD operations, and team collaboration.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1469&auto=format&fit=crop",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    category: "backend",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather application that shows current weather and forecasts based on user location.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "OpenWeather API", "Geolocation", "CSS"],
    category: "frontend",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A real-time chat application with private messaging, group chats, and file sharing.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "fullstack",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Content Management System",
    description: "A headless CMS with a user-friendly interface for content creation and management.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1470&auto=format&fit=crop",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS S3"],
    category: "fullstack",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

const categories = [
  { id: "all", name: "All" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "fullstack", name: "Full Stack" },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4
            bg-clip-text text-transparent 
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
            animate-gradient-xy"
          >
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-foreground/80">
            Here are some of the projects I've worked on. Each project represents different skills and
            technologies I've mastered.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "secondary"}
              className={`
                px-3 sm:px-6 py-2 text-sm sm:text-base
                transition-all duration-300
                ${activeCategory === category.id ? 
                  'shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]' : 
                  'hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]'}
              `}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden 
                shadow-lg hover:shadow-xl 
                transition-all duration-300
                hover:-translate-y-1
                border border-border/50
                hover:border-primary/50"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 bg-primary/10 text-primary 
                        rounded-full text-xs sm:text-sm
                        border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-3 sm:gap-4">
                  <Button asChild variant="default" size="sm" className="text-xs sm:text-sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2"
                    >
                      <GithubIcon size={14} className="sm:w-4 sm:h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

