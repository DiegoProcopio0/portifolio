import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`w-80  shadow bg-gradient-to-r from-blue-900 to-blue-950 h-auto p-4 rounded sm:w-96 ${className}`}
    >
      {children}
    </div>
  )
}
