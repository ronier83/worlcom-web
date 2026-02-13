import { useState, useEffect, useRef } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { nav, brand } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

const SCROLL_THRESHOLD_PX = 20

/**
 * Fixed header: solid blue at top (matches hero); slightly transparent + blur only when scrolled.
 * setState only when crossing threshold to avoid re-renders on every scroll.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const prevScrolledRef = useRef(false)
  const shouldAnimate = usePageLoadAnimation()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > SCROLL_THRESHOLD_PX
      if (scrolled !== prevScrolledRef.current) {
        prevScrolledRef.current = scrolled
        setIsScrolled(scrolled)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="site-header"
      className={`font-google-sans fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-200 ${
        isScrolled ? 'bg-[#3482F1]/90 backdrop-blur-sm' : 'bg-[#3482F1]'
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-6 lg:px-8">
        {/* Logo: go to / from other pages; when already on home, scroll to top */}
        <RouterLink
          to="/"
          className="flex h-full items-center p-0"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          <img src="/logoWhite.PNG" alt={brand.name} className="h-full max-h-10 w-auto object-contain sm:max-h-14" />
        </RouterLink>

        {/* Desktop nav: path-based (e.g. /about) use RouterLink; hash (#) use scroll */}
        <div className="hidden items-center gap-8 md:flex">
          {nav.links.map((item) =>
            item.href.startsWith('/') ? (
              <RouterLink
                key={item.label}
                to={item.href}
                className="text-white hover:opacity-90"
              >
                {item.label}
              </RouterLink>
            ) : (
              <Link
                key={item.label}
                to={item.href.replace('#', '')}
                smooth
                duration={500}
                offset={-72}
                className="text-white"
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href="#wpay-login"
            className="rounded-xl bg-[#F48F47] px-5 py-2.5 font-medium text-white"
          >
            {nav.ctaLabel}
          </a>
        </div>

        {/* Mobile - menu toggle only; W-PAY Login is inside the hamburger menu */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg p-1.5 text-white sm:min-h-[44px] sm:min-w-[44px] sm:p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel - white bg, dark text for contrast */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldAnimate ? { opacity: 0, height: 0 } : false}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/20 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {nav.links.map((item) =>
                item.href.startsWith('/') ? (
                  <RouterLink
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-black/80"
                  >
                    {item.label}
                  </RouterLink>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href.replace('#', '')}
                    smooth
                    duration={500}
                    offset={-72}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-black/80"
                  >
                    {item.label}
                  </Link>
                )
              )}
              {/* W-PAY Login inside menu, orange so it stays distinct from nav links */}
              <a
                href="#wpay-login"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex min-h-[44px] items-center justify-center rounded-xl bg-[#F48F47] px-4 py-3 text-sm font-medium text-white"
              >
                {nav.ctaLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
