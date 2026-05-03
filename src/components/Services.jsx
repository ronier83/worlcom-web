import { motion } from 'framer-motion'
import {
  HiOutlineArrowPath,
  HiOutlineCurrencyDollar,
  HiOutlineCreditCard,
  HiOutlineWallet,
  HiOutlineDevicePhoneMobile,
  HiOutlineIdentification,
} from 'react-icons/hi2'
import { services } from '../data/content'
import CollapsibleSection from './CollapsibleSection'

const iconMap = {
  'money-transfer': HiOutlineArrowPath,
  'currency-exchange': HiOutlineCurrencyDollar,
  'prepaid-cards': HiOutlineCreditCard,
  'digital-wallet': HiOutlineWallet,
  'sim-topup': HiOutlineDevicePhoneMobile,
  'wpay-card': HiOutlineIdentification,
}

/**
 * Services grid: title, subtitle, and service cards.
 * Neutral-warm gradient section, bordered cards with soft hover elevation (grid 2→3 cols unchanged).
 * Title/subtitle use scroll-in; cards are static divs (no MV on cards — avoids accordion flash).
 * Mobile: CollapsibleSection accordion; desktop: always expanded.
 */
export default function Services({ activeSection, onToggle }) {
  const content = (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.4 }}
        className="hidden text-center text-3xl font-bold tracking-tight text-slate-900 md:block md:text-3xl"
      >
        Our Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-3 max-w-2xl text-center text-base text-slate-600 sm:mt-3 sm:text-base"
      >
        A full suite of cross-border financial solutions for individuals and businesses.
      </motion.p>

      {/* Cards: plain divs, no entrance animation — subtle border + hover depth (grid cols / gaps unchanged) */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:gap-5">
        {services.map((service) => {
          const Icon = iconMap[service.id] || HiOutlineCurrencyDollar
          return (
            <div
              key={service.id}
              className="group rounded-lg border border-slate-200/70 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.03] transition-[box-shadow,border-color] duration-200 sm:rounded-xl sm:p-4 lg:p-5 hover:border-primary/25 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="mb-2 inline-flex rounded-md bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] p-2 ring-1 ring-inset ring-primary/10 sm:mb-3 sm:rounded-lg sm:p-2.5">
                <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-sm font-semibold leading-tight text-slate-900 sm:text-base">{service.title}</h3>
              {service.description && (
                <p className="mt-1 line-clamp-2 text-xs leading-snug text-slate-600 sm:mt-1.5 sm:line-clamp-none sm:text-sm sm:leading-snug">{service.description}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
  return (
    <section
      id="services"
      className="font-google-sans bg-gradient-to-b from-[#faf7f4] via-[#f7f4f1] to-[#f3f0ed] md:py-12 lg:py-16"
    >
      <CollapsibleSection
        id="services"
        title="Our Services"
        isExpanded={activeSection === 'services'}
        onToggle={onToggle}
        headerClassName="bg-[#faf7f4]"
        textColor="text-slate-900"
        iconColor="text-primary"
        iconBgColor="bg-white shadow-sm ring-1 ring-slate-200/80"
      >
        {content}
      </CollapsibleSection>
    </section>
  )
}
