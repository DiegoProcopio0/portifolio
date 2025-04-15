'use client'
import { Title } from './Title'
import { ExperienceItem } from './ExperienceItem'
import { WorkExperience } from '@/@types/work-experience'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/lib/animations'

const experiences: WorkExperience[] = [
  {
    companyLogo: {
      url: 'https://polgo.com.br/_next/static/media/GrupoPolgo.efe3c0ef.svg'
    },
    role: 'Desenvolvedor web',
    companyName: 'Grupo Polgo',
    companyUrl: 'https://polgo.com.br',
    startDate: '2023-11-1',
    endDate: '',
    technologies: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Vue.js' },
      { name: 'Nuxt' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'React' },
      { name: 'Next' }
    ],
    description: {
      raw: 'Atuei como desenvolvedor frontend, contribuindo para o desenvolvimento de aplicações web e mobile utilizando React e React Native.'
    }
  }
]

export function Experiences() {
  return (
    <motion.section
      className="flex flex-col pt-10 md:flex-row md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
      id="experiencias"
    >
      <Title>
        Experiências <br /> Profissionais
      </Title>
      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </motion.section>
  )
}
