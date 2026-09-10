import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header, { CONTENT_VARIANTS } from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CardGrid from './components/CardGrid.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [transition, setTransition] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setTransition(true), 1250)
    const t2 = setTimeout(() => setIsLoaded(true), 2500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <main className={isLoaded ? 'relative' : 'relative h-dvh overflow-hidden'}>
      <Header transition={transition} />
      {transition && (
        <>
          <motion.div
            variants={CONTENT_VARIANTS}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-6xl px-5"
            style={{ paddingTop: 68 }}
          >
            <Hero />
            <CardGrid />
          </motion.div>
          <Footer />
        </>
      )}
    </main>
  )
}