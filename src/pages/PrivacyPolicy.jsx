import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { brand, privacyPolicy } from '../data/content'

/**
 * Privacy Policy page: themed layout matching the main site (primary, accent, Google Sans).
 * Content sourced from content.js (privacyPolicy); mirrors worldcomfinance.com/privacy-policy.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="font-google-sans pt-14 sm:pt-20">
        {/* Hero strip: primary blue, same as site header */}
        <section className="bg-primary px-4 py-10 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-semibold sm:text-4xl"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mt-2 text-white/90"
            >
              {brand.legalEntity} · Last updated {privacyPolicy.lastUpdated}
            </motion.p>
          </div>
        </section>

        {/* Policy body: white bg, readable width, section headings in accent */}
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {privacyPolicy.sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="mb-10"
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
      </main>
      <Footer />
    </>
  )
}
