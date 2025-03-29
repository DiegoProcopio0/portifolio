interface ButtonLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function ButtonLink({ href, children, className }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-gray-50 transition-all hover:bg-emerald-500 disabled:opacity-50 ${className}`}
    >
      {children}
    </a>
  )
}
