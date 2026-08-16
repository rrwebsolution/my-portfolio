import { Award, Calendar, CheckCircle2, GraduationCap, Sparkles } from "lucide-react"
import { useResume } from "@/context/ResumeContext"

export function Education() {
  const { data } = useResume()
  const { certifications, education } = data

  return (
    <section id="education" className="relative overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Main Header */}
        <div className="mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs">
            <GraduationCap className="size-3" />
            <span>Credentials</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Education & Certifications
          </h2>
        </div>

        <div className="grid gap-8 lg:gap-12 md:grid-cols-2 items-start">
          
          {/* ================= LEFT COLUMN: EDUCATION ================= */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-border/40 pb-3">
              <GraduationCap className="size-5 text-primary" />
              <div>
                <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
                  Academic Background
                </h3>
                <p className="text-xs text-muted-foreground">Formal degrees and foundational learning.</p>
              </div>
            </div>

            {education.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border/70 p-6 text-center text-xs text-muted-foreground">
                No formal education listed.
              </div>
            ) : (
              <div className="space-y-4">
                {education.map((item) => (
                  <div
                    key={item.school}
                    className="group relative flex gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {/* Top border accent on hover */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* School Icon */}
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-primary shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <GraduationCap className="size-5" />
                    </span>

                    {/* Content */}
                    <div className="space-y-2">
                      <h4 className="font-heading text-base font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                        {item.school}
                      </h4>

                      {item.detail && (
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {item.detail}
                        </p>
                      )}

                      {/* Achievement Highlight */}
                      {item.achievement && (
                        <div className="pt-1">
                          <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                            <Sparkles className="size-3" />
                            {item.achievement}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ================= RIGHT COLUMN: CERTIFICATIONS ================= */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-border/40 pb-3">
              <Award className="size-5 text-primary" />
              <div>
                <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
                  Training & Credentials
                </h3>
                <p className="text-xs text-muted-foreground">Certified skills and verified specializations.</p>
              </div>
            </div>

            {certifications.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border/70 p-6 text-center text-xs text-muted-foreground">
                No certifications listed.
              </div>
            ) : (
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="group relative flex gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {/* Top border accent on hover */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Certification Icon */}
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-primary shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Award className="size-5" />
                    </span>

                    {/* Content */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-heading text-base font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                          {cert.title}
                        </h4>

                        {/* Issue Date Badge */}
                        {cert.date && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/80 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                            <Calendar className="size-2.5 text-primary/70" />
                            {cert.date}
                          </span>
                        )}
                      </div>

                      {cert.description && (
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      )}

                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-500 pt-0.5">
                        <CheckCircle2 className="size-3" />
                        <span>Verified Credential</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}