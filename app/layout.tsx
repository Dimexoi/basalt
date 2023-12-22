import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import FacebookPixel from './components/FacebookPixel'

import { Providers } from "@/redux/provider"
import Footer from './components/Footer'
import SessionProviders from './components/SessionsProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basalt Mobilier PRO - Mobilier Professionnel et Aménagement à La Réunion',
  description: `Bienvenue chez Basalt Mobilier PRO, votre partenaire incontournable à La Réunion  (974) pour tous vos besoins en mobilier et équipement professionnel. Nous sommes spécialisés dans la vente de mobilier de qualité en teck exclusif, et en mobilier de tous genres pour votre établissement. Notre équipe est dédié à la création d'espaces uniques afin de réaliser l'espace de vos rêves.

  Que vous dirigiez un restaurant exceptionnel, une boutique inspirante, ou que vous souhaitiez aménager une tiny house au charme unique, Basalt Mobilier PRO à Saint-Pierre est votre architecte de rêves. Nous comprenons l'importance d'un mobilier confortable et esthétique pour le succès de votre entreprise, et c'est pourquoi nous vous accompagnons de A à Z dans la conception, l'équipement, la décoration, et l'ameublement de votre projet.
  
  En tant qu'experts en aménagement et décoration d'espaces de location, nous savons que la cohérence avec le thème choisi est essentielle pour attirer des réservations. Nous créons des espaces qui transforment vos idées en réalité, jusqu'à la plus petite décoration. Chez Basalt Mobilier PRO, nous vous offrons plus qu'un simple mobilier, nous vous offrons une expérience complète pour faire de votre établissement un lieu exceptionnel.`,
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
      
      <FacebookPixel />
    </body>
  </html>
  )
}
