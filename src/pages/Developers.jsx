import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { brand, developersPage } from '../data/content'

/**
 * Developers page: content from worldcomfinance.com/developers with site theme
 * (primary, accent, Google Sans).
 */
export default function DevelopersPage() {
  return (
    <>
      <Header />
      <main className="font-google-sans pt-14 sm:pt-20">
        {/* Hero strip: primary blue */}
        <section className="bg-primary px-4 py-10 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-semibold sm:text-4xl"
            >
              Developers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mt-2 text-white/90"
            >
              {brand.legalEntity} · API for our customers
            </motion.p>
          </div>
        </section>

        {/* Intro + WIC API methods title + sections */}
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-left text-lg text-gray-800 leading-relaxed"
            >
              {developersPage.intro}
            </motion.p>

            {/* Download OpenAPI spec (same as live site) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              <span className="text-gray-700">Download OpenAPI specification:</span>
              <a
                href="/api/openapi.json"
                download="openapi.json"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                Download
              </a>
            </motion.div>

            {developersPage.wicMethodTitle && (
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.08 }}
                className="mt-8 text-xl font-semibold text-accent sm:text-2xl"
              >
                {developersPage.wicMethodTitle}
              </motion.h2>
            )}

            {developersPage.sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * (index + 1) }}
                className="mt-10"
              >
                <h2 className="text-xl font-semibold text-accent sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-left text-gray-800 leading-relaxed">
                  {section.body}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Back to home CTA */}
        <section className="border-t border-gray-200 bg-gray-50/50 px-4 py-8 sm:px-6 lg:px-8">
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
