'use client'
import { getCategories } from '@/redux/features/categorySlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'
import Welcome from './components/Welcome'
import CardCategory from './components/CardCategory'

export default function Home() {
  const dispatch = useAppDispatch()

  const {categories} = useAppSelector(state => state.category)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <main className="h-full">
      <Welcome/>
      <div className='mt-3' id='test'>
        <h2 className='font-bold text-center text-xl text-[#3D6367]'>Découvrez nos projets</h2>

        <div className='flex flex-col gap-3 p-3'>
          {categories.map(category => (
              <CardCategory category={category} key={category.id}/>
          ))}
        </div>
      </div>
      
    </main>
  )
}
