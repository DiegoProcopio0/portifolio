'use client'

import { FaLinkedinIn } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/lib/animations'

export function Footer() {
  return (
    <motion.footer
      className="inherit bottom-0 w-full border-t-2 border-t-gray-700 py-5"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-[90rem] flex-row-reverse items-center justify-between px-4 md:px-10">
        <h2 className="sr-only">Footer</h2>
        <div className="flex flex-col gap-2"></div>
        <div className="flex items-center justify-center gap-2 sm:flex-row">
          <a href="https://www.linkedin.com/in/diego-procopio/">
            <FaLinkedinIn size={30} color="#ffffff" />
          </a>
          <a href="mailto:diegprocopio98@gmail.com">
            <IoIosMail size={40} color="#ffffff" />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
