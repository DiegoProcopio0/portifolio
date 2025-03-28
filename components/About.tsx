import Image from 'next/image'
import { Card } from './Card'
import { TypeWriter } from './TypeWriter'
import { FaGithub, FaLinkedin, FaVoicemail } from 'react-icons/fa'
import { ButtonLink } from './ButtonLink'

export function About() {
  return (
    <div className="">
      <header className="justify-between py-2 pb-6 text-center font-bold sm:flex sm:pb-0 sm:text-left">
        <div>
          <h1 className="mb-6 pb-2 text-3xl">
            <TypeWriter text="Diego Procopio" />
          </h1>

          <ButtonLink href="#">DOWNLOAD DO CV</ButtonLink>
        </div>

        <div className="font-regular mx-auto mt-8 max-w-sm px-4 text-center text-xl sm:mx-0 lg:text-2xl xl:max-w-2xl">
          <p>
            Olá, Sou Diego Procopio front-end dev com foco em desenvolvimento
            web.
          </p>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between md:mt-10">
        <Card>
          <span className="text-blue-400">about</span>
          <span className="mx-2">Diego</span>
          <span>{'{'}</span>
          <div className="my-2 ml-9">
            <span className="mr-2 text-blue-400">Occupation:</span>
            <span>Dev. web,</span>
          </div>
          <span>{'}'}</span>{' '}
        </Card>

        <Image
          src="/hand-coding.png"
          width={192}
          height={200}
          alt="image"
          className="my-5 md:my-0"
        />
      </div>

      <Card className="mx-auto flex flex-col items-center justify-center">
        <h2 className="mb-4 text-center text-lg font-bold text-blue-400">
          Contact
        </h2>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/DiegoProcopio0/"
            className="transition-all hover:scale-125 hover:overflow-hidden"
            target="_blank"
          >
            <FaGithub size={50} color="#1ED760" />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-procopio/"
            className="transition-all hover:scale-125 hover:overflow-hidden"
            target="_blank"
          >
            <FaLinkedin size={52} color="#1ED760" />
          </a>
          <a
            href="mailto:diegprocopio98@gmail.com"
            className="transition-all hover:scale-125 hover:overflow-hidden"
            target="_blank"
          >
            <FaVoicemail size={60} color="#1ED760" />
          </a>
        </div>
      </Card>
    </div>
  )
}
