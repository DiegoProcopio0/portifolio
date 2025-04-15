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
      raw: 'Atuei como desenvolvedor júnior em projetos diversos, contribuindo tanto no front-end quanto no back-end. Participei do desenvolvimento de uma dashboard para emissão de notas fiscais utilizando Vue 3, TypeScript e TailwindCSS, além de realizar manutenções na API do sistema, construída com Node.js, Express, Clean Architecture e TypeScript, incluindo testes unitários e E2E com Jest. Também trabalhei na criação de uma dashboard para campanhas promocionais e de engajamento, atendendo grandes clientes como Nubank e Nissan, dando suporte à API desenvolvida com Node.js, Express, JavaScript e arquitetura CQRS. Tenho experiência no desenvolvimento de landing pages com Nuxt e TailwindCSS, além da construção de uma PWA com React, React Query e TypeScript. Ao longo dos projetos, atuei em times ágeis utilizando a metodologia Scrum.'
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
