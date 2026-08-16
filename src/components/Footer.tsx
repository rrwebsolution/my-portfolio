import { ArrowUp } from "lucide-react"
import { useResume } from "@/context/ResumeContext"

export function Footer() {
  const { data } = useResume()
  const { profile } = data

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-md">
      <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Left: Brand Monogram & Name */}
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-xs font-bold text-primary shadow-2xs">
              {initials}
            </div>
            <div>
              <p className="font-heading text-sm font-bold tracking-tight text-foreground">
                {profile.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {profile.title || "Software Engineer & Designer"}
              </p>
            </div>
          </div>

          {/* Center: Quick Navigation Anchor Links */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
            <a href="#top" className="transition-colors hover:text-primary">
              Home
            </a>
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#experience" className="transition-colors hover:text-primary">
              Experience
            </a>
            <a href="#projects" className="transition-colors hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </nav>

          {/* Right: Available for Work Status Pill */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500 shadow-2xs backdrop-blur-xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for opportunities</span>
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex size-8 items-center justify-center rounded-full border border-border/60 bg-card/60 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary active:scale-95"
            >
              <ArrowUp className="size-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-row: Copyright & Tech Stack */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 text-[11px] text-muted-foreground sm:flex-row">
          
          {/* Copyright */}
          <p className="font-medium tracking-tight">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          {/* Built With Credits */}
          <div className="flex items-center gap-1.5 font-medium">
            <span>Built with precision using</span>
            <span className="inline-flex items-center rounded-md border border-border/60 bg-card/40 px-1.5 py-0.5 text-[10px] font-semibold text-foreground">
              React
            </span>
            <span>&</span>
            <span className="inline-flex items-center rounded-md border border-border/60 bg-card/40 px-1.5 py-0.5 text-[10px] font-semibold text-foreground">
              Tailwind CSS
            </span>
          </div>

        </div>

      </div>
    </footer>
  )
}