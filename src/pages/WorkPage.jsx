import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, ArrowUpRight } from 'lucide-react'
import { githubPath } from '../constants/icons.js'

const projects = [
  {
    title: 'WebGIS Desa Cinunuk',
    desc: 'Aplikasi WebGIS interaktif untuk pemetaan wilayah Desa Cinunuk. Fitur peta Leaflet, manajemen layer GeoJSON, POI dengan foto, pencarian lokasi, filter radius, pengukur jarak, dan panel admin lengkap.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Leaflet'],
    live: 'https://webgis-cinunuk.vercel.app',
    repo: 'https://github.com/keyzakyy-dev/webgis-cinunuk',
    featured: true,
  },
  {
    title: 'LMS Landing Page ITG',
    desc: 'Landing page Learning Management System Institut Teknologi Garut. Dwibahasa (ID/EN), animasi scroll, bento grid program studi, dan desain responsif.',
    stack: ['React 19', 'TypeScript', 'Tailwind v4', 'shadcn/ui', 'Vite'],
    live: 'https://lms-itg-v2.vercel.app',
    repo: 'https://github.com/keyzakyy-dev/LMS-Institut-Teknologi-Garut-v2',
  },
  {
    title: 'Portfolio Website',
    desc: 'Website portofolio personal dengan animasi halus, dark mode, dan desain modern berbasis React & Tailwind CSS.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    live: '#',
    repo: '#',
  },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, type: 'spring', stiffness: 200, damping: 20 } }),
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden="true">
      <path d={githubPath} />
    </svg>
  )
}

export default function WorkPage({ onBack }) {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-5 pt-24 pb-16"
    >
      <button
        type="button"
        onClick={onBack}
        className="group mb-10 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)]/40 shadow-xs"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        Kembali ke Beranda
      </button>

      <div className="mb-12">
        <h1 className="font-script text-4xl font-bold text-[var(--color-primary)] sm:text-6xl">
          Work <span className="font-sans text-2xl sm:text-3xl font-light text-[var(--color-muted)]">— Proyek Pilihan</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm text-[var(--color-muted)] sm:text-base">
          Koleksi proyek yang mencerminkan keahlian dalam membangun produk digital.
        </p>
      </div>

      {featured && (
        <motion.div
          custom={0}
          variants={item}
          initial="hidden"
          animate="visible"
          className="group relative mb-8 overflow-hidden rounded-3xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] shadow-xs transition-all duration-300 hover:border-[var(--color-primary)]/20 hover:shadow-lg"
        >
          <div className="dot-pattern absolute inset-0 opacity-40" />
          <div className="relative flex flex-col gap-8 p-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary)] shadow-xs">
                Featured Project
              </span>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">{featured.title}</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">{featured.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.stack.map((s) => (
                  <span key={s} className="rounded-lg border border-[var(--color-border)]/60 bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary)] shadow-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={featured.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.03]"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
              <a
                href={featured.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]"
              >
                <GithubIcon />
                Repository
              </a>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid gap-5 sm:grid-cols-3">
        {rest.map((proj, i) => (
          <motion.div
            key={proj.title}
            custom={i + 1}
            variants={item}
            initial="hidden"
            animate="visible"
            className="group flex flex-col justify-between rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-6 shadow-xs transition-all duration-300 hover:border-[var(--color-primary)]/20 hover:shadow-md"
          >
            <div>
              <div className="mb-4 flex items-start justify-between">
                <span className="text-4xl font-bold text-[var(--color-border)] leading-none select-none">
                  {String(i + 2).padStart(2, '0')}
                </span>
                <motion.span
                  className="flex size-8 items-center justify-center rounded-full border border-[var(--color-border)]/60 bg-[var(--color-surface)] text-[var(--color-muted)] transition-all group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs"
                >
                  <ArrowUpRight size={14} />
                </motion.span>
              </div>
              <h2 className="text-base font-bold text-[var(--color-primary)]">{proj.title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted)]">{proj.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {proj.stack.map((s) => (
                  <span key={s} className="rounded-md border border-[var(--color-border)]/60 bg-[var(--color-surface)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-primary)]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-[var(--color-border)]/40 pt-4">
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-3 py-1.5 text-[11px] font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.04]"
              >
                <ExternalLink size={11} />
                Demo
              </a>
              <a
                href={proj.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-[11px] font-medium text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]"
              >
                <GithubIcon />
                Repo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
