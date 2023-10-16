import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import { Providers } from "@/redux/provider"
import Header from './components/Header'
import Footer from './components/Footer'
import SessionProviders from './components/SessionsProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basalt Mobilier Pro',
  description: "Explorez l'excellence du mobilier professionnel avec Basalt Mobilier Pro, basé à La Réunion. Découvrez nos projets exceptionnels dans l'ameublement, le matériel de restauration et la décoration d'intérieur. Parcourez notre vitrine virtuelle pour visualiser des réalisations inspirantes. Servant les professionnels à travers l'océan Indien et au-delà, Basalt Mobilier Pro offre des solutions innovantes et élégantes pour donner vie à vos espaces professionnels. Découvrez l'art de travailler avec le mobilier de qualité signé Basalt Mobilier Pro.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="fr" className='h-full'>
      
    <body className={'h-[100%] bg-white flex flex-col'}>
      <Providers>
        <SessionProviders>
          <div className='flex-1'>
            {children}
          </div>
          <div>
            <Footer/>
          </div>
        </SessionProviders>
      </Providers>
      <Analytics />
      </body>
  </html>
  )
}
