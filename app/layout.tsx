import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import { Providers } from "@/redux/provider"
import Header from './components/Header'
import Footer from './components/Footer'
import SessionProviders from './components/SessionsProviders'
import Favicon from '@/public/images/logo-icon.png';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basalt Mobilier Pro',
  description: "Explorez l'excellence du mobilier professionnel avec Basalt Mobilier Pro, basé à La Réunion. Découvrez nos projets exceptionnels dans l'ameublement, le matériel de restauration et la décoration d'intérieur. Parcourez notre vitrine virtuelle pour visualiser des réalisations inspirantes. Servant les professionnels à travers l'océan Indien et au-delà, Basalt Mobilier Pro offre des solutions innovantes et élégantes pour donner vie à vos espaces professionnels. Découvrez l'art de travailler avec le mobilier de qualité signé Basalt Mobilier Pro.",
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="fr" className='min-h-full'>
      
    <body className={inter.className + ' ' + 'min-h-full bg-white'}>
      <Providers>
        <SessionProviders>
          {children}
          <Footer/>
        </SessionProviders>
      </Providers>
      <Analytics />
      </body>
  </html>
  )
}
