# Sections / Pages Still to Create

Map of what exists in this repo vs what the live site has. **You still need to create** the items below to match the live site’s path-based routes and legal pages.

---

## 1. Routing (missing)

| Item | Status | Notes |
|------|--------|------|
| Client-side router | ❌ Not in repo | Live site has `/`, `/developers`, `/about`, `/rates`, `/privacy-policy`, `/terms-of-use`. Add e.g. `react-router-dom` and a router so these paths render the right content. |

---

## 2. Path-based pages (live site has these; repo does not)

| Route | Description | What to do |
|-------|-------------|------------|
| `/developers` | Developers / API docs | **Create** a Developers page (e.g. Redoc or custom API docs). Nav “Developers” currently scrolls to `#developers` (footer); add a route and a dedicated page. |
| `/about` | About Us | **Create** a route. Can render the same content as `#about` (TrustSection) or a full About page. |
| `/rates` | Rates | **Create** a route. Can render the same content as `#rates` (MoneyTransfer) or a dedicated Rates page. |
| `/privacy-policy` | Privacy Policy | **Create** a Privacy Policy page and route. You have `PrivacyModal` and footer link `#`; add a real page and point footer to `/privacy-policy`. |
| `/terms-of-use` | Terms of Use | **Create** a Terms of Use page and route. Footer link is `#`; add page and link to `/terms-of-use`. |

---

## 3. On-page sections (you already have these)

All of these exist as components and section IDs. No new sections needed for the homepage.

| Section ID | Component | Status |
|------------|-----------|--------|
| hero | Hero | ✅ |
| trusted-by-vendors | TrustedByVendors | ✅ |
| statistics | Statistics | ✅ |
| services | Services | ✅ |
| rates | MoneyTransfer | ✅ |
| money-transfer | (inside Services) | ✅ |
| business-solutions | BusinessSolutions | ✅ |
| wpay-card | WPayCard | ✅ |
| wpay-login | (anchor in WPayCard) | ✅ |
| about | TrustSection | ✅ |
| faq | FAQ | ✅ |
| contact | Contact | ✅ |
| developers | Footer | ✅ (footer only; no dedicated /developers page) |

---

## 4. Footer / nav links to fix (point to real routes)

| Link | Current | Change to |
|------|---------|-----------|
| Privacy Policy | `href: '#'` in `content.js` → footer | `/privacy-policy` (after you create the page) |
| Terms & Conditions | `href: '#'` in `content.js` → footer | `/terms-of-use` (after you create the page) |

Optional: make “Developers” go to `/developers` instead of (or in addition to) `#developers` once the Developers page exists.

---

## 5. Content sitemap placeholders (optional)

In `content.js`, the `sitemap` array has many links with `href: '#'` (Send Money to USA/UK/…, Company, Help, etc.). These are **optional**; only add real pages/routes if you want those URLs. No change needed for “sections” unless you decide to build those pages.

---

## Summary checklist

- [ ] Add React Router (or similar) and base layout (Header/Footer + `<Outlet />`).
- [ ] Create **Developers** page and route `/developers`.
- [ ] Create **About** route (`/about`) — reuse TrustSection or a new page.
- [ ] Create **Rates** route (`/rates`) — reuse MoneyTransfer or a new page.
- [ ] Create **Privacy Policy** page and route `/privacy-policy`.
- [ ] Create **Terms of Use** page and route `/terms-of-use`.
- [ ] Update `footer.links` in `content.js` to use `/privacy-policy` and `/terms-of-use`.
- [ ] Ensure server/hosting serves the SPA for these paths (e.g. fallback to `index.html`).
