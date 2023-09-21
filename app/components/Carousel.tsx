'use client'

import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { getCarouselProjects, nextSlide, prevSlide, setCarouselCurentIndex, setCarouselProjects } from '@/redux/features/displaySlice'
import Image from 'next/image'

import imageRestaurant1 from '@/public/images/projects/restaurant-1/001.jpg'
import imageHotel1 from '@/public/images/projects/hotel-1/001.jpg'
import imageRestaurant2 from '@/public/images/projects/restaurant-2/001.jpg'
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
    if (index === 0) return imageRestaurant1
    else if (index === 1) return imageHotel1
    else if (index === 2) return imageRestaurant2
    else return imageRestaurant1
  }

  return (
    <div className="relative h-full lg:h-auto " >
        
      {projects.map((project, index) => (
        
        <div    
          key={index}
          className={`flex items-center justify-center transition-opacity duration-500 w-full h-48 overflow-hidden ${
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