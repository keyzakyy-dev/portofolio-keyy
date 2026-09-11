import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Code2,
  Video,
  PenTool,
  Image as ImageIcon,
  CheckCircle2,
  Search,
  Layers,
  Rocket,
} from 'lucide-react'

const processSteps = [
  {
    step: '01',
    title: 'Konsultasi & Briefing',
    desc: 'Membahas kebutuhan proyek, konsep kreatif, target audiens, dan referensi desain.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Konsep & Konsep Visual',
    desc: 'Membuat sketsa logo, wireframe web, atau sampel draf video untuk disetujui.',
    icon: Layers,
  },
  {
    step: '03',
    title: 'Eksekusi & Produksi',
    desc: 'Pengembangan kode web bersih, rendering video profesional, atau desain vektor resolusi tinggi.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Revisi & Penyerahan',
    desc: 'Finalisasi sesuai masukan, optimasi berkas akhir, dan serah terima aset proyek.',
    icon: Rocket,
  },
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, type: 'spring', stiffness: 200, damping: 20 },
})

export default function ServicesPage({ onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-5 pt-24 pb-20"
    >
      {/* Back Button */}
      <motion.button
        type="button"
        onClick={onBack}
        {...inView(0)}
        className="group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-surface)] shadow-xs"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        <span>Kembali ke Beranda</span>
      </motion.button>

      {/* Hero / Header Section */}
      <motion.div
        {...inView(0.05)}
        className="mb-12"
      >
        <h1 className="font-script text-4xl font-bold tracking-tight text-[var(--color-primary)] sm:text-6xl">
          Services <span className="font-sans text-2xl sm:text-3xl font-light text-[var(--color-muted)]">& Digital Creation</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          Layanan profesional mencakup pembuatan website modern, video editing interaktif, desain logo profesional, hingga poster & grafis digital.
        </p>
      </motion.div>

      {/* Bento Grid Section */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

        {/* Tile 1: Jasa Pembuatan Website (Span 2) */}
        <motion.div
          {...inView(0)}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-7 shadow-xs transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-lg md:col-span-2"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs">
                <Code2 size={24} strokeWidth={1.5} />
              </div>
              <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--color-primary)]">
                Layanan Utama
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[var(--color-primary)]">
              Pembuatan Website Modern
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Membangun website portofolio, landing page, company profile, dan aplikasi web yang cepat, responsif, serta beranimasi halus.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['Landing Page', 'Company Profile', 'Web Portofolio', 'React & Tailwind', 'Fast Load'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-[var(--color-border)]/60 bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary)] shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[var(--color-border)]/50 pt-5 text-center">
            <div className="rounded-xl bg-[var(--color-surface)]/60 p-2.5">
              <p className="text-base font-bold text-[var(--color-primary)]">100%</p>
              <p className="text-[10px] text-[var(--color-muted)]">Responsif</p>
            </div>
            <div className="rounded-xl bg-[var(--color-surface)]/60 p-2.5">
              <p className="text-base font-bold text-[var(--color-primary)]">Modern UI</p>
              <p className="text-[10px] text-[var(--color-muted)]">Animasi Halus</p>
            </div>
            <div className="rounded-xl bg-[var(--color-surface)]/60 p-2.5">
              <p className="text-base font-bold text-[var(--color-primary)]">SEO</p>
              <p className="text-[10px] text-[var(--color-muted)]">Friendly</p>
            </div>
          </div>
        </motion.div>

        {/* Tile 2: Editing Video (Span 1) */}
        <motion.div
          {...inView(0.07)}
          className="group flex flex-col justify-between rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-7 shadow-xs transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-lg"
        >
          <div>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs">
              <Video size={24} strokeWidth={1.5} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[var(--color-primary)]">
              Video Editing
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Penyuntingan video kreatif untuk Reels, TikTok, YouTube, hingga video promosi produk.
            </p>
          </div>

          <ul className="mt-6 space-y-2 border-t border-[var(--color-border)]/50 pt-4">
            {['Reels & TikTok Short Content', 'Color Grading & Motion Text', 'Sound FX & Dynamic Cuts'].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-xs font-medium text-[var(--color-primary)]">
                <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tile 3: Desain Logo (Span 1) */}
        <motion.div
          {...inView(0.14)}
          className="group flex flex-col justify-between rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-7 shadow-xs transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-lg"
        >
          <div>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs">
              <PenTool size={24} strokeWidth={1.5} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[var(--color-primary)]">
              Logo & Branding
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Pembuatan identitas visual merek yang unik, berkesan, dan siap digunakan di berbagai media.
            </p>
          </div>

          <ul className="mt-6 space-y-2 border-t border-[var(--color-border)]/50 pt-4">
            {['Desain Logo Vektor Unik', 'Master File (SVG, PNG, PDF)', 'Brand Color Palette Guide'].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-xs font-medium text-[var(--color-primary)]">
                <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tile 4: Desain Poster & Grafis (Span 2) */}
        <motion.div
          {...inView(0.07)}
          className="group flex flex-col justify-between rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-7 shadow-xs transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-lg md:col-span-2"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs">
                <ImageIcon size={24} strokeWidth={1.5} />
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Siap Cetak & Digital
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[var(--color-primary)]">
              Desain Poster & Konten Grafis
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Desain materi promosi menarik seperti poster acara, banner media sosial, flyer kreatif, dan aset grafis serbaguna.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 border-t border-[var(--color-border)]/50 pt-5">
            <div className="flex items-center gap-2.5 rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-surface)] p-3 text-xs font-medium text-[var(--color-primary)]">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>Poster Event & Marketing Banner</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-surface)] p-3 text-xs font-medium text-[var(--color-primary)]">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>Konten Feeds & Story Medsos</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Workflow / Process Section */}
      <div className="mt-20">
        <motion.div
          {...inView(0)}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-3 py-1 text-xs font-semibold text-[var(--color-muted)]">
            Workflow
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
            Alur Pengerjaan
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Proses terstruktur dari diskusi awal hingga proyek siap diserahkan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((proc, i) => {
            const Icon = proc.icon
            return (
              <motion.div
                key={proc.step}
                {...inView(i * 0.1)}
                className="relative flex flex-col justify-between rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-6 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[var(--color-primary)]/30">
                      {proc.step}
                    </span>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-primary)]">{proc.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                    {proc.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
