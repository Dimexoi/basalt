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
      className='group flex h-32 hover:h-36 md:h-44 md:hover:h-48 border rounded-lg overflow-hidden shadow-md hover:shadow-2xl duration-200'
      href={`/category/${category.id}/${category.slug}`}      
    >
      
      <Image
        src={`/images/categories/${category.slug}/${category.coverImage}`}
        alt='Image restaurant'
        width="0"
        height="0"
        sizes='100vw'
        className='h-100 w-auto'
        priority
      />

      <div className='w-full p-2 md:px-5 text-center flex flex-col justify-around group-hover:bg-[#315858] duration-200'>
        <h3 className='bg-[#315858] text-white md:text-lg md:group-hover:text-xl p-2 group-hover:bg-white group-hover:text-[#315858] duration-300'>{category.name}</h3>
        <p className='text-black group-hover:text-white md:group-hover:text-lg'>{category.description}</p>
      </div>
    </Link>

  )
}
