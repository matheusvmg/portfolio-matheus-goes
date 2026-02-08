
import { ExperienceItem, ProjectItem } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: 'Mar 2025 — Atual',
    role: 'Engenheiro de Software Sênior',
    company: 'Accurate Software - GM Financial',
    location: 'São Paulo, Brazil · Remote',
    description: 'Desenvolvimento de soluções para sistema de financiamento automotivo GM Financial',
    bulletPoints: [
      'Construção do design system para o sistema utilizando React.js',
      'Atualização do node 14 para o node 22',
      'Padronização do projeto e documentação de Arquitetura de software',
      'Refinamento técnico e escrita das user stories',
      'Refatoração e unificação de módulo antigos com atualização do build system melhorando a performance da aplicação'
    ],
    skills: ['React.js', 'Redux', 'Node.js', 'Redux Thunk', 'Software Design', 'Kanban']
  },
  {
    year: 'Jan 2025 — Mar 2025',
    role: 'Engenheiro de Software Mobile Sênior',
    company: 'Accurate Software',
    location: 'São Paulo, Brazil · Remote',
    description: 'Arquitetura de soluções e desenvolvimento de aplicações de alta escalabilidade',
    bulletPoints: [
      'Desenvolvimento de engenharia de plataforma através de boilerplates',
      'Redução do tempo de início de projetos mobile através do uso de Templates',
      'Padronização e documentação de Arquitetura mobile'
    ],
    skills: ['Software Architecture', 'React Native', 'React.js', 'Software Design', 'TypeScript', 'iOS', 'Android', 'Mobile Enterprise']
  },
  {
    year: 'Nov 2023 — Jan 2025',
    role: 'Engenheiro de Software Mobile Sênior',
    company: 'Accurate Software - Claro Brasil',
    location: 'São Paulo, Brazil · Remote',
    description: 'Desenvolvimento mobile para o aplicativo Minha Claro Móvel com foco na refatoração e migração de um aplicativo nativo para um cross-platform.',
    bulletPoints: [
      'Refatoração de módulos internos melhorando a performance do aplicativo',
      'Migração de um app nativo para um app híbrido utilizando React Native',
      'Documentação e melhoria de processos do time de desenvolvimento (Code review, Onboarding)'
    ],
    skills: ['React Native', 'Android', 'iOS', 'GraphQL', 'React.js', 'Redux', 'TypeScript']
  },
  {
    year: 'Nov 2021 — Fev 2024',
    role: 'iOS Developer',
    company: 'Accurate Software - Claro Brasil',
    location: 'São Paulo, Brazil',
    description: 'Desenvolvimento mobile nativo iOS para Claro S.A, Aplicativo que ajuda os clientes a obterem todas as informações necessárias sobre seus produtos da Claro, além de ajudar com problemas técnicos (suporte digital pelo App).',
    bulletPoints: [
      'Criação da biblioteca para iOS no Design System da empresa',
      'Desenvolvimento do aplicativo para Apple Watch utilizando SwiftUI',
      'Liderança do time iOS com foco em passagem de conhecimento, discussões sobre arquitetura e desenvolvimento do projeto',
      'Suporte e melhorias na entrega contínua através de pipelines de desenvolvimento'
    ],
    skills: ['watchOS', 'Swift (Programming Language)', 'Object-Oriented Programming (OOP)', 'iOS', 'design system', 'UIKit', 'SwiftUI', 'Agile Methodologies']
  },
  {
    year: 'Out 2020 — Nov 2021',
    role: 'Desenvolvedor de Software',
    company: 'Accurate Software',
    location: 'São Paulo, Brasil · Remote',
    description: 'Desenvolvimento de aplicações Frontend como desenvolvedor de software, trabalhando com múltiplos times, construindo projetos importantes e de grande escala.',
    bulletPoints: [
      'Desenvolvimento Frontend com Next.js com foco em otimização de desempenho e suporte a SEO',
      'Desenvolvimento e melhorias técnicas no projeto'
    ],
    skills: ['React.js', 'CSS', 'Next.js', 'Vue.js']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Mondrian iOS Design System',
    category: 'Design System',
    imageUrl: '/mondrian.png',
    colorClass: 'hover:bg-spring-green'
  }
];
