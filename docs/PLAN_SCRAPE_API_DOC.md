# Plan: Scrape worldcomfinance.com/developers and Create API Doc

Goal: Capture the full API documentation from https://worldcomfinance.com/developers and turn it into a maintainable API doc (e.g. OpenAPI/Swagger or static doc site).

---

## 1. What We Know

| Item | Detail |
|------|--------|
| **URL** | https://worldcomfinance.com/developers |
| **Tech** | SPA (React). Same HTML shell for all routes; content rendered by JS. |
| **API** | WIC API (method names: SendMoney, getBanks, getCountries, getPendingTransactions, getStatus, getTransactionDetails from bundle). |
| **Docs UI** | Likely Redoc/OpenAPI (bundle references Redoc, OpenAPI 2.0/3.0). |
| **Content location** | In the deployed JS bundle (e.g. `/assets/index-*.js`), not in initial HTML. |

**Why direct scrape is hard**

- `curl` / `fetch` only get the SPA shell; no API text.
- Page load + JS execution can be slow; screenshots/fetch often timeout.
- Full API spec (OpenAPI YAML/JSON) might be loaded from a separate URL at runtime.

---

## 2. Scraping Options (Recommended Order)

### Option A: Find the OpenAPI/Swagger spec URL

Many “developers” pages load the doc from a static spec.

**Steps**

1. In browser DevTools (Network tab), open https://worldcomfinance.com/developers and filter by XHR/Fetch or by `.json` / `.yaml` / `openapi` / `swagger`.
2. Reload the page and look for requests to something like:
   - `*/openapi.json`, `*/swagger.json`, `*/api-spec.json`
   - `*/openapi.yaml`, `*/api-docs.yaml`
3. If you find a URL, `curl` it and save the response:
   - `curl -sL "https://worldcomfinance.com/path/to/spec.json" -o api-spec.json`
4. Use that spec as the single source of truth for the API doc (see Section 4).

**Outcome:** One spec file; no need to scrape the UI.

---

### Option B: Browser automation (Playwright/Puppeteer)

Use a headless browser to load the page, wait for content, then extract text or HTML.

**Steps**

1. **Setup** (one-time)
   - Install Playwright: `npm install -D playwright` (or Puppeteer).
   - Install browser: `npx playwright install chromium`.

2. **Script** (e.g. `scripts/scrape-developers.js`)
   - Navigate to `https://worldcomfinance.com/developers`.
   - Wait for a selector that appears when the doc is ready (e.g. `[data-testid="api-doc"]`, or first heading, or Redoc’s main container).
   - Optional: scroll the page in steps to trigger lazy-loaded sections.
   - Extract content:
     - **Option B1:** `page.content()` → save HTML for parsing (sections, headings, code blocks).
     - **Option B2:** `page.evaluate(() => document.body.innerText)` → save plain text.
     - **Option B3:** Look for a `<script id="...">` or global variable that holds the OpenAPI spec and extract it.

3. **Run**
   - `node scripts/scrape-developers.js`
   - Write output to `docs/scraped/developers.html` or `developers.txt` or `api-spec.json`.

4. **If spec is in the page**
   - In DevTools Console on /developers, try: `window.__REDOC_STATE__` or search for `openapi` / `swagger` in the window object. If found, document the path and use the script to dump that object to JSON.

**Outcome:** Full page text/HTML or the in-page spec.

---

### Option C: Extract from the deployed JS bundle

We already found WIC API strings in the bundle; we can go deeper.

**Steps**

1. **Download the current bundle**
   - Open https://worldcomfinance.com in a browser, View Source, find `<script src="/assets/index-XXXXX.js">`.
   - `curl -sL "https://worldcomfinance.com/assets/index-XXXXX.js" -o bundle.js`

2. **Search for API-related structures**
   - OpenAPI-like objects: `paths:`, `openapi:`, `swagger:`, `getBanks`, `getCountries`, `SendMoney`, `getPendingTransactions`, `getStatus`, `getTransactionDetails`.
   - Translations/method copy: we already have EN (and TH, ZH) for SendMoney, error codes, param names (e.g. `param_sender_name`, `param_receipt_no`).

3. **Extract**
   - Use regex or a small script to find JSON-like blocks or string arrays that look like API metadata.
   - Save to `docs/scraped/wic-api-from-bundle.json` (or similar).

4. **Limitation**
   - Bundle is minified; we may get strings and labels but not a full OpenAPI spec. Best combined with Option A or B.

**Outcome:** Method names, param names, error codes, and copy for the API doc.

---

### Option D: Manual copy + structure

If automation keeps failing:

1. Open https://worldcomfinance.com/developers in a browser.
2. Copy each section (headings, descriptions, parameters, examples) into a doc (Markdown or JSON).
3. Structure it as in Section 4 below so it can be turned into OpenAPI or a static doc later.

**Outcome:** Accurate but manual; good as fallback.

---

## 3. Execution Checklist

- [ ] **A.** Check Network tab on /developers for OpenAPI/Swagger spec URL; if found, download and save.
- [ ] **B.** Add `scripts/scrape-developers.js` (Playwright); run and save HTML or text (or in-page spec) to `docs/scraped/`.
- [ ] **C.** (Optional) Re-download bundle, search for `openapi`/`paths`/method names, extract to `docs/scraped/wic-api-from-bundle.json`.
- [ ] **D.** (Fallback) Manually copy visible sections into a structured file in `docs/scraped/`.
- [ ] **E.** Parse scraped output (HTML/text/JSON) and map to the API doc structure (Section 4).

---

## 4. API Doc Structure (After Scrape)

Use a single source of truth that can drive both a static site and (if applicable) OpenAPI.

**Suggested layout**

```
docs/
  api/
    openapi.yaml          # Optional: full OpenAPI 3.0 spec (if we get/create it)
    or
    wic-api.md            # Human-readable API doc (from scrape + bundle)
  scraped/
    developers.html       # Raw scrape (Option B)
    developers.txt       # Plain text (Option B)
    api-spec.json        # Spec from Option A or from page (Option B3)
    wic-api-from-bundle.json  # From Option C
```

**WIC API doc contents (to fill from scrape)**

1. **Overview**
   - Title: WIC API (or “Worldcom Finance API for customers”).
   - Short description (from current Developers page intro).
   - Base URL (if known), auth (e.g. API key / Bearer), rate limits (if any).

2. **Methods** (from bundle + scrape)
   - **SendMoney** – description (already scraped), remit types, required/optional parameters (country, transfer_type, sender_*, receiver_*, etc.), example request/response.
   - **getBanks** – purpose, parameters, response (to be filled from scrape/spec).
   - **getCountries** – same.
   - **getPendingTransactions** – same.
   - **getStatus** – same.
   - **getTransactionDetails** – same.
   - Any other methods discovered from Network or bundle.

3. **Response format**
   - Common envelope (e.g. `error_level`, message, data).
   - **Error codes** (already scraped): 0, 400, 404, 500, 501 and meanings.

4. **Supported countries / transfer types**
   - Table or list (from scrape or spec): country, transfer type, required parameters per type.

5. **Authentication**
   - How to obtain and send API keys (from scrape or support).

6. **Changelog / version**
   - Optional: date and “Scraped from worldcomfinance.com/developers” or “From OpenAPI spec”.

---

## 5. Next Steps

1. **Try Option A** (Network tab + spec URL) first; if you get a spec, use it for the API doc and only scrape for any extra UI-only text.
2. **If no spec:** Run **Option B** (Playwright script), then parse the saved HTML/text into `docs/api/wic-api.md` (and optionally build an OpenAPI from that).
3. **Option C** can run in parallel to fill method names, param names, and error codes into the doc.
4. **Integrate with this repo:** Either embed `docs/api/wic-api.md` (or generated HTML) in the Developers page, or link from the Developers page to a separate “API reference” route (e.g. `/developers/api`) that renders the doc.

If you tell me which option you want to do first (A, B, or C), I can draft the exact script (e.g. Playwright) or the OpenAPI/Markdown template for the WIC API.
