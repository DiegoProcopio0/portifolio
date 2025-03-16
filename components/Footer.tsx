'use client'

import { FaLinkedinIn } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export function Footer() {
  return (
    <footer className="px-4 md:px-10 w-full border-t-2 border-t-gray-700 py-5 bottom-0 inherit">
      <div className="flex justify-between items-center max-w-[90rem] mx-auto">
        <h2 className="sr-only">Footer</h2>
        <div className="flex flex-col gap-2">
          <button
            className="text-green-400 hover:text-green-200 cursor-pointer"
            onClick={scrollToTop}
          >
            VOLTAR AO TOPO
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 sm:flex-row">
          <a href="https://www.linkedin.com/in/diego-procopio/">
            <FaLinkedinIn size={30} color="#ffffff" />
          </a>
          <a href="mailto:diegprocopio98@gmail.com">
            <IoIosMail size={40} color="#ffffff" />
          </a>
        </div>
      </div>
    </footer>
  )
}
