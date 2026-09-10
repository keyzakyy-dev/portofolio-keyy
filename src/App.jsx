import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header, { CONTENT_VARIANTS } from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CardGrid from './components/CardGrid.jsx'
import Footer from './components/Footer.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import WorkPage from './pages/WorkPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const PAGES = { services: ServicesPage, resume: ResumePage, work: WorkPage, contact: ContactPage }

export default function App() {
  const [transition, setTransition] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [page, setPage] = useState(null)

  useEffect(() => {
    const t1 = setTimeout(() => setTransition(true), 1250)
    const t2 = setTimeout(() => setIsLoaded(true), 2500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const PageComponent = page ? PAGES[page] : null

  return (
    <main className={isLoaded ? 'relative' : 'relative h-dvh overflow-hidden'}>
      <Header transition={transition} />
      <AnimatePresence mode="wait">
        {PageComponent ? (
          <PageComponent key={page} onBack={() => navigate(null)} onNavigate={navigate} />
        ) : (
          transition && (
            <motion.div
              key="home"
              variants={CONTENT_VARIANTS}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              <div className="mx-auto max-w-6xl px-5" style={{ paddingTop: 68 }}>
                <Hero onNavigate={navigate} />
                <CardGrid onNavigate={navigate} />
              </div>
              <Footer />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </main>
  )
}
