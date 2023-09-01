import Image from 'next/image'

import { ProjectType } from '@/redux/features/projectSlice'
import Link from 'next/link'

type PropsType = {
  project: ProjectType
}

export default function CardProject({project}: PropsType) {

  return (
    <Link 
      key={project.id}
      className='block relative border rounded-lg overflow-hidden shadow-lg hover:shadow-xl'
      href={`/project/${project.id}/${project.slug}`}
    >     
      <Image
        src={`https://dimexoi-basalt.s3.eu-west-3.amazonaws.com/${project.coverImage}`}
        alt={`Image ${project.name}`}
        width="0"
        height="0"
        sizes='100vw'
        className='h-auto w-full'
      />

      <div className='absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white py-2'>
        <h3 className='text-white'>{project.name}</h3>
        
      </div>
    </Link>
  )
}
