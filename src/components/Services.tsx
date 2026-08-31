import {
  Building2,
  Database,
  LayoutTemplate,
  Layers,
  Rocket,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react"
import { services } from "@/data/resume"

const iconMap = {
  Layers,
  Building2,
  LayoutTemplate,
  Server,
  Database,
  Wrench,
  Rocket,
} as const

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="size-3" />
            <span>Services</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How I can help your team or business.
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            From a single feature to a full production system, here&apos;s what I typically build for clients and
            employers.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Layers
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="flex size-11 items-center justify-center rounded-2xl border border-border/70 bg-background/80 text-primary shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>

                <h3 className="mt-4 font-heading text-base font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
