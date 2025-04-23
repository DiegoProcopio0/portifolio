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
      raw:  `
        Atuação em projetos de front-end e back-end, com foco em desenvolvimento web moderno. Principais responsabilidades e tecnologias utilizadas:

        - Desenvolvimento de dashboard para emissão de notas fiscais utilizando  Vue 3, TypeScript e TailwindCSS.

        - Manutenção e evolução da API do sistema, construída com Node.js, Express, Clean Architecture* e TypeScript, incluindo:

        - Implementação de testes unitários e E2E com Jest.

        - Participação no desenvolvimento de dashboard para campanhas promocionais e de engajamento, atendendo grandes clientes como Nubank e Nissan:
       
        - Suporte à API com Node.js, Express, JavaScript* e arquitetura CQRS.

        - Criação de landing pages responsivas com Nuxt e TailwindCSS.

        - Desenvolvimento de uma aplicação PWA com React, React Query e TypeScript.

        - Colaboração com times ágeis, seguindo a metodologia Scrum.`
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
