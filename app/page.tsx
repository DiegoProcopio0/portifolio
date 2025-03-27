import Abilities from '@/components/Abilities'
import { About } from '@/components/About'
import { Experiences } from '@/components/Experiences'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      <div className="py-10 mx-auto w-full flex-1 max-w-[90rem] px-4 md:px-10">
        <About />
        <Abilities />
        <Projects />
        <Experiences />
      </div>
      <Footer />
    </div>
  )
}
