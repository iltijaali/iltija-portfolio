export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  period: string;
  description: string;
  bullets: string[];
  tech: string[];
}

export interface EducationEntry {
  school: string;
  credential: string;
  period: string;
  result: string;
}

export const profile: Profile = {
  name: 'Iltija Ali Murtaza Hussain',
  title: 'Full Stack Developer',
  location: 'Lahore, Pakistan',
  email: 'iltijaali164@gmail.com',
  phone: '+92 3051934164',
  github: 'https://github.com/iltijaali',
  linkedin:
    'https://www.linkedin.com/in/iltija-ali-murtaza-hussain-b3a216296',
  summary:
    'Full Stack Developer with one year of experience building scalable web applications using Node.js, NestJS, Laravel, React.js, TypeScript, Django REST Framework, PHP and Python. Experienced in developing RESTful APIs, secure authentication, RBAC, responsive React applications and enterprise software using modern development practices.',
};

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['PHP', 'JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'Laravel', 'Django', 'Django REST Framework'],
  },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code'] },
  {
    category: 'Core Skills',
    items: [
      'REST APIs',
      'JWT Authentication',
      'RBAC',
      'MVC',
      'CRUD',
      'React Hooks',
      'Dependency Injection',
      'Clean Architecture',
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: 'Full Stack Developer',
    company: 'TorontoDigits',
    period: 'Jun 2025 – May 2026',
    bullets: [
      'Developed RESTful APIs using Laravel, Node.js, NestJS and Django REST Framework.',
      'Built responsive frontend applications using React.js and TypeScript.',
      'Implemented JWT Authentication, RBAC, CRUD operations and reusable backend services.',
      'Optimized PostgreSQL/MySQL databases using Docker, Git, GitHub and Postman.',
      'Contributed to production applications including SkillPass and GuardN.',
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: 'SkillPass',
    period: 'Jun 2025 – May 2026',
    description: 'A SaaS learning platform with secure APIs, RBAC and gamified reviews.',
    bullets: [
      'Developed a SaaS learning platform using Laravel, PostgreSQL and Docker.',
      'Built secure RESTful APIs for authentication, onboarding, lessons, quizzes and profile management.',
      'Implemented RBAC, Smart Review, multiplayer matches and optimized database performance.',
    ],
    tech: ['Laravel', 'PostgreSQL', 'Docker', 'Git', 'GitHub', 'Postman'],
  },
  {
    name: 'GuardN',
    period: 'May 2026 – Present',
    description: 'A security-focused dashboard integrating scanning tools with RBAC-driven workspaces.',
    bullets: [
      'Worked as a Full Stack Developer using React.js, TypeScript, Node.js, NestJS and Django REST Framework.',
      'Developed reusable React components and responsive dashboard interfaces.',
      'Built RESTful APIs for authentication, users, organizations, workspace management and RBAC.',
      'Implemented ReportLab PDF generation and integrated Nuclei, Trivy and Semgrep.',
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'NestJS', 'Django REST Framework', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'Task Management System',
    period: '2026',
    description: 'A full stack task manager with role-based authorization and modular architecture.',
    bullets: [
      'Developed a full stack Task Management application using React.js, Node.js, NestJS and PostgreSQL.',
      'Built responsive React frontend with secure RESTful APIs for authentication, task management and role-based authorization.',
      'Implemented JWT Authentication, CRUD operations, Dependency Injection and modular architecture following Clean Architecture.',
    ],
    tech: ['React.js', 'Node.js', 'NestJS', 'PostgreSQL', 'JWT'],
  },
  {
    name: 'Government Commodities Price Calculator',
    period: 'Jan 2025 – Jun 2025',
    description: 'A commodity pricing platform with optimized queries and CRUD-driven admin modules.',
    bullets: [
      'Developed a full stack web application using React.js, Django REST Framework and PostgreSQL.',
      'Built responsive frontend interfaces, CRUD modules and RESTful APIs for commodity and pricing management.',
      'Optimized database queries and backend performance for efficient data processing.',
    ],
    tech: ['React.js', 'Django REST Framework', 'PostgreSQL'],
  },
];

export const education: EducationEntry[] = [
  {
    school: 'COMSATS University Islamabad',
    credential: 'Bachelor of Science in Software Engineering',
    period: '2021 – 2025',
    result: 'CGPA: 2.91',
  },
  {
    school: 'Superior College Burewala',
    credential: 'FSc (Pre-Engineering)',
    period: '2019 – 2021',
    result: 'Grade: A+',
  },
];
