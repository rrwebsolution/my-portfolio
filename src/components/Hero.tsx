import { ArrowRight, Code2, Download, FolderGit2, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CvUploadDialog } from "@/components/CvUploadDialog"
import { useResume } from "@/context/ResumeContext"
import { heroBio, portfolioStats } from "@/data/resume"
import profilePhoto from "@/assets/photos/profile-formal.jpg"

export function Hero() {
  const { data, isCustom } = useResume()
  const { profile } = data

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col items-center gap-9 overflow-hidden rounded-[2rem] border border-border/70 bg-card/75 px-5 py-14 text-center shadow-xl shadow-black/5 backdrop-blur-xl sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-primary" />
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
            <img
              src={profilePhoto}
              alt={profile.name}
              className="size-32 sm:size-36 rounded-full object-cover object-top ring-2 ring-background shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
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

            {/* Structured Glass Card for Skills & Highlights */}
            <div className="rounded-2xl border border-border/80 bg-background/85 p-5 text-left shadow-sm sm:p-7 space-y-5">
              
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
          <a href="#contact">
            <Mail className="size-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
            <span>Contact Me</span>
            <ArrowRight className="size-4 ml-1.5 opacity-70 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="group w-full sm:w-auto rounded-full border-border/80 bg-background/50 px-7 backdrop-blur-xs transition-all duration-300 hover:border-primary/40 hover:bg-muted/80 hover:-translate-y-0.5 active:translate-y-0"
          asChild
        >
          <a href="#experience">
            <Download className="size-4 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>View Experience</span>
          </a>
        </Button>
      </div>

      <CvUploadDialog />
    </section>
  )
}
