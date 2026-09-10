import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { githubPath } from '../constants/icons.js'

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'Website portofolio personal dengan animasi halus, dark mode, dan desain modern.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    live: '#',
    repo: '#',
  },
  {
    title: 'UI Component Library',
    desc: 'Kumpulan komponen UI reusable yang terinspirasi dari shadcn/ui dengan styling kustom.',
    stack: ['React', 'Tailwind CSS', 'TypeScript'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Landing Page SaaS',
    desc: 'Landing page modern untuk produk SaaS dengan animasi scroll dan konversi tinggi.',
    stack: ['React', 'Vite', 'Framer Motion'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Dashboard Admin',
    desc: 'Dashboard admin dengan chart interaktif, tabel data, dan manajemen pengguna.',
    stack: ['React', 'Tailwind CSS', 'Recharts'],
    live: '#',
    repo: '#',
  },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, type: 'spring', stiffness: 200, damping: 20 } }),
}

export default function WorkPage({ onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-4xl px-5 pt-24 pb-16"
    >
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]"
      >
        <ArrowLeft size={16} />
        Kembali
      </button>

      <div className="mb-10">
        <h1 className="font-script text-4xl font-bold text-[var(--color-primary)] sm:text-5xl">Work</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)] sm:text-base">
          Koleksi proyek pilihan yang pernah saya kerjakan.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            custom={i}
            variants={item}
            initial="hidden"
            animate="visible"
            className="group flex flex-col justify-between rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-6 shadow-xs transition-colors hover:border-[var(--color-primary)]/30"
          >
            <div>
              <div className="mb-1 h-28 rounded-xl bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-border)] text-xs mb-4 shadow-inner">
                Preview
              </div>
              <h2 className="text-lg font-bold text-[var(--color-primary)]">{proj.title}</h2>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{proj.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {proj.stack.map((s) => (
                  <span key={s} className="rounded-lg bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary)] shadow-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 border-t border-[var(--color-border)]/40 pt-4">
              <a
                href={proj.live}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-3 py-1.5 text-xs font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.04]"
              >
                <ExternalLink size={12} />
                Live Demo
              </a>
              <a
                href={proj.repo}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-3">
                  <path d={githubPath} />
                </svg>
                Repository
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
