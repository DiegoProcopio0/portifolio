interface ButtonLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function ButtonLink({ href, children, className }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`rounded-lg bg-green-500 px-6 py-3 text-xl font-medium text-white transition-all hover:opacity-90 hover:shadow-xl ${className}`}
    >
      {children}
    </a>
  )
}
