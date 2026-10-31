export type Category = 'frontend' | 'product';
export type Metaphor = 'shell' | 'starfish' | 'coral' | 'palm' | 'wave' | 'lighthouse';

export interface Project {
  slug: string;
  title: string;
  category: Category;
  metaphor: Metaphor;
  /** Short line shown on the project card */
  summary: string;
  /** Additional project context shown on the project card */
  projectNote: string;
  year: string;
  tags: string[];
  live?: string;
  repo?: string;
  journal: {
    overview: string;
    approach: string[];
    outcome: string;
    reflection: string;
    snippet: { file: string; code: string };
  };
}

// Edit this file to make the portfolio yours.
export const profile = {
  name: 'Samiya Shaikh',
  role: 'Software engineer | AI Application Engineering | Product Thinking',
  headline: 'I build ideas into experiences',
  intro:
    'Turning complex problems into intuitive, impactful digital experiences through thoughtful engineering, AI exploration, and a product-first mindset. Driven by intellectual curiosity and a commitment to continuous learning, building solutions that are not only functional but meaningful.',
  email: 'samiya.shaikh1005@gmail.com',
  links: {
    github: 'https://github.com/error404-vx',
    linkedin: 'https://www.linkedin.com/in/samiya-shaikh-1b63a2179',
  },
};

export const categories: { id: Category; label: string; blurb: string; href: string }[] = [
  {
    id: 'frontend',
    label: 'Web apps',
    blurb: 'Browser-based tools built with React, TypeScript, and accessible interfaces.',
    href: `${profile.links.github}?tab=repositories`,
  },
  {
    id: 'product',
    label: 'Productivity tools',
    blurb: 'Practical workflows that make complex tasks clearer and easier to complete.',
    href: `${profile.links.github}?tab=repositories`,
  },
];

export const projects: Project[] = [
  {
    slug: 'aabrakadabra-resume',
    title: 'AabraKaDabra Resume',
    category: 'product',
    metaphor: 'lighthouse',
    summary: 'Tailors an ATS-friendly Word resume to a job description using structured role and keyword analysis.',
    projectNote: 'Generates an editable .docx and highlights personal details that still need to be filled in.',
    year: '2026',
    tags: ['TypeScript', 'Vite', 'Job Analysis', 'DOCX'],
    live: 'https://error404-vx.github.io/AabraKaDabra_Resume/',
    repo: 'https://github.com/error404-vx/AabraKaDabra_Resume',
    journal: {
      overview: 'Tailoring a resume to each role can take time. This browser-based tool turns a pasted job description into structured requirements and keywords, then uses them to prepare a draft resume.',
      approach: [
        'Split job descriptions into responsibilities, requirements, and preferred qualifications.',
        'Match a catalogue of roughly 400 skills and detect additional acronyms, tools, seniority, education, and certifications.',
        'Generate an editable Word document with standard sections, real bullets, and A4 or Letter page sizing.',
      ],
      outcome: 'Creates a single-column .docx and highlights unfilled personal details as yellow placeholders so they are easy to review.',
      reflection: 'Generated experience bullets describe what a job asks for, so every line must be checked against the applicant’s real experience.',
      snippet: {
        file: 'src/core/resume/docx.ts',
        code: `highlight: /^\\[.*\\]$/.test(part) ? 'yellow' : undefined,`,
      },
    },
  },
  {
    slug: 'ui-accessibility-helper',
    title: 'UI Accessibility Helper',
    category: 'frontend',
    metaphor: 'wave',
    summary: 'Scans a URL or pasted HTML and turns accessibility and performance findings into a prioritized, fix-oriented report.',
    projectNote: 'Includes visual issue highlights, copy-ready fixes, contrast suggestions, keyboard checks, and exportable reports.',
    year: '2026',
    tags: ['React', 'TypeScript', 'Express', 'Playwright', 'axe-core', 'WCAG'],
    live: 'https://error404-vx.github.io/UI_Accessibility_Helper/',
    repo: 'https://github.com/error404-vx/UI_Accessibility_Helper',
    journal: {
      overview: 'A pass/fail score alone does not show where an accessibility issue appears or how to address it. This tool combines browser scans with visual and structural reports to make findings easier to act on.',
      approach: [
        'Use Playwright and axe-core to inspect common WCAG failures and capture highlighted screenshots.',
        'Report page landmarks and heading structure, recorded keyboard order, focus behavior, and performance metrics.',
        'Suggest nearby passing colors, provide copy-ready fixes, and save scans for comparison and export.',
      ],
      outcome: 'Brings accessibility, keyboard, structure, and performance findings into one report, with Markdown, JSON, and print-to-PDF export options.',
      reflection: 'URL scans guard against private and local network addresses, while pasted HTML is rendered without external network requests.',
      snippet: {
        file: 'server/scan/runner.ts',
        code: `if (await isHostAllowed(url.hostname, hostCache)) return route.continue();\nreturn route.abort();`,
      },
    },
  },
];

export const exploring = [
  { label: 'Reading', text: 'Inspired, slowly, one chapter per week, and business management books.' },
  { label: 'Building', text: 'An on-device writing companion that never sends a word to the cloud.' },
  { label: 'Learning', text: 'Software architecture, design patterns,and how to advance in ai powered applications.' },
  { label: 'Interests', text: 'Travelling, Cooking, Learning, and Discovering new experiences.' },
];
