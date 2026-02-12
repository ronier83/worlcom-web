/**
 * Centralized content from worldcomfinance.com (see CONTENT_MAP.md).
 * Single source of truth for copy across components.
 */

export const brand = {
  name: 'worldcom FINANCE',
  legalEntity: 'WIC Worldcom Finance LTD',
  licenseNumbers: '57533, 63141',
}

export const nav = {
  links: [
    { label: 'Rates', href: '#rates' },
    { label: 'Developers', href: '#developers' },
    { label: 'About Us', href: '#about' },
  ],
  ctaLabel: 'W-PAY Card Login',
}

export const hero = {
  headline: 'Cross-Border Financial Solutions',
  headlineLines: ['Cross-Border Financial', 'Solutions'],
  subheadline: 'Streamline your global finances with our cross-border solutions.',
  ctaLabel: "Let's Get Started",
}

// Conversion widget (Rewire-style). Sample rate for display only; real rates from Rates/API.
export const conversionWidget = {
  rateLabel: 'Check Our Rates',
  youSend: 'You send',
  theyGet: 'They get',
  deliveryMethod: 'Delivery method',
  deliveryOptions: ['Bank Transfer', 'Cash Pickup', 'Mobile Wallet'],
  ctaLabel: "Get Started",
  feesLabel: '₪0 Sending fees on all transfers',
}

export const statistics = [
  { value: 750000, suffix: '', label: 'Transfers Annually' },
  { value: 1000, suffix: '', label: 'Branches' },
  { value: 15000, suffix: '', label: 'Pickup Points' },
]

export const services = [
  { id: 'money-transfer', title: 'Money Transfer', description: 'Global transfers at competitive rates' },
  { id: 'currency-exchange', title: 'Currency Exchange', description: 'Multi-currency exchange' },
  { id: 'prepaid-cards', title: 'Prepaid Cards', description: '' },
  { id: 'loans', title: 'Loans', description: '' },
  { id: 'digital-wallet', title: 'Digital Wallet', description: 'Store, manage, and exchange multiple currencies' },
  { id: 'sim-topup', title: 'SIM Top-Up', description: 'Mobile recharge plans' },
  { id: 'wpay-card', title: 'WPay Card', description: 'No annual fees for daily and international use' },
]

export const moneyTransfer = {
  heading: 'Money Transfer Worldwide',
  description: "With Worldcom Finance's technology, you can securely transfer money to a wide range of destinations worldwide at highly competitive rates.",
  features: [
    {
      title: 'Competitive Pricing',
      description: 'Low fees, competitive exchange rates, transparency, no hidden fees',
    },
    {
      title: 'Quick and Easy',
      description: 'User-friendly app for fast transfers anywhere, anytime',
    },
    {
      title: 'Secure and Safe',
      description: 'Technology to protect finances and privacy',
    },
    {
      title: 'Professional Service',
      description: '24/7 support in the language of your choice',
    },
  ],
}

export const businessSolutions = {
  heading: 'Financial Solutions for Businesses',
  description: 'Managing global transactions for your business? Discover tailored solutions that offer the best rates with minimal fees.',
  ctaLabel: 'Get an Offer',
}

export const wpayCard = {
  heading: 'WPay Card',
  description: 'Enjoy no annual fees and simplify your daily purchases and international online shopping with WPay Card.',
  ctaLabel: 'Order WPay Card',
}

export const trust = {
  heading: 'Trusted by Leading Financial Institutions Worldwide',
  clientNames: ['Financial institutions', 'Ituran', 'Papa Johns', 'Tel Aviv University'],
}

export const faq = [
  {
    question: 'Why should I use Worldcom Finance?',
    answer: 'Worldcom Finance offers secure, fast money transfers to a wide range of destinations at competitive rates, with 24/7 support and a full suite of financial services including the WPay Card and digital wallet.',
  },
  {
    question: 'Is it safe to send money with Worldcom Finance?',
    answer: 'Yes. We use advanced technology to protect your finances and privacy. We are a licensed financial services provider (Licenses No: 57533, 63141) and adhere to strict regulatory standards.',
  },
  {
    question: 'How do I get started?',
    answer: 'Get started by visiting our website or contacting our support team. You can open an account, order the WPay Card, or request a business offer. Our team is here to help you with global transfers and financial solutions.',
  },
  {
    question: 'What fees does Worldcom Finance charge?',
    answer: 'We offer competitive pricing with low fees and transparent exchange rates. Contact us or check our Rates section for current fees. We aim to keep costs minimal with no hidden fees.',
  },
  {
    question: 'How do I get help?',
    answer: 'We are here for you. Reach us by email at cs@worldcomfinance.com or by phone at 03-900-9823. Our hours are Sundays to Thursdays 08:00–19:00 and Fridays 08:00–13:00. We provide support in the language of your choice.',
  },
]

export const contact = {
  heading: 'We Are Here For You',
  hours: [
    'Sundays to Thursdays: 08:00–19:00',
    'Fridays: 08:00–13:00',
  ],
  email: 'cs@worldcomfinance.com',
  phone: '03-900-9823',
  supportNote: '24/7 support in the language of your choice',
}

// Sitemap columns (Rewire-style). Links are placeholders (#).
export const sitemap = [
  {
    title: 'Send Money',
    links: [
      { label: 'Send Money to USA', href: '#' },
      { label: 'Send Money to UK', href: '#' },
      { label: 'Send Money to Europe', href: '#' },
      { label: 'Send Money to Philippines', href: '#' },
      { label: 'Send Money to India', href: '#' },
      { label: 'Send Money to China', href: '#' },
    ],
  },
  {
    title: 'Send by Region',
    links: [
      { label: 'Send Money to Africa', href: '#' },
      { label: 'Send Money to Asia', href: '#' },
      { label: 'Send Money to Europe', href: '#' },
      { label: 'Send Money to North America', href: '#' },
      { label: 'Send Money to South America', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Money Transfer', href: '#' },
      { label: 'Currency Exchange', href: '#' },
      { label: 'WPay Card', href: '#' },
      { label: 'Business Solutions', href: '#' },
      { label: 'Rates', href: '#' },
    ],
  },
  {
    title: 'WPay Card',
    links: [
      { label: 'Order WPay Card', href: '#' },
      { label: 'W-PAY Card Login', href: '#' },
      { label: 'Card for Businesses', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Customer Support', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
]

export const footer = {
  company: brand.legalEntity,
  licenses: brand.licenseNumbers,
  links: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
  email: contact.email,
  phone: contact.phone,
  copyright: `© ${brand.legalEntity}, Licenses No: ${brand.licenseNumbers}`,
}

export const privacyModal = {
  title: 'Dear Clients,',
  body: 'We would like to inform you that the Privacy Policy has been updated. We ask that you review the updated Privacy Policy in order to understand what information we collect, how it is used, and what your rights are.',
  checkboxLabel: 'I confirm that I have read the updated Privacy Policy',
  buttonLabel: 'Continue',
}
