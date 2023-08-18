'use client'

import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { getCarouselProjects, nextSlide, prevSlide, setCarouselCurentIndex } from '@/redux/features/displaySlice'
import Image from 'next/image';

import arrow from '@/public/images/icons/rightarrow.svg'

const Carousel: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCarouselProjects())
  }, [dispatch])

  const projects = useAppSelector((state) => state.display.carousel.projects)
  const currentIndex = useAppSelector((state) => state.display.carousel.currentIndex)

  const handlePrevSlide = () => {
    dispatch(prevSlide())
  };

  const handleNextSlide = () => {
    dispatch(nextSlide())
  };

  return (
    <div className="relative h-full" >
        
      {projects.map((project, index) => (
        
        <div
        
          key={index}
          className={`transition-opacity duration-500 h-full ${
            index === currentIndex ? 'block opacity-100' : 'hidden opacity-0'
          }`}
        >

          <Image
            fill
            src={'/images/projects/'+project.slug+'/'+project.coverImage}
            alt={`Slide  ${index}`} 
            sizes='100vw' 
            className='absolute'
          />
          
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

export default Carousel;