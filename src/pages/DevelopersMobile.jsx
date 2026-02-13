import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { brand, developersPage, developersApiEndpoints } from '../data/content'

/** Resolve $ref to component parameter (e.g. #/components/parameters/username) */
function resolveParam(spec, ref) {
  if (!ref || !ref.startsWith('#/components/parameters/')) return null
  const id = ref.split('/').pop()
  return spec?.components?.parameters?.[id] ?? null
}

/** Get flat list of params for an operation, resolving $refs */
function getOperationParams(spec, path, method) {
  if (!spec?.paths?.[path]?.[method.toLowerCase()]) return []
  const raw = spec.paths[path][method.toLowerCase()].parameters || []
  return raw.map((p) => (p.$ref ? resolveParam(spec, p.$ref) : p)).filter(Boolean)
}

/**
 * Lightweight Developers page for mobile: no Redoc (avoids chunk load failures and Redoc crashes).
 * Shows hero, list of API endpoints (click to expand params), and download spec link.
 */
export default function DevelopersMobile() {
  const [spec, setSpec] = useState(null)
  const [expandedKey, setExpandedKey] = useState(null)

  useEffect(() => {
    fetch('/api/openapi.json')
      .then((r) => r.json())
      .then(setSpec)
      .catch(() => setSpec(null))
  }, [])

  return (
    <>
      <Header />
      <main className="font-google-sans pt-14 sm:pt-20">
        {/* Hero */}
        <section className="bg-primary px-4 py-8 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-2xl font-semibold sm:text-3xl">Developers</h1>
            <p className="mt-1 text-white/90">{brand.legalEntity} · API for our customers</p>
            <p className="mt-4 text-sm text-white/90">{developersPage.intro}</p>
            <div className="mt-4">
              <a
                href="/api/openapi.json"
                download="openapi.json"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Download OpenAPI specification
              </a>
            </div>
          </div>
        </section>

        {/* API endpoints list: click to expand params */}
        <section className="border-t border-gray-200 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-gray-900">{developersPage.wicMethodTitle}</h2>
            <ul className="mt-3 space-y-2">
              {developersApiEndpoints.map((ep) => {
                const key = `${ep.method}/${ep.path}`
                const isExpanded = expandedKey === key
                const params = spec ? getOperationParams(spec, ep.path, ep.method) : []
                return (
                  <li key={ep.path} className="rounded-lg border border-gray-200 bg-gray-50/50">
                    <button
                      type="button"
                      onClick={() => setExpandedKey(isExpanded ? null : key)}
                      className="flex w-full flex-wrap items-baseline gap-2 px-3 py-2 text-left text-sm transition hover:bg-gray-100/80"
                    >
                      <span className="font-medium uppercase text-primary">{ep.method}</span>
                      <span className="font-mono text-gray-700">{ep.path}</span>
                      <span className="text-gray-600">— {ep.label}</span>
                      <span className="ml-auto shrink-0 text-gray-400" aria-hidden>
                        {isExpanded ? '▼' : '▶'}
                      </span>
                    </button>
                    {isExpanded && params.length > 0 && (
                      <div className="border-t border-gray-200 bg-white px-3 py-3">
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Parameters
                        </h3>
                        <dl className="space-y-2">
                          {params.map((param) => (
                            <div
                              key={param.name}
                              className="rounded border border-gray-100 bg-gray-50/80 px-2 py-2"
                            >
                              <dt className="flex flex-wrap items-baseline gap-2">
                                <span className="font-mono text-sm font-medium text-gray-900">
                                  {param.name}
                                </span>
                                {param.required && (
                                  <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-800">
                                    required
                                  </span>
                                )}
                                {param.schema?.type && (
                                  <span className="text-xs text-gray-500">{param.schema.type}</span>
                                )}
                                {param.in && (
                                  <span className="text-xs text-gray-400">in: {param.in}</span>
                                )}
                              </dt>
                              {param.schema?.example !== undefined && (
                                <dd className="mt-1 font-mono text-xs text-gray-600">
                                  example: {String(param.schema.example)}
                                </dd>
                              )}
                            </div>
                          ))}
                        </dl>
                      </div>
                    )}
                    {isExpanded && params.length === 0 && spec && (
                      <div className="border-t border-gray-200 bg-white px-3 py-2 text-sm text-gray-500">
                        No parameters defined.
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
