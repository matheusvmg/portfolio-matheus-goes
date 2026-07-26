export type SupportedLocale = 'pt-BR' | 'en';

export interface AboutTranslations {
  sectionTitle: string;
  heading: string;
  description: string;
  experienceYears: string;
  experienceYearsText: string;
  experienceYearsDescription: string;
  usersImpacted: string;
  usersImpactedText: string;
  usersImpactedDescription: string;
}

export interface HeroTranslations {
  subtitle: string;
  headingLine1: string;
  headingHighlight: string;
  headingLine2: string;
  ctaPortfolio: string;
  ctaContact: string;
  ctaDownloadCV: string;
}

export interface NavbarTranslations {
  projects: string;
  about: string;
  career: string;
  contact: string;
}

export interface ExperienceTranslations {
  sectionTitle: string;
  heading: string;
}

export interface PortfolioTranslations {
  sectionTitle: string;
  heading: string;
}

export interface CertificationsTranslations {
  sectionTitle: string;
  heading: string;
}

export interface FooterTranslations {
  heading1: string;
  headingHighlight: string;
  heading2: string;
  cvLabel: string;
  copyright: string;
  backToTop: string;
}

export interface TranslationContent {
  navbar: NavbarTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  experience: ExperienceTranslations;
  certifications: CertificationsTranslations;
  portfolio: PortfolioTranslations;
  footer: FooterTranslations;
  experienceData: {
    year: string;
    role: string;
    company: string;
    location: string;
    description: string;
    bulletPoints: string[];
    skills: string[];
  }[];
  projectData: {
    title: string;
    category: string;
  }[];
  certificationData: {
    title: string;
    category: string;
    description: string;
  }[];
}

export interface LocaleContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: TranslationContent;
}