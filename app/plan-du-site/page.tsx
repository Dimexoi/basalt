'use client'

import Header from '@/app/components/Header'

export default function PlanDuSite() {
return (
    <main>
      <Header welcome={false}/>
      <div className='md:px-10 lg:w-[80%] lg:mx-auto px-2'>
        <h1 className='font-bold text-center text-xl text-[#3D6367] mb-3 p-3'>Plan du site</h1>
        <div className='mb-2 px-3'>
          <ul className='pl-1 list-disc'>
            <li>Accueil basalt-mobilier.fr</li>
            <ul className='pl-4 list-disc'>
              <li>Présentation de Basalt</li>
              <li>Découvrez nos projets</li>
              <ul className='pl-4 list-disc'>
                <li>
                  Projets de restaurants
                </li>
                <li>
                  Projets d'hôtels
                </li>
                <li>
                  Projets de locations
                </li>
                <li>
                  Projets de salles de bains
                </li>
                <li>
                  Projets de moodboards
                </li>
                <li>
                  Voir tout les projets
                </li>
              </ul>
              <li>Contactez-nous</li>
            </ul>
          </ul>
            
        </div>

        
      </div>
    </main>
  )
}
