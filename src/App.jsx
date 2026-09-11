import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header, { CONTENT_VARIANTS } from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CardGrid from './components/CardGrid.jsx'
import Footer from './components/Footer.jsx'
import CounterStats from './components/CounterStats.jsx'

const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'))
const ResumePage = lazy(() => import('./pages/ResumePage.jsx'))
const WorkPage = lazy(() => import('./pages/WorkPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))

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
          <Suspense fallback={null}>
            <PageComponent key={page} onBack={() => navigate(null)} onNavigate={navigate} />
          </Suspense>
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
                <CounterStats />
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
