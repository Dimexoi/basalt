import Image from 'next/image'

import { ProjectType } from '@/redux/features/projectSlice'

type PropsType = {
  project: ProjectType
}

export default function CardProject({project}: PropsType) {

  return (
    
    <div key={project.id} className='relative border border-silver rounded-lg overflow-hidden'>

      <Image
        src={`/images/projects/${project.slug}/${project.coverImage}`}
        alt='Image restaurant'
        width="0"
        height="0"
        sizes='100vw'
        className='h-100 w-auto'
      />

      <div className='absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white py-2'>
        <h3 className='text-white'>{project.name}</h3>
      </div>
    </div>
      

  )
}
