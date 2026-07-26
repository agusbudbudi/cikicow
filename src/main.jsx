import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './style.css'
import App from './App.jsx'
import CreatorPage from './pages/CreatorPage.jsx'
import CreatorDetailPage from './pages/CreatorDetailPage.jsx'
import CreatorAddPage from './pages/CreatorAddPage.jsx'
import EventPage from './pages/EventPage.jsx'
import EventDetailPage from './pages/EventDetailPage.jsx'
import JoinPage from './pages/JoinPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import BackstageLayout from './pages/backstage/BackstageLayout.jsx'
import BackstageEventsPage from './pages/backstage/BackstageEventsPage.jsx'
import BackstageEventFormPage from './pages/backstage/BackstageEventFormPage.jsx'
import BackstageCreatorsPage from './pages/backstage/BackstageCreatorsPage.jsx'
import BackstageCreatorFormPage from './pages/backstage/BackstageCreatorFormPage.jsx'
import BackstageJoinBannersPage from './pages/backstage/BackstageJoinBannersPage.jsx'
import BackstageJoinBannerFormPage from './pages/backstage/BackstageJoinBannerFormPage.jsx'
import BackstageHighlightsPage from './pages/backstage/BackstageHighlightsPage.jsx'
import BackstageHighlightFormPage from './pages/backstage/BackstageHighlightFormPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/creator" element={<CreatorPage />} />
          <Route path="/creator/add" element={<CreatorAddPage />} />
          <Route path="/creator/:id" element={<CreatorDetailPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/backstage" element={<BackstageLayout />}>
            <Route index element={<Navigate to="events" replace />} />
            <Route path="events" element={<BackstageEventsPage />} />
            <Route path="events/new" element={<BackstageEventFormPage />} />
            <Route path="events/:id/edit" element={<BackstageEventFormPage />} />
            <Route path="creators" element={<BackstageCreatorsPage />} />
            <Route path="creators/new" element={<BackstageCreatorFormPage />} />
            <Route path="creators/:id/edit" element={<BackstageCreatorFormPage />} />
            <Route path="join-banners" element={<BackstageJoinBannersPage />} />
            <Route path="join-banners/new" element={<BackstageJoinBannerFormPage />} />
            <Route path="join-banners/:id/edit" element={<BackstageJoinBannerFormPage />} />
            <Route path="highlights" element={<BackstageHighlightsPage />} />
            <Route path="highlights/new" element={<BackstageHighlightFormPage />} />
            <Route path="highlights/:id/edit" element={<BackstageHighlightFormPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
