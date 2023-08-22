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
  const {category} = useAppSelector(state => state.category)
  const {project} = useAppSelector(state => state.project)

  useEffect(() => {
    if (category.projects!.length > 0) {
      console.log('ici');
      dispatch(setProject(category.projects!.find(project => project.id === Number(params.id))))
    } else {
      dispatch(getOneProject(params.id))
    }
  }, [dispatch])

  return (
    <main className="h-full">
      <Header welcome={false}/>
      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-center text-xl text-[#3D6367]'>{project.name}</h1>
        <p className='text-justify p-3'>{project.description} {project.description}  {project.description} {project.description} {project.description}{project.description}  {project.description} {project.description}</p>

        <div>
          <h3 className='text-center font-semibold'>Gallerie</h3>
          {project.images.map(image => (
            <div key={image.id}>
              <p className='mb-3 p-3'>
                {image.name}
              </p>
              <Image
                src={`/images/projects/${project.slug}/${image.coverImage}`}
                alt={`Image ${image.name}`}
                width="0"
                height="0"
                sizes='100vw'
                className='h-auto w-full mb-1'
              />
              <p className='text-justify p-3 italic'>
                {image.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

