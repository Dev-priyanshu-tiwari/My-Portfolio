import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

const rows = [
  ['Name', ['PRIYANSHU', 'TIWARI']],
  ['Role', ['MERN', 'DEVELOPER']],
  ['Status', ['OPEN TO', 'INTERNSHIPS']],
]
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// ek letter: random chars cycle karke final pe rukta hai
function Cell({ final, delay }) {
  const reduce = useReducedMotion()
  const [ch, setCh] = useState(reduce ? final : '')

  useEffect(() => {
    if (reduce) { setCh(final); return }
    const turns = 5 + Math.floor(Math.random() * 6)
    let i = 0, t
    const tick = () => {
      setCh(i < turns ? LETTERS[Math.floor(Math.random() * 26)] : final)
      if (i++ < turns) t = setTimeout(tick, 70)
    }
    t = setTimeout(tick, delay)
    return () => clearTimeout(t)
  }, [final, delay, reduce])

  return (
    <span className="relative grid h-[1.55em] w-[1.15em] place-items-center rounded bg-cell font-mono text-[clamp(0.95rem,4.6vw,2.8rem)] font-bold leading-none text-amber after:absolute after:inset-x-0 after:top-1/2 after:h-px after:bg-black/55">
      <span key={ch} className="animate-flip">{ch}</span>
    </span>
  )
}

export default function FlipBoard() {
  // mouse ke saath halka 3D tilt
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20 })
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20 })

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => { mx.set(0); my.set(0) }

  let n = 0
  return (
    <motion.div
      aria-hidden="true"
      onPointerMove={onMove} onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className="grid gap-4 rounded-2xl bg-board p-4 shadow-[0_0_0_1px_#000_inset,0_20px_40px_-24px_rgba(15,34,56,.6)] ring-1 ring-line/40 sm:gap-5 sm:p-8"
    >
      {rows.map(([label, words], r) => (
        <div key={label}>
          <small className="mb-1.5 block font-mono text-[0.7rem] font-medium tracking-wide text-amber/60">{label}</small>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {words.map((w) => (
              <div key={w} className="flex gap-[3px]">
                {[...w].map((ch, i) =>
                  ch === ' ' ? <span key={i} className="w-2" /> : <Cell key={i} final={ch} delay={600 + n++ * 32 + r * 200} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  )
}
