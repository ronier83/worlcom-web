import { useState, useMemo } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiOutlineBolt, HiOutlineArrowRight, HiOutlinePaperAirplane, HiOutlineBanknotes, HiOutlineBuildingLibrary, HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { HiChevronDown } from 'react-icons/hi'
import { conversionWidget } from '../data/content'
import { usePageLoadAnimation } from '../hooks/usePageLoadAnimation'

// Sample rates for demo: from sendCurrency to receiveCurrency. In production, replace with API or Rates page.
const RATE_MATRIX = {
  ILS: { USD: 0.27, EUR: 0.25, ILS: 1, THB: 9.5 },
  USD: { ILS: 3.7, EUR: 0.92, USD: 1, THB: 35 },
  EUR: { ILS: 4.0, USD: 1.09, EUR: 1, THB: 38 },
}

const CURRENCIES = [
  { code: 'ILS', symbol: '₪', name: 'Israeli Shekel', flag: 'il' },
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: 'us' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: 'eu' },
  { code: 'THB', symbol: '฿', name: 'Thai Baht', flag: 'th' },
]

// Send-currency options for "You send" dropdown (ILS, USD, EUR with round flags)
const SEND_CURRENCIES = CURRENCIES.filter((c) => ['ILS', 'USD', 'EUR'].includes(c.code))

// Receive-currency options for "They get" dropdown: USD, EUR, ILS, THB with round flags
const RECEIVE_CURRENCIES = [
  CURRENCIES.find((c) => c.code === 'USD'),
  CURRENCIES.find((c) => c.code === 'EUR'),
  CURRENCIES.find((c) => c.code === 'ILS'),
  CURRENCIES.find((c) => c.code === 'THB'),
].filter(Boolean)

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
  const [sendCurrency, setSendCurrency] = useState('ILS')
  const [receiveCurrency, setReceiveCurrency] = useState('USD')
  const [delivery, setDelivery] = useState('Cash Pickup')
  const shouldAnimate = usePageLoadAnimation()

  const fromRates = RATE_MATRIX[sendCurrency]
  const rate = fromRates?.[receiveCurrency] ?? (sendCurrency === 'ILS' ? 0.27 : 1)
  const receiveAmount = useMemo(() => Math.round(sendAmount * rate * 100) / 100, [sendAmount, rate])
  const fromCurrency = CURRENCIES.find((c) => c.code === sendCurrency)
  const toCurrency = CURRENCIES.find((c) => c.code === receiveCurrency)
  const rateDisplay = `${fromCurrency?.symbol ?? '₪'}1 = ${toCurrency?.symbol ?? '$'}${rate}`

  const formatAmount = (value, code) => {
    const c = CURRENCIES.find((x) => x.code === code)
    const sym = c?.symbol || code
    return `${sym}${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      {...(shouldAnimate ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-20px' } } : { animate: { opacity: 1, y: 0 } })}
      className="w-full min-w-0 max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl lg:max-w-[380px]"
    >
      {/* Top strip: light purple bg, rate left, Check Our Rates link right (underlined); min-w-0 so flex doesn't overflow on small screens */}
      <div className="flex min-w-0 items-center justify-between gap-3 bg-[#3482F1]/10 px-4 py-3 sm:px-6">
        <span className="min-w-0 truncate text-sm font-medium text-gray-700">{rateDisplay}</span>
        <Link
          to="rates"
          smooth
          duration={500}
          offset={-72}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3482F1] underline decoration-[#3482F1] underline-offset-2"
        >
          <HiOutlineBolt className="h-4 w-4 shrink-0" />
          {conversionWidget.rateLabel}
        </Link>
      </div>

      <div className="p-6 sm:p-8">
        {/* You send: label, bold amount, dropdown (ILS / USD / EUR) with round flags */}
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
            <label className="relative flex cursor-pointer items-center gap-1.5">
              <span className="pointer-events-none text-base font-medium text-gray-600">{sendCurrency}</span>
              <span className="pointer-events-none">
                <Flag countryCode={fromCurrency?.flag || 'il'} className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
              </span>
              <HiChevronDown className="pointer-events-none h-5 w-5 shrink-0 text-gray-500" />
              <select
                value={sendCurrency}
                onChange={(e) => setSendCurrency(e.target.value)}
                className="absolute inset-0 cursor-pointer opacity-0"
                aria-label="Select send currency"
              >
                {SEND_CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.code}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* They get: bold amount left-aligned on mobile (body is text-center); currency + flag on right */}
        <div className="mt-6 text-left">
          <label className="block text-sm font-medium text-gray-600">{conversionWidget.theyGet}</label>
          <div className="mt-1 flex items-center justify-start gap-2 border-b border-gray-300 pb-2">
            <span className="min-w-0 flex-1 text-left text-2xl font-bold text-gray-900 sm:text-3xl">
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
                aria-label="Select receive currency"
              >
                {RECEIVE_CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.name}</option>
                ))}
              </select>
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
                      : 'border-gray-200 bg-gray-50 text-gray-600'
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
            className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl bg-[#3482F1] py-4 text-lg font-bold text-white"
            whileTap={{ scale: 0.99 }}
          >
            {conversionWidget.ctaLabel}
            <HiOutlineArrowRight className="h-5 w-5" />
          </motion.span>
        </Link>

        {/* Fee disclaimer: paper plane icon + purple text (left-aligned) */}
        <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[#3482F1]">
          <HiOutlinePaperAirplane className="h-4 w-4 shrink-0" />
          {conversionWidget.feesLabel}
        </p>
      </div>
    </motion.div>
  )
}
