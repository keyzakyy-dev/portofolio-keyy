import { motion } from 'framer-motion'
import { ArrowLeft, Compass } from 'lucide-react'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, type: 'spring', stiffness: 200, damping: 25 },
})

export default function NotFoundPage({ onBack, backLabel = 'Kembali ke Beranda' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-5 pt-24 pb-20"
    >
      <motion.button
        type="button"
        onClick={onBack}
        {...inView(0)}
        className="group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-surface)]"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        <span>{backLabel}</span>
      </motion.button>

      <motion.div
        {...inView(0.05)}
        className="relative overflow-hidden rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-10 text-center sm:p-16"
      >
        <div className="dot-pattern absolute inset-0 opacity-40" />
        <div className="relative flex flex-col items-center gap-5">
          <span
            className="font-mono text-7xl font-bold tracking-tighter text-[var(--color-primary)] sm:text-8xl"
            aria-hidden="true"
          >
            404
          </span>
          <h1 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
            Halaman Tidak Ditemukan
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
            URL yang kamu tuju tidak ada atau sudah dipindahkan. Yuk kembali jelajahi layanan,
            resume, dan proyek lainnya.
          </p>
          <div className="flex size-14 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)]">
            <Compass size={26} strokeWidth={1.5} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
