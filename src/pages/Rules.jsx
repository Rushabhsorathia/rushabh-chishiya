import { rules, notRules } from '../data/chishiya'

export default function Rules() {
  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-ink-400">
            /rules
          </span>
        </div>
        <h1 className="heading-1">The 18 rules.</h1>
        <p className="mt-4 text-lg text-ink-600 max-w-2xl">
          Chishiya's playbook, written down. The full operational list — read,
          keep, or ignore.
        </p>
      </section>

      <section className="section pt-0">
        <div className="space-y-3 sm:space-y-4">
          {rules.map((r) => (
            <article
              key={r.n}
              className="card p-5 sm:p-7 card-hover"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="shrink-0">
                  <div className="rule-number">{r.n}</div>
                  <div className="mt-2 hidden sm:block h-px w-8 bg-ink-200" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-semibold text-lg sm:text-xl text-ink-900 mb-2">
                    {r.title}
                  </h2>
                  <p className="text-ink-600 leading-relaxed">{r.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Anti-rules */}
      <section className="section pt-0">
        <h2 className="heading-2 mb-2">And the anti-rules.</h2>
        <p className="text-ink-600 mb-6 max-w-2xl">
          Things I won't do. Same weight as the rules above.
        </p>
        <div className="card p-6 sm:p-8 bg-ink-50">
          <ul className="space-y-3 text-ink-800">
            {notRules.map((r, i) => (
              <li key={i} className="flex gap-3 text-sm sm:text-base">
                <span className="font-mono text-ink-400 shrink-0">
                  −{String(i + 1).padStart(2, '0')}
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
