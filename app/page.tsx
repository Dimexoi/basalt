'use client'
import { getCategories } from '@/redux/features/categorySlice'
import { useAppDispatch } from '@/redux/hooks'
import Image from 'next/image'
import { useEffect } from 'react'
import Welcome from './components/Welcome'

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <main className="h-full">
      <Welcome/>
    </main>
  )
}
