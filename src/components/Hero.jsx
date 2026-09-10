import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const techStack = [
  { label: 'React', d: 'M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854m-7.99 8.526-.63-.156C2.692 20.328 0 18.318 0 15.995s2.693-4.333 7.38-5.521l.63-.156.177.625a31.4 31.4 0 0 0 1.818 4.771l.135.281-.135.286a31 31 0 0 0-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063a33 33 0 0 1 1.578-4.063 33 33 0 0 1-1.578-4.063m16.901 9.74-.177-.625a31 31 0 0 0-1.818-4.766l-.135-.286.135-.286a31 31 0 0 0 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677a32.5 32.5 0 0 1 1.578 4.063c3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063a34 34 0 0 1-1.578 4.063M7.078 11.927l-.177-.625C5.583 6.656 5.984 3.323 8 2.161c1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464a31.5 31.5 0 0 0-3.229 3.958l-.182.255-.313.026a31.6 31.6 0 0 0-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005a33 33 0 0 1 4.313-.672 33 33 0 0 1 2.734-3.391c-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145q-.008 0 0 0c-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464a31.5 31.5 0 0 0 3.229-3.958l.177-.255.313-.031a30.7 30.7 0 0 0 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135a3.1 3.1 0 0 1-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005a33 33 0 0 1-4.313.667 33 33 0 0 1-2.734 3.396zm7.99-13.802-.63-.161a32 32 0 0 0-5.052-.813l-.313-.026-.177-.255a31.5 31.5 0 0 0-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276a33 33 0 0 1 4.313.672c.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943a34 34 0 0 1 2.734 3.391zM9.609 30.234c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255a31.5 31.5 0 0 0 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943a33 33 0 0 1-2.734-3.396 32.5 32.5 0 0 1-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26a40 40 0 0 1-1.797-2.828 40 40 0 0 1-1.557-2.969l-.135-.286.135-.286a40.5 40.5 0 0 1 3.354-5.797l.182-.26.313-.026a40 40 0 0 1 6.708 0l.313.026.182.26a40 40 0 0 1 3.354 5.797l.135.286-.135.286a39.6 39.6 0 0 1-3.354 5.797l-.182.26-.313.026a41 41 0 0 1-3.354.141m-2.927-1.448c1.969.151 3.885.151 5.859 0a39 39 0 0 0 2.927-5.063 37.5 37.5 0 0 0-2.932-5.063 38 38 0 0 0-5.854 0 37 37 0 0 0-2.932 5.063 38.6 38.6 0 0 0 2.932 5.063', viewBox: '0 0 32 32' },
  { label: 'TypeScript', d: 'm0 16v16h32v-32h-32zm25.786-1.276c.813.203 1.432.568 2.005 1.156.292.312.729.885.766 1.026.01.042-1.38.974-2.224 1.495-.031.021-.156-.109-.292-.313-.411-.599-.844-.859-1.505-.906-.969-.063-1.594.443-1.589 1.292-.005.208.042.417.135.599.214.443.615.708 1.854 1.245 2.292.984 3.271 1.635 3.88 2.557.682 1.031.833 2.677.375 3.906-.51 1.328-1.771 2.234-3.542 2.531-.547.099-1.849.083-2.438-.026-1.286-.229-2.505-.865-3.255-1.698-.297-.323-.87-1.172-.833-1.229.016-.021.146-.104.292-.188s.682-.396 1.188-.688l.922-.536.193.286c.271.411.859.974 1.214 1.161 1.021.542 2.422.464 3.115-.156.281-.234.438-.594.417-.958 0-.37-.047-.536-.24-.813-.25-.354-.755-.656-2.198-1.281-1.651-.714-2.365-1.151-3.01-1.854-.406-.464-.708-1.01-.88-1.599-.12-.453-.151-1.589-.057-2.042.339-1.599 1.547-2.708 3.281-3.036.563-.109 1.875-.068 2.427.068zm-7.51 1.339.01 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-.714.016-1.307.036-1.323.016-.021 2.547-.031 5.62-.026l5.594.016z', viewBox: '0 0 32 32' },
  { label: 'Tailwind', d: 'M12.001 4.8q-4.8 0-6 4.8 1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12q4.8 0 6-4.8-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8m-6 7.2q-4.8 0-6 4.8 1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576q4.8 0 6-4.8-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12', viewBox: '0 0 24 24' },
  { label: 'Node.js', viewBox: '0 0 24 24', d: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z' },
  { label: 'Next.js', viewBox: '0 0 24 24', d: 'M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z' },
  { label: 'Figma', viewBox: '0 0 24 24', d: 'M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z' },
]

const HEADING = 'Halo!, Saya keyzakyy.'
const CHAR_STAGGER = 0.05
const CHAR_DELAY = 0.4

const charContainer = {
  hidden: {},
  visible: {
    transition: { delayChildren: CHAR_DELAY, staggerChildren: CHAR_STAGGER },
  },
}

const charItem = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeOut' } },
}

const motionEffectTransition = { type: 'spring', stiffness: 200, damping: 20 }

function MotionEffect({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ...motionEffectTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function BlurRevealHeading() {
  return (
    <motion.span variants={charContainer} initial="hidden" animate="visible">
      {Array.from(HEADING).map((ch, i) =>
        ch === ' ' ? (
          <span key={i}> </span>
        ) : (
          <motion.span key={i} variants={charItem} className="inline-block">
            {ch}
          </motion.span>
        )
      )}
    </motion.span>
  )
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-6 pb-10 text-center sm:pt-8 sm:pb-12 md:pt-12 md:pb-16">
      {/* Badge */}
      <MotionEffect delay={0}>
        <a
          href="#contact"
          className="group inline-flex items-center rounded-full bg-[var(--color-primary)] p-1 pl-1 pr-3 text-xs text-[var(--color-surface)] transition-transform hover:scale-[1.03] active:scale-[0.98] sm:pr-4 sm:text-sm"
        >
          <span className="relative mr-2.5 flex size-6 items-center justify-center rounded-full bg-[var(--color-surface)]/15">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-400" />
            </span>
          </span>
          Available for Work
          <ArrowUpRight
            size={14}
            className="ml-2 text-[var(--color-surface)]/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-surface)]"
          />
        </a>
      </MotionEffect>

      {/* Heading - two-layer blur reveal like animate-ui */}
      <div className="mt-5 grid max-w-3xl sm:mt-6">
        <h1
          aria-hidden="true"
          className="col-start-1 row-start-1 text-3xl font-bold tracking-tight text-[var(--color-primary)] opacity-0 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {HEADING}
        </h1>
        <h1
          aria-hidden="true"
          className="col-start-1 row-start-1 text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <BlurRevealHeading />
        </h1>
      </div>

      {/* Sub-heading */}
      <MotionEffect delay={0.3}>
        <p className="mt-5 max-w-xl px-2 text-sm text-[var(--color-muted)] sm:mt-6 sm:px-0 sm:text-lg">
          Frontend developer yang fokus pada antarmuka modern, animasi halus, dan
          pengalaman pengguna yang cepat.
        </p>
      </MotionEffect>

      {/* CTAs */}
      <div className="mt-7 flex w-full flex-col gap-3 px-4 sm:mt-8 sm:w-auto sm:flex-row sm:px-0">
        <MotionEffect delay={0.45} className="w-full sm:w-auto">
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-[var(--color-surface)] transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
          >
            Hire Me
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </MotionEffect>
        <MotionEffect delay={0.6} className="w-full sm:w-auto">
          <a
            href="#work"
            className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-6 py-3 text-sm font-medium text-[var(--color-primary)] transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
          >
            View Work
          </a>
        </MotionEffect>
      </div>

      {/* Tech stack row */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 px-4 sm:mt-10 sm:gap-x-6">
        {techStack.map((tech, index) => (
          <MotionEffect key={tech.label} delay={0.75 + index * 0.1}>
            <svg
              viewBox={tech.viewBox}
              fill="currentColor"
              aria-label={tech.label}
              className="size-7 text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)] sm:size-8"
            >
              <path d={tech.d} />
            </svg>
          </MotionEffect>
        ))}
      </div>
    </section>
  )
}