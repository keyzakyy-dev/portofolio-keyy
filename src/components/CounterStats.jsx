import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 5, suffix: '+', label: 'Proyek Selesai' },
  { value: 3, suffix: '+', label: 'Teknologi Dikuasai' },
  { value: 2, suffix: '+', label: 'Klien Dilayani' },
  { value: 100, suffix: '%', label: 'Kepuasan Klien' },
]

function Counter({ value, suffix, duration = 1500 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    const begin = performance.now()
    const raf = (now) => {
      const progress = Math.min((now - begin) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * value))
      if (progress < 1) requestAnimationFrame(raf)
      else setCount(value)
    }
    requestAnimationFrame(raf)
  }, [inView, value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function CounterStats() {
  return (
    <div       className="grid grid-cols-2 gap-6 py-4 sm:grid-cols-4 sm:gap-0">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.9 + i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
            <Counter value={stat.value} suffix={stat.suffix} />
          </span>
          <span className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
