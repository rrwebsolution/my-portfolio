import { ArrowUpRight, ExternalLink, Mail, MessageSquare, Phone, Sparkles } from "lucide-react"
import { useResume } from "@/context/ResumeContext"

export function Contact() {
  const { data } = useResume()
  const { profile } = data

  const hasContacts = Boolean(profile.email || profile.phone || profile.linkedin)

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="size-3" />
            <span>Get in Touch</span>
          </div>

          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s build something great together.
          </h2>

          <p className="mx-auto text-balance text-sm sm:text-base leading-relaxed text-muted-foreground">
            Whether you have an upcoming project, a full-time opportunity, or just want to connect, my inbox is always open.
          </p>
        </div>

        {/* Tactical Contact Grid */}
        {hasContacts && (
          <div className="mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* 1. EMAIL CARD */}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Top Border Accent on Hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-border/70 bg-background/80 text-primary shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Mail className="size-5" />
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Email Address
                    </p>
                    <p className="mt-1 text-sm font-bold text-foreground break-all transition-colors duration-200 group-hover:text-primary">
                      {profile.email}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-primary">
                  <span>Send a message</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </a>
            )}

            {/* 2. PHONE CARD */}
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Top Border Accent */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-border/70 bg-background/80 text-primary shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Phone className="size-5" />
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Direct Line
                    </p>
                    <p className="mt-1 text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                      {profile.phone}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-primary">
                  <span>Give me a call</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </a>
            )}

            {/* 3. LINKEDIN CARD */}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:col-span-2 lg:col-span-1"
              >
                {/* Top Border Accent */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-border/70 bg-background/80 text-primary shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <MessageSquare className="size-5" />
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Professional Network
                    </p>
                    <p className="mt-1 text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                      LinkedIn Profile
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-primary">
                  <span>Let&apos;s connect</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </a>
            )}

          </div>
        )}

        {/* Minimalist Social Footnote Link */}
        {profile.facebook && (
          <div className="mt-14 flex justify-center border-t border-border/40 pt-8">
            <a
              href={profile.facebook}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-xs font-semibold text-muted-foreground backdrop-blur-md transition-all duration-200 hover:border-primary/40 hover:bg-card hover:text-foreground hover:shadow-xs active:scale-95"
            >
              <ExternalLink className="size-3.5 text-primary/70 transition-transform duration-200 group-hover:scale-110" />
              <span>Connect on Facebook</span>
            </a>
          </div>
        )}

      </div>
    </section>
  )
}