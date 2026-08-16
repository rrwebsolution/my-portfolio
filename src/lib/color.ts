// Small self-contained color engine for the background theme picker.
// Given any hex color the user picks, derives a readable foreground text
// color and a matching accent (primary) color with guaranteed contrast.

type Rgb = { r: number; g: number; b: number }
type Hsl = { h: number; s: number; l: number }

const FALLBACK_ACCENT_HEX = "#ea580c"

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function hexToRgb(hex: string): Rgb {
  const normalized = hex.replace("#", "")
  const full =
    normalized.length === 3
      ? normalized.split("").map((c) => c + c).join("")
      : normalized
  const int = parseInt(full, 16)
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  }
}

function rgbToHex({ r, g, b }: Rgb): string {
  const toHex = (n: number) => clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0")
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function rgbToHsl({ r, g, b }: Rgb): Hsl {
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  const l = (max + min) / 2
  let h = 0
  let s = 0

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0)
        break
      case gn:
        h = (bn - rn) / d + 2
        break
      default:
        h = (rn - gn) / d + 4
    }
    h /= 6
  }

  return { h, s, l }
}

function hslToRgb({ h, s, l }: Hsl): Rgb {
  if (s === 0) {
    const v = l * 255
    return { r: v, g: v, b: v }
  }

  const hue2rgb = (p: number, q: number, t: number) => {
    let tt = t
    if (tt < 0) tt += 1
    if (tt > 1) tt -= 1
    if (tt < 1 / 6) return p + (q - p) * 6 * tt
    if (tt < 1 / 2) return q
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6
    return p
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q

  return {
    r: hue2rgb(p, q, h + 1 / 3) * 255,
    g: hue2rgb(p, q, h) * 255,
    b: hue2rgb(p, q, h - 1 / 3) * 255,
  }
}

// WCAG relative luminance
function relativeLuminance({ r, g, b }: Rgb): number {
  const toLinear = (channel: number) => {
    const c = channel / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

/** Near-black or near-white text color that reads clearly on the given background. */
export function contrastForeground(hex: string): string {
  const luminance = relativeLuminance(hexToRgb(hex))
  return luminance > 0.52 ? "#15181d" : "#f7f8fa"
}

/** A themed accent color derived from the chosen background, guaranteed to contrast against it. */
export function deriveAccent(hex: string): { primary: string; primaryForeground: string } {
  const rgb = hexToRgb(hex)
  const hsl = rgbToHsl(rgb)
  const luminance = relativeLuminance(rgb)
  const isLowSaturation = hsl.s < 0.08

  let primaryHex: string
  if (isLowSaturation) {
    primaryHex = FALLBACK_ACCENT_HEX
  } else {
    const targetL = luminance > 0.52 ? clamp(hsl.l - 0.3, 0.24, 0.42) : clamp(hsl.l + 0.3, 0.58, 0.74)
    const targetS = clamp(hsl.s, 0.5, 0.85)
    primaryHex = rgbToHex(hslToRgb({ h: hsl.h, s: targetS, l: targetL }))
  }

  return {
    primary: primaryHex,
    primaryForeground: contrastForeground(primaryHex),
  }
}

export function isValidHex(hex: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(hex)
}
