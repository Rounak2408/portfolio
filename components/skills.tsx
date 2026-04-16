"use client"

import { motion } from "framer-motion"
import { Code2, Database, Palette, Terminal, Settings, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
      { name: "React.js", url: "https://react.dev/learn" },
      { name: "Next.js", url: "https://nextjs.org/docs" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
    ],
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: [
      { name: "Node.js", url: "https://nodejs.org/en/learn" },
      { name: "Express.js", url: "https://expressjs.com/en/starter/installing.html" },
      { name: "RESTful APIs", url: "https://restfulapi.net/" },
      { name: "GraphQL", url: "https://graphql.org/learn/" },
      { name: "Authentication", url: "https://jwt.io/introduction" },
      { name: "WebSockets", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", url: "https://www.mongodb.com/docs/manual/tutorial/getting-started/" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/docs/current/tutorial.html" },
      { name: "MySQL", url: "https://dev.mysql.com/doc/mysql-getting-started/en/" },
      { name: "Redis", url: "https://redis.io/docs/get-started/" },
      { name: "Firebase", url: "https://firebase.google.com/docs/build" },
      { name: "Prisma ORM", url: "https://www.prisma.io/docs/getting-started" },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", url: "https://www.interaction-design.org/literature/topics/ui-design" },
      { name: "Responsive Design", url: "https://web.dev/learn/design/" },
      { name: "Figma", url: "https://help.figma.com/hc/en-us/categories/360002042553-Figma-basics" },
      { name: "Adobe XD", url: "https://helpx.adobe.com/xd/get-started.html" },
    ],
  },
  {
    title: "Tools",
    icon: Settings,
    skills: [
      { name: "Git", url: "https://git-scm.com/doc" },
      { name: "GitHub", url: "https://docs.github.com/en/get-started" },
      { name: "VS Code", url: "https://code.visualstudio.com/docs" },
      { name: "Docker", url: "https://docs.docker.com/get-started/" },
    ],
  },
  {
    title: "Other",
    icon: Brain,
    skills: [
      { name: "Problem Solving", url: "https://www.coursera.org/learn/problem-solving" },
      { name: "Agile Methodology", url: "https://www.atlassian.com/agile" },
      { name: "Testing", url: "https://www.guru99.com/software-testing-introduction-importance.html" },
      { name: "Performance Optimization", url: "https://web.dev/learn/performance/" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent 
            bg-gradient-to-r from-[#00DFD8] via-[#007CF0] to-[#00DFD8]
            animate-gradient-xy bg-[length:200%_auto]">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00DFD8] via-[#007CF0] to-[#00DFD8] mx-auto mb-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card/50 backdrop-blur-sm 
                rounded-xl p-6 
                transition-all duration-500 ease-out
                shadow-[0_0_15px_rgba(0,0,0,0.1)]
                dark:shadow-[0_0_15px_rgba(0,0,0,0.2)]
                hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]
                border border-border/50
                hover:border-primary/50
                before:absolute before:inset-0 
                before:bg-gradient-to-br before:from-primary/0 before:to-primary/5
                before:opacity-0 before:transition-opacity before:duration-500
                hover:before:opacity-100
                hover:-translate-y-1
                overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <category.icon className="w-12 h-12 mx-auto mb-4 text-primary 
                    transition-all duration-500 
                    group-hover:scale-110 group-hover:text-primary
                    drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.3)]" />
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <motion.a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden
                          bg-background/50 backdrop-blur-sm
                          rounded-lg p-3 text-sm 
                          text-muted-foreground
                          transition-all duration-300
                          hover:text-primary hover:bg-primary/10
                          border border-border/50
                          hover:border-primary/50
                          shadow-[0_2px_8px_rgba(0,0,0,0.05)]
                          dark:shadow-[0_2px_8px_rgba(0,0,0,0.1)]
                          hover:shadow-[0_4px_12px_rgba(var(--primary-rgb),0.2)]
                          flex items-center justify-center
                          group/skill"
                      >
                        <span className="relative z-10 transition-transform duration-300 
                          group-hover/skill:scale-105
                          drop-shadow-sm">
                          {skill.name}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 
                          opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

