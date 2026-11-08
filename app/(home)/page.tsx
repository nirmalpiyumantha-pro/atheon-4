import { Index as HeroSection } from "@/components/home/hero-section"
import { Index as FaqSection } from "@/components/home/faqs-section"
import { Index as ContactSection } from "@/components/home/contact-section"
import { Index as IntegrationsRibbonSection } from "@/components/home/integrations-ribbon-section"
import { Index as ServicesSection } from "@/components/home/services-section"
import { Index as AiAgentsSection } from "@/components/home/ai-agents-section"
import { Index as SecuritySection } from "@/components/home/security-section"
import { Index as PlansSection } from "@/components/home/plans-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntegrationsRibbonSection />
      <ServicesSection />
      <AiAgentsSection />
      <SecuritySection />
      <PlansSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
