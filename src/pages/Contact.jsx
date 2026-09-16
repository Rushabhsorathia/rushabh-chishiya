import { Github, ExternalLink, Mail, MapPin, Globe } from 'lucide-react'
import { identity } from '../data/about'

export default function Contact() {
  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-ink-400">
            /contact
          </span>
        </div>
        <h1 className="heading-1">Contact.</h1>
        <p className="mt-4 text-lg text-ink-600 max-w-2xl">
          If the rules above are tolerable to you, we'll probably get along.
        </p>
      </section>

      <section className="section pt-0">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="card card-hover p-6 sm:p-8 block"
          >
            <Github className="h-6 w-6 text-ink-700 mb-3" />
            <div className="font-display font-semibold text-ink-900">
              GitHub
            </div>
            <div className="text-sm text-ink-500 mt-1 font-mono break-all">
              github.com/Rushabhsorathia
            </div>
            <div className="mt-4 inline-flex items-center text-sm text-ink-700">
              Open profile <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </div>
          </a>

          <a
            href={identity.secondaryGithub}
            target="_blank"
            rel="noreferrer"
            className="card card-hover p-6 sm:p-8 block"
          >
            <Github className="h-6 w-6 text-ink-700 mb-3" />
            <div className="font-display font-semibold text-ink-900">
              GitHub (secondary)
            </div>
            <div className="text-sm text-ink-500 mt-1 font-mono break-all">
              github.com/Rushabh30419
            </div>
            <div className="mt-4 inline-flex items-center text-sm text-ink-700">
              Open profile <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </div>
          </a>

          <a
            href={identity.portfolio}
            target="_blank"
            rel="noreferrer"
            className="card card-hover p-6 sm:p-8 block"
          >
            <Globe className="h-6 w-6 text-ink-700 mb-3" />
            <div className="font-display font-semibold text-ink-900">
              Portfolio
            </div>
            <div className="text-sm text-ink-500 mt-1 font-mono break-all">
              rushabhsorathiya.com
            </div>
            <div className="mt-4 inline-flex items-center text-sm text-ink-700">
              Open site <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </div>
          </a>

          <div className="card p-6 sm:p-8">
            <MapPin className="h-6 w-6 text-ink-700 mb-3" />
            <div className="font-display font-semibold text-ink-900">
              Location
            </div>
            <div className="text-sm text-ink-500 mt-1">
              {identity.location}
            </div>
            <div className="text-xs text-ink-400 mt-4">
              Time zone: IST (UTC+5:30)
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="card p-6 sm:p-8 bg-ink-50">
          <h2 className="heading-3 mb-3">How I prefer to work</h2>
          <ul className="space-y-2 text-sm text-ink-700">
            <li className="flex gap-2">
              <span className="text-ink-400 mt-1">›</span>
              <span>Send a brief. Two paragraphs. What you're building, what stage it's at, what you need from me.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ink-400 mt-1">›</span>
              <span>No "let's hop on a call to discuss." If it needs a call, write the agenda first.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ink-400 mt-1">›</span>
              <span>Pay rate floor: $18/hr baseline. Redesigns ~$150/site. Bigger scopes priced on delivery.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ink-400 mt-1">›</span>
              <span>No retainers without a clear scope. No NDAs without a clear budget. No crypto / NFT / drop-ship.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
