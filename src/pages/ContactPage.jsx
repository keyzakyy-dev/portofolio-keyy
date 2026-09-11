import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  Send,
  Mail,
  MessageSquare,
  Check,
  Copy,
} from 'lucide-react'
import { githubPath, instagramPath } from '../constants/icons.js'

const serviceOptions = [
  'Website',
  'Video Editing',
  'Desain Logo',
  'Poster & Grafis',
  'Lainnya',
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, type: 'spring', stiffness: 200, damping: 25 },
})

export default function ContactPage({ onBack }) {
  const [sent, setSent] = useState(false)
  const [selectedService, setSelectedService] = useState('Website')
  const [form, setForm] = useState({ name: '', contact: '', message: '' })
  const [copied, setCopied] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const handleWhatsAppDirect = () => {
    const text = form.name
      ? `Halo Sayyid Dzaky, saya ${form.name}.\nKontak: ${form.contact || '-'}\nLayanan: ${selectedService}\nPesan: ${form.message || '-'}`
      : 'Halo Sayyid Dzaky, saya tertarik untuk mendiskusikan sebuah proyek.'
    window.open(`https://wa.me/6285166664226?text=${encodeURIComponent(text)}`, '_blank')
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('zakyxne@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
        className="group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-surface)]"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        <span>Kembali ke Beranda</span>
      </motion.button>

      {/* Header Section */}
      <motion.div {...inView(0.05)} className="mb-12">
        <h1 className="font-script text-4xl font-bold tracking-tight text-[var(--color-primary)] sm:text-6xl">
          Contact
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          Tertarik memulai proyek bersama atau butuh konsultasi? Kirimkan pesan atau hubungi langsung via WhatsApp.
        </p>
      </motion.div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

        {/* Left Column: Minimal Form (7 cols) */}
        <motion.div {...inView(0.1)} className="lg:col-span-7">
          <div className="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 sm:p-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)]">
                  <Check size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">Pesan Terkirim</h3>
                  <p className="mt-2 max-w-md text-xs sm:text-sm text-[var(--color-muted)]">
                    Terima kasih telah menghubungi. Saya akan membalas pesan Anda sesegera mungkin.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-xs font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.02]"
                  >
                    <span>Teruskan ke WhatsApp</span>
                    <ArrowUpRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false)
                      setForm({ name: '', contact: '', message: '' })
                    }}
                    className="cursor-pointer rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-xs font-medium text-[var(--color-primary)] hover:border-[var(--color-primary)]/40"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Choice */}
                <div>
                  <label className="mb-2.5 block text-xs font-semibold text-[var(--color-primary)]">
                    Layanan
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`cursor-pointer rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all ${
                          selectedService === srv
                            ? 'bg-[var(--color-primary)] text-[var(--color-surface)]'
                            : 'border border-[var(--color-border)]/70 bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold text-[var(--color-primary)]">
                    Nama
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Nama Anda atau nama instansi"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] outline-none transition-all focus:border-[var(--color-primary)]"
                  />
                </div>

                {/* Contact (Email or WhatsApp in 1 field) */}
                <div>
                  <label htmlFor="contact" className="mb-2 block text-xs font-semibold text-[var(--color-primary)]">
                    Kontak (Email atau No. WhatsApp)
                  </label>
                  <input
                    id="contact"
                    type="text"
                    required
                    placeholder="nama@email.com atau 0812xxxx"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] outline-none transition-all focus:border-[var(--color-primary)]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold text-[var(--color-primary)]">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tulis ringkasan proyek atau kebutuhan Anda..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] outline-none transition-all focus:border-[var(--color-primary)]"
                  />
                </div>

                {/* Submit Actions */}
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send size={15} />
                    <span>Kirim Pesan</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)]/40"
                  >
                    <MessageSquare size={16} />
                    <span>Chat via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right Column: Sleek Direct Channels (5 cols) */}
        <div className="space-y-4 lg:col-span-5">

          {/* WhatsApp Direct Card */}
          <motion.div
            {...inView(0.15)}
            className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 transition-all hover:border-[var(--color-primary)]/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  WhatsApp
                </span>
                <p className="mt-1 text-lg font-bold text-[var(--color-primary)]">
                  0851 6666 4226
                </p>
                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  Respon cepat untuk konsultasi dan tanya jawab langsung.
                </p>
              </div>
              <a
                href="https://wa.me/6285166664226"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka WhatsApp"
                className="flex size-10 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)] transition-transform group-hover:scale-105"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Email Direct Card */}
          <motion.div
            {...inView(0.2)}
            className="flex flex-col justify-between rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                Email
              </span>
              <p className="mt-1 text-lg font-bold text-[var(--color-primary)]">
                zakyxne@gmail.com
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                Untuk penawaran resmi, dokumen brief, atau proposal kerja sama.
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="mailto:zakyxne@gmail.com"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-xs font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.02]"
              >
                <Mail size={14} />
                <span>Buka Email</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs font-medium text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={13} />
                    <span>Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            {...inView(0.25)}
            className="flex items-center justify-between rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-5"
          >
            <span className="text-xs font-medium text-[var(--color-muted)]">
              Media Sosial
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/keyzakyy-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-xl border border-[var(--color-border)]/70 bg-[var(--color-surface)] text-[var(--color-muted)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d={githubPath} />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/keyzakyy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-xl border border-[var(--color-border)]/70 bg-[var(--color-surface)] text-[var(--color-muted)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d={instagramPath} />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}
