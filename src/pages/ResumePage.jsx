import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Languages,
  Phone,
  Mail,
} from 'lucide-react'
import {
  stats,
  skillCategories,
  languages,
  workExperiences,
  educationList,
  tabs,
} from '../data/resume.js'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, type: 'spring', stiffness: 200, damping: 20 },
})

function ExperienceSection() {
  return (
    <section id="pengalaman">
      <div className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
        <Briefcase size={20} strokeWidth={1.5} />
        <h2 className="text-xl font-bold sm:text-2xl">Pengalaman Kerja</h2>
      </div>

      <div className="relative space-y-6 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--color-border)]">
        {workExperiences.map((exp) => (
          <div key={exp.role + exp.period} className="relative pl-9">
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
          </div>
        ))}
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section id="pendidikan">
      <div className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
        <GraduationCap size={20} strokeWidth={1.5} />
        <h2 className="text-xl font-bold sm:text-2xl">Pendidikan</h2>
      </div>

      <div className="space-y-4">
        {educationList.map((edu) => (
          <div
            key={edu.degree}
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
          </div>
        ))}
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills">
      <div className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
        <Database size={20} strokeWidth={1.5} />
        <h2 className="text-xl font-bold sm:text-2xl">Keahlian (Skills)</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon
          return (
            <div
              key={cat.title}
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
            </div>
          )
        })}
      </div>
    </section>
  )
}

function LanguagesSection() {
  return (
    <section id="bahasa">
      <div className="mb-6 flex items-center gap-2 text-[var(--color-primary)]">
        <Languages size={20} strokeWidth={1.5} />
        <h2 className="text-xl font-bold sm:text-2xl">Kemampuan Bahasa</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="flex items-center justify-between rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-4"
          >
            <span className="font-semibold text-sm text-[var(--color-primary)]">{lang.name}</span>
            <span className="rounded-lg bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function ResumePage({ onBack, onNavigate }) {
  const [activeTab, setActiveTab] = useState('pengalaman')

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
                <a href="mailto:keyzakyy.dev@gmail.com" className="inline-flex items-center gap-1.5 hover:text-[var(--color-primary)] transition-colors">
                  <Mail size={14} className="text-[var(--color-primary)] shrink-0" />
                  keyzakyy.dev@gmail.com
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

      {/* Tab Controls (Screen View Only) */}
      <div className="no-print mt-10 mb-8 flex justify-center">
        <div className="grid w-full grid-cols-2 gap-1.5 rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-1.5 sm:flex sm:w-auto sm:items-center sm:justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-xl px-3.5 py-2.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[var(--color-surface)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="resume-active-tab"
                    className="absolute inset-0 rounded-xl bg-[var(--color-primary)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                  <Icon size={14} className="shrink-0 sm:size-4" />
                  <span className="truncate">{tab.label}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Panels (Screen View) */}
      <div className="no-print">
        <AnimatePresence mode="wait">
          {activeTab === 'pengalaman' && (
            <motion.div
              key="pengalaman"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <ExperienceSection />
            </motion.div>
          )}
          {activeTab === 'pendidikan' && (
            <motion.div
              key="pendidikan"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <EducationSection />
            </motion.div>
          )}
          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <SkillsSection />
            </motion.div>
          )}
          {activeTab === 'bahasa' && (
            <motion.div
              key="bahasa"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <LanguagesSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Print View: Render All Sections */}
      <div className="hidden print:block space-y-10 mt-8">
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <LanguagesSection />
      </div>
    </motion.div>
  )
}
