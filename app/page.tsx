'use client'
import { getCategories } from '@/redux/features/categorySlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { useEffect } from 'react'
import Welcome from './components/Welcome'

export default function Home() {
  const dispatch = useAppDispatch()

  const {categories} = useAppSelector(state => state.category)

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <main className="h-full">
      <Welcome/>
      <div>
        <h2>Découvrez nos projets</h2>

        {categories.map(category => (
          <div key={category.id} className='flex relative h-[200px]'>   
              <Image
                fill
                src='/images/categories/restaurants/cover.png'
                alt='Image restaurant'
                sizes='100vw'
              />
              <div className='flex-1'>
                <p>{category.name}</p>
                <p>{category.description}</p>
              </div>
          </div>
        ))}
        </div>
    </main>
  )
}
