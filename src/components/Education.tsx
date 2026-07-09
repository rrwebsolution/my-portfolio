import { Award, GraduationCap } from "lucide-react"
import { useResume } from "@/context/ResumeContext"

export function Education() {
  const { data } = useResume()
  const { certifications, education } = data

  return (
    <section id="education" className="relative overflow-hidden border-t border-border/60 bg-transparent">
      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Left Column: Education */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                Education
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                Academic background
              </h2>
            </div>

            {education.length === 0 && (
              <p className="text-sm text-muted-foreground">No education listed.</p>
            )}

            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="group relative flex gap-4 rounded-2xl border border-border/40 bg-background/50 p-5 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-background hover:shadow-xs"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <GraduationCap className="size-5" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                      {item.school}
                    </h3>
                    {item.detail && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.detail}
                      </p>
                    )}
                    {item.achievement && (
                      <div className="pt-1">
                        <span className="inline-flex items-center rounded-md bg-primary/5 border border-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {item.achievement}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                Certifications
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                Training & credentials
              </h2>
            </div>

            {certifications.length === 0 && (
              <p className="text-sm text-muted-foreground">No certifications listed.</p>
            )}

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="group relative flex gap-4 rounded-2xl border border-border/40 bg-background/50 p-5 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-background hover:shadow-xs"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Award className="size-5" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                      {cert.title}
                    </h3>
                    {cert.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                    {cert.date && (
                      <div className="pt-1">
                        <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          Issued {cert.date}
                        </span>
                      </div>
                    )}
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