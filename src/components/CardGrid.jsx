import { motion } from 'framer-motion'
import {
  Wrench,
  FileBadge,
  FolderGit2,
  Send,
} from 'lucide-react'

const cards = [
  { label: 'Services', href: '#services', preview: 'services' },
  { label: 'Resume', href: '#resume', preview: 'resume' },
  { label: 'Work', href: '#work', preview: 'work' },
  { label: 'Contact', href: '#contact', preview: 'contact' },
]

function CardPreview({ type }) {
  if (type === 'services') {
    return (
      <div className="flex h-32 items-center justify-center p-4">
        <motion.div
          variants={{
            hover: { rotate: [0, 45, 0], scale: 1.15 },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-[var(--color-primary)]"
        >
          <Wrench size={64} strokeWidth={1.5} />
        </motion.div>
      </div>
    )
  }

  if (type === 'resume') {
    return (
      <div className="flex h-32 items-center justify-center p-4">
        <motion.div
          variants={{
            hover: { y: [-4, 6, -4], scale: 1.12 },
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="text-[var(--color-primary)]"
        >
          <FileBadge size={64} strokeWidth={1.5} />
        </motion.div>
      </div>
    )
  }

  if (type === 'work') {
    return (
      <div className="flex h-32 items-center justify-center p-4">
        <motion.div
          variants={{
            hover: { scale: [1, 1.2, 1.1], rotate: [0, -10, 0] },
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="text-[var(--color-primary)]"
        >
          <FolderGit2 size={64} strokeWidth={1.5} />
        </motion.div>
      </div>
    )
  }

  return (
    <div className="flex h-32 items-center justify-center p-4">
      <motion.div
        variants={{
          hover: { x: [0, 8, -2, 0], y: [0, -8, 2, 0], scale: 1.15 },
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="text-[var(--color-primary)]"
      >
        <Send size={64} strokeWidth={1.5} />
      </motion.div>
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

export default function CardGrid({ onNavigate }) {
  return (
    <section className="pb-6 sm:pb-8">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
        {cards.map((card, index) => (
          <MotionEffect key={card.label} delay={0.9 + index * 0.1} className="snap-center shrink-0 lg:shrink lg:h-full">
            <motion.button
              type="button"
              onClick={() => onNavigate?.(card.preview)}
              initial="rest"
              whileHover="hover"
              animate="rest"
              whileTap={{ scale: 0.98 }}
              className="group flex h-full w-[75vw] max-w-[280px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] text-left transition-all duration-300 sm:w-[calc(50vw-3rem)] sm:rounded-3xl lg:w-full lg:max-w-none"
            >
              <div className="flex flex-col items-center justify-center px-4 pt-4 sm:px-5 sm:pt-5">
                <span className="text-lg font-medium tracking-tight text-[var(--color-primary)]">
                  {card.label}.
                </span>
              </div>
              <CardPreview type={card.preview} />
            </motion.button>
          </MotionEffect>
        ))}
      </div>
    </section>
  )
}