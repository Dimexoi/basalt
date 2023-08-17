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
  }, [dispatch])

  return (
    <main className="h-full">
      <Welcome/>
      <div>
        <h2>Découvrez nos projets</h2>

        {categories.map(category => (
          <div key={category.id} className='flex max-h-40'>
            <div className=''>
              <Image
                src='/images/categories/restaurants/cover.png'
                alt='Image restaurant'
                width={0}
                height={0}
                sizes='100vw'
                className='h-full w-auto'
              />
            </div>
            <div className=''>
              <p>{category.name}</p>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
        </div>
    </main>
  )
}
