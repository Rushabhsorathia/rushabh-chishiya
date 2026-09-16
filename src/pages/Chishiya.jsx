import { character, lines, why } from '../data/chishiya'

export default function ChishiyaPage() {
  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-ink-400">
            /chishiya
          </span>
        </div>
        <h1 className="heading-1">The character.</h1>
        <p className="mt-4 text-lg text-ink-600 max-w-2xl">
          Where the rules come from. Why a Laravel dev in Ahmedabad borrows
          from a Netflix show.
        </p>
      </section>

      {/* Character card */}
      <section className="section pt-0">
        <div className="card p-6 sm:p-10">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-10">
            <div>
              <div className="h-32 sm:h-48 w-full rounded-xl bg-gradient-to-br from-ink-900 via-ink-800 to-ink-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white_1px,transparent_1px)] bg-[size:12px_12px]" />
                <div className="relative font-display text-7xl sm:text-8xl font-black text-white">
                  C
                </div>
              </div>
              <div className="mt-4 text-xs font-mono uppercase tracking-wider text-ink-400">
                {character.origin}
              </div>
            </div>
            <div className="sm:col-span-2 space-y-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-1">
                  Archetype
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900">
                  {character.archetype}
                </h2>
              </div>
              <p className="text-ink-600 leading-relaxed">
                {character.signature}
              </p>
              <ul className="space-y-2 text-sm text-ink-700">
                {character.core.map((c, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-ink-400 mt-1 shrink-0">›</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lines */}
      <section className="section pt-0">
        <h2 className="heading-2 mb-6">Lines he actually said</h2>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {lines.map((line, i) => (
            <blockquote
              key={i}
              className="card p-5 sm:p-6 font-display italic text-ink-700 leading-relaxed"
            >
              {line}
            </blockquote>
          ))}
        </div>
      </section>

      {/* Why Chishiya */}
      <section className="section pt-0">
        <div className="card p-6 sm:p-10 bg-ink-900 text-white">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
            {why.heading}
          </h2>
          <div className="space-y-4 text-ink-300 leading-relaxed">
            {why.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
