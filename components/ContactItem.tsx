import { cn } from '@/lib/utils'
import { AnchorHTMLAttributes } from 'react'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  title: string
  description: string
}

export function ContactItem({ children, className, ...props }: AnchorProps) {
  return (
    <a
      className={cn(
        'border-opacity-10 flex flex-grow cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-emerald-500 p-6 text-center backdrop-blur-2xl transition-transform duration-200',
        className
      )}
      {...props}
    >
      {children}
      <div>
        <h4 className="text-xl text-gray-300">{props.title}</h4>
        <span className="text-lg text-gray-400">{props.description}</span>
      </div>
    </a>
  )
}
