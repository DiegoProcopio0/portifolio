import { Abilities } from '@/components/Abilities'
import { About } from '@/components/About'
import { Experiences } from '@/components/Experiences'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header />
      <div className="mx-auto w-full max-w-[90rem] flex-1 px-4 py-10 md:px-10">
        <About />
        <Abilities />
        <Projects />
        <Experiences />
      </div>
      <Footer />
    </div>
  )
}
