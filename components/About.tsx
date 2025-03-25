import Image from 'next/image'
import { Card } from './Card'
import { TypeWriter } from './TypeWriter'
import { FaGithub, FaLinkedin, FaVoicemail } from 'react-icons/fa'

export function About() {
  return (
    <div className="">
      <header className="text-center sm:text-left font-bold sm:pb-0 pb-6 py-2 sm:flex justify-between">
        <div>
          <h1 className="mb-6 pb-2  text-3xl">
            <TypeWriter text="Diego Procopio" />
          </h1>
          <a
            href="#"
            className="ease-in shadow duration-300 p-3 dark:bg-green-500 bg-green-400 rounded hover:text-green-400 hover:bg-white"
          >
            DOWNLOAD DO CV
          </a>
        </div>

        <div className="mx-auto font-regular sm:mx-0 text-center text-xl lg:text-2xl mt-8 px-4 max-w-sm xl:max-w-2xl">
          <TypeWriter text="Olá, Sou Diego Procopio front-end dev com foco em desenvolvimento web." />
        </div>
      </header>

      <div className="flex justify-center  flex-col items-center sm:flex-row sm:justify-between md:mt-10">
        <Card>
          <span className="text-blue-400">about</span>
          <span className="mx-2">Diego</span>
          <span>{'{'}</span>
          <div className="ml-9 my-2">
            <span className="text-blue-400 mr-2">Occupation:</span>
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

      <Card className="mx-auto flex flex-col justify-center items-center">
        <h2 className="text-center mb-4 text-lg text-blue-400 font-bold ">
          Contact
        </h2>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/DiegoProcopio0/"
            className="hover:overflow-hidden hover:scale-125 transition-all"
            target="_blank"
          >
            <FaGithub size={50} color="#1ED760" />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-procopio/"
            className="hover:overflow-hidden hover:scale-125 transition-all"
            target="_blank"
          >
            <FaLinkedin size={52} color="#1ED760" />
          </a>
          <a
            href="mailto:diegprocopio98@gmail.com"
            className="hover:overflow-hidden hover:scale-125 transition-all"
            target="_blank"
          >
            <FaVoicemail size={60} color="#1ED760" />
          </a>
        </div>
      </Card>
    </div>
  )
}
