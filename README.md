# worldcom FINANCE – Website

Modern single-page website for Worldcom Finance. Content from [worldcomfinance.com](https://worldcomfinance.com/); design inspired by [Rewire](https://www.rewire.co.il/).

## Tech stack

- **React 18** + **Vite**
- **Tailwind CSS** (brand colors: #3482F1, #F48F47, #FFFFFF, #000000)
- **Framer Motion** (animations)
- **react-scroll** (smooth scroll navigation)
- **react-icons**

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Content

All copy is defined in `src/data/content.js` and documented in `CONTENT_MAP.md`.

## Project structure

- `src/components/` – Header, Hero, Statistics, Services, MoneyTransfer, BusinessSolutions, WPayCard, TrustSection, FAQ, Contact, Footer, PrivacyModal, FloatingSupport
- `src/data/content.js` – Centralized content
- `src/styles/globals.css` – Global and Tailwind styles

## License

© WIC Worldcom Finance LTD. Licenses No: 57533, 63141.
