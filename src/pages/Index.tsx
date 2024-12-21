import { Hero } from '@/components/Hero'
import NetworkBackground from '@/components/NetworkBackground'

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <NetworkBackground />
      <div className="relative z-10 pt-16">
        <Hero />
      </div>
    </main>
  )
}

export default Index