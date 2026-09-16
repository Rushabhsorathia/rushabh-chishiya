import { Link } from 'react-router-dom'
import { ArrowRight, Github, ExternalLink, MapPin, Sparkles, Target } from 'lucide-react'
import { identity, projects } from '../data/about'
import { rules } from '../data/chishiya'

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const featuredRules = rules.slice(0, 4)

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="section">
        <div className="flex items-center gap-2 mb-6">
          <span className="tag">A personal manifesto</span>
          <span className="tag">v1.0</span>
        </div>

        <h1 className="heading-1 leading-[1.05]">
          Chishiya —<br />
          <span className="text-ink-500">a developer's rules</span><br />
          <span className="text-ink-400">for a rigged game.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-2xl leading-relaxed">
          I'm <strong className="text-ink-900">{identity.name}</strong>. I build
          Laravel, React, and self-hosted AI. I lead a team. I run a personal
          platform of 100+ bots. I live by a set of rules borrowed from{' '}
          <em>Alice in Borderland</em> — because the rules of the real game
          aren't any kinder.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/about" className="btn-primary">
            About me <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/chishiya" className="btn-outline">
            The Chishiya rules
          </Link>
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-ink-500">
          <MapPin className="h-4 w-4" />
          {identity.location}
        </div>
      </section>

      {/* The split */}
      <section className="section pt-0">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <Link
            to="/about"
            className="card card-hover p-6 sm:p-8 group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-ink-400 uppercase tracking-wider">
                Half 01
              </span>
              <Sparkles className="h-5 w-5 text-ink-400 group-hover:text-ink-700 transition-colors" />
            </div>
            <h2 className="heading-3 mb-2">About Rushabh</h2>
            <p className="text-ink-600 leading-relaxed">
              Identity, projects, journey, current rules. The person behind the
              code — and the chart.
            </p>
            <div className="mt-6 inline-flex items-center text-sm font-medium text-ink-900">
              Read about me <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            to="/chishiya"
            className="card card-hover p-6 sm:p-8 group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-ink-400 uppercase tracking-wider">
                Half 02
              </span>
              <Target className="h-5 w-5 text-ink-400 group-hover:text-ink-700 transition-colors" />
            </div>
            <h2 className="heading-3 mb-2">The Chishiya rules</h2>
            <p className="text-ink-600 leading-relaxed">
              18 principles. Borrowed from a Netflix character. Lived by a
              Laravel dev in Ahmedabad.
            </p>
            <div className="mt-6 inline-flex items-center text-sm font-medium text-ink-900">
              See the rules <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section pt-0">
        <div className="flex items-end justify-between mb-6">
          <h2 className="heading-2">Featured projects</h2>
          <Link
            to="/projects"
            className="hidden sm:inline-flex text-sm font-medium text-ink-700 hover:text-ink-900"
          >
            All projects <ArrowRight className="ml-1 h-4 w-4 inline" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((p) => (
            <a
              key={p.name}
              href={p.url || '#'}
              target={p.url ? '_blank' : undefined}
              rel={p.url ? 'noreferrer' : undefined}
              className="card card-hover p-5 sm:p-6 block"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="tag">{p.tag}</span>
                {p.url && (
                  <ExternalLink className="h-4 w-4 text-ink-400" />
                )}
              </div>
              <h3 className="font-display font-semibold text-ink-900 mb-2">
                {p.name}
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono uppercase tracking-wide px-2 py-0.5 rounded bg-ink-100 text-ink-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured rules */}
      <section className="section pt-0">
        <div className="flex items-end justify-between mb-6">
          <h2 className="heading-2">A few of the rules</h2>
          <Link
            to="/rules"
            className="hidden sm:inline-flex text-sm font-medium text-ink-700 hover:text-ink-900"
          >
            All 18 <ArrowRight className="ml-1 h-4 w-4 inline" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {featuredRules.map((r) => (
            <div key={r.n} className="card p-5 sm:p-6">
              <div className="rule-number mb-2">{r.n}</div>
              <h3 className="font-semibold text-ink-900 mb-2">{r.title}</h3>
              <p className="text-sm text-ink-600 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
