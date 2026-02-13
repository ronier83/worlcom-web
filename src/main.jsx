import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicy.jsx'
import TermsOfUsePage from './pages/TermsOfUse.jsx'
import AboutPage from './pages/About.jsx'
import DevelopersPage from './pages/Developers.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './styles/globals.css'

// Developers page loaded eagerly so mobile avoids chunk-load failures (dynamic import can 404 or fail on some mobile networks/caches)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
)
