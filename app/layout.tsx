import { Poppins } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { BackToTop } from '@/components/BackToTop'
import { GoogleTagManager } from '@next/third-parties/google'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  generator: 'Diego Procopio',
  applicationName: 'Diego Procopio',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Diego Procopio', url: 'https://diegoprocopio.com.br/' }],
  creator: 'Diego Procopio',
  publisher: 'Diego Procopio',
  title: 'Diego Procopio | Desenvolvedor Full Stack Vue, React e Node.js',
  description:
    'Diego Procopio é um desenvolvedor full stack especializado em Vue, React, Node.js e TypeScript. Crio aplicações web modernas, rápidas e responsivas. Confira meu portfólio!',
  keywords: [
    'desenvolvedor full stack',
    'programador full stack Vue',
    'desenvolvedor React e Node.js',
    'portfólio de programador web',
    'freelancer full stack',
    'Diego Procopio programador',
    'dev Vue React Node',
    'aplicações web modernas',
    'web developer brasil',
    'programador typescript experiente'
  ],
  openGraph: {
    title: 'Diego Procopio | Desenvolvedor Full Stack Vue, React e Node.js',
    description:
      'Diego Procopio é um desenvolvedor full stack especializado em Vue, React, Node.js e TypeScript. Crio aplicações web modernas, rápidas e responsivas. Confira meu portfólio!',
    url: 'https://diegoprocopio.com.br/',
    siteName: 'Diego Dev',
    images: [
      {
        url: 'https://diegoprocopio.com.br/hand-coding.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  alternates: {
    canonical: 'https://diegoprocopio.com.br/'
  },
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <GoogleTagManager gtmId="G-DPK7WLRCQZ" />
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
