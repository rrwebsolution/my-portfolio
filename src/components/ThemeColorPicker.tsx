import { useEffect, useId, useState } from "react"
import { Palette } from "lucide-react"
import { contrastForeground, isValidHex } from "@/lib/color"

const PRESETS = [
  { key: "indigo", label: "Indigo", hex: "#4f46e5" },
  { key: "blue", label: "Blue", hex: "#2563eb" },
  { key: "violet", label: "Violet", hex: "#8b5cf6" },
  { key: "emerald", label: "Emerald", hex: "#10b981" },
  { key: "rose", label: "Rose", hex: "#f43f5e" },
  { key: "amber", label: "Amber", hex: "#f59e0b" },
] as const

const STORAGE_KEY = "portfolio-accent-color"

function applyAccent(hex: string | null) {
  const root = document.documentElement.style
  if (!hex) {
    root.removeProperty("--primary")
    root.removeProperty("--primary-foreground")
    root.removeProperty("--ring")
    return
  }
  root.setProperty("--primary", hex)
  root.setProperty("--primary-foreground", contrastForeground(hex))
  root.setProperty("--ring", hex)
}

export function ThemeColorPicker() {
  const [active, setActive] = useState<string | null>(null)
  const inputId = useId()

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && isValidHex(stored)) {
      setActive(stored)
      applyAccent(stored)
    }
  }, [])

  const handleSelect = (hex: string) => {
    if (!isValidHex(hex)) return
    setActive(hex)
    applyAccent(hex)
    localStorage.setItem(STORAGE_KEY, hex)
  }

  return (
    <div role="radiogroup" aria-label="Accent color" className="flex items-center gap-1.5">
      {PRESETS.map((preset) => (
        <button
          key={preset.key}
          type="button"
          role="radio"
          aria-checked={active?.toLowerCase() === preset.hex}
          aria-label={preset.label}
          title={preset.label}
          onClick={() => handleSelect(preset.hex)}
          className={`size-5 shrink-0 rounded-full border border-foreground/15 ring-offset-2 ring-offset-background transition-transform hover:scale-110 ${
            active?.toLowerCase() === preset.hex ? "scale-110 ring-2 ring-primary" : ""
          }`}
          style={{ backgroundColor: preset.hex }}
        />
      ))}

      {/* Custom accent: whatever the user picks becomes the primary color */}
      <label
        htmlFor={inputId}
        title="Custom accent color"
        className="relative flex size-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-dashed border-foreground/30 text-foreground/70 transition-transform hover:scale-110"
      >
        <Palette className="size-3" />
        <input
          id={inputId}
          type="color"
          value={active ?? "#4f46e5"}
          onChange={(e) => handleSelect(e.target.value)}
          aria-label="Pick a custom accent color"
          className="absolute inset-0 size-full cursor-pointer opacity-0"
        />
      </label>
    </div>
  )
}
