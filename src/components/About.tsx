import { Globe2, MapPin } from "lucide-react"
import { useResume } from "@/context/ResumeContext"
import graduationPhoto from "@/assets/photos/profile-graduation.jpg"
import deskPhoto1 from "@/assets/photos/profile-desk-1.png"
import deskPhoto2 from "@/assets/photos/profile-desk-2.png"

export function About() {
  const { data, isCustom } = useResume()
  const { profile, personalDetails, skills } = data

  return (
    <section id="about" className="relative overflow-hidden border-t border-border/60 bg-transparent">
      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 space-y-2">
          <p className="text-xs font-semibold tracking-wider text-primary uppercase">About</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Who I am</h2>
        </div>

        <div
          className={`grid gap-12 grid-cols-1 ${
            isCustom ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-[260px_1fr_1fr]"
          }`}
        >
          {/* Col 1: Photo Stack */}
          {!isCustom && (
            <div className="relative mx-auto h-80 w-full max-w-[260px] lg:mx-0">
              <img
                src={deskPhoto1}
                alt="Ryan Jay Reyes coding at his desk"
                className="absolute top-0 left-2 h-56 w-44 -rotate-6 rounded-2xl border-4 border-background object-cover shadow-md transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-xl hover:z-20 cursor-pointer"
              />
              <img
                src={graduationPhoto}
                alt="Ryan Jay Reyes graduation photo"
                className="absolute top-6 right-0 h-44 w-36 rotate-3 rounded-2xl border-4 border-background object-cover shadow-md transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-xl hover:z-20 cursor-pointer"
              />
              <img
                src={deskPhoto2}
                alt="Ryan Jay Reyes working at his desk"
                className="absolute bottom-0 left-10 h-56 w-44 rotate-2 rounded-2xl border-4 border-background object-cover shadow-lg transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-xl hover:z-30 cursor-pointer"
              />
            </div>
          )}

          {/* Col 2: Profile Summary */}
          <div className="space-y-6 md:col-span-1">
            <p className="text-muted-foreground leading-relaxed">{profile.summary}</p>

            {(() => {
              const details = [
                { label: "Date of birth", value: personalDetails.dateOfBirth },
                { label: "Place of birth", value: personalDetails.placeOfBirth },
                { label: "Marital status", value: personalDetails.maritalStatus },
                { label: "Nationality", value: personalDetails.nationality },
              ].filter((d) => d.value)

              if (details.length === 0) return null

              return (
                <div className="rounded-2xl border border-border/40 bg-background/50 p-5 shadow-xs backdrop-blur-xs">
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                    {details.map((d) => (
                      <div key={d.label} className="space-y-1">
                        <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {d.label}
                        </dt>
                        <dd className="font-medium text-foreground">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )
            })()}

            {(profile.location || profile.languages.length > 0) && (
              <div className="flex flex-wrap gap-3 pt-1 text-sm text-muted-foreground">
                {profile.location && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-3.5 py-1 shadow-2xs">
                    <MapPin className="size-3.5 text-primary" />
                    {profile.location}
                  </span>
                )}
                {profile.languages.length > 0 && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-3.5 py-1 shadow-2xs">
                    <Globe2 className="size-3.5 text-primary" />
                    {profile.languages.join(", ")}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Col 3: Skills */}
          <div 
            id="skills" 
            className="space-y-6 rounded-2xl border border-border/40 bg-background/40 p-6 shadow-xs backdrop-blur-xs md:col-span-2 lg:col-span-1"
          >
            <div>
              <h3 className="font-heading text-lg font-bold tracking-tight">Skills & Tech Stack</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Core tools and libraries I work with.</p>
            </div>
            
            <div className="space-y-5">
              {skills.map((group) => (
                <div key={group.category || group.items.join(",")} className="space-y-2">
                  {group.category && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {group.category}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-border/60 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}