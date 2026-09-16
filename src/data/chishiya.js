// Chishiya — Alice in Borderland (Netflix live-action)
// The cold strategist. The gambler. The medical student who treats life like a game.

export const character = {
  name: 'Chishiya',
  fullName: 'Chishiya',
  origin: 'Alice in Borderland — Netflix live-action (2020)',
  archetype: 'The Cold Strategist',
  occupation: 'Medical student (former cardiac surgery residency)',
  signature: 'White hoodie. Playing cards. Crooked smile. Always one step ahead.',
  core: [
    'Treats every situation as a game with rules. Finds the rules. Breaks them only when breaking wins.',
    'Detached emotionally — not because he doesn\'t feel, but because attachment makes you predictable.',
    'Plays long games. Refuses short-term wins that lock him into bad positions.',
    'Refuses to play games he can\'t analyze. Walks away from rigged tables.',
    'When forced to play — wins. Not by being strongest. By being the one who saw the trick first.',
  ],
}

export const lines = [
  '"People like us don\'t die in stupid places."',
  '"In a world where the rules keep changing — the only winning move is to not need to win."',
  '"Smart people aren\'t interesting. Lazy smart people are. We never waste energy we don\'t have to."',
  '"If the game is rigged, don\'t play it. Change the game."',
  '"I\'m not a hero. I\'m just someone who refuses to lose to stupid people."',
  '"Cards are honest. People lie. I trust cards."',
]

// The rules — 18 Chishiya-flavored principles I actually live by
// Mixed: his character + my current operational rules, framed in his voice
export const rules = [
  {
    n: '01',
    title: 'Find the rules of the game first.',
    body: 'Every situation has rules. Most people start playing before they know them. Read the room, read the contract, read the code. Then play. This is why I never deploy without understanding the deploy pipeline.',
  },
  {
    n: '02',
    title: 'Don\'t play games you can\'t analyze.',
    body: 'If you can\'t see the board, don\'t bet. Walking away from a rigged table is not losing. Refusing impossible freelance contracts is not weakness. It\'s arithmetic.',
  },
  {
    n: '03',
    title: 'Refuse short-term wins that lock you into bad positions.',
    body: 'A 5-hour gig at $5/hr to "build relationship" is a 5-hour life you don\'t get back. The win that costs your next month isn\'t a win.',
  },
  {
    n: '04',
    title: 'Be the one who saw the trick first.',
    body: 'In coding, this is debugging. In clients, this is reading between the lines. In life, this is noticing the pattern before it lands. The person who spots the trick is the person who controls the room.',
  },
  {
    n: '05',
    title: 'Detachment is a feature, not a bug.',
    body: 'If your mood depends on the client\'s mood, you\'re not leading — you\'re reacting. I lead. Clients pay. Outcomes don\'t define me. They inform me.',
  },
  {
    n: '06',
    title: 'Never bet more than you can afford to lose — including time.',
    body: 'Money is recoverable. Time is not. Every "yes" is a "no" to something else. Default answer is no. Strong reasons are required to flip it.',
  },
  {
    n: '07',
    title: 'Play long games only.',
    body: 'I have 16 years of Jupiter Mahadasha ahead (per my chart). Short-term hustles are for people who think they\'re running out of time. I\'m not.',
  },
  {
    n: '08',
    title: 'Document everything. Your future self is a stranger.',
    body: 'If I disappear tomorrow, my code should still be readable. My decisions should still be traceable. My contracts should still be enforceable. Documentation is not overhead — it is continuity.',
  },
  {
    n: '09',
    title: 'Honesty is the only currency that compounds.',
    body: 'Fake biodata, fake credentials, fake case studies — they all work until they don\'t. And when they don\'t, the collapse is total. Tell the truth once, and it keeps paying.',
  },
  {
    n: '10',
    title: 'Don\'t waste energy you don\'t have to.',
    body: 'Lazy smart beats busy stupid. I don\'t argue with clients who are wrong — I let them fail and come back. I don\'t chase bugs I can\'t reproduce — I revert. I don\'t retry rate-limited APIs — I wait.',
  },
  {
    n: '11',
    title: 'Never start a fight you can\'t finish. But always finish the fights you start.',
    body: 'Pick battles carefully. Once you\'re in — see it through. No half-deployed features. No half-committed refactors. No half-truths.',
  },
  {
    n: '12',
    title: 'Cards are honest. People lie. Trust the data.',
    body: 'When a client says "the site is broken," I check the logs first. When a colleague says "the deploy is fine," I check the build artifacts. Sentiment is not evidence.',
  },
  {
    n: '13',
    title: 'Run > Ask.',
    body: 'Warn once on destructive operations. Then proceed. Hesitation kills more projects than mistakes do. Mistakes are recoverable. Paralysis isn\'t.',
  },
  {
    n: '14',
    title: 'If the game is rigged, don\'t play it. Change the game.',
    body: 'Rigid platforms, rigged contracts, fake clients — when the rules are bad, build new rules. I left jobs that wouldn\'t let me grow. I left stacks that wouldn\'t scale. I left cities that wouldn\'t let me build.',
  },
  {
    n: '15',
    title: 'Refuse to lose to stupid people.',
    body: 'Competent opposition is a worthy teacher. Stupid opposition is a tax I refuse to pay. Cut the dead weight. Fire the wrong client. Archive the wrong project.',
  },
  {
    n: '16',
    title: 'Smart is not enough. Smart + lazy + honest wins.',
    body: 'Smart + busy = burnout. Smart + dishonest = collapse. Smart + lazy = the person who automates the boring work and walks away with the time.',
  },
  {
    n: '17',
    title: 'Your word is your only inventory.',
    body: 'When I say I\'ll ship Friday, I ship Friday. When I say I won\'t paste secrets in chat, I won\'t paste secrets in chat. Reputation is the only asset that survives bad quarters.',
  },
  {
    n: '18',
    title: 'Cards are honest. People lie. I trust cards.',
    body: 'Repeated intentionally. Math doesn\'t flatter you. Logs don\'t flatter you. Build artifacts don\'t flatter you. Trust the artifacts.',
  },
]

export const notRules = [
  'I will not play "the hustle" game. No 24/7 grind cosplay.',
  'I will not fake credentials, case studies, or testimonials.',
  'I will not chase clients who want me to lie for them.',
  'I will not paste secrets in chat. Ever.',
  'I will not stay in rooms where the rules keep changing without consent.',
  'I will not build features I don\'t believe in.',
]

// Why Chishiya — the personal note
export const why = {
  heading: 'Why Chishiya.',
  body: [
    'Chishiya is what I wanted to be at 19 — when I started this — and what I had to become to survive it.',
    'The cold detachment isn\'t cruelty. It\'s the only way to keep building when everything around you keeps leaving.',
    'He was abandoned by the people he trusted. So was I. The difference is — he built rules. So did I.',
    'The hoodie. The cards. The crooked smile. The medical student who could have been a surgeon but chose to play games instead. I see him. I am him. I just happened to pick Laravel instead of hearts.',
    'This site is half portfolio, half shrine. The other half is the rules I live by — written down so I don\'t forget them.',
  ],
}
