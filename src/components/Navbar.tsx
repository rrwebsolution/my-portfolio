import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeColorPicker } from "@/components/ThemeColorPicker"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Subtle header transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo with subtle gradient hover effect */}
        <a
          href="#top"
          className="group text-lg font-bold tracking-tight text-foreground transition-colors"
        >
          <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
            Ryan Jay Reyes
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-4 flex items-center gap-4 border-l border-border/50 pl-4">
            <ThemeColorPicker />
            {/* Using standard Radix 'asChild' to correctly render a link inside a button style */}
            <Button
              size="sm"
              className="rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
              asChild
            >
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full md:hidden hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5 transition-transform duration-200 rotate-90" />
          ) : (
            <Menu className="h-5 w-5 transition-transform duration-200" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-border/40 bg-background/95 backdrop-blur-lg px-6 py-5 shadow-lg md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-[0.98]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
              <ThemeColorPicker />
              <Button size="default" className="rounded-xl" asChild onClick={() => setOpen(false)}>
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}