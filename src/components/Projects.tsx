import { useMemo, useState } from "react"
import { 
  ArrowUpRight,  
  Filter, 
  FolderGit2, 
  Layers, 
  UserRound,
  RotateCcw
} from "lucide-react"
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
    <section id="projects" className="relative overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Stats */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs">
              <FolderGit2 className="size-3" />
              <span>Featured Work</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Projects & Crafted Systems
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Production-ready applications, client projects, and tools engineered for performance and impact.
            </p>
          </div>

          {/* Active Filter Pill Counter */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-2xs backdrop-blur-md">
            <Filter className="size-3.5 text-primary" />
            <span>
              Showing <strong className="text-foreground">{visibleProjects.length}</strong> of {projects.length}
            </span>
          </div>
        </div>

        {/* Filter Navigation Chips */}
        <div className="no-scrollbar mb-10 flex gap-2 overflow-x-auto pb-2 pt-1 select-none">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300 active:scale-95 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "border-border/60 bg-card/40 text-muted-foreground hover:border-primary/40 hover:bg-card hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Empty Filter State */}
        {visibleProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border/80 p-12 text-center">
            <p className="text-sm text-muted-foreground">No projects found matching &ldquo;{activeFilter}&rdquo;.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveFilter("All")}
              className="mt-4 rounded-full gap-2"
            >
              <RotateCcw className="size-3.5" />
              Reset filter
            </Button>
          </div>
        )}

        {/* Projects Grid */}
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
                className="group relative flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-7 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Top Border Accent on Hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Card Content Top */}
                <div className="space-y-4">
                  {/* Category Pill & Role */}
                  <div className="flex items-center justify-between gap-2">
                    {category ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                        <Layers className="size-3" />
                        {category}
                      </span>
                    ) : (
                      <span />
                    )}

                    {role && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                        <UserRound className="size-3 text-primary/70" />
                        {role}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {highlights.length > 0 && (
                    <ul className="space-y-2 border-t border-border/40 pt-4 text-xs sm:text-sm text-muted-foreground">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 leading-relaxed">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card Footer: Tech Stack & CTA */}
                <div className="mt-6 space-y-5 border-t border-border/40 pt-4">
                  {/* Clickable Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => setActiveFilter(tech)}
                        className={`inline-flex items-center rounded-lg border px-2 py-0.5 text-[11px] font-medium transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary ${
                          activeFilter === tech
                            ? "border-primary/60 bg-primary/10 text-primary font-semibold"
                            : "border-border/60 bg-background/80 text-muted-foreground"
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>

                  {/* Live Link Button */}
                  {project.url && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn w-full rounded-xl border-border/70 bg-background/60 font-semibold backdrop-blur-xs transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noreferrer">
                        <span>Visit site</span>
                        <ArrowUpRight className="size-4 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>
                  )}
                </div>

              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}