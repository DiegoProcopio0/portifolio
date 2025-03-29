import { Title } from './Title'
import { ExperienceItem } from './ExperienceItem'
import { WorkExperience } from '@/@types/work-experience'

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
      {
        iconSvg: '/images/icons/react.svg',
        name: 'React',
        startDate: '2022-01-01'
      }
    ],
    description: {
      raw: 'Atuei como desenvolvedor frontend, contribuindo para o desenvolvimento de aplicações web e mobile utilizando React e React Native.'
    }
  }
]

export function Experiences() {
  return (
    <section
      className="flex flex-col pt-10 md:flex-row md:gap-10"
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
    </section>
  )
}
