import { useResume } from "@/context/ResumeContext"

export function PreviewBanner() {
  const { isCustom, data, resetToDefault } = useResume()

  if (!isCustom) return null

  return (
    <div className="relative border-b border-primary/20 bg-primary/10 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 py-2 text-sm">
        <span className="text-foreground">
          Previewing a generated portfolio for <strong>{data.profile.name}</strong>
        </span>
        <button
          type="button"
          onClick={resetToDefault}
          className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Reset to default
        </button>
      </div>
    </div>
  )
}
