export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 text-center text-3xl font-bold text-blue-400 sm:text-left">
      #{children}
    </h2>
  )
}
