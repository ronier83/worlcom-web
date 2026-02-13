import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicy.jsx'
import TermsOfUsePage from './pages/TermsOfUse.jsx'
import AboutPage from './pages/About.jsx'
import DevelopersPage from './pages/Developers.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
