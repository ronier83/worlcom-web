import { useState, useMemo } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiOutlineBolt, HiOutlineArrowRight, HiOutlinePaperAirplane, HiOutlineBanknotes, HiOutlineBuildingLibrary, HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { HiChevronDown } from 'react-icons/hi'
import { conversionWidget } from '../data/content'

// Sample rates for demo (ILS base). In production, replace with API or Rates page.
const SAMPLE_RATES = {
  USD: 0.27,
  EUR: 0.25,
  GBP: 0.21,
}

const CURRENCIES = [
  { code: 'ILS', symbol: '₪', name: 'Israeli Shekel', flag: 'il' },
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: 'us' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: 'de' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: 'gb' },
]

const deliveryIcons = {
  'Bank Transfer': HiOutlineBuildingLibrary,
  'Cash Pickup': HiOutlineBanknotes,
  'Mobile Wallet': HiOutlineDevicePhoneMobile,
}

// Circular flag image (Rewire-style). Uses flagcdn.com; fallback for EU if needed.
function Flag({ countryCode, className = 'h-6 w-6' }) {
  const code = countryCode?.toLowerCase() || 'us'
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt=""
      className={`rounded-full object-cover ${className}`}
      loading="lazy"
    />
  )
}

/**
 * Rewire-style conversion widget: light purple top strip, bold amounts, circular flags, delivery pill, purple CTA.
 */
export default function ConversionWidget() {
  const [sendAmount, setSendAmount] = useState(1000)
  const [receiveCurrency, setReceiveCurrency] = useState('USD')
  const [delivery, setDelivery] = useState('Cash Pickup')

  const rate = SAMPLE_RATES[receiveCurrency] ?? 0.27
  const receiveAmount = useMemo(() => Math.round(sendAmount * rate * 100) / 100, [sendAmount, rate])
  const toCurrency = CURRENCIES.find((c) => c.code === receiveCurrency)
  const rateDisplay = `₪1 = ${toCurrency?.symbol ?? '$'}${rate}`

  const formatAmount = (value, code) => {
    const c = CURRENCIES.find((x) => x.code === code)
    const sym = c?.symbol || code
    return `${sym}${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
    >
      {/* Top strip: light purple bg, rate left, Check Our Rates link right (underlined) */}
      <div className="flex items-center justify-between gap-3 bg-[#3482F1]/10 px-6 py-3">
        <span className="text-sm font-medium text-gray-700">{rateDisplay}</span>
        <Link
          to="rates"
          smooth
          duration={500}
          offset={-72}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3482F1] underline decoration-[#3482F1] underline-offset-2 transition hover:text-[#3482F1]/90"
        >
          <HiOutlineBolt className="h-4 w-4 shrink-0" />
          {conversionWidget.rateLabel}
        </Link>
      </div>

      <div className="p-6 sm:p-8">
        {/* You send: label, bold amount, underline, ILS + flag */}
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-600">{conversionWidget.youSend}</label>
          <div className="mt-1 flex items-center gap-2 border-b border-gray-300 pb-2">
            <input
              type="number"
              min={1}
              value={sendAmount}
              onChange={(e) => setSendAmount(Number(e.target.value) || 0)}
              className="min-w-0 flex-1 bg-transparent text-2xl font-bold text-gray-900 outline-none sm:text-3xl"
            />
            <span className="text-base font-medium text-gray-600">ILS</span>
            <Flag countryCode="il" className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
          </div>
        </div>

        {/* They get: bold amount, underline, currency + flag + chevron (dropdown) */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-600">{conversionWidget.theyGet}</label>
          <div className="mt-1 flex items-center gap-2 border-b border-gray-300 pb-2">
            <span className="min-w-0 flex-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              {formatAmount(receiveAmount, receiveCurrency)}
            </span>
            <label className="relative flex cursor-pointer items-center gap-1.5">
              <span className="pointer-events-none text-base font-medium text-gray-600">{receiveCurrency}</span>
              <span className="pointer-events-none">
                <Flag countryCode={toCurrency?.flag || 'us'} className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
              </span>
              <HiChevronDown className="pointer-events-none h-5 w-5 shrink-0 text-gray-500" />
              <select
                value={receiveCurrency}
                onChange={(e) => setReceiveCurrency(e.target.value)}
                className="absolute inset-0 cursor-pointer opacity-0"
                aria-label="Select currency"
              />
            </label>
          </div>
        </div>

        {/* Delivery method: single pill with white bg, purple border, icon + "Cash Pickup" in purple */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-600">{conversionWidget.deliveryMethod}</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {conversionWidget.deliveryOptions.map((opt) => {
              const Icon = deliveryIcons[opt] || HiOutlineBanknotes
              const active = delivery === opt
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setDelivery(opt)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                    active
                      ? 'border-[#3482F1] bg-white text-[#3482F1]'
                      : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {opt}
                </button>
              )
            })}
          </div>
        </div>

        {/* Get Started: full width purple button, white text + arrow */}
        <Link to="services" smooth duration={500} offset={-72} className="mt-8 block">
          <motion.span
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3482F1] py-4 text-lg font-bold text-white transition hover:bg-[#3482F1]/90"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {conversionWidget.ctaLabel}
            <HiOutlineArrowRight className="h-5 w-5" />
          </motion.span>
        </Link>

        {/* Fee disclaimer: paper plane icon + purple text (left-aligned) */}
        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-[#3482F1]">
          <HiOutlinePaperAirplane className="h-4 w-4 shrink-0" />
          {conversionWidget.feesLabel}
        </p>
      </div>
    </motion.div>
  )
}
