import GradientWrapper from '@/components/GradientWrapper'
import CTA from '@/components/ui/CTA'
import Features from '@/components/ui/Features'
import Hero from '@/components/ui/Hero'
import Navbar from '@/components/ui/Navbar'

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
      </main>
    </>
  )
}