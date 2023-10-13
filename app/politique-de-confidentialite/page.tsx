'use client'

import Header from '@/app/components/Header'

export default function PolitiqueDeConfidentialite() {
return (
    <main className='h-full'>
      <Header welcome={false}/>
      <div className='md:px-10 lg:w-[80%] lg:mx-auto px-2'>
        <h1 className='font-bold text-center text-xl text-[#3D6367] mb-4 p-3'>Politique de confidentialité</h1>
        
        <h2 className='mb-2'>Dernière mise à jour : <strong>14/10/2023</strong></h2>

        <p className='mb-4'>Merci de visiter basalt-mobilier.fr. Nous nous engageons à protéger et à respecter votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons les informations que vous nous fournissez.</p>

        <h2 className='mb-2 text-lg text-[#3D6367] font-semibold'>Informations que nous collectons</h2>
        <p>
        Nous collectons les informations suivantes lorsque vous utilisez notre site :
        </p>
        <ul className='mb-4'>
          <li>
            <strong>Informations de contact :</strong> Nous pouvons collecter votre nom, votre adresse e-mail et d&apos;autres informations de contact lorsque vous utilisez notre formulaire de contact.
          </li>

          <li>
            <strong>Données d&apos;utilisation :</strong> Nous recueillons des informations sur la manière dont vous utilisez notre site, y compris les pages que vous consultez et le temps que vous y passez.
          </li>
        </ul>

        <h2 className='mb-2 text-lg text-[#3D6367] font-semibold'>Comment nous utilisons vos informations</h2>
        <p>
        Nous utilisons vos informations pour les finalités suivantes :
        </p>
        <ul className='mb-4'>
          <li>
            Répondre à vos demandes et vous fournir les informations demandées.
          </li>

          <li>
            Améliorer notre site en analysant les informations et les retours que nous recevons.
          </li>
          <li>
            Vous envoyer des communications marketing, le cas échéant, pour lesquelles vous avez donné votre consentement.
          </li>
        </ul>

        <h2 className='mb-2 text-lg text-[#3D6367] font-semibold'>Protection de vos informations</h2>
        <p className='mb-4'>
          Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations contre tout accès non autorisé ou divulgation.
        </p>

        <h2 className='mb-2 text-lg text-[#3D6367] font-semibold'>Partage de vos informations</h2>
        <p className='mb-4'>
          Nous ne vendons, n&apos;échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf dans les cas où cela est nécessaire pour répondre à votre demande ou pour respecter la loi.
        </p>

        <h2 className='mb-2 text-lg text-[#3D6367] font-semibold'>Vos droits</h2>
        <p className='mb-4'>
          Vous avez le droit d&apos;accéder, de corriger, de mettre à jour ou de demander la suppression de vos informations personnelles. Vous pouvez le faire en nous contactant à contact@basalt-mobilier.fr.
        </p>

        <h2 className='mb-2 text-lg text-[#3D6367] font-semibold'>Modifications de notre politique de confidentialité</h2>
        <p className='mb-4'>
          Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Toutes les modifications seront publiées sur cette page avec une date de mise à jour.
        </p>

        <h2 className='mb-2 text-lg text-[#3D6367] font-semibold'>Nous contacter</h2>
        <p className='mb-4'>
          Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à contact@basalt-mobilier.fr.
        </p>
        
      </div>
    </main>
  )
}
