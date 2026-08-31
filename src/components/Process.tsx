import { Workflow } from "lucide-react"
import { processSteps } from "@/data/resume"

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs">
            <Workflow className="size-3" />
            <span>How I Work</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A clear process from idea to production.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="font-heading text-2xl font-black tracking-tight text-primary/30 transition-colors duration-300 group-hover:text-primary/60">
                {step.number}
              </p>
              <h3 className="mt-2 font-heading text-sm font-bold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
