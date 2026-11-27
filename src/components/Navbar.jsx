import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { nav } from '../data'
import { useActive } from '../hooks'

const Sun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)
const Moon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
)

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false)
  const active = useActive(nav.map((n) => n[0]))
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  // menu khula ho to peeche scroll lock + Escape se band
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent" />
      <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5">
          <a href="#top" className="font-display text-lg font-bold">Priyanshu Tiwari</a>
          <div className="flex items-center gap-1">
            <nav className="mr-3 hidden gap-7 md:flex" aria-label="Main">
              {nav.map(([id, label]) => (
                <a key={id} href={`#${id}`}
                  className={`border-b-2 py-1 text-[0.95rem] font-medium transition-colors hover:text-ink ${active === id ? 'border-accent text-ink' : 'border-transparent text-muted'}`}>
                  {label}
                </a>
              ))}
            </nav>
            <button onClick={toggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="grid h-11 w-11 place-items-center rounded-full text-ink transition hover:bg-ink/10">
              {dark ? <Sun /> : <Moon />}
            </button>
            <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full hover:bg-ink/10 md:hidden">
              <span className="block h-0.5 w-5 bg-ink shadow-[0_6px_0_rgb(var(--ink)),0_-6px_0_rgb(var(--ink))]" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col justify-center bg-board px-7 text-white"
            initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="absolute right-4 top-3 grid h-11 w-11 place-items-center text-3xl">×</button>
            {nav.map(([id, label], i) => (
              <motion.a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.07 }}
                className="py-1 font-display text-[clamp(2rem,11vw,3rem)] font-extrabold hover:text-amber">
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
