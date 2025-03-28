import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`h-auto w-80 rounded-lg bg-gradient-to-r from-blue-900 to-blue-950 p-4 shadow sm:w-96 ${className}`}
    >
      {children}
    </div>
  )
}
