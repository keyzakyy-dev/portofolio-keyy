import { motion } from 'framer-motion'
import { githubPath, youtubePath, instagramPath, facebookPath } from '../constants/icons.js'

const socialLinks = [
  { path: githubPath, href: 'https://github.com/keyzakyy-dev', label: 'GitHub' },
  { path: youtubePath, href: 'https://www.youtube.com/@YerimMLBB', label: 'YouTube' },
  { path: instagramPath, href: 'https://www.instagram.com/keyzakyy/', label: 'Instagram' },
  { path: facebookPath, href: 'https://www.facebook.com/iyokeyza/', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] pt-3 pb-7">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 1.9 }}
          className="flex items-center gap-1"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="rounded-lg p-2 text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4.5">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 2.0 }}
          className="flex flex-wrap items-center justify-center gap-x-1 text-xs text-[var(--color-muted)] sm:text-sm"
        >
          <span>Built by</span>
          <a
            href="#"
            className="font-medium underline underline-offset-2 transition-colors hover:opacity-70"
          >
            keyzakyy.
          </a>
          <span>The source code is available on</span>
          <a
            href="https://github.com/keyzakyy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium underline underline-offset-2 transition-colors hover:opacity-70"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-3.5 shrink-0">
              <path d={githubPath} />
            </svg>
            <span>GitHub</span>
          </a>
          <span>.</span>
        </motion.p>
      </div>
    </footer>
  )
}