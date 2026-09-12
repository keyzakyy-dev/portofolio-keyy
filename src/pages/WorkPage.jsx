import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  ArrowUpRight,
  Calendar,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from 'lucide-react'
import { githubPath } from '../constants/icons.js'
import { projects } from '../data/projects.js'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, type: 'spring', stiffness: 200, damping: 25 },
})

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden="true">
      <path d={githubPath} />
    </svg>
  )
}

function ScreenshotSlider({ screenshots, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imgError, setImgError] = useState({})

  if (!screenshots || screenshots.length === 0) return null

  const current = screenshots[currentIndex]
  const isFailed = imgError[currentIndex]

  const prev = () => setCurrentIndex((idx) => (idx === 0 ? screenshots.length - 1 : idx - 1))
  const next = () => setCurrentIndex((idx) => (idx === screenshots.length - 1 ? 0 : idx + 1))

  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <ImageIcon size={18} className="text-[var(--color-primary)]" />
          <h2 className="text-base font-bold text-[var(--color-primary)]">Screenshot Proyek</h2>
        </div>
        <span className="rounded-lg bg-[var(--color-surface)] px-2.5 py-1 text-xs font-mono font-medium text-[var(--color-muted)]">
          {currentIndex + 1} / {screenshots.length}
        </span>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border)]/50 bg-[var(--color-surface)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="flex size-full items-center justify-center"
          >
            {isFailed ? (
              <div className="flex flex-col items-center justify-center gap-3 p-6 text-center text-[var(--color-muted)]">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] text-[var(--color-primary)]">
                  <ImageIcon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary)]">{current.caption}</p>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">Preview screenshot {title}</p>
                </div>
              </div>
            ) : (
              <img
                src={current.url}
                alt={current.caption}
                className="size-full object-cover"
                onError={() => setImgError((prev) => ({ ...prev, [currentIndex]: true }))}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next Buttons */}
        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Screenshot sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex size-9 cursor-pointer items-center justify-center rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-surface)]/80 text-[var(--color-primary)] backdrop-blur-md transition-all hover:bg-[var(--color-surface)] active:scale-95 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Screenshot berikutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex size-9 cursor-pointer items-center justify-center rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-surface)]/80 text-[var(--color-primary)] backdrop-blur-md transition-all hover:bg-[var(--color-surface)] active:scale-95 shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Caption & Indicators */}
      <div className="mt-4 flex flex-col items-center justify-between gap-3 px-2 sm:flex-row">
        <p className="text-xs sm:text-sm font-medium text-[var(--color-muted)]">
          {current.caption}
        </p>

        {screenshots.length > 1 && (
          <div className="flex items-center gap-1.5">
            {screenshots.map((s, idx) => (
              <button
                key={s.caption + idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Lihat slide ${idx + 1}`}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  currentIndex === idx
                    ? 'w-6 bg-[var(--color-primary)]'
                    : 'w-2 bg-[var(--color-border)] hover:bg-[var(--color-muted)]'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectDetailView({ project, onBackToProjects }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Navigation Back */}
      <motion.button
        type="button"
        onClick={onBackToProjects}
        {...inView(0)}
        className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-surface)]"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        <span>Kembali ke Daftar Proyek</span>
      </motion.button>

      {/* Project Header Card */}
      <motion.div
        {...inView(0.05)}
        className="relative overflow-hidden rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 sm:p-10"
      >
        <div className="dot-pattern absolute inset-0 opacity-40" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]">
              <Calendar size={12} />
              {project.year}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)] px-2.5 py-1 text-xs font-semibold text-[var(--color-surface)]">
                <Sparkles size={12} />
                Featured
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            {project.longDesc}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--color-border)]/50 pt-6">
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.02]"
              >
                <ExternalLink size={15} />
                <span>Kunjungi Website (Live)</span>
              </a>
            )}
            {project.repo && project.repo !== '#' && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]"
              >
                <GithubIcon />
                <span>Source Code (GitHub)</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Screenshot Slider Component */}
      <motion.div {...inView(0.08)}>
        <ScreenshotSlider screenshots={project.screenshots} title={project.title} />
      </motion.div>

      {/* Grid: Features & Tech Stack */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Key Features (8 Cols) */}
        <motion.div
          {...inView(0.1)}
          className="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 sm:p-8 md:col-span-8"
        >
          <div className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
            <Sparkles size={18} />
            <h2 className="text-lg font-bold">Fitur Utama</h2>
          </div>

          <div className="divide-y divide-[var(--color-border)]/40">
            {project.features.map((feature, idx) => (
              <div
                key={feature}
                className="flex items-baseline gap-4 py-3.5 first:pt-0 last:pb-0"
              >
                <span className="font-mono text-xs font-semibold text-[var(--color-muted)] select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-xs sm:text-sm font-medium leading-relaxed text-[var(--color-primary)]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack (4 Cols) */}
        <motion.div
          {...inView(0.15)}
          className="flex flex-col justify-between rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 sm:p-8 md:col-span-4"
        >
          <div>
            <div className="mb-5 flex items-center gap-2 text-[var(--color-primary)]">
              <Layers size={18} />
              <h2 className="text-lg font-bold">Teknologi</h2>
            </div>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-4">
              Teknologi, pustaka, dan framework yang digunakan dalam pengembangan proyek ini.
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-[var(--color-border)]/70 bg-[var(--color-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--color-border)]/50 pt-5">
            <button
              type="button"
              onClick={onBackToProjects}
              className="w-full cursor-pointer rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-2.5 text-center text-xs font-medium text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-colors"
            >
              Lihat Proyek Lainnya
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function WorkPage({ onBack, onNavigate, projectId }) {
  const selectedProject = projects.find((p) => p.id === projectId)
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  const handleSelect = (id) => onNavigate?.('work', id)

  const handleBackToProjects = () => onNavigate?.('work')

  return (
    <div className="mx-auto max-w-5xl px-5 pt-24 pb-20">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetailView
            key={selectedProject.id}
            project={selectedProject}
            onBackToProjects={handleBackToProjects}
          />
        ) : (
          <motion.div
            key="project-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Back Button */}
            <motion.button
              type="button"
              onClick={onBack}
              {...inView(0)}
              className="group mb-10 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-surface)]"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
              <span>Kembali ke Beranda</span>
            </motion.button>

            {/* Header Section */}
            <motion.div {...inView(0.05)} className="mb-12">
              <h1 className="font-script text-4xl font-bold text-[var(--color-primary)] sm:text-6xl">
                Work
              </h1>
              <p className="mt-3 max-w-xl text-sm text-[var(--color-muted)] sm:text-base">
                Koleksi proyek yang mencerminkan keahlian dalam membangun produk digital. Klik pada kartu untuk melihat detail lengkap.
              </p>
            </motion.div>

            {/* Featured Project Card */}
            {featured && (
              <motion.div
                {...inView(0.1)}
                onClick={() => handleSelect(featured.id)}
                className="group relative mb-8 cursor-pointer overflow-hidden rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] transition-all duration-300 hover:border-[var(--color-primary)]/40 hover:shadow-sm"
              >
                <div className="dot-pattern absolute inset-0 opacity-40" />
                <div className="relative flex flex-col gap-6 p-7 sm:flex-row sm:items-end sm:justify-between sm:p-9">
                  <div className="flex-1">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary)]">
                        Featured Project
                      </span>
                      <span className="text-xs text-[var(--color-muted)] font-medium">
                        {featured.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl flex items-center gap-2">
                      <span>{featured.title}</span>
                      <ArrowUpRight size={20} className="opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </h2>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
                      {featured.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {featured.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg border border-[var(--color-border)]/60 bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => handleSelect(featured.id)}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-xs font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.02]"
                    >
                      <span>Detail Proyek</span>
                      <ArrowUpRight size={13} />
                    </button>
                    {featured.live && (
                      <a
                        href={featured.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-xs font-medium text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
                      >
                        <ExternalLink size={13} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other Projects Grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {rest.map((proj, i) => (
                <motion.div
                  key={proj.title}
                  {...inView(i * 0.1)}
                  onClick={() => handleSelect(proj.id)}
                  className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-7 transition-all duration-300 hover:border-[var(--color-primary)]/40 hover:shadow-sm"
                >
                  <div>
                    <div className="mb-5 flex items-start justify-between">
                      <span className="text-3xl font-bold text-[var(--color-border)] leading-none select-none">
                        {String(i + 2).padStart(2, '0')}
                      </span>
                      <span className="flex size-9 items-center justify-center rounded-full border border-[var(--color-border)]/60 bg-[var(--color-surface)] text-[var(--color-muted)] transition-all group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <h2 className="mt-1 text-lg font-bold text-[var(--color-primary)]">
                      {proj.title}
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                      {proj.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {proj.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-[var(--color-border)]/60 bg-[var(--color-surface)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-primary)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="mt-6 flex items-center justify-between border-t border-[var(--color-border)]/40 pt-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => handleSelect(proj.id)}
                      className="cursor-pointer text-xs font-semibold text-[var(--color-primary)] hover:underline"
                    >
                      Lihat Detail →
                    </button>

                    <div className="flex items-center gap-2">
                      {proj.live && proj.live !== '#' && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
                        >
                          <ExternalLink size={11} />
                          <span>Demo</span>
                        </a>
                      )}
                      {proj.repo && proj.repo !== '#' && (
                        <a
                          href={proj.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
                        >
                          <GithubIcon />
                          <span>Repo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
