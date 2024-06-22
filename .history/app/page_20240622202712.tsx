import GradientWrapper from '@/components/GradientWrapper'
import Features from '@/components/ui/Features'
import Footer from '@/components/ui/Footer'
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
        </GradientWrapper>
      </main>
      <Footer />
    </>
  )
}
