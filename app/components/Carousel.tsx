'use client'

import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { getCarouselProjects, nextSlide, prevSlide, setCarouselCurentIndex, setCarouselProjects } from '@/redux/features/displaySlice'
import Image from 'next/image'

import img1 from '@/public/images/projects/carousel/img1.jpg'
import img2 from '@/public/images/projects/carousel/img2.jpg'
import img3 from '@/public/images/projects/carousel/img3.jpg'
import carouselProjects from '@/public/data/carouselProjects.json'
import arrow from '@/public/images/icons/rightarrow.svg'


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
    if (index === 0) return img1
    else if (index === 1) return img2
    else if (index === 2) return img3
    else return img1
  }

  return (
    <div className="relative h-full lg:h-auto " >
        
      {projects.map((project, index) => (
        
        <div    
          key={index}
          className={`flex items-center justify-center transition-opacity duration-500 w-full h-auto overflow-hidden ${
            index === currentIndex ? 'block opacity-100' : 'hidden opacity-0'
          }`}
        >

          <Image
            src={getImage(index)}
            alt={`Slide ${index}`} 
            sizes='100vw'
            height='0'
            width='0'
            className='w-full h-auto'
          />
          <p className='absolute bottom-0 bg-gradient-to-t from-black/100 to-black/1 w-full text-center p-4 text-xl'>{project.name}</p>
          
        </div>
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