'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { useEffect } from 'react'
import { getProjects } from '@/redux/features/projectSlice'
import CardProject from '@/app/components/CardProject'
import Header from '@/app/components/Header'

export default function Category({ params }: { params: { id: number, slug: string } }) {
  const dispatch = useAppDispatch()

  const {projects} = useAppSelector(state => state.project)

  useEffect(() => {
    dispatch(getProjects(params.id))
  }, [dispatch])

  return (
    <main className="h-full">
      <Header welcome={false}/>
      <div>
        <h2>Découvrez nos projets par catégorie</h2>

        {projects.map(project => (
          <CardProject project={project} key={project.id}/>
        ))}
      </div>
    </main>
  )
}
