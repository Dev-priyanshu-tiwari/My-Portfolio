import { useTheme } from './hooks'
import GridGlow from './components/GridGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Contact from './components/Contact'

export default function App() {
  const [dark, toggle] = useTheme()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">
        Skip to content
      </a>
      <GridGlow />
      <Navbar dark={dark} toggle={toggle} />
      <main id="main" className="mx-auto max-w-6xl px-5">
        <Hero />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <footer className="mx-auto max-w-6xl border-t border-line px-5 pb-10 pt-6 text-sm text-muted">
        © {new Date().getFullYear()} Priyanshu Tiwari
      </footer>
    </>
  )
}
