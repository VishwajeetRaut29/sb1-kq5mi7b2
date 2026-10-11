export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  current?: boolean;
};

export const profile = {
  name: 'Vishwajeet Raut',
  shortName: 'VR.',
  email: 'hello@vishwajeetraut.online',
  officeEmail: 'vishwajeet@raisemoney.ventures',
  linkedin: 'https://www.linkedin.com/in/vishwajeet-raut',
  linkedinLabel: 'in/vishwajeet-raut',
  phone: '+91-9503663993',
  hero: ['Backing founders.', 'Connecting capital.', 'Moving ecosystems forward.'],
  intro:
    'I work at the intersection of startup evaluation, investment readiness and ecosystem building — helping ambitious founders move from potential to the right funding conversations.',
  about: [
    'My journey has taken me through startups, business development, revenue growth, account management and partnerships. Each chapter has sharpened how I evaluate opportunity and build the relationships that help it compound.',
    'Today, I work with founders, global institutes, incubators and funding networks to create practical paths from evaluation to investment — with a clear focus on momentum, fit and execution.'
  ],
  quote: 'Strategy is useful. Execution creates results.',
};

export const experience: Experience[] = [
  {
    company: 'RaiseMoney',
    role: 'Global Investment & Ecosystem Lead',
    period: 'Current',
    location: 'Global · Startup ecosystem',
    description:
      'Building collaboration with global institutes and incubators, empowering the funding network, and supporting startups from evaluation to investment within 90 days.',
    current: true,
  },
  {
    company: 'Townscript',
    role: 'Business & GTM (Enterprise)',
    period: 'Jul 2025 — Mar 2026',
    location: 'APAC · Hybrid',
    description:
      'Enterprise GTM, event partnerships and account management for large-scale conferences across APAC.',
  },
  {
    company: 'Cosmofeed / SuperProfile',
    role: 'Business Growth & Key Accounts Consultant',
    period: 'Apr 2023 — Jul 2025',
    location: 'Gurugram, Haryana · On-site',
    description:
      'Business growth, pre-sales operations and key account management for a creator-focused SaaS platform.',
  },
  {
    company: 'MyStartupTV',
    role: 'Business Head',
    period: 'Dec 2021 — Feb 2023',
    location: 'Hyderabad, Telangana · On-site',
    description:
      'Built and led a new revenue vertical end-to-end across strategy, partnerships and sales.',
  },
];

export const capabilities = [
  { label: 'Investment', items: ['Startup evaluation', 'Investment readiness', 'Funding pathways', 'Deal flow development', 'Founder support'] },
  { label: 'Ecosystem', items: ['Incubation networks', 'Global institutes', 'Capital introductions', 'Incubator collaboration', 'Strategic partnerships'] },
  { label: 'Go-to-market', items: ['GTM strategy', 'Business development', 'Enterprise sales', 'Partnership strategy', 'Key accounts'] },
  { label: 'Execution', items: ['Pipeline development', 'Stakeholder management', 'Program coordination', 'Relationship management', 'Team leadership'] },
];

export const insights = [
  { number: '01', title: 'What makes a startup ready for the right investment conversation', label: 'Investment readiness' },
  { number: '02', title: 'Why a strong ecosystem can accelerate founder momentum', label: 'Startup ecosystems' },
  { number: '03', title: 'The relationship architecture behind meaningful capital access', label: 'Funding networks' },
];
