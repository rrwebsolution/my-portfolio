import { createContext, useContext, useState, type ReactNode } from "react"
import { defaultResume, type ResumeData } from "@/data/resume"

type ResumeContextValue = {
  data: ResumeData
  isCustom: boolean
  setCustomResume: (data: ResumeData) => void
  resetToDefault: () => void
}

const ResumeContext = createContext<ResumeContextValue | null>(null)

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ResumeData>(defaultResume)
  const [isCustom, setIsCustom] = useState(false)

  const setCustomResume = (next: ResumeData) => {
    setData(next)
    setIsCustom(true)
  }

  const resetToDefault = () => {
    setData(defaultResume)
    setIsCustom(false)
  }

  return (
    <ResumeContext.Provider value={{ data, isCustom, setCustomResume, resetToDefault }}>
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const ctx = useContext(ResumeContext)
  if (!ctx) throw new Error("useResume must be used within a ResumeProvider")
  return ctx
}
