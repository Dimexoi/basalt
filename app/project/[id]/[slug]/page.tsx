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
        {project.images.length > 0 && 
          <Image
          src={`https://dimexoi-basalt.s3.eu-west-3.amazonaws.com/${project.images[0].coverImage}`}
          alt={`Image ${project.images[0].name}`}
          width="0"
          height="0"
          sizes='100vw'
          className='h-auto w-full mb-1'
        />
        }
        
        <p className='text-justify ps-3'>{project.description}</p>

        <div>
          <h2 className='text-center font-semibold mb-3'>Gallerie photo</h2>
          {project.images.filter((image, index) => (
            index !== 0
          )).map(image => (
            <div key={image.id}>
              <p className='mb-3 ps-3'>
                {image.name}
              </p>
              <Image
                src={`https://dimexoi-basalt.s3.eu-west-3.amazonaws.com/${image.coverImage}`}
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
