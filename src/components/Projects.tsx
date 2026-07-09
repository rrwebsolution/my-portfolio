import { useMemo, useState } from "react"
import { ExternalLink, Filter, Layers, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useResume } from "@/context/ResumeContext"

export function Projects() {
  const { data } = useResume()
  const { projects } = data
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = useMemo(() => {
    const isString = (value: string | null): value is string => Boolean(value)
    const projectFilters = projects.flatMap((project) => [
      "category" in project && typeof project.category === "string" ? project.category : null,
      ...project.stack,
    ])

    return ["All", ...Array.from(new Set(projectFilters.filter(isString)))]
  }, [projects])

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects

    return projects.filter((project) => {
      const category =
        "category" in project && typeof project.category === "string" ? project.category : ""

      return category === activeFilter || project.stack.includes(activeFilter)
    })
  }, [activeFilter, projects])

  if (projects.length === 0) return null

  return (
    <section id="projects" className="relative overflow-hidden border-t border-border/60 bg-transparent">
      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">Projects</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Client work</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A quick look at systems I have shipped, the stack behind them, and the problems they help solve.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/50 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-2xs backdrop-blur-xs">
            <Filter className="size-3.5 text-primary" />
            {visibleProjects.length} of {projects.length} shown
          </div>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border/60 bg-background/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => {
            const category =
              "category" in project && typeof project.category === "string" ? project.category : null
            const role = "role" in project && typeof project.role === "string" ? project.role : null
            const highlights =
              "highlights" in project && Array.isArray(project.highlights) ? project.highlights : []

            return (
              <article
                key={project.name}
                className="group relative flex min-h-[26rem] flex-col justify-between rounded-2xl border border-border/40 bg-card p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xs"
              >
                <div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      {category && (
                        <p className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary">
                          <Layers className="size-3" />
                          {category}
                        </p>
                      )}
                      <h3 className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {role && (
                    <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <UserRound className="size-3.5 text-primary" />
                      {role}
                    </p>
                  )}

                  {highlights.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2 leading-relaxed">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => setActiveFilter(tech)}
                        className="rounded-lg border border-border/60 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                      >
                        {tech}
                      </button>
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
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
