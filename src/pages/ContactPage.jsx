import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
  MessageCircle,
  Copy,
  ExternalLink,
  Sparkles,
} from 'lucide-react'
import { githubPath, instagramPath } from '../constants/icons.js'

const serviceOptions = [
  'Pembuatan Website',
  'Editing Video',
  'Desain Logo',
  'Desain Poster & Grafis',
  'Lainnya',
]

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, type: 'spring', stiffness: 200, damping: 22 },
  }),
}

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
    const url = `https://wa.me/6285172167271?text=${encodeURIComponent(text)}`
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
      <button
        type="button"
        onClick={onBack}
        className="group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-surface)] shadow-xs"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        <span>Kembali ke Beranda</span>
      </button>

      {/* Header Section */}
      <div className="mb-12">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-3.5 py-1 text-xs font-semibold text-[var(--color-primary)] shadow-xs mb-3">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          Terbuka untuk Kolaborasi & Proyek Baru
        </span>
        <h1 className="font-script text-4xl font-bold tracking-tight text-[var(--color-primary)] sm:text-6xl">
          Get in Touch <span className="font-sans text-2xl sm:text-3xl font-light text-[var(--color-muted)]">— Mari Diskusi</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          Punya ide website, kebutuhan editing video, desain logo, poster, atau pengolahan data? Kirimkan pesan melalui form atau langsung chat via WhatsApp.
        </p>
      </div>

      {/* Main Grid: Form + Info Cards */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

        {/* Left Column: Interactive Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 sm:p-8 shadow-xs">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
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
                  <label className="mb-2 block text-xs font-semibold text-[var(--color-primary)]">
                    Pilih Layanan yang Dibutuhkan:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => (
                      <button
                        key={srv}
                        type="button"
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
                  <label className="mb-1.5 block text-xs font-semibold text-[var(--color-primary)]">
                    Nama Lengkap / Instansi
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/20"
                  />
                </div>

                {/* Contact (Email or WhatsApp) */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[var(--color-primary)]">
                    Email atau No. WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="nama@email.com atau 08123xxxx"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[var(--color-primary)]">
                    Detail Kebutuhan & Pesan
                  </label>
                  <textarea
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
        </div>

        {/* Right Column: Quick Contact Cards & Socials (5 Cols) */}
        <div className="space-y-4 lg:col-span-5">

          {/* WhatsApp Direct Card */}
          <motion.div
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
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
              0851 7216 7271
            </p>
            <a
              href="https://wa.me/6285172167271"
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
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-6 shadow-xs"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs">
              <Mail size={20} />
            </div>
            <h3 className="mt-4 text-base font-bold text-[var(--color-primary)]">Email</h3>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              Kirim brief dokumen atau penawaran kerja sama formal.
            </p>
            <div className="mt-3 flex items-center justify-between rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-surface)] px-3 py-2 text-xs">
              <span className="font-mono text-[var(--color-primary)]">zakyxne@gmail.com</span>
              <button
                type="button"
                onClick={copyEmail}
                className="cursor-pointer text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                title="Salin Email"
              >
                {copied ? <CheckCircle2 size={15} className="text-emerald-500" /> : <Copy size={15} />}
              </button>
            </div>
          </motion.div>

          {/* Location & Response Time */}
          <motion.div
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-3"
          >
            <div className="rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-4 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted)] mb-1">
                <MapPin size={13} className="text-[var(--color-primary)]" />
                <span>Domisili</span>
              </div>
              <p className="text-xs font-semibold text-[var(--color-primary)]">Garut, Jawa Barat</p>
              <p className="text-[10px] text-[var(--color-muted)]">Indonesia</p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-4 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted)] mb-1">
                <Clock size={13} className="text-[var(--color-primary)]" />
                <span>Zona Waktu</span>
              </div>
              <p className="text-xs font-semibold text-[var(--color-primary)]">WIB (GMT+7)</p>
              <p className="text-[10px] text-[var(--color-muted)]">Balasan &lt; 24 Jam</p>
            </div>
          </motion.div>

          {/* Social Profiles */}
          <motion.div
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface-alt)] p-5 shadow-xs"
          >
            <h4 className="text-xs font-semibold text-[var(--color-primary)] mb-3">Tautan Media Sosial</h4>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/YOUR_USERNAME"
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
                href="https://instagram.com/YOUR_USERNAME"
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

      {/* Mini FAQ Section */}
      <div className="mt-16 rounded-3xl border border-[var(--color-border)]/60 bg-[var(--color-surface-alt)] p-6 sm:p-9 shadow-xs">
        <div className="mb-6 flex items-center gap-2">
          <Sparkles size={18} className="text-amber-500" />
          <h3 className="text-lg font-bold text-[var(--color-primary)]">Pertanyaan yang Sering Diajukan</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h4 className="text-xs font-bold text-[var(--color-primary)]">Berapa lama estimasi pengerjaan?</h4>
            <p className="mt-1 text-xs text-[var(--color-muted)] leading-relaxed">
              Bergantung pada skala proyek: website sederhana 3–7 hari kerja, video editing 1–3 hari, dan desain logo 2–5 hari.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[var(--color-primary)]">Apakah ada jaminan revisi?</h4>
            <p className="mt-1 text-xs text-[var(--color-muted)] leading-relaxed">
              Ya, setiap proyek mencakup sesi revisi minor gratis untuk memastikan hasil akhir sesuai dengan ekspektasi Anda.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[var(--color-primary)]">Bagaimana sistem pembayarannya?</h4>
            <p className="mt-1 text-xs text-[var(--color-muted)] leading-relaxed">
              Umumnya menggunakan DP (Down Payment) 50% di awal dan pelunasan setelah proyek selesai diuji dan siap serah terima.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
