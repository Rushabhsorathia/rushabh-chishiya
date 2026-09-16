import { MapPin, Calendar, Sparkles, BookOpen, Briefcase, Building2, Github, ExternalLink } from 'lucide-react'
import { identity, skills, projects, currentRules, notThis, butThis } from '../data/about'

function SkillGroup({ group, items }) {
  return (
    <div className="card p-5">
      <div className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-3">
        {group}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((s) => (
          <span key={s} className="tag">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-ink-400">
            /about
          </span>
        </div>
        <h1 className="heading-1">About me.</h1>
        <p className="mt-4 text-lg text-ink-600 max-w-2xl">
          Identity, skills, projects, current rules. The person behind the
          commits.
        </p>
      </section>

      {/* Identity card */}
      <section className="section pt-0">
        <div className="card p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="sm:col-span-2 space-y-3">
              <h2 className="font-display text-2xl font-bold text-ink-900">
                {identity.name}
              </h2>
              <div className="text-ink-700">{identity.title}</div>
              <div className="flex flex-wrap gap-4 text-sm text-ink-500">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" /> {identity.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" /> Born {identity.dob}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <Github className="h-4 w-4" /> GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href={identity.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  rushabhsorathiya.com
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-ink-400">
                Astro snapshot
              </div>
              <div className="text-sm space-y-1">
                <div>
                  <span className="text-ink-500">Lagna:</span>{' '}
                  <span className="text-ink-900">{identity.astrology.lagna}</span>
                </div>
                <div>
                  <span className="text-ink-500">Moon:</span>{' '}
                  <span className="text-ink-900">{identity.astrology.moon}</span>
                </div>
                <div>
                  <span className="text-ink-500">Dasha:</span>{' '}
                  <span className="text-ink-900">Jupiter · 2025-2041</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-ink-200 grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <Briefcase className="h-4 w-4 mt-0.5 text-ink-400 shrink-0" />
              <div>
                <div className="text-ink-500">Currently</div>
                <div className="text-ink-900">
                  Team Leader — {identity.company.name} ·{' '}
                  {identity.company.domain}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building2 className="h-4 w-4 mt-0.5 text-ink-400 shrink-0" />
              <div>
                <div className="text-ink-500">Also</div>
                <div className="text-ink-900">{identity.coCompany.name}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section pt-0">
        <h2 className="heading-2 mb-6">Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {Object.entries(skills).map(([g, items]) => (
            <SkillGroup key={g} group={g} items={items} />
          ))}
        </div>
      </section>

      {/* I AM / I am NOT */}
      <section className="section pt-0">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="card p-6 sm:p-8">
            <h2 className="heading-3 mb-4">I am</h2>
            <ul className="space-y-2 text-sm text-ink-700">
              {butThis.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-ink-900 mt-1">+</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 sm:p-8 bg-ink-50">
            <h2 className="heading-3 mb-4">I am not</h2>
            <ul className="space-y-2 text-sm text-ink-700">
              {notThis.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-ink-400 mt-1">−</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Current rules */}
      <section className="section pt-0">
        <h2 className="heading-2 mb-2">Current operational rules</h2>
        <p className="text-ink-600 mb-6 max-w-2xl">
          How I work every day. Subject to revision. The full character rules
          live on{' '}
          <a href="/rules" className="underline decoration-ink-300 hover:decoration-ink-900">
            the Chishiya page
          </a>
          .
        </p>
        <div className="card p-6 sm:p-8">
          <ol className="space-y-3 text-sm sm:text-base text-ink-700">
            {currentRules.map((r, i) => (
              <li key={i} className="flex gap-3">
                <span className="rule-number shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Project count summary */}
      <section className="section pt-0">
        <div className="card p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-display text-3xl font-bold text-ink-900">
              {projects.length}
            </div>
            <div className="text-sm text-ink-500 mt-1">
              Public projects shipped
            </div>
          </div>
          <a href="/projects" className="btn-outline">
            See all projects
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </section>
    </div>
  )
}
