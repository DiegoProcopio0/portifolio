'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const links = [
    { name: 'Experiências', to: '#experiencias' },
    { name: 'CONTATOS', to: '#entre-em-contato' },
    { name: 'PROJETOS', to: '#projects' }
  ]

  return (
    <header className="w-full border-b-2 border-b-gray-700 text-center">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4 md:px-10">
        <h2 className="sr-only">Header</h2>
        <Image
          src={'/logo.jpeg'}
          alt="Logo"
          className="h-10 rounded-full border-green-500 transition-all hover:border-2 hover:shadow"
          width={40}
          height={40}
        />
        <ul className="flex items-center justify-center gap-4 py-8 font-medium decoration-current">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-xs uppercase transition-colors hover:text-green-500 sm:text-base xl:text-xl"
            >
              <Link href={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
