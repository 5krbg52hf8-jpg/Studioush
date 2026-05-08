import { useState, useEffect } from 'react'
import { HeroSection } from './components/blocks/HeroSection'
import { WhatsAppFloating } from './components/ui/whatsapp-button'
import {
  AuthorityRibbon,
  ProblemSection,
  StatsSection,
  WaaSSection,
  ProcessSection,
  PortfolioSection,
  TestimonialSection,
  FooterSection
} from './components/blocks/LandingSections'
import { TermsPage } from './components/pages/TermsPage'
import { PrivacyPage } from './components/pages/PrivacyPage'
import { CookieBanner } from './components/ui/cookie-banner'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (currentPath === '#terms') {
    return <TermsPage />
  }

  if (currentPath === '#privacy') {
    return <PrivacyPage />
  }

  return (
    <div className="min-h-screen w-full bg-background font-sans text-foreground selection:bg-white/20 selection:text-white scroll-smooth">
      <HeroSection />
      <AuthorityRibbon />
      <ProblemSection />
      <StatsSection />
      <WaaSSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialSection />
      <FooterSection />
      <WhatsAppFloating />
      <CookieBanner />
    </div>
  )
}

export default App
