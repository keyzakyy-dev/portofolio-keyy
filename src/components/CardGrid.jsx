import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const cards = [
  { label: 'Services', href: '#services', preview: 'services' },
  { label: 'Resume', href: '#resume', preview: 'resume' },
  { label: 'Work', href: '#work', preview: 'work' },
  { label: 'Contact', href: '#contact', preview: 'contact' },
]

function CardPreview({ type }) {
  if (type === 'services') {
    return (
      <div className="flex h-40 flex-col gap-2 px-5 pb-4 sm:h-44">
        {['UI Design', 'Web Dev'].map((s) => (
          <div key={s} className="flex flex-1 items-center gap-2 rounded-lg bg-[var(--color-surface)] px-3 py-2">
            <span className="size-2 rounded-full bg-[var(--color-primary)]" />
            <span className="text-sm text-[var(--color-muted)]">{s}</span>
          </div>
        ))}
      </div>
    )
  }
  if (type === 'resume') {
    return (
      <div className="flex h-40 items-center gap-2.5 px-5 pb-4 sm:h-44">
        <div className="size-12 shrink-0 rounded-lg bg-[var(--color-surface)]" />
        <div className="flex w-full flex-col gap-1.5">
          <div className="h-2 w-3/4 rounded-full bg-[var(--color-surface)]" />
          <div className="h-2 w-1/2 rounded-full bg-[var(--color-surface)]" />
          <div className="h-2 w-2/3 rounded-full bg-[var(--color-surface)]" />
        </div>
      </div>
    )
  }
  if (type === 'work') {
    return (
      <div className="grid h-40 grid-cols-2 grid-rows-2 gap-1.5 px-5 pb-4 sm:h-44">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg bg-[var(--color-surface)]" />
        ))}
      </div>
    )
  }
  return (
    <div className="flex h-40 flex-col gap-1.5 px-5 pb-4 sm:h-44">
      <div className="flex-1 rounded-lg bg-[var(--color-surface)]" />
      <div className="flex-1 rounded-lg bg-[var(--color-surface)]" />
      <div className="flex-1 rounded-lg bg-[var(--color-primary)]" />
    </div>
  )
}

function MotionEffect({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function CardGrid() {
  return (
    <section className="pb-6 sm:pb-8">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
        {cards.map((card, index) => (
          <MotionEffect key={card.label} delay={0.9 + index * 0.1} className="snap-center shrink-0 lg:shrink lg:h-full">
            <motion.a
              href={card.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex w-[75vw] max-w-[280px] flex-col overflow-hidden rounded-2xl bg-[var(--color-surface-alt)] p-4 transition-shadow hover:shadow-xl sm:w-[calc(50vw-3rem)] sm:rounded-3xl sm:p-5 lg:w-full lg:max-w-none"
            >
              <div className="flex items-center justify-between">
                <span className="font-script text-xl text-[var(--color-primary)]">
                  {card.label}
                </span>
                <span className="rounded-full p-2 text-[var(--color-muted)] transition-colors group-hover:bg-[var(--color-surface)] group-hover:text-[var(--color-primary)]">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <CardPreview type={card.preview} />
            </motion.a>
          </MotionEffect>
        ))}
      </div>
    </section>
  )
}