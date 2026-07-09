import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useResume } from "@/context/ResumeContext"

export function Projects() {
  const { data } = useResume()
  const { projects } = data

  if (projects.length === 0) return null

  return (
    <section id="projects" className="relative overflow-hidden border-t border-border/60 bg-transparent">
      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 space-y-2">
          <p className="text-xs font-semibold tracking-wider text-primary uppercase">Projects</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Client work</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/40 bg-card p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xs"
            >
              <div>
                <h3 className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                  {project.name}
                </h3>
                
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/60 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.url && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6 w-full rounded-xl transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                  asChild
                >
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-4 mr-2" />
                    Visit site
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}