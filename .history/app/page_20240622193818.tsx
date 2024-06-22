import GradientWrapper from '@/components/GradientWrapper'
import CTA from '@/components/ui/CTA'
import Features from '@/components/ui/Features'
import Footer from '@/components/ui/Footer'
import FooterCTA from '@/components/ui/FooterCTA'
import Hero from '@/components/ui/Hero'
import Navbar from '@/components/ui/Navbar'
import Testimonials from '@/components/ui/Testimonials'
import ToolKit from '@/components/ui/ToolKit'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <GradientWrapper>
          <Features />
          <CTA />
        </GradientWrapper>
        <ToolKit />
        <GradientWrapper>
          <Testimonials />
        </GradientWrapper>
        <FooterCTA />
      </main>
      <Footer />
    </>
  )
}
