import * as T from './types'

const projects: T.Project[] = [
  {
    name: 'Portfolio',
    description: 'This portfolio',
    technologies: ['NextJS', 'TypeScript'],
    repoName: 'github.io',
    appUrl: 'https://gabrielgrs.github.io/',
  },
  {
    name: 'Biodinâmica Saúde',
    description: 'Clinical landing page',
    technologies: ['NextJS', 'TypeScript', 'GraphQL'],
    repoName: 'biodinamica',
    appUrl: 'https://www.biodinamicasaude.com.br',
  },
  {
    name: 'Developers Club',
    description: 'Created from developers to developers',
    technologies: ['NextJS', 'TypeScript', 'Supabase'],
    repoName: 'developer-experience',
    appUrl: 'https://developer-experience.vercel.app/',
  },
  {
    name: 'Leopardus',
    description: 'Legal platform of a chatbot aimed at creating analysis of court cases',
    technologies: ['React', 'NodeJS', 'MongoDB', 'AWS'],
    appUrl: 'https://leopardus.vercel.app/',
  },
  {
    name: 'Isha App',
    description:
      'Prototypes aimed at creating an MVP of a project aimed at managing a medical clinic',
    technologies: ['NextJS', 'TypeScript'],
    appUrl: 'https://health-app-psi.vercel.app/',
    repoName: 'health-app',
  },
]

export default projects
