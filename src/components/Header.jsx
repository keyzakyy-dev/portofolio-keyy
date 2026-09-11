import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggler } from './ThemeToggler.jsx'
import { useIsMobile } from '../hooks/useIsMobile.js'

const navbarLogo = (
  <span className="text-2xl font-bold tracking-tight leading-none">
    keyzakyy<span className="text-[var(--color-muted)]">.</span>
  </span>
)

const NAVBAR_BG_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

const CONTROLS_VARIANTS = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 30 } },
}

const CONTENT_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 30 } },
}

const WORDMARK_PATH = 'M73 0 L39.2 -50.4 L72.8 -97.2 L107 -97.2 L66.2 -44.4 L67.4 -57.4 L109.2 0 Z M10.6 0 L10.6 -145.2 L41.4 -145.2 L41.4 0 Z M167.7 2.2 Q151.9 2.2 139.7 -4.3 Q127.5 -10.8 120.5 -22.4 Q113.5 -34 113.5 -48.8 Q113.5 -63.2 120.3 -74.7 Q127.1 -86.2 138.9 -92.8 Q150.7 -99.4 165.5 -99.4 Q180.1 -99.4 191.1 -93.2 Q202.1 -87 208.5 -76 Q214.9 -65 214.9 -50.8 Q214.9 -48 214.6 -45.1 Q214.3 -42.2 213.3 -38.6 L129.7 -38.2 L129.7 -59.4 L200.1 -59.8 L186.9 -50.8 Q186.7 -59 184.3 -64.5 Q181.9 -70 177.2 -73 Q172.5 -76 165.9 -76 Q158.7 -76 153.4 -72.6 Q148.1 -69.2 145.2 -63.2 Q142.3 -57.2 142.3 -48.8 Q142.3 -40.4 145.4 -34.2 Q148.5 -28 154.2 -24.7 Q159.9 -21.4 167.7 -21.4 Q174.7 -21.4 180.5 -23.9 Q186.3 -26.4 190.7 -31.4 L207.7 -14.6 Q200.5 -6 190.3 -1.9 Q180.1 2.2 167.7 2.2 Z M259.2 0.6 L219.2 -97.2 L252.4 -97.2 L277.8 -19.8 L265.6 -19.8 L291.4 -97.2 L324.6 -97.2 L283 0.6 Z M234.2 41 L263.4 -22.2 L283 0.6 L265.8 41 Z M329.9 -18 L378.5 -79.2 L416.1 -79.2 L367.1 -18 Z M329.9 0 L329.9 -18 L351.7 -25.8 L414.7 -25.8 L414.7 0 Z M333.3 -71.4 L333.3 -97.2 L416.1 -97.2 L416.1 -79.2 L394.3 -71.4 Z M472.6 2 Q459.4 2 448.8 -4.7 Q438.2 -11.4 432.1 -22.7 Q426 -34 426 -48.6 Q426 -63.2 432.1 -74.7 Q438.2 -86.2 448.7 -92.7 Q459.2 -99.2 472.6 -99.2 Q482.4 -99.2 490.3 -95.4 Q498.2 -91.6 503.2 -84.9 Q508.2 -78.2 508.8 -69.6 L508.8 -27.6 Q508.2 -19 503.3 -12.3 Q498.4 -5.6 490.5 -1.8 Q482.6 2 472.6 2 Z M479 -25.8 Q488.8 -25.8 494.7 -32.2 Q500.6 -38.6 500.6 -48.8 Q500.6 -55.4 498 -60.5 Q495.4 -65.6 490.4 -68.5 Q485.4 -71.4 479 -71.4 Q472.8 -71.4 467.9 -68.5 Q463 -65.6 460.1 -60.4 Q457.2 -55.2 457.2 -48.6 Q457.2 -42 460.1 -36.8 Q463 -31.6 467.9 -28.7 Q472.8 -25.8 479 -25.8 Z M499.4 0 L499.4 -26.2 L504 -50 L499.4 -73.4 L499.4 -97.2 L529.6 -97.2 L529.6 0 Z M613.4 0 L579.6 -50.4 L613.2 -97.2 L647.4 -97.2 L606.6 -44.4 L607.8 -57.4 L649.6 0 Z M551 0 L551 -145.2 L581.8 -145.2 L581.8 0 Z M690.1 0.6 L650.1 -97.2 L683.3 -97.2 L708.7 -19.8 L696.5 -19.8 L722.3 -97.2 L755.5 -97.2 L713.9 0.6 Z M665.1 41 L694.3 -22.2 L713.9 0.6 L696.7 41 Z M796.8 0.6 L756.8 -97.2 L790 -97.2 L815.4 -19.8 L803.2 -19.8 L829 -97.2 L862.2 -97.2 L820.6 0.6 Z M771.8 41 L801 -22.2 L820.6 0.6 L803.4 41 Z M893.1 2.2 Q885.1 2.2 879.9 -3.2 Q874.7 -8.6 874.7 -16.4 Q874.7 -24.2 879.9 -29.5 Q885.1 -34.8 893.1 -34.8 Q900.9 -34.8 906 -29.5 Q911.1 -24.2 911.1 -16.4 Q911.1 -8.6 906 -3.2 Q900.9 2.2 893.1 2.2 Z'

const WORDMARK_VIEWBOX = '10.6 -145.2 900.5 186.2'

const wordmarkVariants = {
  hidden: { pathLength: 0, fillOpacity: 0 },
  visible: { pathLength: 1, fillOpacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
}

function WordmarkDraw() {
  return (
    <svg viewBox={WORDMARK_VIEWBOX} className="w-[85vw] max-w-xl">
      <motion.path
        d={WORDMARK_PATH}
        stroke="currentColor"
        strokeWidth="5"
        variants={wordmarkVariants}
        initial="hidden"
        animate="visible"
        style={{ color: 'var(--color-primary)' }}
        fill="currentColor"
      />
    </svg>
  )
}

export default function Header({ transition = true }) {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  const isMobile = useIsMobile()
  const headerHeight = isMobile ? 56 : 68

  const logoWrapperVariants = {
    center: { top: 0, left: 0, right: 0, bottom: 0, height: '100dvh' },
    topLeft: { top: 0, left: 0, right: 0, bottom: 'auto', height: headerHeight },
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <motion.header
      variants={logoWrapperVariants}
      initial="center"
      animate={transition ? 'topLeft' : 'center'}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className="absolute z-50 flex items-center justify-center"
    >
      <div className="relative w-full size-full">
        {/* Navbar background — full width */}
        <motion.div
          variants={NAVBAR_BG_VARIANTS}
          initial="hidden"
          animate={transition ? 'visible' : 'hidden'}
          className="absolute inset-0 bg-[var(--color-surface)]/80 backdrop-blur-md"
        />

        {/* Inner container sejajar dengan konten */}
        <div className="relative mx-auto max-w-6xl px-5 size-full">
          {/* Logo - layout animation center -> top-left */}
          {transition ? (
            <motion.div
              layoutId="keyy-logo"
              className="absolute left-5"
              animate={{ top: isMobile ? 16 : 22 }}
            >
              <a
                href="#"
                aria-label="keyy"
                className="inline-flex items-center text-[var(--color-primary)] transition-colors duration-200 hover:opacity-70"
              >
                {navbarLogo}
              </a>
            </motion.div>
          ) : (
            <motion.div
              layoutId="keyy-logo"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <WordmarkDraw />
            </motion.div>
          )}

          {/* Dark mode toggle */}
          <motion.div
            variants={CONTROLS_VARIANTS}
            initial="hidden"
            animate={transition ? 'visible' : 'hidden'}
            className="absolute right-5 top-1/2 -translate-y-1/2"
          >
            <ThemeToggler dark={dark} setDark={setDark} />
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export { CONTENT_VARIANTS }