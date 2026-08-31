import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ResumeProvider } from "@/context/ResumeContext"
import { PreviewBanner } from "@/components/PreviewBanner"
import { ScrollToTop } from "@/components/ScrollToTop"
import { ScrollProgressBar } from "@/components/ScrollProgressBar"
import { Home } from "@/pages/Home"
import { ProjectDetail } from "@/pages/ProjectDetail"

function App() {
  return (
    <ResumeProvider>
      <BrowserRouter>
        <div className="relative min-h-svh bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-clip antialiased">

          {/* 1. TOP SCROLL PROGRESS BAR */}
          <ScrollProgressBar />

          {/* 2. NAVIGATION & PREVIEW BANNER */}
          <div className="relative z-50">
            <PreviewBanner />
          </div>
          <Navbar />

          {/* 3. ROUTED PAGE CONTENT */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>

          {/* 4. FOOTER & FLOATING UTILITIES */}
          <div className="relative z-10 mt-20 border-t border-border/40 bg-background/50 backdrop-blur-md">
            <Footer />
          </div>

          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ResumeProvider>
  )
}

export default App
