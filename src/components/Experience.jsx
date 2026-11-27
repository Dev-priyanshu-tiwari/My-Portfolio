import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Reveal from './Reveal'
import { experience } from '../data'

export default function Experience() {
  // scroll ke saath red line neeche ki taraf bharti hai
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 20 })

  return (
    <Section id="path" title="Experience">
      <ol ref={ref} className="relative ml-1.5 border-l border-line pl-8">
        <motion.span style={{ scaleY }} className="absolute -left-px top-0 h-full w-0.5 origin-top bg-accent" aria-hidden="true" />
        {experience.map((e, i) => (
          <li key={e.title} className="relative pb-9 last:pb-0">
            <span className="absolute -left-[38px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg" aria-hidden="true" />
            <Reveal delay={i * 0.05}>
              <time className="font-mono text-xs text-muted">{e.when}</time>
              <h3 className="font-display text-lg font-bold leading-snug">{e.title}</h3>
              <p className="mt-1 max-w-[60ch] text-muted">{e.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
