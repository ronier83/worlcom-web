import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicy.jsx'
import TermsOfUsePage from './pages/TermsOfUse.jsx'
import AboutPage from './pages/About.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import './styles/globals.css'

// Lazy-load Developers page (includes Redoc) so main bundle stays smaller
const DevelopersPage = lazy(() => import('./pages/Developers.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center font-sans">Loading…</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
