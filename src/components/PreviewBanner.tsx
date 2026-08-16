import { useResume } from "@/context/ResumeContext"
import { Sparkles, RotateCcw } from "lucide-react"

export function PreviewBanner() {
  const { isCustom, data, resetToDefault } = useResume()

  if (!isCustom) return null

  return (
    <div className="relative z-50 border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-2">
        
        {/* Left Side: Live Preview Indicator + Name */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm">
          {/* Pulsing Live Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-medium text-primary shadow-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <Sparkles className="size-3" />
            Preview Mode
          </span>

          <p className="text-muted-foreground">
            Viewing generated portfolio for{" "}
            <strong className="font-semibold text-foreground tracking-tight">
              {data?.profile?.name || "Candidate"}
            </strong>
          </p>
        </div>

        {/* Right Side: Interactive Reset Action */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={resetToDefault}
            className="group inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary active:scale-95"
          >
            <RotateCcw className="size-3 transition-transform duration-300 group-hover:-rotate-45" />
            <span>Reset to default</span>
          </button>
        </div>

      </div>
    </div>
  )
}