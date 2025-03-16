import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      <div className="mx-auto flex-1 max-w-[90rem] ">
        <About />
      </div>
      <Footer />
    </div>
  )
}
