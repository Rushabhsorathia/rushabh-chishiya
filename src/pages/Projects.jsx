import { ExternalLink, Star } from 'lucide-react'
import { projects } from '../data/about'

export default function Projects() {
  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-ink-400">
            /projects
          </span>
        </div>
        <h1 className="heading-1">Projects.</h1>
        <p className="mt-4 text-lg text-ink-600 max-w-2xl">
          Public repos, client builds, self-hosted experiments. Shipped, not
          vaporware.
        </p>
      </section>

      <section className="section pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url || '#'}
              target={p.url ? '_blank' : undefined}
              rel={p.url ? 'noreferrer' : undefined}
              className="card card-hover p-5 sm:p-6 block"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="tag">{p.tag}</span>
                <div className="flex items-center gap-1.5">
                  {p.featured && (
                    <Star className="h-3.5 w-3.5 text-accent-500 fill-accent-500" />
                  )}
                  {p.url && <ExternalLink className="h-4 w-4 text-ink-400" />}
                </div>
              </div>
              <h3 className="font-display font-semibold text-ink-900 mb-2">
                {p.name}
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono uppercase tracking-wide px-2 py-0.5 rounded bg-ink-100 text-ink-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-[10px] font-mono text-ink-400 uppercase tracking-wider">
                {p.year}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
