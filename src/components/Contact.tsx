import { ExternalLink, Mail, Phone } from "lucide-react"
import { useResume } from "@/context/ResumeContext"

export function Contact() {
  const { data } = useResume()
  const { profile } = data

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-background to-muted/20">
      {/* Soft radial background glow to anchor the bottom of your page */}
      <div className="animate-aurora-2 absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 space-y-3 text-center">
          <p className="text-xs font-semibold tracking-wider text-primary uppercase">Contact</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-sm sm:text-base leading-relaxed">
            Feel free to reach out for opportunities, collaborations, or just to say hello.
          </p>
        </div>

        {/* Tactical, high-contrast contact grid */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          
          {/* Email Connection Card */}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-border/50 bg-background/50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-background hover:shadow-md backdrop-blur-xs"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Mail className="size-5" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Email Me</p>
                <p className="text-sm font-medium text-foreground break-all">{profile.email}</p>
              </div>
            </a>
          )}

          {/* Phone Connection Card */}
          {profile.phone && (
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-border/50 bg-background/50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-background hover:shadow-md backdrop-blur-xs"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Phone className="size-5" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Call Me</p>
                <p className="text-sm font-medium text-foreground">{profile.phone}</p>
              </div>
            </a>
          )}

          {/* LinkedIn Connection Card */}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-border/50 bg-background/50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-background hover:shadow-md backdrop-blur-xs"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <ExternalLink className="size-5" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Connect</p>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
              </div>
            </a>
          )}

        </div>

        {/* Clean, minimalist footnote link for Facebook */}
        {profile.facebook && (
          <div className="mt-12 flex justify-center border-t border-border/40 pt-8">
            <a
              href={profile.facebook}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-primary/30 hover:bg-background hover:text-foreground shadow-2xs"
            >
              <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span>Follow on Facebook</span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}