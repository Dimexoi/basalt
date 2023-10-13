'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getAllProjects, getProjects } from '@/redux/features/projectSlice'
import { getOneCategory } from '@/redux/features/categorySlice'
import CardProject from '@/app/components/CardProject'
import Header from '@/app/components/Header'

export default function CategoryPage({id} : {id: number}) {
  const dispatch = useAppDispatch()

  const {projects} = useAppSelector(state => state.project)
  const {category} = useAppSelector(state => state.category)
  useEffect(() => {
    if (id != 6) {
      dispatch(getOneCategory(String(id)))
      dispatch(getProjects(id))
    } else {
      dispatch(getAllProjects())
    }
  }, [dispatch])
  return (
    <div>
      <Header welcome={false}/>
      <div className='md:px-10 lg:w-[80%] lg:mx-auto'>
        {
          id != 6 &&
          <h1 className='font-bold text-center text-xl text-[#3D6367] mb-3 p-3'>Découvrez nos projets de {category.name}</h1>
        }

        {
          id == 6 &&
          <h1 className='font-bold text-center text-xl text-[#3D6367] mb-3 p-3'>Découvrez tous nos projets</h1>
        }
        
        {
          id != 6 &&
          <div className='flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid xl:grid-cols-3 gap-4 p-4 w-full'>
            {category.projects!.map(project => (
              <CardProject project={project} key={project.id}/>
            ))}
          </div>
        }

        {
          id == 6 &&
          <div className='flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid xl:grid-cols-3 gap-2 p-2 w-full'>
            {projects.map(project => (
              <CardProject project={project} key={project.id}/>
            ))}
          </div>
        }
        
      </div>
    </div>
  )
}
