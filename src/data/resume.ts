export const profile = {
  name: "Ryan Jay T. Reyes",
  title: "Full Stack Web Developer",
  summary:
    "I am a full-stack web developer who turns ideas into working systems—serving in government by day while building innovative web solutions and helping clients bring their ideas to life outside of work.",
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
    category: "Client System",
    role: "Full-stack developer",
    highlights: [
      "Built a responsive dashboard for property and tenant records.",
      "Structured billing workflows for easier day-to-day tracking.",
    ],
  },
  {
    name: "Faculty Scheduler",
    description: "Scheduling system for managing faculty class loads and timetables.",
    url: "https://facultyscheduler.vercel.app/",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Laravel"],
    category: "Scheduling",
    role: "Full-stack developer",
    highlights: [
      "Designed timetable views that make class load conflicts easier to review.",
      "Organized faculty and schedule data into a focused admin workflow.",
    ],
  },
  {
    name: "Gingoog City Agriculture System",
    description: "Web system for the Gingoog City Agriculture Office to manage records and services.",
    url: "https://www.gingoogcityagriculture.com/",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Laravel"],
    category: "Government System",
    role: "Full-stack developer",
    highlights: [
      "Created record-management screens for agriculture office operations.",
      "Supported service workflows with a Laravel-backed web application.",
    ],
  },
]

export const portfolioStats = [
  { value: "3+", label: "Live web systems" },
  { value: "React + Laravel", label: "Primary stack" },
  { value: "Open", label: "Freelance availability" },
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

export const heroBio = {
  intro:
    "I am Ryan Jay Reyes, an IT professional and programmer from the Philippines. I work in DICT Region 10, where I assist with government systems, deployments, and digital services like eGovPH. Outside of my day job, I build my career as a freelance full-stack web developer.",
  techStackHeading: "My primary tech stack includes:",
  techStack: [
    "React + Vite + TypeScript",
    "Laravel",
    "MySQL and REST APIs",
    "Tailwind CSS, shadcn/ui, and Bootstrap",
  ],
  projectsHeading: "I have built projects such as:",
  projects: [
    "Agriculture Management System",
    "Faculty Scheduler",
    "AtHomes",
    "My personal portfolio website",
    "Other web-based management systems",
  ],
  closing: [
    "I am actively looking for freelance clients through platforms like Upwork and by promoting my portfolio. I am available for custom system development and collaborations outside of my regular work hours.",
    "Beyond programming, I am actively involved in my church (JAMC), where I support various activities and initiatives. I enjoy learning new technologies and continuously improving my skills in deployment, cloud hosting, Laravel, React, and modern web development.",
    "I enjoy solving real-world problems through software and building systems that make processes more efficient. I am committed to continuous learning and growth, both in my government role and as a freelance developer.",
  ],
}

export const hobbies = [
  { emoji: "⛪", label: "Serving and participating in church activities" },
  { emoji: "🎵", label: "Listening to music and creating playlists" },
  { emoji: "🌐", label: "Working on personal and freelance software projects" },
  { emoji: "🛵", label: "Riding my motorcycle and exploring new places" },
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
