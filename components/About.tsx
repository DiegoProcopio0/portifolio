'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from './Card'
import { TypeWriter } from './TypeWriter'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ButtonLink } from './ButtonLink'
import { IoIosMail } from 'react-icons/io'
import { fadeUpAnimation } from '@/lib/animations'

export function About() {
  return (
    <>
      <motion.div {...fadeUpAnimation} transition={{ duration: 0.5 }}>
        <header className="justify-between py-2 pb-6 text-center font-bold sm:flex sm:pb-0 sm:text-left">
          <div>
            <h1 className="mb-6 pb-2 text-3xl">
              <TypeWriter text="Diego Procopio" />
            </h1>

            <ButtonLink className="mx-auto !max-w-[320px] md:mr-auto" href="/diego-dev.pdf">
              DOWNLOAD DO CV
            </ButtonLink>
          </div>

          <div className="mx-auto mt-8 max-w-sm px-4 text-center text-base font-medium sm:mx-0 md:text-xl lg:text-2xl xl:max-w-2xl">
            <p>
              Olá, sou Diego Procopio, desenvolvedor full stack júnior com
              experiência em aplicações web utilizando Vue, React, Node.js e
              TypeScript.
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
              <FaGithub size={50} color="#00bc7d" />
            </a>
            <a
              href="https://www.linkedin.com/in/diego-procopio/"
              className="transition-all hover:scale-125 hover:overflow-hidden"
              target="_blank"
            >
              <FaLinkedin size={52} color="#00bc7d" />
            </a>
            <a
              href="mailto:diegprocopio98@gmail.com"
              className="transition-all hover:scale-125 hover:overflow-hidden"
              target="_blank"
            >
              <IoIosMail size={70} color="#00bc7d" />
            </a>
          </div>
        </Card>
      </motion.div>
    </>
  )
}
