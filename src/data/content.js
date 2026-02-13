/**
 * Centralized content from worldcomfinance.com (see CONTENT_MAP.md).
 * Single source of truth for copy across components.
 */

export const brand = {
  name: 'WorldCom Finance',
  legalEntity: 'WIC Worldcom Finance LTD',
  licenseNumbers: '57533, 63141',
}

export const nav = {
  links: [
    { label: 'Rates', href: '/rates' },
    { label: 'Developers', href: '/developers' },
    { label: 'About Us', href: '/about' },
  ],
  ctaLabel: 'W-PAY Login',
}

export const hero = {
  headline: 'Cross-Border Financial Solutions',
  headlineLines: ['Cross-Border Financial', 'Solutions'],
  subheadline: 'International payments and finances, made simple.',
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
  feeLabel: 'Fee',
  totalCostLabel: 'Total Cost',
  countryLabel: 'Country',
  transferMethodLabel: 'Transfer method',
  supplierLabel: 'Supplier',
  amountSentLabel: 'You send',
}

// Rates page (content scraped from worldcomfinance.com/rates): title, intro, calculator, Q&A
export const ratesPage = {
  title: 'Rates',
  subhead: 'Live exchange rates and fees for international transfers.',
  intro: "Check our competitive rates and fees for sending money abroad. Select your destination country, transfer method, and supplier to see the exact rate and how much your recipient will get. Rates are updated in real time—no hidden fees.",
  calculatorHeading: 'Transfer calculator',
  calculatorSubtext: 'Choose country, transfer method, and supplier to see the rate and amount received.',
  // Q&A section (from worldcomfinance.com/rates)
  questionsHeading: 'Frequently Asked Questions',
  questions: [
    {
      question: 'How Do I Sign Up for Worldcom Finance?',
      answer: "You can sign up by visiting our registration page or by downloading the Worldcom Finance app from the iOS App Store or Google Play Store. Once your account is set up, you're ready to start using Worldcom Finance. By completing these steps, you'll gain secure access to all Worldcom Finance services, ensuring a smooth start to managing your finances efficiently.",
    },
    {
      question: 'How Can I Send Money?',
      answer: "Sending money through our app is simple and convenient. Follow these steps: Specify the amount you wish to send. Enter your full name, email address, and phone number. Create a strong password and confirm your phone number by entering the verification code sent to you via SMS. Choose your preferred payment method and complete the payment for the transaction.",
    },
    {
      question: 'How Can I Download the Worldcom Finance App?',
      answer: "Downloading the Worldcom Finance app is quick and easy. It is available for both iOS and Android devices. For your convenience, you can download the app from the Apple App Store or Google Play Store. Once installed, open the app and follow the simple setup process to start using Worldcom Finance. If you encounter any issues, feel free to reach out to our support team for assistance.",
    },
    {
      question: 'How Can I Contact You If I Have Questions?',
      answer: "Message us directly on WhatsApp or reach us by email at cs@worldcomfinance.com or by phone at 03-900-9823. For additional assistance, feel free to contact our support team. Our hours are Sundays to Thursdays 08:00–19:00 and Fridays 08:00–13:00 (Israel time).",
    },
  ],
}

export const statistics = [
  { value: 750000, suffix: '', label: 'Transfers Annually' },
  { value: 1000, suffix: '', label: 'Branches' },
  { value: 15000, suffix: '', label: 'Pickup Points' },
  { value: 150, suffix: '+', label: 'Countries Served' },
]

export const services = [
  { id: 'money-transfer', title: 'Money Transfer', description: 'Global transfers at competitive rates' },
  { id: 'currency-exchange', title: 'Currency Exchange', description: 'Multi-currency exchange' },
  { id: 'prepaid-cards', title: 'Prepaid Cards', description: 'Load and spend in multiple currencies with ease.' },
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

/**
 * About page content (aligned with worldcomfinance.com/about).
 * Styling applied in About.jsx.
 */
export const aboutPage = {
  intro: 'WIC Worldcom Finance Ltd. is an international money transfer company based in Israel. Since 2009, we have connected thousands of pay-in and pay-out locations worldwide and are recognized as one of the world\'s most trusted international money transfer providers.',
  sections: [
    {
      title: 'Who We Are',
      body: 'We are a licensed financial services provider, offering cross-border financial solutions to individuals and businesses. Our services include international money transfer, currency exchange, prepaid cards, digital wallet, and the WPay Card. We combine technology with a human touch to make global payments simple, secure, and affordable.',
    },
    {
      title: 'Our Reach',
      body: 'We process hundreds of thousands of transfers annually, with a network of branches and pickup points across more than 150 countries. Whether you send money to family, pay bills abroad, or manage business payments, we provide multiple options including bank deposit, cash pickup, and mobile wallet.',
    },
    {
      title: 'Licensed & Regulated',
      body: 'The Company holds an expanded license (License No. 57533) to provide financial asset services and a basic license (License No. 63141) to provide credit services. We are regulated and supervised by the Israel Securities Authority, Insurance, and Savings, and we adhere to strict compliance and anti-money laundering standards.',
    },
    {
      title: 'Trusted by Leading Institutions',
      body: 'We are trusted by leading financial institutions, businesses, and organizations worldwide. Our partners and clients rely on us for secure, fast, and reliable cross-border payments and financial services.',
    },
    {
      title: 'Contact Us',
      body: 'We are here for you. Reach us by email at cs@worldcomfinance.com or by phone at 03-900-9823. Our customer support is available Sundays to Thursdays 08:00–19:00 and Fridays 08:00–13:00 (Israel time), in the language of your choice.',
    },
  ],
}

/**
 * Developers page content – from worldcomfinance.com/developers (WIC API).
 * Scraped from live site bundle: method descriptions, error codes, and API for customers/partners.
 * Styling applied in Developers.jsx.
 */
// API path + short label for mobile Developers page (no Redoc)
export const developersApiEndpoints = [
  { path: '/sendmoney.php', method: 'POST', label: 'Send Money' },
  { path: '/getStatus', method: 'GET', label: 'Get Status' },
  { path: '/getCountries', method: 'GET', label: 'Get Countries' },
  { path: '/getBanks', method: 'GET', label: 'Get Banks' },
  { path: '/getTransactionDetails', method: 'GET', label: 'Get Transaction Details' },
  { path: '/getPendingTransactions', method: 'GET', label: 'Get Pending Transactions' },
]

export const developersPage = {
  intro: 'The WIC API enables our customers and partners to integrate money transfer and remittance into their platforms. Use our API to perform remits, check supported countries and transfer types, and manage transactions with the same security and compliance as our licensed services.',
  wicMethodTitle: 'The WIC API methods description',
  sections: [
    {
      title: 'SendMoney',
      body: 'Performs the remit itself. Even though this method is used for all remit types with different parameters, the required parameters will vary for each type, as described for each type. Supported country and transfer type combinations are documented in the full API reference. All calls to this method must include the required data (e.g. country, transfer type, sender and receiver details) as specified for each remit type.',
    },
    {
      title: 'Response format & error codes',
      body: 'Methods may return additional information. See each method’s details to learn about the response basic format and pattern it provides. Error_level indicates the result: 0 = Success; 400 = Forbidden, authentication failed; 404 = Request method not found or does not exist; 500 = Internal error occurred, please contact administrator; 501 = Bad request, some of the parameters are invalid.',
    },
    {
      title: 'Getting API access',
      body: 'API access is available to approved partners and customers. To request credentials and full documentation (including supported countries, transfer types, and required parameters for each method), contact our team at cs@worldcomfinance.com or 03-900-9823. We will guide you through onboarding and technical integration.',
    },
    {
      title: 'Support',
      body: 'Technical and integration support is available to developers. Reach us at cs@worldcomfinance.com or by phone at 03-900-9823. Our hours are Sundays to Thursdays 08:00–19:00 and Fridays 08:00–13:00 (Israel time).',
    },
  ],
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
      { label: 'W-PAY Login', href: '#' },
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
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-of-use' },
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

/**
 * Privacy Policy page content (aligned with worldcomfinance.com/privacy-policy).
 * Single source for the policy text; styling applied in PrivacyPolicy.jsx.
 */
export const privacyPolicy = {
  lastUpdated: '2025',
  sections: [
    {
      title: 'Introduction',
      body: 'This Privacy Policy describes how WIC Worldcom Finance LTD ("we", "us", "our") collects, uses, and protects your personal information when you use our services, including our website, mobile applications, and money transfer services. We are a licensed financial services provider (Licenses No: 57533, 63141) and we are committed to protecting your privacy and handling your data in accordance with applicable law.',
    },
    {
      title: 'Information We Collect',
      body: 'We collect information that you provide directly (such as name, contact details, identification, payment and transaction details), information we obtain when you use our services (such as device and usage data), and information from third parties (such as identity verification and fraud prevention services) where permitted by law.',
    },
    {
      title: 'How We Use Your Information',
      body: 'We use the information we collect to provide, operate, and improve our services; to process transactions and comply with legal and regulatory obligations; to communicate with you; to prevent fraud and ensure security; and to personalize your experience. We do not use your information for purposes incompatible with those described here without your consent.',
    },
    {
      title: 'Sharing of Information',
      body: 'We may share your information with service providers who assist us in operating our business (e.g. payment processors, identity verification), with regulatory or law enforcement bodies when required by law, and with our partners involved in delivering your transfer (e.g. banks, payout networks). We do not sell your personal information.',
    },
    {
      title: 'Security',
      body: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration. Our systems and processes are designed to safeguard your data in line with industry standards and regulatory requirements.',
    },
    {
      title: 'Data Retention',
      body: 'We retain your personal information for as long as necessary to provide our services, comply with legal obligations (including anti-money laundering and tax requirements), resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.',
    },
    {
      title: 'Your Rights',
      body: 'Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data; to data portability; to object to certain processing; and to withdraw consent where applicable. You may also have the right to lodge a complaint with a supervisory authority. To exercise these rights, please contact us using the details below.',
    },
    {
      title: 'Contact Us',
      body: 'If you have questions about this Privacy Policy or our privacy practices, please contact us at cs@worldcomfinance.com or by phone at 03-900-9823. Our customer support is available to assist you.',
    },
  ],
}

/**
 * Terms of Use page content – exact copy from worldcomfinance.com/terms-of-use.
 * Structure: subtitle, intro paragraphs, numbered sections (1. Summary, 2. General, 3. Definitions).
 * Styling applied in TermsOfUse.jsx.
 */
export const termsOfUse = {
  lastUpdated: '2025',
  subtitle: 'Terms of Use – WIC Worldcom Finance Ltd. ("the Company")',
  intro: [
    'You have chosen WIC as your digital wallet for the purpose of managing your funds and performing various actions, as detailed in these Terms of Use.',
    'Use of the Wallet constitutes your agreement to the terms of use set forth below. Please read them carefully.',
  ],
  sections: [
    {
      title: '1. Summary of the Terms of Use:',
      items: [
        {
          number: '1.1',
          body: 'The Company holds an expanded license (License No. 57533) to provide financial asset services and a basic license (License No. 63141) to provide credit services. It is regulated and supervised by the Israel Securities Authority, Insurance, and Savings.',
        },
        {
          number: '1.2',
          body: 'The digital wallet payment service is operated via a smartphone application, and the license for its use is granted under these terms.',
        },
        {
          number: '1.3',
          body: 'These terms constitute a payment services agreement between you and the Company.',
        },
        {
          number: '1.4',
          body: 'Application/Wallet: The services are intended for customers above the age of 18. First, you need to download and install the application on your smartphone device and fully complete the registration process, including providing personal information and identification documents as required by the Company for the purpose of identification and verification, as required by law. As part of the registration process, you will be required to choose a personal password for accessing the application periodically.',
        },
        {
          number: '1.5',
          body: 'After opening the wallet, the services available to you include: making deposits and loading funds into the wallet; transferring funds between users of the application; transferring funds to bank accounts in Israel; and using a prepaid card issued by Max IT Finance Ltd. Some of the services may require enhanced authentication. The Company is not responsible for any use of the services that does not comply with the terms of use or the law.',
        },
        {
          number: '1.6',
          title: 'Important to know!',
          body: 'A funds transfer instruction is immediate and irreversible. You are solely responsible for the accuracy of the information you provide. Transfers to other users or to bank accounts will be completed within one business day.',
        },
        {
          number: '1.7',
          body: 'Limitations on services and transaction amounts are at the Company\'s discretion and subject to applicable law. You are responsible for staying updated on these limitations. Restrictions on use of the prepaid card are governed by the terms of Max IT Finance Ltd.',
        },
        {
          number: '1.8',
          title: 'Data Security:',
          body: 'You must keep your payment methods and any component essential for their use confidential. You are obligated to immediately notify the Company of any concern regarding theft, loss, or suspected malicious use of your wallet and to provide any relevant information. Registration and opening of the wallet are free; other services are charged in accordance with the Company\'s fee schedule. Use of the prepaid card and other services may involve costs. A management fee may apply for non-usage of the wallet for six consecutive months.',
        },
        {
          number: '1.9',
          title: 'Contract Period:',
          body: 'The contract becomes effective upon the Company\'s approval of the opening of your wallet and remains in effect until termination by you or the Company in accordance with the law and these terms.',
        },
        {
          number: '1.10',
          title: 'Termination/Suspension by You:',
          body: 'You may terminate the contract at any time by contacting customer service by phone, email, or through the application. Termination takes effect one business day after the completion of closing actions. You may also request temporary suspension of services for a period of up to 14 days by contacting customer service.',
        },
        {
          number: '1.11',
          title: 'Termination/Suspension by the Company:',
          body: 'The Company may terminate the contract with prior notice of 45 days, or a shorter period in exceptional circumstances, as set out in these terms of use and in accordance with the law.',
        },
      ],
    },
    {
      title: '2. General Conditions',
      items: [
        {
          number: '2.1',
          body: 'The use of the wallet and/or services is subject to compliance with the terms of use. It is clarified that the company is entitled to change the terms of use at any time, at its sole discretion and in accordance with applicable law, without the need for prior notice. The version of the terms of use published in the application and/or on the company\'s website is always the binding version.',
        },
        {
          number: '2.2',
          body: 'These terms of use apply to any use of the wallet and/or services, whether through your smartphone device, the company\'s website, company branches, or any other means.',
        },
        {
          number: '2.3',
          body: 'By agreeing to these terms of use, you declare that you waive any claim or demand against the company, its management, employees, or representatives, except for claims relating to the company\'s breach of its obligations under applicable law and the terms of use.',
        },
        {
          number: '2.4',
          body: 'The terms of use are formulated in the masculine gender for convenience purposes only, but they are intended to apply to both women and men alike.',
        },
        {
          number: '2.5',
          body: 'The section headings are provided for convenience and reference purposes only, and they shall not be used for the interpretation of the terms of use.',
        },
        {
          number: '2.6',
          body: 'The records kept by the company regarding the transactions performed in your wallet will constitute conclusive evidence of the accuracy of the transactions.',
        },
      ],
    },
    {
      title: '3. Definitions',
      items: [
        {
          number: '3.1',
          body: 'The terms used in these Terms of Use will have the meaning attributed to them in the law (as defined above), unless otherwise specified explicitly.',
        },
        {
          number: '3.2',
          term: 'Payment method:',
          body: '— as defined in the law, for the purposes of these Terms of Use, the payment method refers to the wallet, which certain actions you perform fulfill the required sequence of actions for the purpose of initiating a payment instruction as defined below.',
        },
        {
          number: '3.3',
          term: 'Application:',
          body: '— The Worldcom Finance W PAY application (or any other name chosen by the company from time to time) for compatible devices, available for download on the Apple App Store and/or Google Play Store and/or any other application store that allows you to download the application on your smartphone device.',
        },
        {
          number: '3.4',
          term: 'The Wallet:',
          body: '— A service provided through the application that allows you to deposit and load funds into the wallet, transfer and receive funds, accumulate funds, load funds onto a prepaid card, convert funds into foreign currency, and perform money transfers between application users, as well as perform domestic money transfers. It is clarified that some of the services may be performed and/or provided by third parties. The company reserves the right to modify and add to the existing services at any time or to cease providing certain services at its sole discretion.',
        },
        {
          number: '3.5',
          term: 'Payment Instruction:',
          body: '— as defined by the law, it refers to the issuance of an instruction to the company to perform a transfer or receipt of funds in the wallet, load funds into the wallet or onto the prepaid card (which also serves as a means of payment).',
        },
      ],
    },
  ],
}
