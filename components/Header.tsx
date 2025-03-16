'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './ToggleTheme'

export function Header() {
  const links = [
    { name: 'HOME', to: '/' },
    { name: 'CONTATOS', to: '#entre-em-contato' },
    { name: 'PROJETOS', to: '#meus-projetos' },
  ]

  return (
    <header className="w-full text-center border-b-2 border-b-gray-700 ">
      <div className="max-w-[90rem] flex justify-between items-center px-4 md:px-10 mx-auto">
        <h2 className="sr-only">Header</h2>
        <Image
          src={'/logo.jpeg'}
          alt="Logo"
          className="h-10 rounded-full hover:shadow hover:border-2 border-green-500 transition-all"
          width={40}
          height={40}
        />
        <ul className="font-medium flex justify-center gap-4 items-center py-8  decoration-current">
          {links.map((link, index) => (
            <li
              key={index}
              className="hover:text-green-500 uppercase transition-colors text-xs sm:text-base"
            >
              <Link href={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </header>
  )
}
