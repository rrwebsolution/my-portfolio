export const profile = {
  name: "Ryan Jay T. Reyes",
  title: "Programmer",
  summary:
    "I am IT in programming, web development, and database management. I build with React, Vite, and TypeScript on the frontend and Laravel on the backend, with hands-on experience configuring development servers and troubleshooting application issues. Adept at creating dynamic, responsive web applications and skilled in various programming languages and frameworks.",
  location: "Santa Ana, Tagoloan, Misamis Oriental",
  phone: "+63 935 855 4398",
  email: "ryanjayreyes047@gmail.com",
  linkedin: "https://www.linkedin.com/in/ryan-jay-reyes-5490bb421",
  facebook: "https://www.facebook.com/ryanjaytagolimotreyes",
  languages: ["English", "Tagalog", "Bisaya"],
}

export const personalDetails = {
  dateOfBirth: "September 06, 1998",
  placeOfBirth: "Lapasan, CDO",
  maritalStatus: "Single",
  religion: "Christian",
  nationality: "Filipino",
}

export const skills = [
  {
    category: "Programming Languages",
    items: ["PHP", "JavaScript", "TypeScript"],
  },
  {
    category: "Web Development",
    items: ["React", "Vite", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Database Management",
    items: ["MySQL", "SQL Server"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Composer", "npm"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Laravel", "React", "AJAX"],
  },
]

export const experience = [
  {
    title: "eDTR — Electronic Daily Time Record System",
    company: "Department of Information and Communications Technology (DICT–Misamis Oriental)",
    duration: "January 22, 2024 – May 2024",
    stack: ["React", "Vite", "TypeScript", "Laravel"],
    responsibilities: [
      "Designed and implemented the database schema for storing attendance records and designed the frontend.",
      "Developed RESTful APIs using Laravel to manage attendance data.",
    ],
    achievements: ["Successfully reduced the time required for attendance tracking."],
  },
]

export const projects = [
  {
    name: "AtHomes",
    description: "Property management dashboard for tracking homes, tenants, and billing.",
    url: "https://www.athomesdashboard.com/",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Laravel"],
  },
  {
    name: "Faculty Scheduler",
    description: "Scheduling system for managing faculty class loads and timetables.",
    url: "https://facultyscheduler.vercel.app/",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Laravel"],
  },
  {
    name: "Gingoog City Agriculture System",
    description: "Web system for the Gingoog City Agriculture Office to manage records and services.",
    url: "https://www.gingoogcityagriculture.com/",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Laravel"],
  },
]

export const education = [
  {
    school: "Southern Philippines College",
    detail: "Graduated June 18, 2024",
    achievement: "Achievement award: Programmer of the Year",
  },
]

export const certifications = [
  {
    title: "ICT Summit Schools 2023",
    description:
      "Connecting Communities, Lives, and Forging a Digital Future for the Philippines.",
    date: "June 27, 2023",
  },
  {
    title: "Learn @Fligno",
    description: "Laravel and CRUD API Development",
    date: "April 29, 2023",
  },
  {
    title: "ICT Proficiency Certification Examination",
    description: "Diagnostic Examination Programming — Level 1 Passed",
    date: "April 01, 2024",
  },
]

export type ResumeData = {
  profile: typeof profile
  personalDetails: typeof personalDetails
  skills: typeof skills
  experience: typeof experience
  projects: typeof projects
  education: typeof education
  certifications: typeof certifications
}

export const defaultResume: ResumeData = {
  profile,
  personalDetails,
  skills,
  experience,
  projects,
  education,
  certifications,
}
