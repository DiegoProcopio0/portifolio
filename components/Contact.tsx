import { FaWhatsapp } from 'react-icons/fa'
import { Title } from './Title'
import { ContactItem } from './ContactItem'
import { IoIosMail } from 'react-icons/io'

export function Contact() {
  return (
    <div className="" id="entre-em-contato">
      <Title>Entre em contato</Title>

      <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
        <ContactItem
          href="https://contate.me/diegodev"
          target="_blank"
          title="Whatsapp"
          description="(19) 97124088"
        >
          <FaWhatsapp className="size-8 text-emerald-500" />
        </ContactItem>
        <ContactItem
          href="mailto:diegprocopio98@gmail.com"
          target="_blank"
          title="Email"
          description="diegprocopio98@gmail.com"
        >
          <IoIosMail className="size-8 text-emerald-500" />
        </ContactItem>
      </div>
    </div>
  )
}
