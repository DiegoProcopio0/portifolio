import { Abilities } from '@/components/Abilities'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experiences } from '@/components/Experiences'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-[90rem] flex-1 flex-col gap-y-5 px-4 py-10 md:px-10 xl:gap-y-10">
        <About />
        <Abilities />
        <Projects />
        <Experiences />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
