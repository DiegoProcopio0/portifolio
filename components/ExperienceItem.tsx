'use client'

import { TechBadge } from '@/components/techBadge'
import { WorkExperience } from '@/@types/work-experience'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { motion } from 'framer-motion'
import { ptBR } from 'date-fns/locale/pt-BR'
import Image from 'next/image'
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animations'

type ExperienceItemProps = {
  experience: WorkExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    companyName,
    companyUrl,
    companyLogo,
    role,
    endDate,
    description,
    technologies
  } = experience

  const startDate = new Date(experience.startDate)
  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
    : 'O Momento'

  const end = endDate ? new Date(endDate) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <motion.div
      className="flex gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={companyLogo.url}
            width={40}
            height={40}
            alt={`Logo da Empresa ${companyName}`}
            className="!size-10 min-w-10 rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={companyUrl}
            target="_blank"
            className="text-gray-500 transition-colors hover:text-emerald-500"
          >
            @ {companyName}
          </a>
          <h4 className="text-gray-300">{role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <div className="text-gray-400 whitespace-pre-line">{description.raw}</div>
        </div>
        <p className="mt-6 mb-3 text-sm font-semibold text-gray-400">
          Competências
        </p>
        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {technologies.map((tech, i) => (
            <TechBadge
              key={`experience-${companyName}-tech-${tech.name}`}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
