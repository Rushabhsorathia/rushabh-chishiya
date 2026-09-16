import { journey } from '../data/about'
import { Sparkles, Calendar } from 'lucide-react'

export default function Journey() {
  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-ink-400">
            /journey
          </span>
        </div>
        <h1 className="heading-1">Journey.</h1>
        <p className="mt-4 text-lg text-ink-600 max-w-2xl">
          From Jamnagar to Ahmedabad. From PHP scripts to a self-hosted AI
          platform. The arc so far.
        </p>
      </section>

      <section className="section pt-0">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-px bg-ink-200 -translate-x-1/2 hidden sm:block" />
          <div className="space-y-6 sm:space-y-10">
            {journey.map((j, i) => (
              <div
                key={i}
                className={`relative flex flex-col sm:flex-row ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } sm:items-center gap-4 sm:gap-8`}
              >
                {/* Dot */}
                <div className="absolute left-3 sm:left-1/2 top-3 w-3 h-3 rounded-full bg-ink-900 border-4 border-white shadow-soft -translate-x-1/2 z-10" />

                <div className="hidden sm:block sm:w-1/2" />

                <div className="card p-5 sm:p-6 sm:w-1/2 ml-8 sm:ml-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-3.5 w-3.5 text-ink-400" />
                    <span className="text-xs font-mono text-ink-500 uppercase tracking-wider">
                      {j.year}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink-900 mb-2">
                    {j.title}
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">{j.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next arc */}
      <section className="section pt-0">
        <div className="card p-6 sm:p-8 bg-ink-900 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-accent-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-ink-400">
              The next arc
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Jupiter Mahadasha · 2025 - 2041.
          </h2>
          <p className="text-ink-300 leading-relaxed max-w-2xl">
            Sixteen years of expansion. Scaling RainStreamWeb. Going deep on AI
            agents and automation. Building toward freelance income on
            Toptal / Upwork / Fiverr. English fluency. Team leadership at the
            next level. The next arc starts here.
          </p>
        </div>
      </section>
    </div>
  )
}
