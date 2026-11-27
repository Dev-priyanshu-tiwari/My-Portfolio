import { motion } from 'framer-motion'
import Section from './Section'
import Reveal from './Reveal'
import { stack } from '../data'

export default function Stack() {
  return (
    <Section id="stack" title="Stack">
      <dl>
        {stack.map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.06} className="grid gap-3 border-b border-line py-4 first:pt-0 sm:grid-cols-[120px_1fr]">
            <dt className="font-display font-bold">{group}</dt>
            <dd className="flex flex-wrap gap-2">
              {items.map((s) => (
                <motion.span key={s} whileHover={{ y: -3 }}
                  className="rounded-full border border-line bg-card px-3.5 py-1 text-sm transition-colors hover:border-accent">
                  {s}
                </motion.span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
