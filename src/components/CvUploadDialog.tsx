import { useRef, useState } from "react"
import { Loader2, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useResume } from "@/context/ResumeContext"
import { extractPdfText } from "@/lib/pdf"
import type { ResumeData } from "@/data/resume"

type Status = "idle" | "reading" | "parsing" | "error"

export function CvUploadDialog() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { setCustomResume } = useResume()

  const busy = status === "reading" || status === "parsing"

  const close = () => {
    if (busy) return
    setOpen(false)
    setStatus("idle")
    setError(null)
  }

  const handleFile = async (file: File) => {
    setError(null)

    if (file.type !== "application/pdf") {
      setStatus("error")
      setError("Please upload a PDF file.")
      return
    }

    try {
      setStatus("reading")
      const text = await extractPdfText(file)

      if (text.trim().length < 20) {
        setStatus("error")
        setError("Couldn't read any text from that PDF. Try a different file.")
        return
      }

      setStatus("parsing")
      const res = await fetch("/api/parse-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        setStatus("error")
        setError(body?.error ?? "Something went wrong processing your CV.")
        return
      }

      const data = (await res.json()) as ResumeData
      setCustomResume(data)
      setOpen(false)
      setStatus("idle")
    } catch {
      setStatus("error")
      setError("Something went wrong reading that file. Please try again.")
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
      >
        <Upload className="size-3.5" />
        Try it with your own CV
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={close}
          />

          <div className="relative w-full max-w-md rounded-2xl border border-border/50 bg-card p-6 shadow-2xl">
            <button
              type="button"
              onClick={close}
              disabled={busy}
              aria-label="Close"
              className="absolute top-4 right-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-40"
            >
              <X className="size-4" />
            </button>

            <h3 className="font-heading text-lg font-bold">Try it with your own CV</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Upload a CV (PDF) and this page will rebuild itself using your info,
              right here in your browser. Nothing is saved — reload the page and
              you're back to the default portfolio.
            </p>

            <div className="mt-5">
              {status === "idle" || status === "error" ? (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex w-full flex-col items-center gap-2 rounded-xl border-2 border-dashed border-border/60 py-8 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <Upload className="size-5" />
                  Click to choose a PDF
                </button>
              ) : (
                <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-border/60 py-8 text-sm text-muted-foreground">
                  <Loader2 className="size-5 animate-spin text-primary" />
                  {status === "reading" ? "Reading your PDF…" : "Generating your portfolio…"}
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleFile(file)
                  e.target.value = ""
                }}
              />

              {error && (
                <p className="mt-3 text-sm text-destructive">{error}</p>
              )}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="mt-4 w-full"
              onClick={close}
              disabled={busy}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
