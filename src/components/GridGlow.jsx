import { useEffect } from 'react'

// cursor ke paas dot grid dikhta hai (sirf mouse wale devices pe)
export default function GridGlow() {
  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const move = (e) => {
      const s = document.documentElement.style
      s.setProperty('--mx', e.clientX + 'px')
      s.setProperty('--my', e.clientY + 'px')
    }
    addEventListener('pointermove', move, { passive: true })
    return () => removeEventListener('pointermove', move)
  }, [])

  const mask = 'radial-gradient(240px circle at var(--mx,-400px) var(--my,-400px), #000, transparent)'
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage: 'radial-gradient(rgb(var(--muted) / .55) 1.2px, transparent 1.3px)',
        backgroundSize: '26px 26px',
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    />
  )
}
