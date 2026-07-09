import type { VercelRequest, VercelResponse } from "@vercel/node"
import Anthropic from "@anthropic-ai/sdk"
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod"
import { z } from "zod"

const client = new Anthropic()

const skillGroupSchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
})

const experienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  duration: z.string(),
  stack: z.array(z.string()),
  responsibilities: z.array(z.string()),
  achievements: z.array(z.string()),
})

const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string(),
  stack: z.array(z.string()),
})

const educationSchema = z.object({
  school: z.string(),
  detail: z.string(),
  achievement: z.string(),
})

const certificationSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
})

const resumeSchema = z.object({
  profile: z.object({
    name: z.string(),
    title: z.string(),
    summary: z.string(),
    location: z.string(),
    phone: z.string(),
    email: z.string(),
    linkedin: z.string(),
    facebook: z.string(),
    languages: z.array(z.string()),
  }),
  personalDetails: z.object({
    dateOfBirth: z.string(),
    placeOfBirth: z.string(),
    maritalStatus: z.string(),
    religion: z.string(),
    nationality: z.string(),
  }),
  skills: z.array(skillGroupSchema),
  experience: z.array(experienceSchema),
  projects: z.array(projectSchema),
  education: z.array(educationSchema),
  certifications: z.array(certificationSchema),
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" })
    return
  }

  const text = typeof req.body?.text === "string" ? req.body.text : ""
  if (text.trim().length < 20) {
    res.status(400).json({ error: "No readable text found in the uploaded file." })
    return
  }

  try {
    const response = await client.messages.parse({
      model: "claude-opus-4-8",
      max_tokens: 4096,
      system:
        "You extract structured resume/CV data from raw text pulled from a PDF. " +
        "Fill every field using only what's actually present in the source text. " +
        "Use an empty string for a field with no value in the source, and an empty array for a section that isn't present. " +
        "Do not invent names, dates, employers, or skills that aren't in the source text.",
      messages: [
        {
          role: "user",
          content: `Extract structured resume data from this CV text:\n\n${text.slice(0, 15000)}`,
        },
      ],
      output_config: { format: zodOutputFormat(resumeSchema) },
    })

    if (response.parsed_output === null) {
      res.status(422).json({ error: "Could not parse the uploaded CV." })
      return
    }

    res.status(200).json(response.parsed_output)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to process the CV. Please try again." })
  }
}
