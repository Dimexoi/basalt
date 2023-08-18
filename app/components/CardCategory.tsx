import Image from 'next/image'

import { CategoryType } from '@/redux/features/categorySlice'

type PropsType = {
  category: CategoryType
}

export default function CardCategory({category}: PropsType) {

  return (

    <div key={category.id} className='flex h-32 border border-silver rounded-lg overflow-hidden'>

      <Image
        src='/images/categories/restaurants/cover.png'
        alt='Image restaurant'
        width="0"
        height="0"
        sizes='100vw'
        className='h-100 w-auto'
      />

      <div className='p-2 text-center flex flex-col justify-around'>
        <h3 className='bg-[#315858] text-white mb-2 p-2'>{category.name}</h3>
        <p className='text-black'>{category.description}</p>
      </div>
    </div>

  )
}
