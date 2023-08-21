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
      dispatch(setProject(projects.find(project => project.id === Number(params.id))))
    } else {
      dispatch(getOneProject(params.id))
    }
  }, [dispatch])

  return (
    <main className="h-full">
      <Header welcome={false}/>
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>

        <div>
          <h3>Gallerie</h3>
          {project.images.map(image => (
            <div key={image.id}>
              <p>
                {image.name}
              </p>
              <Image
                src={`/images/projects/${project.slug}/${image.coverImage}`}
                alt={`Image ${image.name}`}
                width="0"
                height="0"
                sizes='100vw'
                className='h-50 w-full overflow-hidden'
              />
              <p>
                {image.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

