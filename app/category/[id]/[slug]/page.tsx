'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'
import { getProjects } from '@/redux/features/projectSlice'
import CardProject from '@/app/components/CardProject'
import Header from '@/app/components/Header'
import { getOneCategory } from '@/redux/features/categorySlice'

export default function Category({ params }: { params: { id: number, slug: string} }) {
  const dispatch = useAppDispatch()

  const {projects} = useAppSelector(state => state.project)
  const {category} = useAppSelector(state => state.category)

  useEffect(() => {
    dispatch(getOneCategory(String(params.id)))
    dispatch(getProjects(params.id))
  }, [dispatch])

  return (
    <main className="h-full">
      <Header welcome={false}/>
      <div>
        <h1 className='font-bold text-center text-xl text-[#3D6367] mb-3 p-3'>Découvrez nos projets de {category.name}</h1>

        <div className='flex flex-col gap-2 p-2 w-full aspect-square'>
          {category.projects!.map(project => (
            <CardProject project={project} key={project.id}/>
          ))}
        </div>
      </div>
    </main>
  )
}
