import { ExperienceItem, ProjectItem } from "./types";

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: "Mar 2025 — Atual",
    role: "Engenheiro de Software Sênior",
    company: "Accurate Software - GM Financial",
    location: "São Paulo, Brazil · Remote",
    description:
      "Atuação no desenvolvimento e evolução de uma plataforma de financiamento automotivo de alta escala para a GM Financial",
    bulletPoints: [
      "Desenvolvimento do Design System da aplicação, promovendo padronização, reutilização de componentes e maior produtividade do time",
      "Liderança da atualização da plataforma de Node.js 14 para Node.js 22, modernizando a stack tecnológica e reduzindo riscos de manutenção",
      "Padronização do projeto e documentação de Arquitetura de software",
      "Condução de refinamentos técnicos e definição de histórias de usuário em conjunto com equipes multidisciplinares",
      "Refatoração e unificação de módulo antigos com atualização do build system melhorando a performance da aplicação",
    ],
    skills: [
      "React.js",
      "Redux",
      "Node.js",
      "Redux Thunk",
      "Software Design",
      "Kanban",
    ],
  },
  {
    year: "Jan 2025 — Mar 2025",
    role: "Engenheiro de Software Mobile Sênior",
    company: "Accurate Software",
    location: "São Paulo, Brazil · Remote",
    description:
      "Arquitetura de soluções e desenvolvimento de aplicativos de alta escalabilidade como Platform Engineering",
    bulletPoints: [
      "Desenvolvimento de boilerplates reutilizáveis que reduziram significativamente o tempo de criação de novos projetos mobile",
      "Participação ativa nas decisões arquiteturais da solução",
    ],
    skills: [
      "Software Architecture",
      "React Native",
      "React.js",
      "Software Design",
      "TypeScript",
      "iOS",
      "Android",
      "Mobile Enterprise",
    ],
  },
  {
    year: "Nov 2023 — Jan 2025",
    role: "Engenheiro de Software Mobile Sênior",
    company: "Accurate Software - Claro Brasil",
    location: "São Paulo, Brazil · Remote",
    description:
      "Desenvolvimento do aplicativo Minha Claro Móvel com foco na refatoração e migração de um aplicativo nativo para um aplicativo cross-platform",
    bulletPoints: [
      "Refatoração de módulos críticos, reduzindo débito técnico e melhorando desempenho e manutenibilidade da aplicação",
      "Migração de um app nativo iOS para um app híbrido utilizando React Native",
      "Documentação e melhoria de processos do time de desenvolvimento (Code review, Onboarding)",
    ],
    skills: [
      "React Native",
      "Android",
      "iOS",
      "GraphQL",
      "React.js",
      "Redux",
      "TypeScript",
    ],
  },
  {
    year: "Nov 2021 — Fev 2024",
    role: "iOS Developer",
    company: "Accurate Software - Claro Brasil",
    location: "São Paulo, Brazil",
    description:
      "Desenvolvimento mobile nativo iOS para Claro S.A, que ajuda os clientes a obterem todas as informações necessárias sobre seus produtos da Claro, além de ajudar com problemas técnicos (suporte digital pelo App)",
    bulletPoints: [
      "Criação da biblioteca para iOS no Design System da empresa",
      "Desenvolvimento do aplicativo para Apple Watch utilizando SwiftUI",
      "Liderança do time iOS com foco em passagem de conhecimento, discussões sobre arquitetura e desenvolvimento do projeto",
      "Suporte e melhorias na entrega contínua através de pipelines de desenvolvimento",
    ],
    skills: [
      "watchOS",
      "Swift (Programming Language)",
      "Object-Oriented Programming (OOP)",
      "iOS",
      "design system",
      "UIKit",
      "SwiftUI",
      "Agile Methodologies",
    ],
  },
  {
    year: "Out 2020 — Nov 2021",
    role: "Desenvolvedor de Software",
    company: "Accurate Software",
    location: "São Paulo, Brasil · Remote",
    description:
      "Desenvolvimento de aplicações Frontend como desenvolvedor de software, trabalhando com múltiplos times, construindo projetos importantes e de grande escala",
    bulletPoints: [
      "Desenvolvimento Frontend com Next.js com foco em otimização de desempenho e suporte a SEO",
      "Desenvolvimento e melhorias técnicas no projeto",
      "Correção de incidentes/BUGS e monitoramento",
    ],
    skills: ["React.js", "CSS", "Next.js", "Vue.js"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "1",
    title: "Mondrian iOS Design System",
    category: "Design System",
    imageUrl: "/mondrian.png",
    colorClass: "hover:bg-spring-green",
  },
];

export const CERTIFICATIONS: ProjectItem[] = [
  {
    id: "cert1",
    title: "Developing Secure Software",
    category: "Security",
    imageUrl: "/cert-devsec.jpg",
    colorClass: "hover:bg-spring-green",
    description:
      "Certificação que abrange os fundamentos de desenvolvimento seguro de software, incluindo identificação de vulnerabilidades, boas práticas de codificação segura e implementação de controles de segurança no ciclo de vida do desenvolvimento.",
    link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/1fa3a82b-b768-42a3-ad57-76f39d60ef05-matheus-ges-7c59078f-78fe-4517-a87e-cafc5270d5cf-certificate.pdf",
  },
  {
    id: "cert2",
    title: "JavaScript (Intermediate)",
    category: "Programming Language",
    imageUrl: "/cert-js.jpg",
    colorClass: "hover:bg-spring-green",
    description:
      "Certificação HackerRank que valida habilidades avançadas em JavaScript, incluindo conceitos como assincronismo, closures, protótipos, manipulação do DOM e algoritmos fundamentais.",
    link: "https://www.hackerrank.com/certificates/59e73d597af3",
  },
  {
    id: "cert3",
    title: "EFSET English Certificate (B2 Upper Intermediate)",
    category: "Language",
    imageUrl: "/cert-english.jpg",
    colorClass: "hover:bg-spring-green",
    description:
      "Certificação EF SET que comprova proficiência em inglês no nível B2 (Upper Intermediate) de acordo com o Quadro Europeu Comum de Referência para Línguas (CEFR), validando capacidade de comunicação em contextos profissionais e acadêmicos.",
    link: "https://cert.efset.org/V1bpbP",
  },
  {
    id: "cert4",
    title: "Scrum Fundamentals Certified (SFC)",
    category: "Agile Methodology",
    imageUrl: "/cert-scrum.jpg",
    colorClass: "hover:bg-spring-green",
    description:
      "Certificação SCRUMstudy que atesta o conhecimento dos fundamentos do framework Scrum, incluindo papéis, eventos, artefatos e princípios ágeis para gerenciamento eficaz de projetos.",
    link: "/documents/ScrumFundamentalsCertified-MatheusG%C3%B3es-1011433.pdf",
  },
];
