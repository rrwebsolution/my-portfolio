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

function App() {
  return (
    <ResumeProvider>
    <div className="relative min-h-svh overflow-x-hidden bg-background text-foreground">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="animate-aurora-1 absolute -top-32 -left-24 size-[36rem] rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-aurora-2 absolute top-1/3 -right-20 size-[32rem] rounded-full bg-chart-2/20 blur-3xl" />
        <div className="animate-aurora-3 absolute -bottom-24 left-1/4 size-[34rem] rounded-full bg-chart-4/18 blur-3xl" />
      </div>

      <Navbar />
      <PreviewBanner />
      <main className="relative">
        <Hero />
        <Reveal direction="left">
          <About />
        </Reveal>
        <Reveal direction="right">
          <Experience />
        </Reveal>
        <Reveal direction="left">
          <Projects />
        </Reveal>
        <Reveal direction="right">
          <Education />
        </Reveal>
        <Reveal direction="left">
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
    </ResumeProvider>
  )
}

export default App
