import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import App from './App.jsx'
import CreatorPage from './pages/CreatorPage.jsx'
import EventPage from './pages/EventPage.jsx'
import JoinPage from './pages/JoinPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/creator" element={<CreatorPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
