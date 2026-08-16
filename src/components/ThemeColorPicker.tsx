import { useEffect, useId, useState } from "react"
import { Palette } from "lucide-react"
import { contrastForeground, deriveAccent, isValidHex } from "@/lib/color"

const PRESETS = [
  { key: "charcoal", label: "Charcoal", hex: "#15181d" },
  { key: "white", label: "White", hex: "#ffffff" },
  { key: "ivory", label: "Ivory", hex: "#fdf6ec" },
  { key: "sky", label: "Sky", hex: "#eaf2ff" },
  { key: "mint", label: "Mint", hex: "#eafcf3" },
  { key: "lilac", label: "Lilac", hex: "#f4efff" },
  { key: "blush", label: "Blush", hex: "#fff0f3" },
] as const

const STORAGE_KEY = "portfolio-bg-color"
const DEFAULT_HEX = PRESETS[0].hex

function applyBackground(hex: string) {
  const { primary, primaryForeground } = deriveAccent(hex)
  const root = document.documentElement.style
  root.setProperty("--background", hex)
  root.setProperty("--foreground", contrastForeground(hex))
  root.setProperty("--primary", primary)
  root.setProperty("--primary-foreground", primaryForeground)
}

export function ThemeColorPicker() {
  const [active, setActive] = useState<string>(DEFAULT_HEX)
  const inputId = useId()

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const initial = stored && isValidHex(stored) ? stored : DEFAULT_HEX
    setActive(initial)
    applyBackground(initial)
  }, [])

  const handleSelect = (hex: string) => {
    if (!isValidHex(hex)) return
    setActive(hex)
    applyBackground(hex)
    localStorage.setItem(STORAGE_KEY, hex)
  }

  return (
    <div role="radiogroup" aria-label="Background color" className="flex items-center gap-1.5">
      {PRESETS.map((preset) => (
        <button
          key={preset.key}
          type="button"
          role="radio"
          aria-checked={active.toLowerCase() === preset.hex}
          aria-label={preset.label}
          title={preset.label}
          onClick={() => handleSelect(preset.hex)}
          className={`size-5 shrink-0 rounded-full border border-foreground/15 ring-offset-2 ring-offset-background transition-transform hover:scale-110 ${
            active.toLowerCase() === preset.hex ? "scale-110 ring-2 ring-primary" : ""
          }`}
          style={{ backgroundColor: preset.hex }}
        />
      ))}

      {/* Custom color: whatever the user picks becomes the page background */}
      <label
        htmlFor={inputId}
        title="Custom background color"
        className="relative flex size-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-dashed border-foreground/30 text-foreground/70 transition-transform hover:scale-110"
      >
        <Palette className="size-3" />
        <input
          id={inputId}
          type="color"
          value={active}
          onChange={(e) => handleSelect(e.target.value)}
          aria-label="Pick a custom background color"
          className="absolute inset-0 size-full cursor-pointer opacity-0"
        />
      </label>
    </div>
  )
}
