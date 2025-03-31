import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <Link href="#home" className="text-2xl font-bold text-primary">
              Portfolio
            </Link>
            <p className="text-foreground/70 mt-2">Building amazing web experiences</p>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <TwitterIcon size={20} />
              </a>
            </div>
            <p className="text-foreground/70 text-sm">© {currentYear} Rounak. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

