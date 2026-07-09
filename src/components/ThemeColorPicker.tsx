import { useEffect, useState } from "react"

const THEMES = [
  { key: "orange", label: "Orange", swatch: "oklch(0.555 0.163 48.998)" },
  { key: "blue", label: "Blue", swatch: "oklch(0.546 0.215 262.881)" },
  { key: "emerald", label: "Emerald", swatch: "oklch(0.596 0.145 163.225)" },
  { key: "violet", label: "Violet", swatch: "oklch(0.541 0.216 293.756)" },
  { key: "rose", label: "Rose", swatch: "oklch(0.586 0.216 17.917)" },
  { key: "black", label: "Black", swatch: "oklch(0.19 0 0)" },
] as const

type ThemeKey = (typeof THEMES)[number]["key"]

const STORAGE_KEY = "accent-theme"

function applyTheme(theme: ThemeKey) {
  if (theme === "orange") {
    delete document.documentElement.dataset.accent
  } else {
    document.documentElement.dataset.accent = theme
  }
}

export function ThemeColorPicker() {
  const [active, setActive] = useState<ThemeKey>("orange")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const initial = THEMES.find((t) => t.key === stored)?.key ?? "orange"
    setActive(initial)
    applyTheme(initial)
  }, [])

  const handleSelect = (theme: ThemeKey) => {
    setActive(theme)
    applyTheme(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }

  return (
    <div role="radiogroup" aria-label="Theme color" className="flex items-center gap-1.5">
      {THEMES.map((theme) => (
        <button
          key={theme.key}
          type="button"
          role="radio"
          aria-checked={active === theme.key}
          aria-label={theme.label}
          onClick={() => handleSelect(theme.key)}
          className={`size-4 shrink-0 rounded-full ring-offset-2 ring-offset-background transition-transform hover:scale-110 ${
            active === theme.key ? "scale-110 ring-2 ring-foreground/50" : "ring-1 ring-border"
          }`}
          style={{ backgroundColor: theme.swatch }}
        />
      ))}
    </div>
  )
}
