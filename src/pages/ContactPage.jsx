import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Send,
  Mail,
  Phone,
  CheckCircle2,
  MessageCircle,
  Copy,
  ExternalLink,
} from 'lucide-react'
import { githubPath, instagramPath } from '../constants/icons.js'

const serviceOptions = [
  'Pembuatan Website',
  'Editing Video',
  'Desain Logo',
  'Desain Poster & Grafis',
  'Lainnya',
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, type: 'spring', stiffness: 200, damping: 20 },
})

export default function ContactPage({ onBack }) {
  const [sent, setSent] = useState(false)
  const [selectedService, setSelectedService] = useState('Pembuatan Website')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [copied, setCopied] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const handleWhatsAppSend = () => {
    const text = `Halo Sayyid Dzaky, saya ${form.name || 'calon klien'}.\nEmail: ${form.email || '-'}\nNo HP: ${form.phone || '-'}\nLayanan: ${selectedService}\nPesan: ${form.message || 'Bisa diskusi lebih lanjut?'}`
    const url = `https://wa.me/6285166664226?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
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
        className="group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-surface)] shadow-xs"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        <span>Kembali ke Beranda</span>
      </motion.button>

      {/* Header Section */}
      <motion.div {...inView(0.05)} className="mb-12">
        <h1 className="font-script text-4xl font-bold tracking-tight text-[var(--color-primary)] sm:text-6xl">
          Get in Touch
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          Punya ide website, kebutuhan editing video, desain logo, poster, atau pengolahan data? Kirimkan pesan melalui form atau langsung chat via WhatsApp.
        </p>
      </motion.div>

      {/* Main Grid: Form + Info Cards */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

        {/* Left Column: Interactive Form (7 Cols) */}
        <motion.div {...inView(0.1)} className="lg:col-span-7">
          <div className="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 sm:p-8 shadow-xs">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                aria-live="polite"
                className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-primary)]">Pesan Anda Terkirim!</h3>
                  <p className="mt-1 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                    Terima kasih telah menghubungi. Saya akan membalas pesan Anda sesegera mungkin.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-medium text-white shadow-xs hover:bg-emerald-700 transition-colors"
                  >
                    <MessageCircle size={14} />
                    <span>Lanjutkan ke WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-medium text-[var(--color-primary)] hover:border-[var(--color-primary)]"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Service Selector */}
                <div>
                  <p className="mb-2 block text-xs font-semibold text-[var(--color-primary)]" id="service-label">
                    Pilih Layanan yang Dibutuhkan:
                  </p>
                  <div className="flex flex-wrap gap-2" role="group" aria-labelledby="service-label">
                    {serviceOptions.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        aria-pressed={selectedService === srv}
                        onClick={() => setSelectedService(srv)}
                        className={`cursor-pointer rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                          selectedService === srv
                            ? 'bg-[var(--color-primary)] text-[var(--color-surface)] shadow-xs'
                            : 'border border-[var(--color-border)]/70 bg-[var(--color-surface)] text-[var(--color-muted)] hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-[var(--color-primary)]">
                    Nama Lengkap / Instansi
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/20"
                  />
                </div>

                {/* Email & Phone in 2 Columns */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 flex items-center justify-between text-xs font-semibold text-[var(--color-primary)]">
                      <span>Alamat Email</span>
                      <span className="text-[10px] font-normal text-[var(--color-muted)]">Wajib</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="mb-1.5 flex items-center justify-between text-xs font-semibold text-[var(--color-primary)]">
                      <span>No. WhatsApp / Telepon</span>
                      <span className="text-[10px] font-normal text-[var(--color-muted)]">Opsional</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="0812-3456-7890"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/20"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-[var(--color-primary)]">
                    Detail Kebutuhan & Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Ceritakan tentang proyek, referensi desain, target deadline, atau pertanyaan Anda..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/20"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                  >
                    <Send size={15} />
                    <span>Kirim Pesan</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400 transition-colors hover:bg-emerald-500/20"
                  >
                    <MessageCircle size={16} />
                    <span>Kirim via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right Column: Quick Contact Cards & Socials (5 Cols) */}
        <div className="space-y-4 lg:col-span-5">

          {/* WhatsApp Direct Card */}
          <motion.div
            {...inView(0.15)}
            className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <Phone size={20} />
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                Respon Cepat
              </span>
            </div>
            <h3 className="mt-4 text-base font-bold text-[var(--color-primary)]">WhatsApp Langsung</h3>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              Konsultasi langsung dengan Sayyid Dzaky Farhan.
            </p>
            <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">
              0851 6666 4226
            </p>
            <a
              href="https://wa.me/6285166664226"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-[1.02]"
            >
              <span>Chat WhatsApp</span>
              <ExternalLink size={12} />
            </a>
          </motion.div>

          {/* Email Direct Card */}
          <motion.div
            {...inView(0.2)}
            className="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs">
                <Mail size={20} />
              </div>
              <a
                href="mailto:zakyxne@gmail.com"
                className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-colors"
              >
                <span>Kirim Email</span>
                <ExternalLink size={10} />
              </a>
            </div>
            <h3 className="mt-4 text-base font-bold text-[var(--color-primary)]">Email Resmi</h3>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              Kirim berkas brief dokumen, proposal, atau penawaran kerja sama formal.
            </p>
            <div className="mt-3 flex items-center justify-between rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-surface)] px-3 py-2 text-xs">
              <span className="font-mono text-[var(--color-primary)] select-all">zakyxne@gmail.com</span>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex cursor-pointer items-center gap-1 text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                title="Salin Email"
              >
                {copied ? (
                  <span className="flex items-center gap-1 text-emerald-500 font-medium text-[11px]">
                    <CheckCircle2 size={14} /> Tersalin
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px]">
                    <Copy size={13} /> Salin
                  </span>
                )}
              </button>
            </div>
          </motion.div>

          {/* Social Profiles */}
          <motion.div
            {...inView(0.3)}
            className="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-5 shadow-xs"
          >
            <h4 className="text-xs font-semibold text-[var(--color-primary)] mb-3">Tautan Media Sosial</h4>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/keyzakyy-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-xl border border-[var(--color-border)]/70 bg-[var(--color-surface)] text-[var(--color-muted)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] shadow-xs"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
                  <path d={githubPath} />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/keyzakyy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-xl border border-[var(--color-border)]/70 bg-[var(--color-surface)] text-[var(--color-muted)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] shadow-xs"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
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
