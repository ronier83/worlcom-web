import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { brand, aboutPage } from '../data/content'

/**
 * About page: content from worldcomfinance.com/about with site theme
 * (primary, accent, Google Sans).
 */
export default function AboutPage() {
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
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mt-2 text-white/90"
            >
              {brand.legalEntity}
            </motion.p>
          </div>
        </section>

        {/* Intro + sections: white bg, accent headings */}
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-left text-lg text-gray-800 leading-relaxed"
            >
              {aboutPage.intro}
            </motion.p>

            {aboutPage.sections.map((section, index) => (
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
