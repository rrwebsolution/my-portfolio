// Small self-contained color engine for the accent color picker.
// Given any hex color the user picks, derives a readable foreground text
// color to pair with it.

type Rgb = { r: number; g: number; b: number }

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

export function isValidHex(hex: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(hex)
}
