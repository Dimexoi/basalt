'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { useEffect } from 'react'
import { getOneProject, getProjects, setProject } from '@/redux/features/projectSlice'
import CardProject from '@/app/components/CardProject'
import Header from '@/app/components/Header'

export default function Category({ params }: { params: { id: number, slug: string } }) {
  const dispatch = useAppDispatch()

  const {projects} = useAppSelector(state => state.project)
  const {project} = useAppSelector(state => state.project)

  useEffect(() => {
    if (projects.length > 0) {
      dispatch(setProject(projects.find(project => project.id === params.id)))
    } else {
      dispatch(getOneProject(params.id))
    }
  }, [dispatch])

  return (
    <main className="h-full">
      <Header welcome={false}/>
      <div>
        <h2>{project.name}</h2>
          <div>{project.name}</div>
      </div>
    </main>
  )
}

