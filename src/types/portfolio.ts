export interface PersonalInfo {
  name: string;
  displayName: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  avatarUrl: string;
  aboutImageUrl?: string;
  resumeUrl: string;
  availability: { status: "available" | "busy" | "selective"; message: string };
}
export interface ProfessionalPositioning {
  primaryRole: string;
  secondaryRole?: string;
  yearsOfExperience: string;
  currentFocus: string;
  careerGoal: string;
}
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  figma?: string;
  leetcode?: string;
  hackerrank?: string;
  twitter?: string;
}
export interface StatItem {
  label: string;
  value: string;
  description: string;
}
export interface Skill {
  name: string;
  category: "Programming" | "Web" | "Database" | "Tools & Platforms";
  level: "Core Skill" | "Working Knowledge" | "Tool";
}
export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture?: string[];
  challenges?: string;
  outcome: string;
  keyFeatures: string[];
}
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Web Development" | "Mobile & IoT" | "AI / ML";
  technologies: string[];
  thumbnail: string;
  featuredImage: string;
  status: "Completed" | "In Progress" | "Maintained";
  githubUrl?: string;
  liveDemoUrl?: string;
  date: string;
  role: string;
  featured: boolean;
  caseStudy: CaseStudy;
}
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  project?: string;
  internshipId?: string;
  year?: string;
  college?: string;
  location: string;
  period: string;
  type: "Internship" | "Full-time" | "Contract";
  description: string[];
  technologies: string[];
  achievements: string[];
}
export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  periodOrYear: string;
  scoreOrStatus: string;
}
export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  issueDate?: string;
  role?: string;
  project?: string;
  internshipId?: string;
  period?: string;
  file?: string;
  courseDuration?: string;
  score?: string;
  achievement?: string;
  credits?: string;
  certificateNumber?: string;
  validUntil?: string;
  verificationUrl?: string;
  recipient?: string;
}
export interface Achievement {
  id: string;
  title: string;
  organization: string;
  details?: string;
}
export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  icon: string;
}
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
