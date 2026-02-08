
export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  bulletPoints?: string[];
  skills?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  colorClass: string;
}
