import { Briefcase, CheckCircle2 } from "lucide-react"
import { useResume } from "@/context/ResumeContext"

export function Experience() {
  const { data } = useResume()
  const { experience } = data

  return (
    <section id="experience" className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-background to-muted/20">
      {/* Soft background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 space-y-2">
          <p className="text-xs font-semibold tracking-wider text-primary uppercase">Experience</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Where I&apos;ve worked</h2>
        </div>

        {experience.length === 0 && (
          <p className="text-sm text-muted-foreground">No work experience listed.</p>
        )}

        <div className="space-y-6">
          {experience.map((job) => (
            <div
              key={job.title}
              className="group relative rounded-2xl border border-border/40 bg-card p-6 shadow-2xs sm:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xs"
            >
              {/* Card Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Briefcase className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                      {job.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                
                {/* Duration Capsule Badge */}
                {job.duration && (
                  <span className="inline-flex items-center self-start sm:self-center rounded-full bg-secondary/80 px-3.5 py-1 text-xs font-semibold text-secondary-foreground shadow-2xs">
                    {job.duration}
                  </span>
                )}
              </div>

              {/* Tech Stack Badges (Perfectly aligned with text starting point) */}
              {job.stack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5 pl-0 sm:pl-13">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/60 bg-background px-2.5 py-1 text-xs font-medium text-foreground shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Split Details Section (Responsibilities vs Achievements) */}
              {(job.responsibilities.length > 0 || job.achievements.length > 0) && (
                <div className="mt-6 grid gap-6 pl-0 sm:pl-13 md:grid-cols-2 border-t border-border/30 pt-6">

                  {/* Responsibilities Column */}
                  {job.responsibilities.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Responsibilities
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {job.responsibilities.map((item) => (
                          <li key={item} className="flex gap-2.5 leading-relaxed">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/30" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements Column */}
                  {job.achievements.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Key Achievements
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {job.achievements.map((item) => (
                          <li key={item} className="flex gap-2.5 leading-relaxed">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}