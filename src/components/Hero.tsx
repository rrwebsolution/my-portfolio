import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CvUploadDialog } from "@/components/CvUploadDialog"
import { useResume } from "@/context/ResumeContext"
import profilePhoto from "@/assets/photos/profile-formal.jpg"

export function Hero() {
  const { data, isCustom } = useResume()
  const { profile } = data

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <section id="top" className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 pt-24 pb-28 text-center">
      {/* Profile Photo with an ambient glowing backdrop */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-primary-foreground opacity-20 blur-lg transition duration-500 group-hover:opacity-35" />
        {isCustom ? (
          <div className="relative flex size-36 items-center justify-center rounded-full bg-muted text-3xl font-bold text-foreground ring-4 ring-background shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
            {initials}
          </div>
        ) : (
          <img
            src={profilePhoto}
            alt={profile.name}
            className="relative size-36 rounded-full object-cover object-top ring-4 ring-background shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>

      {/* Main Typography Blocks */}
      <div className="space-y-4 max-w-3xl">
        {/* Modern styled pill-badge for Title */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1 text-xs font-semibold tracking-wider text-primary uppercase shadow-2xs">
          {profile.title}
        </div>
        
        {/* Dynamic Name Header */}
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-foreground sm:text-6xl leading-tight">
          {profile.name}
        </h1>
        
        {/* Profile Summary */}
        <p className="mx-auto max-w-2xl text-balance text-muted-foreground text-base sm:text-lg sm:leading-relaxed">
          {profile.summary}
        </p>
      </div>

      {/* Call to Actions with tactile micro-interactions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
        <Button 
          size="lg" 
          className="w-full sm:w-auto rounded-full shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0" 
          asChild
        >
          <a href="#contact">
            <Mail className="size-4 mr-2" />
            Contact Me
          </a>
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="w-full sm:w-auto rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:bg-muted" 
          asChild
        >
          <a href="#experience">
            <Download className="size-4 mr-2" />
            View Experience
          </a>
        </Button>
      </div>

      <CvUploadDialog />
    </section>
  )
}