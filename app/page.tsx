
import { getCategories } from '@/redux/features/categorySlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'
import Welcome from './components/Welcome'
import CardCategory from './components/CardCategory'
import categories from '@/public/data/categories.json'
import ContactForm from './components/contactForm'

export default function Home() {
  // const dispatch = useAppDispatch()

  // const {categories} = useAppSelector(state => state.category)
  // useEffect(() => {
  //   dispatch(getCategories())
  // }, [dispatch])



  return (
    <main className="h-full">
      <Welcome/>
      <div className='mt-4 md:px-10 lg:w-[80%] lg:mx-auto' id='portfolio'>
        <h2 className='font-bold text-center text-xl text-[#3D6367]'>Découvrez nos projets</h2>

        <div className='flex flex-col gap-4 p-4 lg:grid xl:grid-cols-2'>
          {categories.filter(category => (
            category.active === true
          )).map(category => (
              <CardCategory category={category} key={category.id}/>
          ))}
        </div>

        <div id='contact'>
          <h2 className='font-bold text-center text-xl text-[#3D6367]'>Contactez-nous</h2>
          <div className='flex flex-col md:flex-row md:gap-5 md:justify-around'>

            <div className='p-4 '>
              <div className=''>

                <div className='mb-4'>
                  <p className='mb-2'>Téléphone</p>
                  <a href="tel:+262262350679" className='text-[#3D6367] font-bold text-lg pl-4'>0262 35 06 79</a>
                </div>
                <div className='mb-4'>
                  <p className='mb-2'>Email</p>
                  <a href="mailto:contact@basalt-mobilier.fr" className='text-[#3D6367] font-bold text-lg pl-4'>contact@basalt-mobilier.fr</a>
                </div>
              </div>

              <div className='mb-4'>
                <p className='mb-2'>Adresse</p>
                <div className='pl-4 font-semibold'>
                  <p>8, rue Benjamin Hoarau</p>
                  <p>Zone Industrielle 3</p>
                  <p>97410</p>
                  <p>Saint-Pierre</p>
                </div>
              </div> 
            </div>
            <div className='p-4 mb-4'>
              <ContactForm/>
            </div>
          </div>
          
        </div>
      </div> 
    </main>
  )
}
