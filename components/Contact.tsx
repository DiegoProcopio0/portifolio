'use client'
import { FaWhatsapp } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { Title } from './Title'
import { ContactItem } from './ContactItem'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animations'

const contacts = [
  {
    href: 'https://contate.me/diegodev',
    target: '_blank',
    title: 'Whatsapp',
    description: '(19) 971240888',
    icon: FaWhatsapp,
    delay: 1 * 0.2
  },
  {
    href: 'mailto:diegprocopio98@gmail.com',
    target: '_blank',
    title: 'Email',
    description: 'diegprocopio98@gmail.com',
    icon: IoIosMail,
    delay: 2 * 0.2
  }
]

export function Contact() {
  return (
    <motion.section
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
      id="entre-em-contato"
    >
      <Title>Entre em contato</Title>

      <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.title}
            {...techBadgeAnimation}
            transition={{ duration: 0.2, delay: contact.delay }}
            {...contact}
          />
        ))}
      </div>
    </motion.section>
  )
}
