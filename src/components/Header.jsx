import { useState, useEffect, useRef } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { nav, brand } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

const SCROLL_THRESHOLD_PX = 24
/** Match floating header + scroll-margin in globals (hero uses offset for react-scroll). */
const SCROLL_LINK_OFFSET = -96

/**
 * Home: floating bar with horizontal inset. Top uses light glass over the hero; scrolled uses stronger primary.
 * Other routes: full-width primary bar.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const prevScrolledRef = useRef(false)
  const shouldAnimate = usePageLoadAnimation()
  const location = useLocation()
  const isHome = location.pathname === '/'

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

  useEffect(() => {
    const scrolled = window.scrollY > SCROLL_THRESHOLD_PX
    prevScrolledRef.current = scrolled
    setIsScrolled(scrolled)
  }, [location.pathname])

  const mobilePanel = (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={shouldAnimate ? { opacity: 0, height: 0 } : false}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-black/10 bg-white md:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {nav.links.map((item) =>
              item.href.startsWith('/') ? (
                <RouterLink
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] cursor-pointer items-center rounded-lg px-4 py-3 text-black/80 transition-colors hover:bg-black/5"
                >
                  {item.label}
                </RouterLink>
              ) : (
                <Link
                  key={item.label}
                  to={item.href.replace('#', '')}
                  smooth
                  duration={500}
                  offset={SCROLL_LINK_OFFSET}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] cursor-pointer items-center rounded-lg px-4 py-3 text-black/80 transition-colors hover:bg-black/5"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="#wpay-login"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex min-h-[44px] cursor-pointer items-center justify-center rounded-xl bg-[#F48F47] px-4 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-95"
            >
              {nav.ctaLabel}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  const desktopNav = (
    <div className="hidden items-center gap-8 md:flex">
      {nav.links.map((item) =>
        item.href.startsWith('/') ? (
          <RouterLink
            key={item.label}
            to={item.href}
            className="cursor-pointer text-white transition-opacity duration-200 hover:opacity-90"
          >
            {item.label}
          </RouterLink>
        ) : (
          <Link
            key={item.label}
            to={item.href.replace('#', '')}
            smooth
            duration={500}
            offset={SCROLL_LINK_OFFSET}
            className="cursor-pointer text-white transition-opacity duration-200 hover:opacity-90"
          >
            {item.label}
          </Link>
        )
      )}
      <a
        href="#wpay-login"
        className="cursor-pointer rounded-xl bg-[#F48F47] px-5 py-2.5 font-medium text-white shadow-sm transition-opacity duration-200 hover:opacity-95"
      >
        {nav.ctaLabel}
      </a>
    </div>
  )

  const logo = (
    <RouterLink
      to="/"
      className="flex h-full cursor-pointer items-center p-0"
      onClick={() => {
        if (location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
    >
      <img src="/logoWhite.PNG" alt={brand.name} className="h-full max-h-10 w-auto object-contain sm:max-h-14" />
    </RouterLink>
  )

  const mobileToggle = (
    <div className="flex items-center gap-2 md:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen((o) => !o)}
        className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-lg p-1.5 text-white sm:min-h-[44px] sm:min-w-[44px] sm:p-2"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
      </button>
    </div>
  )

  if (isHome) {
    const barSurface = isScrolled
      ? 'border-white/25 bg-primary/95 shadow-lg shadow-black/15 backdrop-blur-md'
      // Blue-tinted glass (avoid bg-white/10 blur, which reads as a white stripe above the hero)
      : 'border-white/15 bg-primary/50 shadow-md shadow-black/10 backdrop-blur-md'

    return (
      <header id="site-header" className="font-plex pointer-events-none fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
        <div
          className={`pointer-events-auto mx-auto max-w-7xl overflow-hidden rounded-2xl border transition-[background-color,border-color,box-shadow,backdrop-filter] duration-200 ${barSurface}`}
        >
          <nav className="flex h-14 items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-6 lg:px-8">
            {logo}
            {desktopNav}
            {mobileToggle}
          </nav>
          {mobilePanel}
        </div>
      </header>
    )
  }

  return (
    <header
      id="site-header"
      className={`font-plex fixed left-0 right-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ${
        isScrolled ? 'bg-[#3482F1]/92 shadow-md shadow-black/10 backdrop-blur-md' : 'bg-[#3482F1]'
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-6 lg:px-8">
        {logo}
        {desktopNav}
        {mobileToggle}
      </nav>
      {mobilePanel}
    </header>
  )
}
