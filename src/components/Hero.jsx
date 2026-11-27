import FlipBoard from './FlipBoard'
import Reveal from './Reveal'
import Button from './Button'
import { me } from '../data'
import { asset } from '../hooks'

const facts = ['B.Tech CSE · 2028', 'MERN stack', 'Lucknow, India']

export default function Hero() {
  return (
    <section id="top" className="pb-14 pt-10 sm:pt-16 md:pb-24 md:pt-24">
      <h1 className="sr-only">Priyanshu Tiwari, MERN developer, open to internships</h1>
      <FlipBoard />
      <Reveal delay={0.9}>
        <p className="mt-9 max-w-[60ch] text-[1.1rem] sm:mt-12 sm:text-xl">
          I’m a B.Tech CSE student in Lucknow who builds full-stack apps with React, Node and MongoDB.
          I interned at Banaras Locomotive Works and I coordinate the quiz club at my university.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {facts.map((f) => (
            <li key={f} className="rounded-full border border-line px-3.5 py-1 font-mono text-xs text-muted">{f}</li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href="#work">See projects</Button>
          <Button ghost href={asset(me.resume)}>Download resume</Button>
        </div>
      </Reveal>
    </section>
  )
}
