'use client'
import { useEffect } from "react";
import dynamic from 'next/dynamic'
import Header from "./Header";
import Background from "./Background";
// import Carousel from "./Carousel";

const Carousel = dynamic(() => import('./Carousel'), { ssr: false })

export default function Welcome() {
  const adjustHeight = () => {
    const content = document.getElementById('content')
    const screenHeight = window.innerHeight
    content!.style.height = screenHeight + 'px'
  }

  useEffect(() => {
    // Appelez la fonction d'ajustement de la hauteur lorsque la page se charge et lorsque la fenêtre est redimensionnée
    adjustHeight();
    window.addEventListener('resize', adjustHeight);

    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);

  return (
    <div id="content" className="h-screen bg-[url('/images/bg-img/bg.webp')] bg-[no-repeat] bg-[bottom_right_-6rem] md:bg-[top] bg-cover text-white">
      <div className="flex flex-col h-full bg-gradient-to-b from-black/90 to-black/1">
        <Header welcome={true}/>


          <div className="flex-1 h-full flex flex-col p-4 mt-14 md:p-10 z-40">

            <h1 className="font-semibold text-xl md:text-3xl text-center">Basalt Mobilier Pro : Mobilier Professionnel et Aménagement à La Réunion</h1>

            <div className="flex lg:items-center h-full flex-col">
              <div className="flex h-full lg:h-auto lg:gap-10 xl:w-[70%] lg:mx-auto flex-col lg:flex-row justify-around flex-1">

                <div className="flex justify-around items-center md:flex-1">

                  <p className="md:text-xl md:tracking-wide md:leading-8 text-justify">
                    Bienvenue chez Basalt Mobilier Pro, spécialiste du <strong>mobilier professionnel</strong> à La Réunion. Nous vous accompagnons dans la conception, l&apos;équipement, et l&apos;ameublement de votre projet en <em>teck de qualité supérieure</em>. Experts en aménagement d&apos;intérieur, nous créons des espaces exceptionnels pour <strong>restaurants</strong>, <strong>boutiques</strong>, ou <strong>tiny houses</strong>. Basalt Mobilier Pro à Saint-Pierre est votre concepteur de rêves, offrant une expérience complète pour faire de votre établissement un lieu exceptionnel.
                  </p>
                  
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <div className="border w-full h-[70%] md:h-full lg:h-[70%]">
                    <Carousel/>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    
  )
}
