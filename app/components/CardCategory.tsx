import Image from 'next/image'

import { CategoryType } from '@/redux/features/categorySlice'
import Link from 'next/link'

type PropsType = {
  category: CategoryType
}

export default function CardCategory({category}: PropsType) {

  return (

    <Link 
      key={category.id}
      className='flex h-32 md:h-44 border rounded-lg overflow-hidden shadow-md hover:shadow-xl'
      href={`/category/${category.id}/${category.slug}`}      
    >
      
      <Image
        src={`/images/categories/${category.slug}/${category.coverImage}`}
        alt='Image restaurant'
        width="0"
        height="0"
        sizes='100vw'
        className='h-100 w-auto'
      />

      <div className='group w-full p-2 text-center flex flex-col justify-around hover:bg-[#315858] duration-300'>
        <h3 className='bg-[#315858] text-white mb-2 p-2 group-hover:bg-white group-hover:text-[#315858] duration-300'>{category.name}</h3>
        <p className='text-black group-hover:text-white'>{category.description}</p>
      </div>
    </Link>

  )
}
