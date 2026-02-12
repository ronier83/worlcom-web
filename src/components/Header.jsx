import { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiGlobe, HiMenu, HiX } from 'react-icons/hi'
import { nav, brand } from '../data/content'

/**
 * Sticky header with logo, nav links (smooth scroll), W-PAY Card Login CTA, and language selector.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#3482F1] shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo - scroll to hero, fills nav height, no vertical padding */}
        <Link to="hero" smooth duration={500} className="flex h-full items-center p-0">
          <img src="/logoWhite.PNG" alt={brand.name} className="h-full w-auto object-contain" />
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
          {/* Language selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((o) => !o)}
              className="flex items-center gap-1 rounded-lg p-2 text-white transition hover:bg-white/10"
              aria-label="Change language"
            >
              <HiGlobe className="h-5 w-5" />
            </button>
            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 top-full mt-1 w-40 rounded-xl border border-gray-200 bg-white py-2 shadow-lg"
                >
                  <button className="block w-full px-4 py-2 text-left text-sm text-black hover:bg-gray-50">English</button>
                  <button className="block w-full px-4 py-2 text-left text-sm text-black hover:bg-gray-50">עברית</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href="#wpay-login"
            className="rounded-xl bg-[#F48F47] px-5 py-2.5 font-medium text-white transition hover:bg-[#F48F47]/90"
          >
            {nav.ctaLabel}
          </a>
        </div>

        {/* Mobile - white icons and orange W-PAY button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLanguageOpen((o) => !o)}
            className="rounded-lg p-2 text-white"
            aria-label="Change language"
          >
            <HiGlobe className="h-6 w-6" />
          </button>
          <a
            href="#wpay-login"
            className="rounded-xl bg-[#F48F47] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#F48F47]/90"
          >
            {nav.ctaLabel}
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="rounded-lg p-2 text-white"
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
                  className="rounded-lg px-4 py-3 text-black/80 hover:bg-gray-50 hover:text-primary"
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
