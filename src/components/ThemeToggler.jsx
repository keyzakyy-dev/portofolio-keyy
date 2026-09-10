import { useCallback, useEffect, useRef } from 'react'
import { Moon, Sun } from 'lucide-react'
import { flushSync } from 'react-dom'

export function ThemeToggler({ dark, setDark, className = '' }) {
  const buttonRef = useRef(null)
  const isTransitioningRef = useRef(false)
  const activeAnimRef = useRef(null)

  const cancelAnim = useCallback(() => {
    activeAnimRef.current?.cancel()
    activeAnimRef.current = null
  }, [])

  useEffect(() => () => {
    cancelAnim()
    const root = document.documentElement
    if (root.dataset.themeVt !== 'active') return
    delete root.dataset.themeVt
  }, [cancelAnim])

  const toggleTheme = useCallback(() => {
    if (isTransitioningRef.current || document.documentElement.dataset.themeVt === 'active') return

    const goingDark = !dark

    const applyTheme = () => {
      document.documentElement.classList.toggle('dark')
      setDark(goingDark)
      localStorage.setItem('theme', goingDark ? 'dark' : 'light')
    }

    if (typeof document.startViewTransition !== 'function') {
      applyTheme()
      return
    }

    // LTR saat ke dark (kiri ke kanan), RTL saat ke light (kanan ke kiri)
    const clipPath = goingDark
      ? ['polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)']
      : ['polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)']

    const root = document.documentElement
    root.dataset.themeVt = 'active'

    const cleanup = () => {
      isTransitioningRef.current = false
      delete root.dataset.themeVt
      cancelAnim()
    }

    isTransitioningRef.current = true
    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })

    transition.finished.finally(cleanup).catch(() => {})
    transition.ready
      .then(() => {
        const anim = document.documentElement.animate(
          { clipPath },
          {
            duration: 450,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'forwards',
            pseudoElement: '::view-transition-new(root)',
          }
        )
        activeAnimRef.current = anim
      })
      .catch(() => {})
  }, [dark, setDark, cancelAnim])

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] ${className}`}
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  )
}
