import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from "@/redux/provider"
import Header from './components/Header'
import SessionProviders from './components/SessionsProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basalt Mobilier Pro',
  description: 'Basalt mobilier pro homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="fr" className='min-h-full'>
      
    <body className={inter.className + ' min-h-full bg-white'}>
      <Providers>
        <SessionProviders>
          {children}
        </SessionProviders>
      </Providers>
      </body>
  </html>
  )
}
