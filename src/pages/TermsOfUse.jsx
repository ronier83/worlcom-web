import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { brand, termsOfUse } from '../data/content'

/**
 * Terms of Use page: exact content from worldcomfinance.com/terms-of-use,
 * with site theme (primary, accent, Google Sans).
 */
export default function TermsOfUsePage() {
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
              Terms of Use
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mt-2 text-white/90"
            >
              {brand.legalEntity} · Last updated {termsOfUse.lastUpdated}
            </motion.p>
          </div>
        </section>

        {/* Subtitle + intro + numbered sections */}
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Subtitle (exact from live site) */}
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-semibold text-gray-900 sm:text-2xl"
            >
              {termsOfUse.subtitle}
            </motion.h2>

            {/* Intro paragraphs */}
            <div className="mt-6 space-y-3 text-left text-gray-800 leading-relaxed">
              {termsOfUse.intro.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * (i + 1) }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Numbered sections (1. Summary, 2. General, 3. Definitions) */}
            {termsOfUse.sections.map((section, sectionIndex) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * (sectionIndex + 3) }}
                className="mt-10"
              >
                <h3 className="text-lg font-bold text-accent sm:text-xl">
                  {section.title}
                </h3>
                <ul className="mt-4 list-none space-y-4 pl-0">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={item.number}
                      className="text-left text-gray-800 leading-relaxed"
                    >
                      <span className="font-semibold text-gray-900">
                        {item.number}
                        {item.title ? ` ${item.title} ` : item.term ? ` ${item.term} ` : ' '}
                      </span>
                      {item.body}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
