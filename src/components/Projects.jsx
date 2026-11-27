import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data'
import { asset } from '../hooks'

const filters = ['All', 'Full-stack', 'AI', 'Frontend']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)
  const list = projects.filter((p) => filter === 'All' || p.tags.includes(filter))

  return (
    <Section id="work" title="Projects">
      <div role="group" aria-label="Filter projects" className="mb-5 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button key={f} aria-pressed={filter === f}
            onClick={() => { setFilter(f); setOpen(null) }}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === f ? 'border-ink bg-ink text-bg' : 'border-line text-muted hover:border-ink hover:text-ink'
            }`}>
            {f}
          </button>
        ))}
      </div>

      <ul className="border-t border-ink">
        <AnimatePresence initial={false} mode="popLayout">
          {list.map((p) => {
            const isOpen = open === p.id
            return (
              <motion.li key={p.id} layout
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`border-b border-line transition-colors hover:bg-ink/[0.04] ${isOpen ? 'bg-ink/[0.04]' : ''}`}>
                <button onClick={() => setOpen(isOpen ? null : p.id)} aria-expanded={isOpen} aria-controls={`panel-${p.id}`}
                  className="group flex w-full items-center justify-between gap-4 px-1 py-4 text-left focus-visible:-outline-offset-4">
                  <span>
                    <span className="block font-display text-lg font-bold transition-transform group-hover:translate-x-1.5 sm:text-xl">{p.title}</span>
                    <span className="mt-0.5 flex items-center gap-2 font-mono text-xs text-muted">
                      {p.live && <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />}
                      {p.status}
                    </span>
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 225 : 45 }} className="mr-1 h-2.5 w-2.5 shrink-0 border-b-2 border-r-2 border-ink" />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`panel-${p.id}`} key="panel" className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}>
                      <div className="px-1 pb-6 pt-1">
                        <img src={asset(`assets/projects/${p.id}.svg`)} alt={`${p.title} interface preview`}
                          width="800" height="500" loading="lazy"
                          className="mb-4 aspect-[8/5] w-full max-w-[600px] rounded-xl border border-line bg-line/40" />
                        <p className="max-w-[62ch]">{p.desc}</p>
                        <p className="mt-2 text-sm text-muted">{p.stack}</p>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-semibold">
                          {p.demo && <a href={asset(p.demo)} className="hover:text-accent">Live demo ↗</a>}
                          <a href={p.code} className="hover:text-accent">Source code ↗</a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>
    </Section>
  )
}
