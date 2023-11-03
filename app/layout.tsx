import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import FacebookPixel from './components/FacebookPixel'
import Script from 'next/script'
import { Providers } from "@/redux/provider"
import Footer from './components/Footer'
import SessionProviders from './components/SessionsProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basalt Mobilier PRO : Mobilier Professionnel et Aménagement à La Réunion',
  description: `Bienvenue chez Basalt Mobilier PRO, votre partenaire incontournable à La Réunion pour tous vos besoins en mobilier professionnel et d'équipement. Spécialisés dans la vente de mobilier de qualité supérieure en teck, nous sommes dédiés à la création d'espaces uniques qui transcendent vos rêves.

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

      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${process.env.FACEBOOK_PIXEL_ID});
        fbq('track', 'PageView');
        `,
        }}
      />
    </body>
  </html>
  )
}
