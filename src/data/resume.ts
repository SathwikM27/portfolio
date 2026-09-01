export const profile = {
  name: "Sathwik Varma Mudduluri",
  tagline: "Full-Stack Developer",
  location: { born: "Hyderabad, India", based: "New Jersey / NYC" },
  email: "mudduluri.sathwik@gmail.com",
  summary:
    "Full Stack Developer with senior-level expertise delivering scalable web applications. Led migration of legacy systems to cloud-native architecture, cutting deployment time by 30% and boosting performance. Built an end-to-end employee management platform using Java Spring Boot, React, and AWS, increasing user productivity by 20%. Aiming to leverage full-stack and cloud skills to drive innovative solutions.",
  socials: {
    github: "https://github.com/SathwikM27",
    linkedin: "https://www.linkedin.com/in/sathwikm27/",
    twitter: "https://twitter.com/sathwiknt",
    email: "mailto:mudduluri.sathwik@gmail.com",
  },
  resumeFile: "/resume.pdf",
};

export const skillGroups: { label: string; skills: string[] }[] = [
  { label: "Languages", skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "PL/SQL", "C"] },
  { label: "Frontend", skills: ["React", "Next.js", "Tamagui", "Material UI"] },
  { label: "Backend", skills: ["Node.js", "Spring Boot", "Flask", "Apache Spark", "Hadoop"] },
  { label: "Databases", skills: ["OracleDB", "MongoDB", "Neo4j"] },
  { label: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git"] },
  { label: "Testing & QA", skills: ["Playwright", "JUnit", "EvoSuite"] },
  { label: "ML & Compute", skills: ["TensorFlow", "PyTorch", "CUDA", "cuDNN"] },
  { label: "AI Tooling", skills: ["LLMs", "Prompt Engineering", "AI-Assisted Coding", "Claude Code"] },
];

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Digitronix AI Inc",
    role: "Java Developer",
    start: "Aug 2026",
    end: "Present",
    highlights: [
      "Architect and develop applications using Java, Spring Boot, microservices, and React/Angular on AWS, delivering scalable solutions for increased user traffic",
      "Support CI/CD pipelines, containerization, and cloud deployments with Docker, Kubernetes, Jenkins, and AWS",
      "Ensure code quality through unit testing, integration testing, and code review",
    ],
  },
  {
    company: "Exito Tech Inc.",
    role: "Full Stack Developer",
    start: "Aug 2025",
    end: "Jun 2026",
    highlights: [
      "Developed client-facing web applications using React, Spring Boot, and SQL databases, improving workflow automation",
      "Built RESTful APIs for employee management, onboarding, and reporting systems using Java Spring Boot and Node.js",
      "Migrated legacy applications to modern full-stack architectures with React, REST APIs, and cloud deployments",
      "Collaborated in Agile/Scrum teams to troubleshoot production issues and optimize application performance",
    ],
  },
  {
    company: "HOCS Pvt Ltd",
    role: "Web Development Intern",
    start: "Jan 2023",
    end: "Jun 2023",
    location: "Hyderabad",
    highlights: [
      "Owned day-to-day maintenance and uptime of the company website using AWS EC2 and GitHub",
      "Implemented performance, UX, and content updates with Flask and Next.js, improving page load speed",
    ],
  },
  {
    company: "Cloud Technologies",
    role: "ML Engineer Intern",
    start: "Nov 2021",
    end: "Dec 2021",
    location: "Hyderabad",
    highlights: [
      "Completed intensive onboarding in Python-based ML workflows: data preprocessing, model training, and evaluation",
    ],
  },
];

export type Project = {
  title: string;
  description: string[];
  href?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Wine Quality Predictor",
    description: [
      "Designed and deployed a regression-based ML model to predict wine quality",
      "Built a distributed Spark cluster across 5 AWS EC2 instances to parallelize data processing",
      "Containerized the application with Docker and deployed scalable compute pipelines",
    ],
    href: "https://github.com/SathwikM27/wine-quality-predictor",
    tags: ["Python", "Apache Spark", "AWS EC2", "Docker"],
  },
  {
    title: "Zoo Database Management System",
    description: [
      "Built a full-stack CRUD application to manage zoo animal and employee data",
      "Designed a relational schema in OracleDB with optimized query structures",
      "Developed the frontend with Flask, with secure database connectivity and role-based data handling",
    ],
    href: "https://github.com/SathwikM27/turtleback",
    tags: ["OracleDB", "Flask", "Python", "SQL"],
  },
  {
    title: "IHLP — BBR Congestion Control Replication",
    description: [
      "Research project testing the real-world viability of Google's BBR TCP congestion control algorithm",
      "Automated provisioning of Google Cloud Compute Engine VMs to replicate BBR's original quick-start experiments on a modern kernel",
      "Built a suite of 9 scripted network experiments to measure throughput and latency behavior under BBR vs. traditional loss-based congestion control",
    ],
    href: "https://github.com/SathwikM27/ihlp-bbr-replication",
    tags: ["Google Cloud", "Networking", "TCP/BBR", "Bash"],
  },
  {
    title: "This Portfolio",
    description: [
      "Rebuilt this site from static HTML/CSS into a Next.js + TypeScript app with Tamagui",
      "Responsive layout with light/dark theme, driven entirely by a typed content model",
      "Automated tests with Playwright",
    ],
    href: "https://github.com/NJIT-WIS/midterm-portfolio-SathwikM27",
    tags: ["Next.js", "TypeScript", "Tamagui", "Playwright"],
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  volume: string;
  pages: string;
  date: string;
  href: string;
  abstract: string;
};

export const publications: Publication[] = [
  {
    title: "Plausibility of BBR as CUBIC's Replacement and Proposed Improvement to BBR using GENET",
    authors: "Dr. Kunwar Asif, Hemanjali Kadali, Sathwik Varma Mudduluri",
    venue: "International Journal of Scientific Research in Computer Science, Engineering and Information Technology (IJSRCSEIT)",
    volume: "Volume 9, Issue 6",
    pages: "pp. 303–309",
    date: "November–December 2023",
    href: "https://doi.org/10.32628/CSEIT2390660",
    abstract:
      "Proposes integrating GENET's curriculum-learning reinforcement learning framework into Google's BBR congestion control algorithm, evaluated against CUBIC and Reno under varying latency and packet loss on Google Cloud VM instances.",
  },
];

export const education = [
  {
    school: "New Jersey Institute of Technology",
    degree: "Master of Science, Computer Science",
    location: "Newark, NJ",
    year: "2025",
  },
  {
    school: "Gokaraju Rangaraju Institute of Engineering and Technology",
    degree: "Bachelor of Technology, Computer Science and Engineering",
    location: "Hyderabad, India",
    year: "2022",
  },
];
