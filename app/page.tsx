import Welcome from './components/Welcome'
import CardCategory from './components/CardCategory'
import categories from '@/public/data/categories.json'
import ContactForm from './components/contactForm'

export default function Home() {

  return (
    <main className="h-full">
      <Welcome/>
      <div className='mt-4 md:px-10 lg:w-[80%] lg:mx-auto' id='portfolio'>
        <h2 className='font-bold text-center text-xl text-[#3D6367]'>Découvrez nos projets</h2>

        <div className='flex flex-col gap-4 mt-2 p-4 lg:grid xl:grid-cols-2'>
          {categories.filter(category => (
            category.active === true
          )).map(category => (
              <CardCategory category={category} key={category.id}/>
          ))}
        </div>

        <div id='contact' className='mt-4 mb-8'>
          <h2 className='mb-4 font-bold text-center text-xl text-[#3D6367]'>Contactez-nous</h2>
          <div className='flex flex-col md:flex-row gap-4 md:gap-5 md:justify-around'>

            

            <div className='flex-1 p-4 bg-[#3D6367]'>
              <h3 className='text-center text-white text-lg mb-4 font-semibold'>Envoyez-nous un message</h3>
              <ContactForm/>
            </div>

            <div className='mx-2 flex flex-col flex-1 p-4 border-4 border-[#3D6367]'>
              <h3 className='text-center text-lg mb-4 font-semibold'>Ou joignez nous par :</h3>
              <div className='flex flex-col flex-1 justify-around'>
                <div className='mb-4'>
                  <p className='mb-2'>Téléphone</p>
                  <a href="tel:+262262350679" className='text-[#3D6367] font-bold text-lg pl-4'>0262 35 06 79</a>
                </div>
                <div className='mb-4'>
                  <p className='mb-2'>Email</p>
                  <a href="mailto:contact@basalt-mobilier.fr" className='text-[#3D6367] font-bold text-lg pl-4'>contact@basalt-mobilier.fr</a>
                </div>

                <div className='mb-4'>
                  <p className='mb-2'>Adresse</p>
                  <div className='pl-4 font-semibold'>
                    <p>8, rue Benjamin Hoareau</p>
                    <p>ZI 3</p>
                    <p>97410</p>
                    <p>Saint-Pierre</p>
                    <p>La Réunion</p>
                  </div>
                </div> 
              </div>
              
            </div>
          </div>
          
        </div>
      </div> 
    </main>
  )
}
