import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section'
import Reveal from './Reveal'
import Button from './Button'
import { me } from '../data'

export default function Contact() {
  const [toast, setToast] = useState('')

  const copy = async () => {
    let msg = 'Email address copied'
    try { await navigator.clipboard.writeText(me.email) } catch { msg = `Copy failed. Use ${me.email}` }
    setToast(msg)
    setTimeout(() => setToast(''), 2200)
  }

  return (
    <Section id="contact" title="Contact">
      <Reveal>
        <p className="max-w-[26ch] font-display text-[clamp(1.4rem,3vw,2rem)] font-bold leading-tight">
          I’m looking for an internship where I can ship real features. Email works best.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={copy}>Copy email address</Button>
          <Button ghost href={`mailto:${me.email}`}>Open mail app</Button>
        </div>
        <p className="mt-7 flex gap-5 font-semibold">
          <a className="py-2 underline underline-offset-4 hover:text-accent" href={me.github}>GitHub</a>
          <a className="py-2 underline underline-offset-4 hover:text-accent" href={me.linkedin}>LinkedIn</a>
        </p>
      </Reveal>

      <AnimatePresence>
        {toast && (
          <motion.div role="status" aria-live="polite"
            initial={{ opacity: 0, y: 24, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: 24, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-50 rounded-[10px] bg-ink px-4 py-2.5 text-sm text-bg">
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
