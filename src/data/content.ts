export type Category = 'frontend' | 'ai' | 'product';
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
    label: 'Frontend',
    blurb: 'Interfaces built with React, TypeScript, and accessible design principles.',
    href: `${profile.links.github}?tab=repositories&q=frontend`,
  },
  {
    id: 'ai',
    label: 'AI',
    blurb: 'Practical experiments with language models, data, and evaluation.',
    href: `${profile.links.github}?tab=repositories&q=ai`,
  },
  {
    id: 'product',
    label: 'Product',
    blurb: 'Research, strategy, and roadmaps informed by real user needs.',
    href: `${profile.links.github}?tab=repositories&q=product`,
  },
];

export const projects: Project[] = [
  {
    slug: 'meadow-ui',
    title: 'Accessible UI Library',
    category: 'frontend',
    metaphor: 'shell',
    summary: 'An accessible React component library with calm defaults and tiny bundles.',
    projectNote: 'Built for accessibility, consistency, and small bundle sizes.',
    year: '2025',
    tags: ['React', 'TypeScript', 'CSS', 'Storybook'],
    live: 'https://example.com/meadow-ui',
    repo: 'https://github.com/your-username/meadow-ui',
    journal: {
      overview: 'Most component kits are large and difficult to adapt. I wanted a small set of keyboard-accessible building blocks with sensible defaults.',
      approach: [
        'Started from design tokens so every colour, radius and space is a variable.',
        'Wrote each component against WCAG AA contrast and tested with a screen reader.',
        'Kept the API small: composition over configuration.',
      ],
      outcome: 'Twelve components, under 9 kB gzipped for the core, and zero accessibility violations in automated audits.',
      reflection: 'Accessibility is easier when it is the first constraint, not the last.',
      snippet: {
        file: 'Button.tsx',
        code: `export function Button({ tone = 'sage', ...props }: ButtonProps) {\n  return <button data-tone={tone} {...props} />;\n}`,
      },
    },
  },
  {
    slug: 'atlas-dashboard',
    title: 'Atlas Dashboard',
    category: 'frontend',
    metaphor: 'starfish',
    summary: 'A fast, responsive analytics dashboard that makes important changes easy to understand.',
    projectNote: 'Designed to surface key changes before detailed metrics.',
    year: '2024',
    tags: ['React', 'Vite', 'D3', 'Web Vitals'],
    live: 'https://example.com/atlas',
    repo: 'https://github.com/your-username/atlas-dashboard',
    journal: {
      overview: 'The original dashboard showed everything at once. Users needed to understand what changed before deciding what to do.',
      approach: [
        'Prioritised a single "what changed" summary above all charts.',
        'Virtualised long tables and lazy-loaded chart code.',
        'Used reduced-motion-aware transitions for every data update.',
      ],
      outcome: 'Largest Contentful Paint dropped from 3.4 s to 1.2 s and support questions about "where is X" fell by half.',
      reflection: 'Performance is a design decision, not a final polish step.',
      snippet: {
        file: 'useReducedMotion.ts',
        code: `const query = '(prefers-reduced-motion: reduce)';\nexport const reduced = () => matchMedia(query).matches;`,
      },
    },
  },
  {
    slug: 'fern-assistant',
    title: 'Notes Assistant',
    category: 'ai',
    metaphor: 'palm',
    summary: 'A retrieval-augmented assistant that answers from your own notes, with citations.',
    projectNote: 'Answers are grounded in source notes and include citations.',
    year: '2025',
    tags: ['LLM', 'RAG', 'Python', 'TypeScript'],
    repo: 'https://github.com/your-username/fern-assistant',
    journal: {
      overview: 'Notes were spread across different documents. I wanted a way to ask questions and verify every answer against its source.',
      approach: [
        'Chunked documents by heading and embedded them into a local vector store.',
        'Forced every answer to quote its source or say "I do not know".',
        'Built an evaluation set of 50 questions to track regressions.',
      ],
      outcome: 'Grounded answers on 92% of evaluation questions, with every claim linked back to the original note.',
      reflection: 'Trust comes from showing the work, not from sounding confident.',
      snippet: {
        file: 'answer.ts',
        code: `const hits = await store.search(question, { k: 4 });\nreturn llm.answer({ question, sources: hits, mustCite: true });`,
      },
    },
  },
  {
    slug: 'sky-classifier',
    title: 'Image Classifier',
    category: 'ai',
    metaphor: 'wave',
    summary: 'A small vision model that names cloud types from a single photo.',
    projectNote: 'Runs locally in the browser without uploading photos.',
    year: '2024',
    tags: ['PyTorch', 'Computer Vision', 'ONNX', 'React'],
    live: 'https://example.com/sky-classifier',
    repo: 'https://github.com/your-username/sky-classifier',
    journal: {
      overview: 'Could a compact model classify cloud types directly in the browser?',
      approach: [
        'Fine-tuned a compact pretrained network on a curated cloud dataset.',
        'Exported to ONNX and ran inference fully on-device.',
        'Designed a result view that shows confidence, not just a label.',
      ],
      outcome: '88% top-1 accuracy, under 40 ms inference on a laptop, and no photo ever leaves the browser.',
      reflection: 'Privacy-friendly AI is often just smaller AI.',
      snippet: {
        file: 'predict.ts',
        code: `const session = await ort.InferenceSession.create('/sky.onnx');\nconst { logits } = await session.run({ input: tensor });`,
      },
    },
  },
  {
    slug: 'trailhead-roadmap',
    title: 'Product Strategy Roadmap',
    category: 'product',
    metaphor: 'lighthouse',
    summary: 'A 12-month product strategy that turned a crowded backlog into three clear bets.',
    projectNote: 'Aligned product priorities around three measurable opportunities.',
    year: '2025',
    tags: ['Strategy', 'Roadmapping', 'Research', 'OKRs'],
    journal: {
      overview: 'The team had 140 backlog items and no shared answer to "what matters most this year?".',
      approach: [
        'Ran 18 customer interviews and clustered the findings into jobs-to-be-done.',
        'Scored opportunities by impact, confidence and effort.',
        'Wrote a one-page narrative so everyone could repeat the strategy.',
      ],
      outcome: 'Three funded bets, a backlog reduced by 70%, and onboarding conversion up 18% after the first release.',
      reflection: 'A roadmap is a story about trade-offs, not a list of features.',
      snippet: {
        file: 'score.md',
        code: `priority = (impact * confidence) / effort\n// ship the top three, write down the rest`,
      },
    },
  },
  {
    slug: 'pebble-onboarding',
    title: 'User Onboarding Redesign',
    category: 'product',
    metaphor: 'coral',
    summary: 'A research-led redesign of first-run experience, tested with real people.',
    projectNote: 'Simplified setup based on observed user behavior and testing.',
    year: '2024',
    tags: ['UX Research', 'A/B Testing', 'Analytics', 'Figma'],
    journal: {
      overview: 'Nearly half of new users left before finishing setup, and the main causes were unclear.',
      approach: [
        'Watched session recordings and interviewed users who dropped off.',
        'Cut the setup from nine steps to four and moved the rest into context.',
        'Ran an A/B test with a pre-registered success metric.',
      ],
      outcome: 'Setup completion rose from 52% to 81%, and time to first value was cut by a third.',
      reflection: 'Removing a step is a feature.',
      snippet: {
        file: 'experiment.json',
        code: `{ "metric": "setup_completed", "mde": 0.05, "duration_days": 14 }`,
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
