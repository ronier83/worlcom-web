# Site Map — worldcomfinance.com

**Base URL:** https://worldcomfinance.com/

**Source:** Curled main page HTML + JS bundle from live site. The server returns the same SPA shell (200) for all path-based URLs below; routing is client-side. A `sitemap.xml` was not reachable at `/sitemap.xml` (request timed out).

---

## Path-based URLs (live site, all return HTTP 200)

These locations were verified by curling the main page and the app JS bundle. The server serves the same `index.html` for each; the React app then renders the matching route.

| URL | Description |
|-----|-------------|
| https://worldcomfinance.com/ | Homepage |
| https://worldcomfinance.com/developers | Developers (API/docs) |
| https://worldcomfinance.com/about | About Us |
| https://worldcomfinance.com/rates | Rates |
| https://worldcomfinance.com/privacy-policy | Privacy Policy |
| https://worldcomfinance.com/terms-of-use | Terms of Use |

---

## Assets (from main page HTML)

| URL | Description |
|-----|-------------|
| https://worldcomfinance.com/favicon.png | Favicon |
| https://worldcomfinance.com/assets/index-DNS2TwUi.js | Main app JS bundle |
| https://worldcomfinance.com/assets/index-B4XQJAJy.css | Main stylesheet |

---

## External links (from app JS bundle)

| URL | Description |
|-----|-------------|
| https://apps.apple.com/il/app/worldcom-finance/id1557... | Apple App Store (Worldcom Finance app) |
| https://play.google.com/store/apps/details?id=com.worldcom.finance | Google Play (Worldcom Finance app) |
| https://www.facebook.com/WorldComFinanceLtd/ | Facebook page |
| https://redocly.com/redoc/ | Redoc (API docs styling; likely used on /developers) |
| mailto:cs@worldcomfinance.com | Contact email |

---

## On-page sections (anchor links)

These are the scroll targets used in the header, footer, and CTAs. Full URL = `https://worldcomfinance.com/#section-id`.

| Section ID | Full URL | Description |
|------------|----------|-------------|
| hero | https://worldcomfinance.com/#hero | Hero / top of page |
| trusted-by-vendors | https://worldcomfinance.com/#trusted-by-vendors | Trusted by vendors |
| statistics | https://worldcomfinance.com/#statistics | Statistics (transfers, branches, etc.) |
| services | https://worldcomfinance.com/#services | Services overview |
| rates | https://worldcomfinance.com/#rates | Rates / conversion widget (Money Transfer) |
| money-transfer | https://worldcomfinance.com/#money-transfer | Money Transfer section (inside Services) |
| business-solutions | https://worldcomfinance.com/#business-solutions | Business solutions |
| wpay-card | https://worldcomfinance.com/#wpay-card | WPay Card section |
| wpay-login | https://worldcomfinance.com/#wpay-login | W-PAY Login anchor (CTA target) |
| about | https://worldcomfinance.com/#about | About Us / Trust section |
| faq | https://worldcomfinance.com/#faq | FAQ |
| contact | https://worldcomfinance.com/#contact | Contact section |
| developers | https://worldcomfinance.com/#developers | Footer (Developers in nav) |

---

## Header navigation

| Label | Target |
|-------|--------|
| Logo | #hero |
| Rates | #rates |
| Developers | #developers or /developers |
| About Us | #about |
| W-PAY Login | #wpay-login |

---

## Footer navigation

**Legal (on live site, path-based):**

| Label | URL |
|-------|-----|
| Privacy Policy | https://worldcomfinance.com/privacy-policy |
| Terms & Conditions | https://worldcomfinance.com/terms-of-use |

**Navigate (scroll links):**

| Label | Target |
|-------|--------|
| Services | #services |
| Rates | #rates |
| Contact | #contact |

**Contact (protocol links):**

| Type | Value |
|------|--------|
| Email | mailto:cs@worldcomfinance.com |
| Phone | tel:039009823 (03-900-9823) |

---

## Content-defined sitemap (placeholders)

From `src/data/content.js`, the “sitemap” structure below is defined but all links are placeholders (`href: '#'`). These are not yet separate pages or real URLs.

- **Send Money:** Send Money to USA, UK, Europe, Philippines, India, China  
- **Send by Region:** Africa, Asia, Europe, North America, South America  
- **Services:** Money Transfer, Currency Exchange, WPay Card, Business Solutions, Rates  
- **WPay Card:** Order WPay Card, W-PAY Login, Card for Businesses  
- **Company:** About Us, Press, Blog, Careers, Privacy Policy, Terms & Conditions  
- **Help:** Customer Support, FAQs, Contact Us  

---

## Summary

- **Path-based pages (live site, curled):** `/`, `/developers`, `/about`, `/rates`, `/privacy-policy`, `/terms-of-use` — all return 200 with the same SPA shell; routing is in the deployed JS bundle (different from this repo).
- **14 in-page sections** (hash anchors on homepage: `/#section-id`).
- **Assets:** `/favicon.png`, `/assets/index-*.js`, `/assets/index-*.css`.
- **External:** App Store, Google Play, Facebook, Redoc, mailto. Legal links in this repo are placeholders (`#`); on the live site, Privacy and Terms are at `/privacy-policy` and `/terms-of-use`.
