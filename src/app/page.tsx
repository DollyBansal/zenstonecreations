import HeroSection from '@/components/sections/HeroSection'
import CollectionPreview from '@/components/sections/CollectionPreview'
import BrandStory from '@/components/sections/BrandStory'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import CTASection from '@/components/ui/CTASection'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function HomePage() {
  return (
    <>
      <RevealOnScroll />
      <HeroSection />
      <CollectionPreview />
      <BrandStory />
      <FeaturedProducts />
      <CTASection
        title="Request Pricing & Wholesale Enquiries"
        subtitle="We work with interior designers, architects, landscape professionals, and private collectors worldwide. Bespoke sizing, custom finishes, and exclusive commissions available on request."
        buttonText="Begin Your Enquiry"
        buttonHref="/contact"
        theme="dark"
      />
    </>
  )
}
