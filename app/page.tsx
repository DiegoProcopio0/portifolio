import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      <div className="py-10 mx-auto w-full flex-1 max-w-[90rem] px-4 md:px-10">
        <About />
      </div>
      <Footer />
    </div>
  )
}
