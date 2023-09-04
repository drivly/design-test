import Image from 'next/image'
import Button from '@/components/navigation/button'
import Hero from '@/components/hero/hero'
import CTA from '@/components/cta'
import GetFinancing from '@/components/get-financing'
import PaymentCalculator from '@/components/payment-calculator'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <CTA />
        <GetFinancing />
        <PaymentCalculator/>
    </main>
  )
}
