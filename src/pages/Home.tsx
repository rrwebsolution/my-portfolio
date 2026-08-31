import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Experience } from "@/components/Experience"
import { Projects } from "@/components/Projects"
import { Services } from "@/components/Services"
import { Process } from "@/components/Process"
import { Education } from "@/components/Education"
import { Contact } from "@/components/Contact"
import { Reveal } from "@/components/Reveal"

// Decorative glowing divider between sections
const SectionDivider = () => (
  <div className="relative my-8 flex items-center justify-center">
    <div className="h-px w-full bg-border/70" />
    <div className="absolute h-1 w-16 rounded-full bg-primary" />
  </div>
)

export function Home() {
  const location = useLocation()

  // When arriving here from another route (e.g. a project case-study page
  // linking back to "/#projects"), scroll to the requested section.
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }))
    }
  }, [location.hash])

  return (
    <main className="relative z-10 mx-auto max-w-7xl space-y-12 px-4 py-8 sm:space-y-20 sm:px-6 sm:py-12 lg:px-8">
      <Hero />

      <Reveal direction="up">
        <About />
      </Reveal>

      <SectionDivider />

      <Reveal direction="up">
        <Experience />
      </Reveal>

      <SectionDivider />

      <Reveal direction="up">
        <Projects />
      </Reveal>

      <SectionDivider />

      <Reveal direction="up">
        <Services />
      </Reveal>

      <SectionDivider />

      <Reveal direction="up">
        <Process />
      </Reveal>

      <SectionDivider />

      <Reveal direction="up">
        <Education />
      </Reveal>

      <SectionDivider />

      <Reveal direction="up">
        <Contact />
      </Reveal>
    </main>
  )
}
