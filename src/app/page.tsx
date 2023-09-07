import Hero from '@/components/hero/hero'
import Text from '@/components/text'
import GetFinancing from '@/components/get-financing'
import PaymentCalculator from '@/components/payment-calculator'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-12">
        <Hero />
        <Text />
        <GetFinancing />
        <PaymentCalculator/>
    </main>
  )
}
