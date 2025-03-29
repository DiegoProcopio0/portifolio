import Image from 'next/image'
import { GoProject } from 'react-icons/go'
import { ButtonLink } from './ButtonLink'
import { Title } from './Title'
import { TechBadge } from './techBadge'
import { techBadgeAnimation } from '@/lib/animations'

const technologies = ['JavaScript', 'React', 'Next']

export function Projects() {
  return (
    <section className="pt-10" id="projects">
      <Title>Meus Projetos</Title>

      <div className="grid grid-cols-1 gap-4 rounded-lg shadow-lg md:grid-cols-2">
        <Image
          className="rounded-lg"
          width={'600'}
          height={'600'}
          src="/quiz.png"
          alt="projeto"
        />
        <div className="flex flex-col gap-6 pb-4 md:px-10 md:pb-10">
          <div className="flex items-center gap-5">
            <GoProject className="size-8 text-emerald-500" />
            <h3 className="text-3xl">Quiz</h3>
          </div>
          <p className="text-gray-400">
            Um jogo de perguntas e respostas para testar seus conhecimentos.
          </p>

          <div className="flex gap-2">
            {technologies.map((tech, i) => (
              <TechBadge
                key={i}
                name={tech}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.2 }}
              />
            ))}
          </div>

          <ButtonLink href="#" className="mr-auto">
            Ver Projeto
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
