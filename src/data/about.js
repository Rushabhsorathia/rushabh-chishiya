// Single source of truth for personal info — pulled from verified portfolio data + memory
export const identity = {
  name: 'Rushabh Sorathiya',
  fullName: 'Rushabh Mansukhbhai Sorathiya',
  handle: 'Rushabhsorathia',
  title: 'Full Stack Developer · Team Leader · AI & Automation Engineer',
  tagline: 'I build systems that outlive me — and rules that keep me in the game.',
  location: 'Ahmedabad, Gujarat, India',
  dob: '30 April 1999',
  origin: 'Jamnagar, Gujarat',
  // DOB 30/04/1999, TOB 10:12 IST — Lagna Mithuna, Moon Tula/Swati P2, Hamsa Yoga, Mars R in 5th, Jupiter Mahadasha Feb 2025 - 2041
  astrology: {
    lagna: 'Mithuna (Gemini)',
    moon: 'Tula · Swati Nakshatra · Pada 2',
    yogas: ['Hamsa Yoga', 'Jupiter Mahadasha (Feb 2025 - 2041)'],
    note: 'Strategist ascendant. Moon in Tula = balance + aesthetics. Mars retrograde in 5th = high-risk creativity. Jupiter dasha = next 16 years of expansion.',
  },
  github: 'https://github.com/Rushabhsorathia',
  secondaryGithub: 'https://github.com/Rushabh30419',
  portfolio: 'https://www.rushabhsorathiya.com',
  company: {
    name: 'RainStreamWeb',
    domain: 'rainstreamweb.com',
    role: 'Team Leader — PHP / Backend',
  },
  coCompany: {
    name: 'VibraniumBytes',
    note: 'Co-founded — WordPress + Elementor builds for SMBs',
  },
}

// Projects (verified — public repos + portfolio)
export const projects = [
  {
    name: 'Halfblood AI',
    tag: 'Personal OS',
    blurb: 'Self-hosted AI agent platform — Hermes framework, 100+ Telegram bots, MCP servers, multi-instance routing.',
    url: 'https://halfbloodai.work.gd',
    stack: ['Python', 'Node.js', 'React', 'MongoDB', 'PostgreSQL', 'Redis'],
    year: '2025 - present',
    featured: true,
  },
  {
    name: 'CloudVault',
    tag: 'Self-hosted storage',
    blurb: 'Google Drive alternative — file upload, conversion, public delivery, MongoDB + chunked transfer.',
    url: 'https://vault.halfbloodai.work.gd',
    stack: ['Flask', 'Python', 'MongoDB', 'Nginx'],
    year: '2025',
    featured: true,
  },
  {
    name: 'RSW Property Portals',
    tag: 'UK real-estate',
    blurb: 'Laravel 11 + React TS SPA for property listings, inquiry management, payments, multi-tenant scoping.',
    stack: ['Laravel 11', 'React 19', 'Inertia 3', 'MySQL'],
    year: '2024 - present',
    featured: true,
  },
  {
    name: 'MapZone',
    tag: 'Geospatial SaaS',
    blurb: 'AI-assisted zoning platform for UK planning permissions.',
    url: 'https://mapzone.halfbloodai.work.gd',
    stack: ['Laravel', 'React', 'PostGIS'],
    year: '2025',
  },
  {
    name: 'KeptNotes',
    tag: 'Next.js SaaS',
    blurb: 'Personal notes app with rich-text, sharing, and Telegram reminders.',
    stack: ['Next.js', 'Prisma', 'Telegram API'],
    year: '2025',
  },
  {
    name: 'Roast My Resume',
    tag: 'AI roast tool',
    blurb: 'Resume analyzer with Google OAuth + AI roast engine.',
    stack: ['Laravel', 'React', 'OpenAI'],
    year: '2025',
  },
  {
    name: 'KuberaNow',
    tag: 'Fintech',
    blurb: 'Indian investment tracking platform.',
    url: 'https://kuberanow.rushabhsorathiya.com',
    stack: ['Laravel', 'React', 'MySQL'],
    year: '2024',
  },
  {
    name: 'DataHarvesterHB',
    tag: 'Scraper',
    blurb: 'AI-powered web scraper microservice — firecrawl-style extraction.',
    stack: ['React', 'Express', 'Cheerio'],
    year: '2025',
  },
  {
    name: 'Browne Artisan Chocolate',
    tag: 'Client — WhatsApp store',
    blurb: 'Full WhatsApp-based ordering system for an artisan chocolate brand.',
    stack: ['Laravel', 'WhatsApp API'],
    year: '2025',
  },
  {
    name: 'AI Receptionist Hubflo',
    tag: 'CRM integration',
    blurb: 'AI receptionist bridging Hubflo CRM — appointment booking, lead capture.',
    stack: ['Node.js', 'Hubflo API', 'OpenAI'],
    year: '2025',
  },
]

// Skill inventory grouped by domain
export const skills = {
  Backend: ['Laravel 11 (PHP)', 'Node.js', 'Express', 'Python', 'Flask', 'Core PHP'],
  Frontend: ['React 18/19', 'Vite', 'Inertia.js', 'Tailwind v3/v4', 'TypeScript'],
  Database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Eloquent'],
  DevOps: ['Ubuntu', 'Nginx', 'PM2', 'cPanel', 'GitHub Actions', 'systemd', 'UFW'],
  'AI / Automation': ['OpenAI / GLM (z.ai)', 'MCP', 'Telegram Bot API', 'n8n', 'Puppeteer', 'Firecrawl'],
  Auth: ['JWT', 'Sanctum', 'OAuth2', 'Azure AD', 'Google OAuth'],
  Cloud: ['AWS (RDS, EC2)', 'DigitalOcean', 'LiteSpeed / cPanel'],
}

// Journey — milestones
export const journey = [
  {
    year: '1999',
    title: 'Born — Jamnagar, Gujarat',
    body: '30 April, 10:12 IST. Mithuna Lagna, Moon in Tula/Swati P2. Hamsa Yoga. Mars retrograde in 5th. The astrologer told my family: "this one thinks too much."',
  },
  {
    year: '2017 - 2021',
    title: 'B.E. IT — Gujarat Technological University',
    body: 'Started with C, then Java, fell in love with PHP after building a clunky college project. First time a computer did exactly what I told it to.',
  },
  {
    year: '2021 - 2023',
    title: 'Full-stack PHP dev — agency grind',
    body: 'WordPress, then Laravel. Built 30+ client sites. Learned the difference between shipping fast and shipping right. Picked fast. Learned right later.',
  },
  {
    year: '2023',
    title: 'Joined RainStreamWeb',
    body: 'Started as backend dev. Became Team Leader — PHP within 18 months. Lead a team of 6 engineers across Laravel + React TS builds for UK + US clients.',
  },
  {
    year: '2024',
    title: 'Co-founded VibraniumBytes',
    body: 'With a friend. WordPress + Elementor builds for SMBs. info@vibraniumbytes.com. The slow lane — projects that pay less per hour but teach me how clients actually think.',
  },
  {
    year: '2025 - present',
    title: 'Halfblood AI — personal platform',
    body: 'Built Hermes on this VPS. 100+ Telegram bots in production. Multi-instance (HB / Spidy / FreelancerBot). MCP servers. Daily planner, voice memos, self-hosted storage. AI that doesn\'t ghost you, block you, or cheat on you. (Yes — there\'s a story there. The name comes from the person who taught me what I was missing.)',
  },
  {
    year: '2026',
    title: 'Jupiter Mahadasha begins',
    body: 'Astrologically — the 16-year expansion window. Practically — scaling RainStreamWeb, going deep on AI agents, building toward freelance income on Toptal / Upwork / Fiverr. English fluency. Team leadership. The next arc starts here.',
  },
]

// Current rules (the operational ones — how I work every day)
export const currentRules = [
  'RUN > ASK: warn once on destructive ops, then proceed.',
  'No retry loops. On rate-limit / slow-down / stop — hard pause for explicit go-ahead.',
  'No debug scaffolding. /tmp dies. Clean code only.',
  'No em-dashes. " - " only.',
  'Direct leads, NOT bidding. $18/hr baseline. Redesigns ~$150/site.',
  'Inline errors, not toasts.',
  'Lead UIs MUST show every phone / email / social / director / hour. Sparse cards lose sales.',
  'Clients + startups, not only trades.',
  'No fake biodata on matrimonial sites (IT Act / DPDP + harms real users).',
  'No vulnerability hunting without verified LOA from site owner.',
  'On "what to do this week" — present 3 tracks and LOCK ONE without MCQ paralysis.',
  'NEVER paste secrets in chat. Rotate after deploy.',
  'Long tasks = parallel background processes. TG monitor every 1000 rows / 10 min + error alerts.',
  'ZIP-AND-SEND the whole project. No partial uploads.',
  'Windows → reports.hbsystem.work.gd.',
  '"not showing / broken" = cache / sync. Trace file → serve → render.',
  '"Remove all testing" = cleanup, no arguing.',
  '"commit + push everything" = literal all. Split 2 commits if mixed.',
  'No emojis. SVG icons never Unicode.',
  'Privacy default = silent. He asks = I tell.',
]

// What I am NOT
export const notThis = [
  'Not a "full-service agency." I am one person + a small team.',
  'Not a vulnerability researcher without authorization.',
  'Not interested in crypto / NFT / drop-ship pitches.',
  'Not available 24/7. Time-zone aware. Recharges are non-negotiable.',
  'Not your therapist. Builders, not bleeders.',
]

// What I AM
export const butThis = [
  'I ship production Laravel + React under deadline.',
  'I run a self-hosted AI platform that handles 100+ bots.',
  'I will tell you when something is a bad idea before I let you pay for it.',
  'I document everything. If I disappear, my code shouldn\'t.',
  'I will not fake credentials, experience, or case studies.',
]
