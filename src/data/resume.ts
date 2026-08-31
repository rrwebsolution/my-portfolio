export const profile = {
  name: "Ryan Jay T. Reyes",
  title: "Information Systems Analyst III | Web Developer | Full Stack Developer",
  summary:
    "Information Systems Analyst and Web Developer with over 2 years of experience in government information systems, full-stack web application development, database management, system implementation, and technical support, plus 5 years of experience delivering freelance, independent web-based projects. Led end-to-end development of the Data Monitoring Tool (DMT-LGU), a Laravel and React platform now used by DICT to monitor eLGU systems nationwide.",
  location: "Santa Ana, Tagoloan, Misamis Oriental",
  phone: "+63 935 855 4398",
  email: "rrwebsolutions1998@gmail.com",
  linkedin: "https://www.linkedin.com/in/ryan-an-reyes-a45a9a277",
  facebook: "https://www.facebook.com/ryanjaytagolimotreyes",
  portfolio: "https://my-portfolio.online/",
  resumeUrl: "/Ryan_Jay_Reyes_Resume.pdf",
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
    category: "Languages",
    items: ["PHP", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Backend & APIs",
    items: [
      "Laravel",
      "Eloquent ORM",
      "RESTful API Development",
      "Authentication",
      "CRUD Architecture",
      "API Integration",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "SQL Server", "Supabase", "Schema Design", "Reporting Queries"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "GitHub", "Composer", "npm", "System Testing", "Technical Documentation"],
  },
]

export const experience = [
  {
    title: "Information Systems Analyst III",
    company: "Department of Information and Communications Technology (DICT)",
    duration: "September 2024 – Present",
    stack: ["System Deployment", "Technical Support", "System Testing", "Technical Documentation"],
    responsibilities: [
      "Provide technical support for the implementation and operation of government information systems.",
      "Assist LGUs and end users with system configuration, deployment, troubleshooting, and technical concerns.",
      "Conduct system orientations, technical training, and user assistance.",
      "Coordinate with stakeholders regarding system requirements, implementation, and deployment.",
      "Perform system testing, issue identification, troubleshooting, and technical documentation.",
      "Support database, web application, and system-related activities.",
      "Assist in monitoring system implementation and ensuring operational readiness of participating offices.",
    ],
    achievements: [],
  },
  {
    title: "Web Developer (Project Basis) — Data Monitoring Tool (DMT-LGU)",
    company: "Department of Information and Communications Technology (DICT)",
    duration: "September 23, 2024 – May 2026",
    stack: ["Laravel", "React", "JavaScript", "RESTful APIs"],
    responsibilities: [
      "Developed and implemented the backend and frontend features using Laravel and JavaScript.",
      "Designed and implemented the database schema for reports and monitoring data.",
      "Developed RESTful APIs for data retrieval, filters, and reporting.",
      "Implemented dashboards, charts, and data visualizations.",
      "Ensured responsive design and cross-browser compatibility.",
      "Coordinated with DICT technical teams and LGU stakeholders to gather requirements and refine features.",
      "Conducted testing, debugging, and pre-deployment quality checks to ensure system stability.",
      "Documented technical processes and workflows to support ongoing system maintenance.",
    ],
    achievements: [
      "Delivered a reliable, Laravel and React platform now used by DICT to monitor eLGU systems nationwide, improving data visibility and reporting efficiency.",
    ],
  },
]

export const projects = [
  {
    slug: "lgu-gingoog-agriculture-management-system",
    name: "LGU Gingoog Agriculture Management System",
    description:
      "Agriculture management platform for the LGU Gingoog City Office of Agriculture, covering farmer and fisherfolk registries, crop, livestock, and fisheries tracking, land mapping, cooperative and inventory management, field check-ins, analytics, and access control.",
    url: "https://www.gingoogcityagriculture.com/",
    client: "LGU Gingoog City, Office of Agriculture",
    duration: "February 2024 – August 2026 (Independent Contract, with Technical Assistance)",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "Axios",
      "React Router",
      "Radix UI/shadcn",
      "Leaflet",
      "Recharts",
      "Laravel Echo/Pusher",
      "face-api.js",
      "Google GenAI",
      "Laravel",
    ],
    category: "Government System",
    role: "Full-stack developer",
    highlights: [
      "Built land mapping and field check-in tools alongside cooperative and inventory management modules.",
      "Integrated facial recognition (face-api.js) and Google GenAI features into the platform.",
    ],
    problem:
      "The Office of Agriculture tracked farmer and fisherfolk registries, crop and livestock records, land use, and cooperative inventory across scattered spreadsheets and paper forms, making reporting slow and field verification unreliable.",
    solution:
      "A centralized web platform that digitizes registries, maps farmland with Leaflet, verifies field check-ins with facial recognition, and gives office staff live dashboards and analytics for planning and reporting.",
    features: [
      "Farmer, fisherfolk, crop, livestock, and fisheries registries with structured records",
      "Interactive land mapping and geotagged field check-ins",
      "Cooperative and inventory management with stock tracking",
      "Facial recognition (face-api.js) for verified field attendance",
      "Google GenAI-assisted data entry and reporting features",
      "Role-based access control for office staff and field personnel",
      "Real-time updates via Laravel Echo/Pusher",
    ],
    challenges: [
      "Reconciling inconsistent legacy paper records into a structured, queryable schema",
      "Making facial recognition and geotagging reliable on the varied mobile devices used by field staff",
      "Designing land-mapping UI that stays usable on low-bandwidth field connections",
    ],
    decisions: [
      "Chose Leaflet over a heavier mapping SDK to keep map interactions fast on modest hardware",
      "Used Laravel as the API layer with Redux Toolkit on the frontend to keep state predictable across many data-heavy modules",
      "Isolated the face-api.js verification flow so it degrades gracefully when camera access isn't available",
    ],
    outcome:
      "Delivered a production system now used by the Office of Agriculture to manage registries, land data, and field verification in one place, replacing manual spreadsheet tracking with live, auditable records.",
  },
  {
    slug: "gcgea-membership-loan-benefits-management-system",
    name: "GCGEA Membership, Loan and Benefits Management System",
    description:
      "Membership and financial management system for the Gingoog City Government Employees Association (GCGEA), handling member records, contributions, loans, benefits, payroll deductions, approvals, budgets, disbursements, and audit logs.",
    url: "https://gcgea-mlbms.vercel.app/",
    client: "Gingoog City Government Employees Association (GCGEA)",
    duration: "July 2026 – August 2026 (Independent Contract, with Technical Assistance)",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Base UI/shadcn",
      "TanStack Query & Table",
      "React Router",
      "Axios",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Recharts",
    ],
    category: "Client System",
    role: "Full-stack developer",
    highlights: [
      "Built approval workflows for loans, benefits, budgets, and disbursements with a full audit log.",
      "Structured member contribution and payroll deduction tracking for day-to-day association operations.",
    ],
    problem:
      "GCGEA managed member contributions, loans, and benefit disbursements manually, which made approvals slow, budgets hard to reconcile, and left no reliable audit trail for financial decisions.",
    solution:
      "A membership and finance management system that centralizes member records, automates contribution and payroll-deduction tracking, and routes loans, benefits, and disbursements through auditable approval workflows.",
    features: [
      "Member records with contribution and payroll deduction history",
      "Loan and benefit application workflows with multi-step approvals",
      "Budget and disbursement tracking with running balances",
      "Full audit logs for every financial action",
      "Searchable, sortable data tables powered by TanStack Table",
      "Form validation end-to-end with React Hook Form and Zod",
    ],
    challenges: [
      "Modeling approval workflows flexible enough for loans, benefits, and budgets without duplicating logic",
      "Keeping financial calculations (deductions, balances, disbursements) accurate and auditable",
    ],
    decisions: [
      "Used TanStack Query & Table to handle server state and large member/transaction tables without over-fetching",
      "Adopted Zod schemas shared between forms and API validation to keep financial data consistent",
      "Kept an explicit audit-log table rather than relying on soft-delete history, for a clearer compliance trail",
    ],
    outcome:
      "Gave GCGEA a single system for member, loan, and benefit administration with transparent approvals and audit logs, cutting down manual reconciliation work.",
  },
  {
    slug: "faculty-scheduler",
    name: "Faculty Scheduler",
    description:
      "Scheduling and faculty-load management system for administrators, department deans, and faculty to manage class schedules, rooms, curricula, teaching loads, reports, and notifications.",
    url: "https://facultyscheduler.vercel.app/",
    client: "College/University Client",
    duration: "April 2025 – May 2026 (Independent Contract, with Technical Assistance)",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Radix UI",
      "Framer Motion",
      "ApexCharts/Recharts",
    ],
    category: "Scheduling",
    role: "Full-stack developer",
    highlights: [
      "Designed timetable views that make class load and room conflicts easier to review.",
      "Organized faculty, curricula, and schedule data into a focused admin workflow.",
    ],
    problem:
      "Building class schedules by hand made it hard to spot room and faculty-load conflicts, and deans had no consolidated view of teaching loads across departments.",
    solution:
      "A scheduling system with conflict-aware timetable views, curriculum and room management, and role-based dashboards for administrators, deans, and faculty.",
    features: [
      "Visual timetable builder with room and load conflict detection",
      "Curriculum and teaching-load management per department",
      "Role-based dashboards for admins, deans, and faculty",
      "Reports and charts on load distribution (ApexCharts/Recharts)",
      "In-app notifications for schedule changes",
    ],
    challenges: [
      "Detecting overlapping room and faculty assignments in real time as schedules are edited",
      "Keeping the UI usable while surfacing dense scheduling data across departments",
    ],
    decisions: [
      "Used Redux Toolkit to centralize schedule state so conflict checks run against a single source of truth",
      "Layered Framer Motion transitions sparingly, only around schedule changes, to keep the dense grid readable",
    ],
    outcome:
      "Replaced manual, spreadsheet-based scheduling with a system that flags conflicts immediately and gives deans a clear view of teaching loads.",
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
    "I am Ryan Jay Reyes, an Information Systems Analyst and web developer from the Philippines. I work at DICT Region 10, where I led end-to-end development of the Data Monitoring Tool (DMT-LGU), a Laravel and React platform now used by DICT to monitor eLGU systems nationwide. Outside of my day job, I build my career as a freelance full-stack web developer.",
  techStackHeading: "My primary tech stack includes:",
  techStack: [
    "React + Vite + TypeScript",
    "Laravel",
    "MySQL, PostgreSQL, and SQL Server",
    "Tailwind CSS, shadcn/ui, and Bootstrap",
  ],
  projectsHeading: "I have built projects such as:",
  projects: [
    "Data Monitoring Tool (DMT-LGU)",
    "LGU Gingoog Agriculture Management System",
    "GCGEA Membership, Loan and Benefits Management System",
    "Faculty Scheduler",
    "AtHomes",
    "My personal portfolio website",
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

export const services = [
  {
    icon: "Layers",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built on Laravel, React, and modern JavaScript frameworks — from database to deployed UI.",
  },
  {
    icon: "Building2",
    title: "Business Management Systems",
    description:
      "Custom systems for registries, memberships, loans, inventory, and approvals, tailored to how your organization actually works.",
  },
  {
    icon: "LayoutTemplate",
    title: "Frontend Development",
    description:
      "Responsive, accessible interfaces with React, Next.js, Vue.js, or Angular, styled with Tailwind CSS and shadcn/ui.",
  },
  {
    icon: "Server",
    title: "Backend & API Development",
    description:
      "RESTful APIs, authentication, and business logic built with Laravel and PHP, designed to scale with your data.",
  },
  {
    icon: "Database",
    title: "Database Design",
    description:
      "Schema design and query optimization across MySQL, PostgreSQL, SQL Server, and Supabase for reliable reporting.",
  },
  {
    icon: "Wrench",
    title: "Existing System Improvements",
    description:
      "Refactoring, debugging, and feature additions to legacy systems without disrupting what already works.",
  },
  {
    icon: "Rocket",
    title: "Deployment & Maintenance",
    description:
      "Production deployment, environment configuration, and ongoing support to keep systems stable after launch.",
  },
]

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand requirements and business goals.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Design architecture, database, user flow, and implementation strategy.",
  },
  {
    number: "03",
    title: "Development",
    description: "Build maintainable frontend and backend systems.",
  },
  {
    number: "04",
    title: "Testing",
    description: "Test functionality, responsiveness, edge cases, and performance.",
  },
  {
    number: "05",
    title: "Deployment",
    description: "Deploy and configure the production environment.",
  },
  {
    number: "06",
    title: "Support",
    description: "Provide maintenance and continuous improvements.",
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
