import { useEffect, useState } from "react"
import { Monitor, Moon, Sun } from "lucide-react"

type Mode = "light" | "dark" | "system"

const STORAGE_KEY = "portfolio-theme"

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function applyMode(mode: Mode) {
  const isDark = mode === "dark" || (mode === "system" && systemPrefersDark())
  document.documentElement.classList.toggle("dark", isDark)
}

const OPTIONS: { key: Mode; label: string; icon: typeof Sun }[] = [
  { key: "light", label: "Light theme", icon: Sun },
  { key: "system", label: "System theme", icon: Monitor },
  { key: "dark", label: "Dark theme", icon: Moon },
]

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Mode | null
    const initial: Mode = stored === "light" || stored === "dark" || stored === "system" ? stored : "system"
    setMode(initial)
    applyMode(initial)

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if ((localStorage.getItem(STORAGE_KEY) as Mode | null) === "system" || !localStorage.getItem(STORAGE_KEY)) {
        applyMode("system")
      }
    }
    media.addEventListener("change", handleChange)
    return () => media.removeEventListener("change", handleChange)
  }, [])

  const handleSelect = (next: Mode) => {
    setMode(next)
    applyMode(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className="inline-flex items-center gap-0.5 rounded-full border border-border/70 bg-card/50 p-0.5 shadow-2xs"
    >
      {OPTIONS.map((option) => {
        const Icon = option.icon
        const isActive = mode === option.key
        return (
          <button
            key={option.key}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={option.label}
            title={option.label}
            onClick={() => handleSelect(option.key)}
            className={`flex size-7 items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Icon className="size-3.5" />
          </button>
        )
      })}
    </div>
  )
}
