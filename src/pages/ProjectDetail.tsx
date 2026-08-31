import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Layers,
  Lightbulb,
  ListChecks,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/resume"

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [slug])

  if (!project) {
    return <Navigate to="/#projects" replace />
  }

  return (
    <main className="relative z-10 mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Link
        to="/#projects"
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      {/* Header */}
      <div className="mt-6 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.category && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Layers className="size-3" />
              {project.category}
            </span>
          )}
          {project.role && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <UserRound className="size-3 text-primary/70" />
              {project.role}
            </span>
          )}
          {project.duration && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Calendar className="size-3 text-primary/70" />
              {project.duration}
            </span>
          )}
        </div>

        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {project.name}
        </h1>

        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.url && (
            <Button className="group rounded-full" asChild>
              <a href={project.url} target="_blank" rel="noreferrer">
                <span>Live Demo</span>
                <ArrowUpRight className="size-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          )}
          {project.client && (
            <span className="text-xs font-medium text-muted-foreground">
              Client: <span className="text-foreground">{project.client}</span>
            </span>
          )}
        </div>
      </div>

      {/* Tech stack */}
      <div className="mt-8 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-lg border border-border/70 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground shadow-2xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Overview grid: Problem / Solution */}
      {(project.problem || project.solution) && (
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {project.problem && (
            <div className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-xs backdrop-blur-md">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <Target className="size-4 text-primary" />
                <span>The Problem</span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-xs backdrop-blur-md">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <Lightbulb className="size-4 text-primary" />
                <span>The Solution</span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">{project.solution}</p>
            </div>
          )}
        </div>
      )}

      {/* Key features */}
      {project.features && project.features.length > 0 && (
        <div className="mt-8 rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-7 shadow-xs backdrop-blur-md">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <ListChecks className="size-4 text-primary" />
            <span>Key Features</span>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Challenges & Technical decisions */}
      {(project.challenges?.length || project.decisions?.length) && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {project.challenges && project.challenges.length > 0 && (
            <div className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-xs backdrop-blur-md">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Challenges
              </p>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {project.challenges.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.decisions && project.decisions.length > 0 && (
            <div className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-xs backdrop-blur-md">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Technical Decisions
              </p>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {project.decisions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Outcome */}
      {project.outcome && (
        <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/[0.03] p-6 sm:p-7">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="size-4" />
            <span>Outcome</span>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90">{project.outcome}</p>
        </div>
      )}

      <div className="mt-12 flex justify-center border-t border-border/40 pt-8">
        <Link
          to="/#projects"
          className="group inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-xs font-semibold text-muted-foreground backdrop-blur-md transition-all duration-200 hover:border-primary/40 hover:bg-card hover:text-foreground"
        >
          <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
          View all projects
        </Link>
      </div>
    </main>
  )
}
