import {
  Code2,
  Database,
  Globe2,
  LayoutTemplate,
  MapPin,
  Server,
  Sparkles,
  Wrench
} from "lucide-react"
import { useResume } from "@/context/ResumeContext"
import graduationPhoto from "@/assets/photos/profile-graduation.jpg"
import deskPhoto1 from "@/assets/photos/profile-desk-1.png"
import deskPhoto2 from "@/assets/photos/profile-desk-2.png"

const categoryIcons: Record<string, typeof Code2> = {
  "Languages": Code2,
  "Backend & APIs": Server,
  "Frontend": LayoutTemplate,
  "Databases": Database,
  "Tools & Practices": Wrench,
}

export function About() {
  const { data, isCustom } = useResume()
  const { profile, personalDetails, skills } = data

  const detailsList = [
    { label: "Date of birth", value: personalDetails.dateOfBirth },
    { label: "Place of birth", value: personalDetails.placeOfBirth },
    { label: "Marital status", value: personalDetails.maritalStatus },
    { label: "Nationality", value: personalDetails.nationality },
  ].filter((d) => d.value)

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="size-3" />
            <span>About Me</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Passionate about crafting impactful digital experiences.
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div
          className={`grid gap-8 items-start grid-cols-1 ${
            isCustom ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-[280px_1fr_1.15fr]"
          }`}
        >
          {/* Col 1: Interactive Stacked Photo Cards */}
          {!isCustom && (
            <div className="relative mx-auto h-[360px] w-full lg:mx-0 select-none">
              {/* Back Glow */}
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-2xl" />

              {/* Photo 1 (Top Left, Tilted Left) */}
              <div className="group/p1 absolute top-2 left-2 h-56 w-44 -rotate-6 rounded-2xl border-2 border-background/80 bg-background/50 p-1.5 shadow-xl backdrop-blur-xs transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-2xl">
                <img
                  src={deskPhoto1}
                  alt="Ryan Jay Reyes coding at his desk"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>

              {/* Photo 2 (Top Right, Tilted Right) */}
              <div className="group/p2 absolute top-8 right-2 h-48 w-36 rotate-6 rounded-2xl border-2 border-background/80 bg-background/50 p-1.5 shadow-xl backdrop-blur-xs transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-2xl">
                <img
                  src={graduationPhoto}
                  alt="Ryan Jay Reyes graduation photo"
                  className="h-full w-full rounded-xl object-cover object-top"
                />
              </div>

              {/* Photo 3 (Bottom Centered, Slightly Tilted) */}
              <div className="group/p3 absolute bottom-2 left-10 h-56 w-44 rotate-2 rounded-2xl border-2 border-background/80 bg-background/50 p-1.5 shadow-2xl backdrop-blur-xs transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
                <img
                  src={deskPhoto2}
                  alt="Ryan Jay Reyes working at his desk"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          )}

          {/* Col 2: Profile Summary & Key Info */}
          <div className="space-y-6 md:col-span-1">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>

            {/* Structured Details Card */}
            {detailsList.length > 0 && (
              <div className="rounded-2xl border border-border/60 p-5 shadow-xs transition-colors hover:border-primary/30">
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  {detailsList.map((d) => (
                    <div key={d.label} className="space-y-1">
                      <dt className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                        {d.label}
                      </dt>
                      <dd className="font-semibold text-foreground text-sm">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Quick Badges: Location & Languages */}
            {(profile.location || profile.languages.length > 0) && (
              <div className="flex flex-wrap gap-2.5 pt-1">
                {profile.location && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-2xs backdrop-blur-xs">
                    <MapPin className="size-3.5 text-primary" />
                    <span>{profile.location}</span>
                  </span>
                )}
                {profile.languages.length > 0 && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-2xs backdrop-blur-xs">
                    <Globe2 className="size-3.5 text-primary" />
                    <span>{profile.languages.join(", ")}</span>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Col 3: Skills & Tech Stack Box */}
          <div
            id="skills"
            className="space-y-6 rounded-3xl border border-border/60 p-6 sm:p-7 shadow-sm md:col-span-2 lg:col-span-1"
          >
            <div>
              <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
                Skills & Tech Stack
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Core technologies, libraries, and frameworks.
              </p>
            </div>

            <div className="space-y-5">
              {skills.map((group) => {
                const Icon = group.category ? categoryIcons[group.category] : undefined

                return (
                  <div key={group.category || group.items.join(",")} className="space-y-2.5">
                    {group.category && (
                      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {Icon && <Icon className="size-3.5 text-primary" />}
                        <span>{group.category}</span>
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-lg border border-border/70 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}