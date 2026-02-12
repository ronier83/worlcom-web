import { motion } from 'framer-motion'
import {
  HiOutlineCurrencyDollar,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2'
import { moneyTransfer } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'
import CollapsibleSection from './CollapsibleSection'

const featureIcons = [
  HiOutlineCurrencyDollar,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
]

/**
 * Money Transfer section with heading, description, and 4 feature cards.
 * Section id="rates" for nav scroll.
 * On mobile, wrapped in CollapsibleSection (accordion); on desktop always expanded.
 */
export default function MoneyTransfer({ activeSection, onToggle }) {
  const shouldAnimate = usePageLoadAnimation()
  const content = (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* Left: image + description; min-w-0 so grid doesn't overflow on narrow viewports */}
        <div className="flex min-w-0 flex-col">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
            {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.15 } } : { animate: { opacity: 1, y: 0 } })}
            className="w-full max-w-xl overflow-hidden rounded-2xl"
          >
            <img
              src="/images/transfer.png"
              alt=""
              className="w-full object-cover"
            />
          </motion.div>
          <p className="mt-6 text-lg text-black/80">
            With Worldcom Finance's technology, you can securely transfer money to a wide range of destinations worldwide at highly competitive rates.
          </p>
        </div>

        {/* Right: feature cards */}
        <div className="grid min-w-0 gap-4 sm:grid-cols-2">
          {moneyTransfer.features.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <motion.div
                key={feature.title}
                initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' }, transition: { delay: index * 0.08 } } : { animate: { opacity: 1, y: 0 } })}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card"
              >
                <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-black">{feature.title}</h3>
                <p className="mt-2 text-sm text-black/70">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
  return (
    <section id="rates" className="relative overflow-hidden bg-[#E8EEFC] md:py-16 md:md:py-24">
      <CollapsibleSection
        id="rates"
        title="Money Transfer"
        isExpanded={activeSection === 'rates'}
        onToggle={onToggle}
        headerClassName="bg-[#E8EEFC]"
        textColor="text-[#3482F1]"
        iconColor="text-[#3482F1]"
        iconBgColor="bg-white"
      >
        {content}
      </CollapsibleSection>
    </section>
  )
}
