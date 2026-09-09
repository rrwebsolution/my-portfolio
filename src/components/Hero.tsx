import { useState } from "react"
import { ArrowRight, Code2, FileText, FolderGit2, Mail, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CvUploadDialog } from "@/components/CvUploadDialog"
import { useResume } from "@/context/ResumeContext"
import { heroBio, portfolioStats } from "@/data/resume"

const profilePhoto = "/profile_photo.jpg"

const heroTechBadges = [
  "Laravel",
  "React",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
]

export function Hero() {
  const { data, isCustom } = useResume()
  const { profile } = data
  const [previewOpen, setPreviewOpen] = useState(false)

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col items-center gap-9 px-5 py-14 text-center sm:px-10 sm:py-20 lg:px-16"
    >
      {/* 1. AVATAR WITH LUMINOUS GLOW RING & STATUS BADGE */}
      <div className="relative group">
        {/* Animated ambient back-glow */}
        <div className="absolute -inset-2 rounded-full bg-primary opacity-30 blur-xl transition-all duration-700 group-hover:opacity-60 group-hover:blur-2xl" />

        {/* Solid selected-color border wrapper */}
        <div className="relative rounded-full border-4 border-primary bg-background p-1 shadow-xl">
          {isCustom ? (
            <div className="flex size-32 sm:size-36 items-center justify-center rounded-full bg-muted/90 text-3xl font-bold tracking-tight text-foreground shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]">
              {initials}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              aria-label={`Preview photo of ${profile.name}`}
              className="block cursor-zoom-in"
            >
              <img
                src={profilePhoto}
                alt={profile.name}
                className="size-32 sm:size-36 rounded-full object-cover object-top ring-2 ring-background shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
          )}
        </div>

        {/* "Available / Active" Status Indicator */}
        <div className="absolute bottom-1 right-1 flex items-center gap-1.5 rounded-full border border-background bg-background/90 px-2.5 py-1 text-[11px] font-medium shadow-md backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-muted-foreground font-semibold">Available</span>
        </div>
      </div>

      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-2xs backdrop-blur-xs">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        <span>Available for Remote &amp; Project-Based Opportunities</span>
      </div>

      {/* 2. HEADLINE & ROLES */}
      <div className="w-full max-w-4xl space-y-5">
        {/* Role Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary shadow-xs backdrop-blur-xs">
          <Sparkles className="size-3.5" />
          <span>{profile.title}</span>
        </div>

        {/* Hero Name Headline with Subtle Shimmer */}
        <h1 className="font-heading text-4xl font-black tracking-[-0.04em] text-balance text-foreground sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        {/* BIO / CONTENT SECTION */}
        {isCustom ? (
          <p className="mx-auto text-balance text-muted-foreground text-base sm:text-lg sm:leading-relaxed">
            {profile.summary}
          </p>
        ) : (
          <div className="mx-auto space-y-6 text-left">
            {/* Intro paragraph */}
            <p className="mx-auto max-w-3xl text-center text-balance text-foreground/90 text-base leading-7 sm:text-lg sm:leading-8">
              {heroBio.intro}
            </p>

            {/* Skills & Highlights */}
            <div className="text-left space-y-5">

              {/* Tech Stack Chips */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground mb-2.5">
                  <Code2 className="size-4 text-primary" />
                  <span>{heroBio.techStackHeading}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {heroBio.techStack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-lg border border-border/60 bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects Highlights */}
              <div className="border-t border-border/40 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  <FolderGit2 className="size-4 text-primary" />
                  <span>{heroBio.projectsHeading}</span>
                </div>
                <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {heroBio.projects.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Closing notes */}
              {heroBio.closing.length > 0 && (
                <div className="border-t border-border/40 pt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-2">
                  {heroBio.closing.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}

            </div>
          </div>
        )}
      </div>

      {/* 3. INTERACTIVE STATS CARDS */}
      {!isCustom && (
        <div className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          {portfolioStats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/80 p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              {/* Subtle hover tint */}
              <div className="absolute inset-0 -z-10 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <p className="font-heading text-2xl font-bold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 4. CALL TO ACTIONS */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
        <Button
          size="lg"
          className="group w-full sm:w-auto rounded-full bg-primary px-7 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0"
          asChild
        >
          <a href="#projects">
            <FolderGit2 className="size-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
            <span>View My Projects</span>
            <ArrowRight className="size-4 ml-1.5 opacity-70 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="group w-full sm:w-auto rounded-full border-border/80 bg-background/50 px-7 backdrop-blur-xs transition-all duration-300 hover:border-primary/40 hover:bg-muted/80 hover:-translate-y-0.5 active:translate-y-0"
          asChild
        >
          <a href="#contact">
            <Mail className="size-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
            <span>Contact Me</span>
          </a>
        </Button>

        {profile.resumeUrl && (
          <Button
            size="lg"
            variant="ghost"
            className="group w-full sm:w-auto rounded-full px-5 text-foreground/80 transition-all duration-300 hover:bg-muted/80 hover:text-foreground"
            asChild
          >
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              <FileText className="size-4 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>View Resume</span>
            </a>
          </Button>
        )}
      </div>

      {/* 5. TECH BADGES */}
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {heroTechBadges.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <CvUploadDialog />

      {previewOpen && !isCustom && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
          onClick={() => setPreviewOpen(false)}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

          <button
            type="button"
            onClick={() => setPreviewOpen(false)}
            aria-label="Close preview"
            className="absolute top-5 right-5 z-10 rounded-full border border-border/60 bg-background/80 p-2 text-foreground transition-colors hover:bg-muted"
          >
            <X className="size-5" />
          </button>

          <img
            src={profilePhoto}
            alt={profile.name}
            className="relative max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
