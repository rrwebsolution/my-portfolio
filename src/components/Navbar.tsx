import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FileText, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeColorPicker } from "@/components/ThemeColorPicker"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useResume } from "@/context/ResumeContext"

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const location = useLocation()
  const isHome = location.pathname === "/"
  const { data } = useResume()

  // Subtle header transition on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Highlight the section currently in view while scrolling the home page.
  useEffect(() => {
    if (!isHome) {
      setActiveId(null)
      return
    }

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isHome])

  const linkHref = (id: string) => (isHome ? `#${id}` : `/#${id}`)

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-black/5" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
          className="shrink-0 whitespace-nowrap text-lg font-extrabold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          Ryan Jay Reyes
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={linkHref(link.id)}
              aria-current={activeId === link.id ? "true" : undefined}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                activeId === link.id ? "bg-muted text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <div className="hidden items-center gap-2.5 border-r border-border pr-2.5 xl:flex">
            <ThemeColorPicker />
          </div>
          <ThemeToggle />
          {data.profile.resumeUrl && (
            <a
              href={data.profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              aria-label="View my resume (opens in a new tab)"
            >
              <FileText className="size-4" />
              <span className="hidden xl:inline">Resume</span>
            </a>
          )}
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground shadow-sm hover:opacity-90 hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
            asChild
          >
            <a href={linkHref("contact")}>
              <span className="hidden xl:inline">Let&apos;s Work Together</span>
              <span className="xl:hidden">Contact</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-foreground lg:hidden hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
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
        <div className="absolute left-0 right-0 top-full border-t border-border bg-background px-6 py-5 shadow-lg lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1.5">
            {links.map((link) => (
              <a
                key={link.id}
                href={linkHref(link.id)}
                onClick={() => setOpen(false)}
                className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-all hover:bg-muted hover:text-foreground active:scale-[0.98] ${
                  activeId === link.id ? "bg-muted text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            {data.profile.resumeUrl && (
              <a
                href={data.profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 transition-all hover:bg-muted hover:text-foreground"
              >
                <FileText className="size-4" />
                View Resume
              </a>
            )}
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-3">
                <ThemeColorPicker />
                <ThemeToggle />
              </div>
              <Button
                size="default"
                className="rounded-xl bg-primary text-primary-foreground hover:opacity-90"
                asChild
                onClick={() => setOpen(false)}
              >
                <a href={linkHref("contact")}>Contact Me</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
