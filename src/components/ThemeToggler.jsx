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
      className={`group relative h-8 w-[60px] cursor-pointer rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-[3px] transition-colors duration-300 hover:border-[var(--color-muted)] ${className}`}
    >
      <span
        className={`absolute top-[3px] flex size-[26px] items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-surface)] shadow-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          dark ? 'left-[calc(100%-29px)]' : 'left-[3px]'
        }`}
      >
        {dark ? (
          <Sun size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:rotate-90" />
        ) : (
          <Moon size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </span>
    </button>
  )
}
