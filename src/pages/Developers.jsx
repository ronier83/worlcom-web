import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RedocStandalone } from 'redoc'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { brand } from '../data/content'

/** Header height for scroll offset (matches site header) */
const SCROLL_OFFSET_PX = 80

/** Absolute URL for OpenAPI spec so Redoc can fetch it */
const getSpecUrl = () =>
  typeof window !== 'undefined' ? `${window.location.origin}/api/openapi.json` : '/api/openapi.json'

/**
 * Redoc theme: primary blue to match site (primary: #3482F1).
 * See https://redocly.com/docs/redoc/config/theming/
 */
const redocTheme = {
  colors: {
    primary: {
      main: '#3482F1',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    headings: {
      fontFamily: 'Inter, system-ui, sans-serif',
    },
  },
}

/**
 * Developers page: Redoc (open-source) renders the OpenAPI spec with full
 * interactive API docs; hero + download link above, back to home below.
 */
export default function DevelopersPage() {
  const specUrl = useMemo(getSpecUrl, [])

  // When hash changes (e.g. #/paths/~1getTransactionDetails/get), scroll the target into view.
  // Redoc updates the hash but may not scroll correctly when it uses an internal scroll container.
  useEffect(() => {
    const scrollToHashTarget = () => {
      const hash = window.location.hash
      if (!hash || hash === '#') return
      // Hash format: #/paths/~1getTransactionDetails/get  →  id might be paths/getTransactionDetails/get (~1 = /)
      const idFromHash = hash.replace(/^#\/?/, '').replace(/~1/g, '/')
      // Redoc may use id or data-section-id; ~1 in hash = / in path
      const pathSlug = idFromHash.split('/').filter(Boolean).join('-')
      const segments = pathSlug.split('-')
      const opName = segments.length >= 2 ? segments[1] : pathSlug
      const trySelectors = [
        () => document.getElementById(idFromHash),
        () => document.querySelector(`[data-section-id="${idFromHash}"]`),
        () => document.getElementById(pathSlug),
        () => document.querySelector(`[id*="${opName}"]`),
      ]
      let el = null
      for (const sel of trySelectors) {
        el = sel()
        if (el) break
      }
      if (el) {
        el.style.scrollMarginTop = `${SCROLL_OFFSET_PX}px`
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    let timeoutId = null
    const onHashChange = () => {
      if (timeoutId) clearTimeout(timeoutId)
      // Small delay so Redoc has rendered the target
      timeoutId = setTimeout(scrollToHashTarget, 150)
    }
    window.addEventListener('hashchange', onHashChange)
    // Initial load with hash (e.g. pasted URL)
    onHashChange()
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="font-google-sans pt-14 sm:pt-20">
        {/* Hero strip: primary blue + download link */}
        <section className="bg-primary px-4 py-8 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-semibold sm:text-3xl"
              >
                Developers
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="mt-1 text-white/90"
              >
                {brand.legalEntity} · API for our customers
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-white/90">Download OpenAPI specification:</span>
              <a
                href="/api/openapi.json"
                download="openapi.json"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Download
              </a>
            </motion.div>
          </div>
        </section>

        {/* Redoc: full-width interactive API doc from openapi.json */}
        <section className="min-h-[60vh]">
          <RedocStandalone
            specUrl={specUrl}
            options={{
              theme: redocTheme,
              nativeScrollbars: true,
              hideDownloadButton: true,
              // Account for fixed header so sidebar clicks scroll to the operation and it’s not hidden
              scrollYOffset: '#site-header',
            }}
          />
        </section>

        {/* Back to home CTA */}
        <section className="border-t border-gray-200 bg-gray-50/50 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
