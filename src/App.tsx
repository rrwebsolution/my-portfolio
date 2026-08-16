import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Experience } from "@/components/Experience"
import { Projects } from "@/components/Projects"
import { Education } from "@/components/Education"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Reveal"
import { ResumeProvider } from "@/context/ResumeContext"
import { PreviewBanner } from "@/components/PreviewBanner"
import { ScrollToTop } from "@/components/ScrollToTop"
import { ScrollProgressBar } from "./components/ScrollProgressBar"

// Decorative glowing divider between sections
const SectionDivider = () => (
  <div className="relative my-8 flex items-center justify-center">
    <div className="h-px w-full bg-border/70" />
    <div className="absolute h-1 w-16 rounded-full bg-primary" />
  </div>
)

function App() {
  return (
    <ResumeProvider>
      <div className="relative min-h-svh bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-clip antialiased">
        
        {/* 1. TOP SCROLL PROGRESS BAR */}
        <ScrollProgressBar />

        {/* 2. NAVIGATION & PREVIEW BANNER */}
        <div className="relative z-50">
          <PreviewBanner />
        </div>
        <Navbar />

        {/* 3. MAIN CONTENT WITH REFINED REVEAL PACING */}
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
            <Education />
          </Reveal>

          <SectionDivider />

          <Reveal direction="up">
            <Contact />
          </Reveal>
        </main>

        {/* 4. FOOTER & FLOATING UTILITIES */}
        <div className="relative z-10 mt-20 border-t border-border/40 bg-background/50 backdrop-blur-md">
          <Footer />
        </div>

        <ScrollToTop />
      </div>
    </ResumeProvider>
  )
}

export default App
