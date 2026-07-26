import { TranslationContent } from './types';

export const en: TranslationContent = {
  navbar: {
    projects: 'Projects',
    about: 'About',
    career: 'Career',
    contact: 'Contact',
  },
  hero: {
    subtitle: 'Full-stack & Mobile Software Engineering',
    headingLine1: 'Building',
    headingHighlight: 'robust & scalable',
    headingLine2: 'solutions from Front to Back-end.',
    ctaPortfolio: 'Explore Portfolio',
    ctaContact: 'Start a Project',
    ctaDownloadCV: 'Download Resume',
  },
  about: {
    sectionTitle: 'Software Engineering',
    heading: 'Turning Complexity into Scalable Solutions.',
    description:
      'Software Engineer with over 5 years of experience developing web and mobile applications. I have worked on large-scale projects for companies like Claro and GM Financial, participating in architecture definition, system modernization, Design System creation, and technical leadership. I have solid experience with React, React Native, Node.js, TypeScript, and Swift, always focusing on quality, scalability, and engineering best practices.',
    experienceYears: '05+',
    experienceYearsText: 'Years of Experience',
    experienceYearsDescription:
      'Expertise in React Native, native iOS, React.js, Node.js, and TypeScript. Focus on software architecture and enterprise design systems.',
    usersImpacted: '10M+',
    usersImpactedText: 'Users Impacted',
    usersImpactedDescription:
      'Mobile and web applications used by millions of users in projects for GM Financial and Claro Brasil.',
  },
  experience: {
    sectionTitle: 'Career Path',
    heading: 'Professional Experience',
  },
  certifications: {
    sectionTitle: 'Differentiator',
    heading: 'Certifications',
  },
  portfolio: {
    sectionTitle: 'Curated Selection',
    heading: 'Featured Projects',
  },
  footer: {
    heading1: "Let's build",
    headingHighlight: 'great project.',
    heading2: 'your next',
    cvLabel: 'Resume',
    copyright: '© 2026 MATHEUS GÓES. ALL RIGHTS RESERVED.',
    backToTop: 'Back to top',
  },
  experienceData: [
    {
      year: 'Mar 2025 — Present',
      role: 'Senior Software Engineer',
      company: 'Accurate Software - GM Financial',
      location: 'São Paulo, Brazil · Remote',
      description:
        'Development and evolution of a high-scale automotive financing platform for GM Financial',
      bulletPoints: [
        'Development of the application Design System, promoting standardization, component reuse, and increased team productivity',
        'Led the platform upgrade from Node.js 14 to Node.js 22, modernizing the tech stack and reducing maintenance risks',
        'Project standardization and Software Architecture documentation',
        'Conducted technical refinements and defined user stories together with cross-functional teams',
        'Refactored and unified legacy modules with build system upgrades, improving application performance',
      ],
      skills: [
        'React.js',
        'Redux',
        'Node.js',
        'Redux Thunk',
        'Software Design',
        'Kanban',
      ],
    },
    {
      year: 'Jan 2025 — Mar 2025',
      role: 'Senior Mobile Software Engineer',
      company: 'Accurate Software',
      location: 'São Paulo, Brazil · Remote',
      description:
        'Solution architecture and development of high-scalability applications as Platform Engineering',
      bulletPoints: [
        'Development of reusable boilerplates that significantly reduced the time to create new mobile projects',
        'Active participation in architectural decisions for the solution',
      ],
      skills: [
        'Software Architecture',
        'React Native',
        'React.js',
        'Software Design',
        'TypeScript',
        'iOS',
        'Android',
        'Mobile Enterprise',
      ],
    },
    {
      year: 'Nov 2023 — Jan 2025',
      role: 'Senior Mobile Software Engineer',
      company: 'Accurate Software - Claro Brasil',
      location: 'São Paulo, Brazil · Remote',
      description:
        'Development of the Minha Claro Móvel application focused on refactoring and migrating a native application to a cross-platform application',
      bulletPoints: [
        'Refactored critical modules, reducing technical debt and improving application performance and maintainability',
        'Migrated a native iOS app to a hybrid app using React Native',
        'Documented and improved development team processes (Code review, Onboarding)',
      ],
      skills: [
        'React Native',
        'Android',
        'iOS',
        'GraphQL',
        'React.js',
        'Redux',
        'TypeScript',
      ],
    },
    {
      year: 'Nov 2021 — Feb 2024',
      role: 'iOS Developer',
      company: 'Accurate Software - Claro Brasil',
      location: 'São Paulo, Brazil',
      description:
        'Native iOS mobile development for Claro S.A, helping customers get all the necessary information about their Claro products, as well as assisting with technical issues (digital support via the App)',
      bulletPoints: [
        'Created the iOS library for the company Design System',
        'Developed the Apple Watch application using SwiftUI',
        'Led the iOS team with a focus on knowledge sharing, architecture discussions, and project development',
        'Supported and improved continuous delivery through development pipelines',
      ],
      skills: [
        'watchOS',
        'Swift (Programming Language)',
        'Object-Oriented Programming (OOP)',
        'iOS',
        'design system',
        'UIKit',
        'SwiftUI',
        'Agile Methodologies',
      ],
    },
    {
      year: 'Oct 2020 — Nov 2021',
      role: 'Software Developer',
      company: 'Accurate Software',
      location: 'São Paulo, Brazil · Remote',
      description:
        'Frontend application development as a software developer, working with multiple teams, building important and large-scale projects',
      bulletPoints: [
        'Frontend development with Next.js focused on performance optimization and SEO support',
        'Development and technical improvements on the project',
        'Incident/bug fixes and monitoring',
      ],
      skills: ['React.js', 'CSS', 'Next.js', 'Vue.js'],
    },
  ],
  projectData: [
    {
      title: 'Mondrian iOS Design System',
      category: 'Design System',
    },
  ],
  certificationData: [
    {
      title: 'Developing Secure Software',
      category: 'Security',
      description:
        'Certification covering the fundamentals of secure software development, including vulnerability identification, secure coding best practices, and implementation of security controls throughout the development lifecycle.',
    },
    {
      title: 'JavaScript (Intermediate)',
      category: 'Programming Language',
      description:
        'HackerRank certification validating advanced JavaScript skills, including concepts such as asynchrony, closures, prototypes, DOM manipulation, and fundamental algorithms.',
    },
    {
      title: 'EFSET English Certificate (B2 Upper Intermediate)',
      category: 'Language',
      description:
        'EF SET certification proving English proficiency at B2 level (Upper Intermediate) according to the Common European Framework of Reference for Languages (CEFR), validating communication skills in professional and academic contexts.',
    },
    {
      title: 'Scrum Fundamentals Certified (SFC)',
      category: 'Agile Methodology',
      description:
        'SCRUMstudy certification attesting knowledge of Scrum framework fundamentals, including roles, events, artifacts, and agile principles for effective project management.',
    },
  ],
};
