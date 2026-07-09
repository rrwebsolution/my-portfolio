import { useResume } from "@/context/ResumeContext"

export function Footer() {
  const { data } = useResume()
  const { profile } = data

  return (
    <footer className="border-t border-border/40 bg-muted/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:gap-2">
        
        {/* Copyright with interactive name emphasis */}
        <p className="font-medium tracking-tight text-center sm:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground hover:text-primary transition-colors duration-200 cursor-default">
            {profile.name}
          </span>
          . All rights reserved.
        </p>

        {/* Status Indicator & Technology highlights */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          
          {/* Subtle "Available for work" pulse badge */}
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for work</span>
          </div>

          <p className="font-medium tracking-tight">
            Built with{" "}
            <span className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 cursor-default">
              React
            </span>{" "}
            &{" "}
            <span className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 cursor-default">
              Tailwind CSS
            </span>
          </p>
        </div>

      </div>
    </footer>
  )
}