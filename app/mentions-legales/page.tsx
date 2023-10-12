'use client'

import Header from '@/app/components/Header'

export default function MentionsLegales() {
return (
    <main className='h-full'>
      <Header welcome={false}/>
      <div className='md:px-10 lg:w-[80%] lg:mx-auto px-2'>
        <h1 className='font-bold text-center text-xl text-[#3D6367] mb-3 p-3'>Mentions Légales</h1>
        <div className='mb-2'>
          <h2 className='mb-2 font-semibold text-lg'>Propriétaire du site</h2>
          
            <ul className='pl-2'>
              <li>
                  Société : <strong>BASALT INVEST</strong>
              </li>
              <li>
                  Siren : 847 947 413 R.C.S Paris
              </li>
              <li>
                N° d’identification à la TVA : FR82847947413
              </li>
              <li>
                  Adresse : 8, rue Benjamin Hoarau - 97410 Saint Pierre - La Réunion
              </li>
              <li>
                  Téléphone : 0262 35 06 79
              </li>
              <li>
                  Email : contact@basalt-mobilier.fr
              </li>
            </ul>
            
        </div>

        <div>
          <h2 className='mb-2 font-semibold text-lg'>Réalisation du site</h2>
          
            <ul className='pl-2'>
              <li>
                  Site réalisé par : Basalt Invest
              </li>
              <li>
                  Hébergeur : VERCEL
              </li>
              <li>
                  Adresse de l&apos;hébergeur : Vercel Inc. 340 S Lemon Ave #4133 Walnut, CA 91789
              </li>
              
            </ul>
            
        </div>
        
      </div>
    </main>
  )
}
