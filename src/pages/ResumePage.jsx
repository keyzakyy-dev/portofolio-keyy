import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Download,
  CheckCircle2,
  MapPin,
  Calendar,
  ArrowRight,
  Database,
  Globe,
  Languages,
  Phone,
  Mail,
  UserCheck,
} from 'lucide-react'

const stats = [
  { label: 'Pendidikan', value: 'S1 TI' },
  { label: 'Pengalaman BPS & Pemilu', value: '5 Event' },
  { label: 'Keahlian Utama', value: 'Data & Dev' },
  { label: 'Status', value: 'Aktif Kuliah' },
]

const skillCategories = [
  {
    title: 'Hard Skills (Data & Spasial)',
    icon: Database,
    skills: [
      'QGIS (Pengolahan Peta Digital)',
      'Pengolahan Data Statistik',
      'Data Entry & Validasi Data',
      'Microsoft Excel (Basic)',
      'Microsoft Word',
    ],
  },
  {
    title: 'Web Development & Digital Creative',
    icon: Globe,
    skills: [
      'Pembuatan Website (React & Tailwind)',
      'Video Editing (Reels, TikTok, YouTube)',
      'Desain Logo & Identitas Brand',
      'Desain Poster & Konten Grafis',
    ],
  },
  {
    title: 'Soft Skills',
    icon: UserCheck,
    skills: [
      'Ketelitian Tinggi',
      'Kerjasama Tim & Terampil',
      'Manajemen Waktu & Target Ketat',
      'Komunikasi Efektif',
      'Problem Solving & Disiplin',
    ],
  },
]

const languages = [
  { name: 'Bahasa Indonesia', level: 'Fasih (Native)' },
  { name: 'Bahasa Inggris', level: 'Cukup (Conversational)' },
]

const workExperiences = [
  {
    role: 'Pengolahan Peta Wilayah Sensus',
    organization: 'Sensus Ekonomi 2026',
    period: 'Sept 2025 – Okt 2025',
    location: 'Kab. Garut',
    desc: 'Mengolah dan memperbarui peta wilayah kerja sensus menggunakan data spasial serta melakukan digitasi dan validasi peta batas wilayah.',
    highlights: [
      'Mengolah data spasial dan memperbarui peta wilayah kerja sensus',
      'Melakukan digitasi dan validasi peta untuk akurasi cakupan area sensus ekonomi',
    ],
  },
  {
    role: 'Pengawas TPS',
    organization: 'Pilkada 2024 (KPU & Bawaslu)',
    period: 'November 2024',
    location: 'Garut',
    desc: 'Mengawasi jalannya Pemilihan Kepala Daerah 2024 di TPS sesuai regulasi resmi dan menjaga integritas hasil pemungutan suara.',
    highlights: [
      'Mengawasi kepatuhan pemungutan suara terhadap regulasi KPU dan Bawaslu',
      'Mencatat, melaporkan, dan menangani temuan dugaan pelanggaran pemilu',
      'Menjaga independensi, transparansi, dan integritas pemungutan & penghitungan suara',
    ],
  },
  {
    role: 'Panitia TPS (KPPS)',
    organization: 'Pemilu Presiden 2024',
    period: 'Februari 2024',
    location: 'Garut',
    desc: 'Bertugas melayani pemilih dalam proses pencoblosan dan membantu penyusunan berita acara penghitungan suara.',
    highlights: [
      'Melayani pemilih dan memastikan kelancaran alur pemungutan suara di TPS',
      'Membantu penghitungan suara serta penyusunan berita acara hasil pemilu',
    ],
  },
  {
    role: 'Operator Entry Data',
    organization: 'Sensus Pertanian 2023 (BPS)',
    period: 'Jul 2023 – Agust 2023',
    location: 'BPS Kab. Garut',
    desc: 'Menginput dan memverifikasi data hasil sensus pertanian lapangan meliputi rumah tangga, usaha, dan lahan pertanian.',
    highlights: [
      'Melakukan input data rumah tangga, usaha, dan lahan pertanian dengan teliti',
      'Melakukan pengecekan ganda guna meminimalisir potensi kesalahan data nasional',
    ],
  },
  {
    role: 'Operator Entry Data',
    organization: 'Regsosek 2022 (Registrasi Sosial Ekonomi - BPS)',
    period: 'Jan 2022 – Maret 2022',
    location: 'BPS Kab. Garut',
    desc: 'Melakukan entri data rumah tangga dan individu hasil pendataan lapangan sesuai standar operasional BPS.',
    highlights: [
      'Melakukan entri data sosial ekonomi rumah tangga dan individu secara akurat',
      'Memastikan akurasi dan konsistensi data melalui verifikasi ketat sesuai standar BPS',
    ],
  },
]

const educationList = [
  {
    degree: 'S1 Teknik Informatika',
    institution: 'Institut Teknologi Garut',
    period: 'September 2024 – Sekarang',
    notes: 'Mempelajari ilmu komputer, rekayasa perangkat lunak, sistem informasi, dan teknologi komputasi modern.',
  },
]

const tocItems = [
  { id: 'profile', label: 'Profil' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'skills', label: 'Skills' },
  { id: 'bahasa', label: 'Bahasa' },
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, type: 'spring', stiffness: 200, damping: 20 },
})

function TableOfContents({ active }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <aside className="hidden lg:block w-44 shrink-0">
      <div className="sticky top-28 space-y-1">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
          Daftar Isi
        </p>
        {tocItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className={`group flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-1.5 text-left text-xs font-medium transition-all ${
              active === item.id
                ? 'bg-[var(--color-primary)] text-[var(--color-surface)]'
                : 'text-[var(--color-muted)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)]'
            }`}
          >
            <span className={`size-1.5 shrink-0 rounded-full transition-all ${
              active === item.id ? 'bg-[var(--color-surface)]' : 'bg-[var(--color-border)]'
            }`} />
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  )
}

export default function ResumePage({ onBack }) {
  const [activeSection, setActiveSection] = useState('profile')

  useEffect(() => {
    const observers = []
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-5 pt-24 pb-20 print:pt-4 print:pb-4 print:max-w-full"
    >
      {/* Back Button */}
      <motion.button
        type="button"
        onClick={onBack}
        {...inView(0)}
        className="no-print group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-surface)]"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        <span>Kembali ke Beranda</span>
      </motion.button>

      <div className="flex gap-10">
        <TableOfContents active={activeSection} />

        <div className="min-w-0 flex-1">
          {/* Profile Header Card */}
          <section id="profile">
            <motion.div {...inView(0.05)} className="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 sm:p-9">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl uppercase">
                    Sayyid Dzaky Farhan
                  </h1>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--color-muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-[var(--color-primary)] shrink-0" />
                      Kp. Sindangsari, Desa Cinunuk, Kec. Wanaraja, Kab. Garut
                    </span>
                    <a href="tel:085166664226" className="inline-flex items-center gap-1.5 hover:text-[var(--color-primary)] transition-colors">
                      <Phone size={14} className="text-[var(--color-primary)] shrink-0" />
                      0851 6666 4226
                    </a>
                    <a href="mailto:zakyxne@gmail.com" className="inline-flex items-center gap-1.5 hover:text-[var(--color-primary)] transition-colors">
                      <Mail size={14} className="text-[var(--color-primary)] shrink-0" />
                      zakyxne@gmail.com
                    </a>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[var(--color-muted)] border-t border-[var(--color-border)]/50 pt-4">
                    Mahasiswa Teknik Informatika Institut Teknologi Garut dengan pengalaman dalam pengolahan data statistik dan pengawasan pemilu. Terampil dalam data entry, validasi data, pengolahan peta digital (QGIS), dan penggunaan perangkat lunak komputer. Memiliki ketelitian tinggi, disiplin, serta terbiasa bekerja dalam tim dengan target waktu ketat.
                  </p>
                </div>
              </div>

              <div className="no-print mt-7 flex flex-wrap gap-3 border-t border-[var(--color-border)]/50 pt-6">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-xs sm:text-sm font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download size={15} />
                  <span>Cetak / Simpan PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-xs sm:text-sm font-medium text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]/50"
                >
                  <span>Hubungi Saya</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...inView(i * 0.07)}
                  className="rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-4 text-center"
                >
                  <div className="text-xl font-bold text-[var(--color-primary)] sm:text-2xl">{stat.value}</div>
                  <div className="mt-1 text-[11px] text-[var(--color-muted)] sm:text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Work Experience Timeline */}
          <section id="pengalaman" className="mt-14">
            <motion.div {...inView(0)} className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
              <Briefcase size={20} strokeWidth={1.5} />
              <h2 className="text-xl font-bold sm:text-2xl">Pengalaman Kerja</h2>
            </motion.div>

            <div className="relative space-y-6 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--color-border)]">
              {workExperiences.map((exp, i) => (
                <motion.div
                  key={exp.role + exp.period}
                  {...inView(i * 0.07)}
                  className="relative pl-9"
                >
                  <div className="absolute left-[7px] top-1.5 size-3 -translate-x-1/2 rounded-full border-2 border-[var(--color-surface)] bg-[var(--color-primary)]" />
                  <div className="rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-5 transition-colors hover:border-[var(--color-primary)]/30">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-base font-bold text-[var(--color-primary)]">{exp.role}</h3>
                        <p className="text-xs font-semibold text-[var(--color-muted)]">
                          {exp.organization} • {exp.location}
                        </p>
                      </div>
                      <span className="inline-flex w-fit items-center gap-1 rounded-lg bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-muted)]">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--color-muted)]">
                      {exp.desc}
                    </p>

                    <ul className="mt-4 space-y-1.5 border-t border-[var(--color-border)]/40 pt-3">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-[var(--color-primary)]">
                          <CheckCircle2 size={13} className="shrink-0 text-emerald-500 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="pendidikan" className="mt-14">
            <motion.div {...inView(0)} className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
              <GraduationCap size={20} strokeWidth={1.5} />
              <h2 className="text-xl font-bold sm:text-2xl">Pendidikan</h2>
            </motion.div>

            <div className="space-y-4">
              {educationList.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  {...inView(i * 0.07)}
                  className="flex flex-col justify-between gap-3 rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-5 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="text-base font-bold text-[var(--color-primary)]">{edu.degree}</h3>
                    <p className="text-xs font-semibold text-[var(--color-primary)] mt-0.5">{edu.institution}</p>
                    <p className="mt-2 text-xs text-[var(--color-muted)]">{edu.notes}</p>
                  </div>
                  <span className="inline-flex w-fit shrink-0 items-center gap-1 rounded-lg bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Categorized Skills Section */}
          <section id="skills" className="mt-14">
            <motion.div {...inView(0)} className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
              <Database size={20} strokeWidth={1.5} />
              <h2 className="text-xl font-bold sm:text-2xl">Keahlian (Skills)</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {skillCategories.map((cat, i) => {
                const Icon = cat.icon
                return (
                  <motion.div
                    key={cat.title}
                    {...inView(i * 0.1)}
                    className="rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-5"
                  >
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[var(--color-border)]/50">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-primary)]">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[var(--color-muted)]">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="text-xs font-bold text-[var(--color-primary)] leading-tight">{cat.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {cat.skills.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-xs text-[var(--color-primary)]">
                          <CheckCircle2 size={13} className="shrink-0 text-emerald-500" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </section>

          {/* Languages Section */}
          <section id="bahasa" className="mt-14">
            <motion.div {...inView(0)} className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
              <Languages size={20} strokeWidth={1.5} />
              <h2 className="text-xl font-bold sm:text-2xl">Kemampuan Bahasa</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  {...inView(i * 0.1)}
                  className="flex items-center justify-between rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-4"
                >
                  <span className="font-semibold text-sm text-[var(--color-primary)]">{lang.name}</span>
                  <span className="rounded-lg bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  )
}
