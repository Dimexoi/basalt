'use client'
import { getCategories } from '@/redux/features/categorySlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'
import Welcome from './components/Welcome'
import CardCategory from './components/CardCategory'
import categories from '@/public/data/categories.json'

export default function Home() {
  const dispatch = useAppDispatch()

  // const {categories} = useAppSelector(state => state.category)
  // useEffect(() => {
  //   dispatch(getCategories())
  // }, [dispatch])

  return (
    <main className="h-full">
      <Welcome/>
      <div className='mt-3 md:px-10 lg:w-[80%] lg:mx-auto' id='test'>
        <h2 className='font-bold text-center text-xl text-[#3D6367]'>Découvrez nos projets</h2>

        <div className='flex flex-col gap-3 p-3 lg:grid xl:grid-cols-2'>
          {categories.filter(category => (
            category.active === true
          )).map(category => (
              <CardCategory category={category} key={category.id}/>
          ))}
        </div>

        <div>
          <h2 className='font-bold text-center text-xl text-[#3D6367]'>Contactez-nous</h2>
          <div>
            adresse
          </div>
          <div>
            telephone
            email
          </div>
        </div>
      </div> 
    </main>
  )
}
