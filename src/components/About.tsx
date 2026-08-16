import { 
  Code2, 
  Database, 
  Globe2, 
  HeartHandshake, 
  LayoutTemplate, 
  MapPin, 
  Server, 
  Sparkles, 
  Wrench, 
  Camera 
} from "lucide-react"
import { useResume } from "@/context/ResumeContext"
import { Reveal } from "@/components/Reveal"
import { hobbies } from "@/data/resume"
import graduationPhoto from "@/assets/photos/profile-graduation.jpg"
import deskPhoto1 from "@/assets/photos/profile-desk-1.png"
import deskPhoto2 from "@/assets/photos/profile-desk-2.png"
import hobbyCinema from "@/assets/photos/hobby-cinema.jpg"
import hobbyVintageCar from "@/assets/photos/hobby-vintage-car.jpg"
import hobbyArch from "@/assets/photos/hobby-arch.jpg"
import hobbySantorini from "@/assets/photos/hobby-santorini.jpg"
import hobbyBalloons from "@/assets/photos/hobby-balloons.jpg"
import hobbyMountains from "@/assets/photos/hobby-mountains.jpg"

const galleryPhotos = [
  { src: hobbySantorini, alt: "Ryan Jay Reyes at Santorini-themed steps", span: "sm:col-span-2 sm:row-span-2" },
  { src: hobbyCinema, alt: "Ryan Jay Reyes at a cinema event", span: "col-span-1" },
  { src: hobbyVintageCar, alt: "Ryan Jay Reyes beside a vintage car", span: "col-span-1" },
  { src: hobbyArch, alt: "Ryan Jay Reyes at a scenic viewpoint", span: "col-span-1" },
  { src: hobbyBalloons, alt: "Ryan Jay Reyes at a celebration", span: "col-span-1" },
  { src: hobbyMountains, alt: "Ryan Jay Reyes with a mountain view", span: "col-span-1 sm:col-span-2" },
]

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
              <div className="rounded-2xl border border-border/60 bg-card/40 p-5 shadow-xs backdrop-blur-md transition-colors hover:border-primary/30">
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
            className="space-y-6 rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-7 shadow-sm backdrop-blur-md md:col-span-2 lg:col-span-1"
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

        {/* Beyond the code: Bento Gallery + Hobbies */}
        {!isCustom && (
          <div className="mt-20 border-t border-border/40 pt-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
              
              {/* Photo Showcase */}
              <Reveal direction="up" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight text-foreground">
                      <Camera className="size-5 text-primary" />
                      Beyond the Code
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Memorable moments and adventures outside of programming.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5">
                  {galleryPhotos.map((photo) => (
                    <div
                      key={photo.src}
                      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-muted/20 shadow-xs ${photo.span}`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-44 sm:h-full w-full min-h-[160px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Solid hover overlay for caption legibility */}
                      <div className="absolute inset-0 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
                        <p className="text-[11px] font-medium text-white/90 line-clamp-1">
                          {photo.alt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Hobbies & Interests Card */}
              <Reveal
                direction="up"
                className="space-y-5 rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-7 shadow-xs backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <HeartHandshake className="size-5 text-primary" />
                  <div>
                    <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
                      Hobbies & Interests
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Activities that keep me inspired and balanced.
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {hobbies.map((hobby) => (
                    <li
                      key={hobby.label}
                      className="group flex items-center gap-3.5 rounded-xl border border-transparent bg-background/30 p-3 text-sm text-muted-foreground transition-all duration-200 hover:border-border/60 hover:bg-card/70 hover:text-foreground"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-muted/40 text-lg shadow-2xs transition-transform duration-300 group-hover:scale-110">
                        {hobby.emoji}
                      </span>
                      <span className="font-medium text-xs sm:text-sm">{hobby.label}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

            </div>
          </div>
        )}
      </div>
    </section>
  )
}