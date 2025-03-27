import Image from 'next/image'
import { GoProject } from 'react-icons/go'

export function Projects() {
  return (
    <section className="pt-10">
      <h2 className="text-blue-400 mb-10 text-center text-3xl font-bold sm:text-left">
        #Meus Projetos
      </h2>

      <div className="grid rounded-lg grid-cols-1 shadow-lg gap-4 md:grid-cols-2">
        <Image
          className="rounded-lg"
          width={'600'}
          height={'600'}
          src="/quiz.png"
          alt="projeto"
        />
        <div className="flex flex-col md:px-10 pb-4 md:pb-10 gap-6">
          <div className="flex items-center gap-5">
            <GoProject className="text-green-500 size-8" />
            <h3 className="text-3xl">Quiz</h3>
          </div>
          <p className="text-gray-400">
            Um jogo de perguntas e respostas para testar seus conhecimentos.
          </p>

          <div className="flex gap-2">
            <span className="text-emerald-400 bg-emerald-900/80  text-base py-1 px-3 rounded-lg">
              JavaScript
            </span>
            <span className="text-emerald-400 bg-emerald-900/80  text-base py-1 px-3 rounded-lg">
              React
            </span>
            <span className="text-emerald-400 bg-emerald-900/80  text-base py-1 px-3 rounded-lg">
              Next
            </span>
          </div>

          <a
            href="#"
            className="bg-green-500 self-start font-medium text-base lg:text-xl py-3 px-6 rounded-lg text-white hover:opacity-90 hover:shadow-xl transition-all"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </section>
  )
}
