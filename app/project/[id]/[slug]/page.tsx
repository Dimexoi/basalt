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
    <main className="h-full ">
      <Header welcome={false}/>
      <div className='flex flex-col gap-4 md:px-10 lg:w-[70%] lg:mx-auto lg:px-0'>
        <h1 className='font-bold text-center text-xl text-[#3D6367]'>{project.name}</h1>
        <div className='md:w-[80%] lg:w-[70%] md:mx-auto'>

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
          
          <p className='text-justify ps-3 md:ps-0'>{project.description}</p>
        </div>

        <div>
          <h2 className='text-center font-semibold text-lg mb-3'>Galerie photo</h2>
          <div className='flex gap-4'>

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
                <p className='text-justify ps-3 md:ps-0 italic'>
                  {image.description}
                </p>
                
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </main>
  )
}
