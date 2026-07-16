interface Text {
  text: string;
  link?: string;
  list?: Text[];
}

export interface Work {
  title: Text;
  description: string;
  list: Text[];
}

export const WORKS: Work[] = [
  {
    title: { text: 'Algonova' },
    description: '',
    list: [
      {
        text: 'I took a landing-page platform from zero to production solo — Next.js SSR frontend, schema-driven multi-country/multi-locale CMS on Prisma/PostgreSQL, and a full admin UI I designed myself with no mockups — through autonomous end-to-end ownership.',
      },
      {
        text: 'I built an MCP server on the CMS exposing auth-protected tools for pages, sections, media, and localization, letting AI agents manage content end to end — an early AI-native content workflow.',
      },
      {
        text: 'I refactored a tightly coupled legacy frontend (20+ pages, 40+ business entities) by migrating to Feature-Sliced Design with Redux Toolkit Query and React Context, cutting new-developer ramp-up time and accelerating feature delivery through autonomous ownership.',
      },
      {
        text: 'I rebuilt the UI kit around a unified design token system, optimized responsive breakpoints, and added accessibility and touch support across components, cutting UI inconsistency bugs and speeding up new feature development.',
      },
      {
        text: 'I built a learning track system end to end by aligning REST APIs with the backend and shipping iteratively, increasing course completion and user engagement.',
      },
      {
        text: 'I added a gamification module with rewards, reviewing specs and coordinating backend integration, driving measurable gains in user activity and retention.',
      },
      {
        text: 'I automated translations with n8n and AI, auto-generating and updating translation files to remove manual work and speed up localization.',
      },
    ],
  },
  {
    title: { text: 'Halsa', link: 'https://myhalsa.ru/' },
    description:
      'An innovative platform for crafting customised vitamin formulations tailored to individual needs',
    list: [
      {
        text: 'I migrated a vanilla JavaScript app to React, refactoring core business logic and cutting code size, which sped up feature delivery and improved code quality.',
      },
      {
        text: 'I built a dynamic survey editor (50-100 conditional questions) end to end, with graph visualization, responsive templates, and smart navigation logic, letting non-developers build surveys directly and reducing editing errors.',
      },
      {
        text: 'I continuously improved key purchase flow pages through A/B testing, new payment methods, and hypothesis validation, increasing conversion rates through data-informed iteration.',
      },
    ],
  },
  {
    title: { text: 'Vizlb', link: 'https://vizbl.us/' },
    description:
      'Cutting-edge mobile app that elegantly situates 3D models within physical spaces, transforming imagination into immersive reality',
    list: [
      {
        text: 'I set up a standard release cycle and CI/CD pipeline — Webpack builds, environment configs, DigitalOcean deploys, versioning, and Sentry integration — bringing operational rigor and reliability to the team.',
      },
      {
        text: 'I built a page builder using Handlebars, letting product teams run experiments and change pages without developer involvement or new deploys.',
      },
      {
        text: 'I built a 3D model moderation suite — admin interfaces, upload forms for multiple texture types, and Three.js previews — giving moderators the tools to review and approve user-uploaded models before they went live, keeping bad content off the platform.',
      },
      {
        text: 'I built an embeddable 3D model widget using React and REST APIs, letting external sites display models directly from the database.',
      },
    ],
  },
  {
    title: { text: 'Agile' },
    description: 'Application for conducting audio-video conferences',
    list: [
      {
        text: 'I built a scalable video conferencing platform supporting 50+ concurrent users, implementing WebSocket for real-time sync, two WebRTC libraries, and role-based interactions.',
      },
      {
        text: 'I built meeting scheduling forms with timezone support and custom layouts, iterating through design feedback loops to improve usability.',
      },
      {
        text: 'I connected the frontend to blockchain via smart contract reverse-engineering and MetaMask integration, enabling secure on-chain interactions without existing documentation to rely on.',
      },
    ],
  },
  {
    title: { text: 'Triumff' },
    description:
      'Coded visual representations for a variety of banking services',
    list: [
      {
        text: 'I built complex banking forms (account opening, insurance) with advanced validation, responsive design, and accessibility support, meeting compliance requirements.',
      },
      {
        text: 'I led full UI implementation in close collaboration with backend, integrating REST APIs and syncing data flows into clean, intuitive interfaces.',
      },
    ],
  },
];
