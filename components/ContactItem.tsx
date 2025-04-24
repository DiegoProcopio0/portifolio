import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

type AnchorProps = ComponentProps<typeof motion.a> & {
  title: string
  description: string
  icon: IconType
}

export function ContactItem({ icon: Icon, className, ...props }: AnchorProps) {
  return (
    <motion.a
      className={cn(
        'border-opacity-10 hover:!opacity-70 flex flex-grow cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-emerald-500 p-6 text-center backdrop-blur-2xl transition-all duration-200',
        className
      )}
      {...props}
    >
      <Icon className="size-8 text-emerald-500" />
      <div>
        <h4 className="text-xl text-gray-300">{props.title}</h4>
        <span className="text-lg text-gray-400">{props.description}</span>
      </div>
    </motion.a>
  )
}
