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
      <div>
        <h2>Découvrez nos projets</h2>

        {categories.map(category => (
          <CardCategory category={category} key={category.id}/>
        ))}
      </div>
      
    </main>
  )
}
