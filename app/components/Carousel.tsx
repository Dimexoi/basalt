'use client'

import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { getCarouselProjects, nextSlide, prevSlide, setCarouselCurentIndex } from '@/redux/features/displaySlice'

const Carousel: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCarouselProjects())
  }, [dispatch])

  const projects = useAppSelector((state) => state.display.carousel.projects);
  const currentIndex = useAppSelector((state) => state.display.carousel.currentIndex);

  const handlePrevSlide = () => {
    dispatch(prevSlide());
    dispatch(setCarouselCurentIndex((prevIndex: number) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1)))
  };

  const handleNextSlide = () => {
    dispatch(nextSlide());
    dispatch(setCarouselCurentIndex((prevIndex: number) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1)));
  };

  return (
    <div className="relative">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={'/images/projects/'+project.name+'/'+project.coverImage} alt={`Slide ${index}`} className="w-full h-auto" />
        </div>
      ))}

      <button onClick={handlePrevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2">
        Previous
      </button>
      <button onClick={handleNextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2">
        Next
      </button>
    </div>
  );
};

export default Carousel;