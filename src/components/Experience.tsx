import { Briefcase, Calendar, CheckCircle2, Sparkles, Trophy } from "lucide-react"
import { useResume } from "@/context/ResumeContext"

export function Experience() {
  const { data } = useResume()
  const { experience } = data

  return (
    <section id="experience" className="relative overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs">
            <Briefcase className="size-3" />
            <span>Career Path</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Where I&apos;ve worked & contributed.
          </h2>
        </div>

        {experience.length === 0 ? (
          <p className="text-sm text-muted-foreground">No work experience listed.</p>
        ) : (
          /* Timeline Container */
          <div className="relative border-l-2 border-border/40 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
            
            {experience.map((job, index) => {
              const isPresent = job.duration?.toLowerCase().includes("present")

              return (
                <div key={job.title + index} className="group relative">
                  
                  {/* Timeline Node Icon / Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-6 flex size-8 sm:size-10 items-center justify-center rounded-xl border border-border/80 bg-background shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Briefcase className="size-3.5 sm:size-4 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>

                  {/* Experience Card */}
                  <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                    
                    {/* Top border accent on hover */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Header: Title, Company, Duration */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-1">
                        <h3 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                          {job.title}
                        </h3>
                        <p className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                          <span className="text-foreground/90">{job.company}</span>
                        </p>
                      </div>

                      {/* Duration & Status Badge */}
                      {job.duration && (
                        <div className="flex items-center gap-2 self-start sm:self-center">
                          {isPresent && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-500">
                              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Active
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-2xs backdrop-blur-xs">
                            <Calendar className="size-3 text-primary/70" />
                            {job.duration}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Badges */}
                    {job.stack.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-lg border border-border/70 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Split Details Section (Responsibilities vs Achievements) */}
                    {(job.responsibilities.length > 0 || job.achievements.length > 0) && (
                      <div className="mt-6 grid gap-6 border-t border-border/40 pt-6 md:grid-cols-2">

                        {/* Responsibilities Column */}
                        {job.responsibilities.length > 0 && (
                          <div className="space-y-3">
                            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              <Sparkles className="size-3 text-primary/80" />
                              <span>Responsibilities</span>
                            </p>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                              {job.responsibilities.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/40" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Key Achievements Column (Styled with highlight container) */}
                        {job.achievements.length > 0 && (
                          <div className="space-y-3 rounded-2xl border border-primary/15 bg-primary/[0.02] p-4 sm:p-5">
                            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                              <Trophy className="size-3.5" />
                              <span>Key Achievements & Impact</span>
                            </p>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90">
                              {job.achievements.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </div>
                    )}

                  </div>
                </div>
              )
            })}

          </div>
        )}
      </div>
    </section>
  )
}