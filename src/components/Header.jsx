import { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { nav, brand } from '../data/content'

/**
 * Sticky header with logo, nav links (smooth scroll), and W-PAY Login CTA.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#3482F1]">
      {/* Solid blue to match hero; no opacity so no shade mismatch before scroll */}
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo - scroll to hero, fills nav height; h-20 nav gives larger logo */}
        <Link to="hero" smooth duration={500} className="flex h-full items-center p-0">
          <img src="/logoWhite.PNG" alt={brand.name} className="h-full max-h-20 w-auto object-contain" />
        </Link>

        {/* Desktop nav - white text */}
        <div className="hidden items-center gap-8 md:flex">
          {nav.links.map((item) => (
            <Link
              key={item.label}
              to={item.href.replace('#', '')}
              smooth
              duration={500}
              offset={-72}
              className="text-white transition hover:text-white/90"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#wpay-login"
            className="rounded-xl bg-[#F48F47] px-5 py-2.5 font-medium text-white transition hover:bg-[#F48F47]/90"
          >
            {nav.ctaLabel}
          </a>
        </div>

        {/* Mobile - orange W-PAY button and menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#wpay-login"
            className="flex min-h-[44px] items-center rounded-lg bg-[#F48F47] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#F48F47]/90"
          >
            {nav.ctaLabel}
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-white"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/20 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {nav.links.map((item) => (
                <Link
                  key={item.label}
                  to={item.href.replace('#', '')}
                  smooth
                  duration={500}
                  offset={-72}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-black/80 hover:bg-gray-50 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
