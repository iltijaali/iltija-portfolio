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

export interface PortfolioData {
  profile: Profile;
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
}
