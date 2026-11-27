import { motion } from 'framer-motion'

export default function Button({ href, onClick, ghost, children, ...rest }) {
  const cls = `inline-block cursor-pointer rounded-[10px] border-2 border-ink px-5 py-3 text-center text-[0.98rem] font-semibold transition-colors hover:border-accent hover:bg-accent hover:text-white max-sm:flex-1 max-sm:basis-full ${
    ghost ? 'bg-transparent text-ink' : 'bg-ink text-bg'
  }`
  const motionProps = { whileHover: { y: -2 }, whileTap: { scale: 0.97 }, className: cls, ...rest }
  return href ? (
    <motion.a href={href} {...motionProps}>{children}</motion.a>
  ) : (
    <motion.button type="button" onClick={onClick} {...motionProps}>{children}</motion.button>
  )
}
