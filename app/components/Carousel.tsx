'use client'

import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { getCarouselProjects, nextSlide, prevSlide, setCarouselCurentIndex, setCarouselProjects } from '@/redux/features/displaySlice'
import Image from 'next/image'

import img1 from '@/public/images/projects/carousel/img1.webp'
import img2 from '@/public/images/projects/carousel/img2.webp'
import img3 from '@/public/images/projects/carousel/img3.webp'
import carouselProjects from '@/public/data/carouselProjects.json'
import arrow from '@/public/images/icons/rightarrow.svg'
import Link from 'next/link'


const Carousel: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getCarouselProjects())
    dispatch(setCarouselProjects(carouselProjects))
  }, [dispatch])

  const projects = useAppSelector((state) => state.display.carousel.projects)
  const currentIndex = useAppSelector((state) => state.display.carousel.currentIndex)

  const handlePrevSlide = () => {
    dispatch(prevSlide())
  };

  const handleNextSlide = () => {
    dispatch(nextSlide())
  };

  const getImage = (index: number) => {
    if (index === 0) return img2
    else if (index === 1) return img1
    else if (index === 2) return img3
    else return img1
  }

  return (
    <div className="relative w-full h-full flex justify-center" >
        
      {projects.map((project, index) => (
        
        <Link    
          key={index}
          href={`/project/${project.id}/${project.slug}`}
          className={`absolute flex items-center justify-center transition-opacity duration-500 h-full w-full overflow-hidden ${
            index === currentIndex ? 'block opacity-100' : 'hidden opacity-0'
          }`}
        >
        <div className=' relative w-full aspect-video'>
          <Image
            src={getImage(index)}
            alt={`Image de ${project.name}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            style={{objectFit:"cover"}}
            priority
          />

          <p className='absolute bottom-0 bg-gradient-to-t from-black/100 to-black/1 w-full text-center p-4 text-xl'>{project.name}</p>
        </div>

        </Link>
      ))}
      <div onClick={handlePrevSlide} className="flex items-center justify-start absolute left-0 h-full w-[15%] top-0 transition duration-1000 hover:cursor-pointer hover:bg-gradient-to-r hover:from-black/40 hover:to-black/0 ">

        <Image
          src={arrow}
          alt='fleche gauche'
          width={50}
          height={50}
          className='rotate-180'
        />

      </div>

      <div onClick={handleNextSlide} className="flex items-center justify-end absolute right-0 h-full top-0 w-[15%] transition duration-1000 hover:cursor-pointer hover:bg-gradient-to-l hover:from-black/40 hover:to-black/0">
            
        <Image
          src={arrow}
          alt='fleche droite'
          width={50}
          height={50}
        />

      </div>

    </div>
  );
};

export default Carousel