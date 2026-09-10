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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 200, damping: 22 },
  }),
}

export default function ResumePage({ onBack, onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-4xl px-5 pt-24 pb-20"
    >
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        className="group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-surface)] shadow-xs"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        <span>Kembali ke Beranda</span>
      </button>

      {/* Profile Header Card */}
      <div className="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 sm:p-9 shadow-xs">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Terbuka untuk Peluang Kerja & Freelance
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl uppercase">
              Sayyid Dzaky Farhan
            </h1>
            <p className="mt-1 text-sm font-medium text-[var(--color-muted)] sm:text-base">
              Mahasiswa S1 Teknik Informatika • Data Entry & Spatial Processing • Web & Creative Creator
            </p>

            {/* Quick Contact Info */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--color-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-[var(--color-primary)] shrink-0" />
                Kp. Sindangsari, Desa Cinunuk, Kec. Wanaraja, Kab. Garut
              </span>
              <a href="tel:085172167271" className="inline-flex items-center gap-1.5 hover:text-[var(--color-primary)] transition-colors">
                <Phone size={14} className="text-[var(--color-primary)] shrink-0" />
                0851 7216 7271
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

        {/* Action Buttons */}
        <div className="mt-7 flex flex-wrap gap-3 border-t border-[var(--color-border)]/50 pt-6">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-xs sm:text-sm font-medium text-[var(--color-surface)] shadow-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download size={15} />
            <span>Cetak / Simpan PDF</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('contact')}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-xs sm:text-sm font-medium text-[var(--color-primary)] shadow-xs transition-colors hover:border-[var(--color-primary)]/50"
          >
            <span>Hubungi Saya</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-4 text-center shadow-xs"
          >
            <div className="text-xl font-bold text-[var(--color-primary)] sm:text-2xl">{stat.value}</div>
            <div className="mt-1 text-[11px] text-[var(--color-muted)] sm:text-xs">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Work Experience Timeline */}
      <div className="mt-14">
        <div className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
          <Briefcase size={20} strokeWidth={1.5} />
          <h2 className="text-xl font-bold sm:text-2xl">Pengalaman Kerja</h2>
        </div>

        <div className="relative space-y-6 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--color-border)]">
          {workExperiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.period}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative pl-9"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[7px] top-1.5 size-3 -translate-x-1/2 rounded-full border-2 border-[var(--color-surface)] bg-[var(--color-primary)]" />

              <div className="rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-5 shadow-xs transition-colors hover:border-[var(--color-primary)]/30">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[var(--color-primary)]">{exp.role}</h3>
                    <p className="text-xs font-semibold text-[var(--color-muted)]">
                      {exp.organization} • {exp.location}
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-1 rounded-lg bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-muted)] shadow-xs">
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
      </div>

      {/* Education Section */}
      <div className="mt-14">
        <div className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
          <GraduationCap size={20} strokeWidth={1.5} />
          <h2 className="text-xl font-bold sm:text-2xl">Pendidikan</h2>
        </div>

        <div className="space-y-4">
          {educationList.map((edu, i) => (
            <motion.div
              key={edu.degree}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-between gap-3 rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-5 shadow-xs sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="text-base font-bold text-[var(--color-primary)]">{edu.degree}</h3>
                <p className="text-xs font-semibold text-[var(--color-primary)] mt-0.5">{edu.institution}</p>
                <p className="mt-2 text-xs text-[var(--color-muted)]">{edu.notes}</p>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center gap-1 rounded-lg bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)] shadow-xs">
                <Calendar size={12} />
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categorized Skills Section */}
      <div className="mt-14">
        <div className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
          <Database size={20} strokeWidth={1.5} />
          <h2 className="text-xl font-bold sm:text-2xl">Keahlian (Skills)</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col justify-between rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-5 shadow-xs"
              >
                <div>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-primary)] mb-3">{cat.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-[var(--color-border)]/60 bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary)] shadow-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Languages Section */}
      <div className="mt-14">
        <div className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
          <Languages size={20} strokeWidth={1.5} />
          <h2 className="text-xl font-bold sm:text-2xl">Kemampuan Bahasa</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-between rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-4 shadow-xs"
            >
              <span className="font-semibold text-sm text-[var(--color-primary)]">{lang.name}</span>
              <span className="rounded-lg bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)] shadow-xs">
                {lang.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Collaboration Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 rounded-3xl border border-[var(--color-border)]/80 bg-[var(--color-surface-alt)] p-7 text-center sm:p-10 shadow-xs"
      >
        <h3 className="font-script text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
          Mari Bekerja Sama
        </h3>
        <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-[var(--color-muted)]">
          Tertarik dengan kualifikasi saya untuk data processing, survei sensus, web dev, atau visual design?
        </p>
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => onNavigate?.('contact')}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-xs sm:text-sm font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-md"
          >
            <span>Hubungi Saya</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
