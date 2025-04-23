import { Poppins } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { BackToTop } from '@/components/BackToTop'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Diego Dev',
  description: 'Olá, sou Diego Procopio, desenvolvedor full stack júnior com experiência em aplicações web utilizando Vue, React, Node.js e TypeScript.',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
