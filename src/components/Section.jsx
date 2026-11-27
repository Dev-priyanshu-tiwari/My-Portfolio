import Reveal from './Reveal'

// left heading + right content layout, har section me same
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="grid gap-6 border-t border-line py-14 md:grid-cols-[170px_1fr] md:gap-12 md:py-20 lg:grid-cols-[200px_1fr]">
      <Reveal as="h2" className="self-start font-display text-3xl font-extrabold leading-tight md:sticky md:top-24">
        {title}
      </Reveal>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
