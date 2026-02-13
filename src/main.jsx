import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicy.jsx'
import TermsOfUsePage from './pages/TermsOfUse.jsx'
import AboutPage from './pages/About.jsx'
import RatesPage from './pages/Rates.jsx'
import DevelopersPageWrapper from './pages/DevelopersPageWrapper.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './styles/globals.css'

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
          <Route path="/rates" element={<RatesPage />} />
          {/* Wrapper shows lightweight mobile view or lazy Redoc on desktop */}
          <Route path="/developers" element={<DevelopersPageWrapper />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
)
