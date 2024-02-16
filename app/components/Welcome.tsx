'use client'
import { useEffect } from "react"
import dynamic from 'next/dynamic'
import Header from "./Header"
import Background from "./Background"

const Carousel = dynamic(() => import('./Carousel'), { ssr: false })

export default function Welcome() {
  const adjustHeight = () => {
    const content = document.getElementById('content')
    const screenHeight = window.innerHeight
    content!.style.height = screenHeight + 'px'
  }

  useEffect(() => {
    adjustHeight();
    window.addEventListener('resize', adjustHeight)

    return () => {
      window.removeEventListener('resize', adjustHeight)
    };
  }, []);

  return (
    <div id="content" className="h-screen bg-[url('/images/bg-img/bg.webp')] bg-[no-repeat] bg-[bottom_right_-6rem] md:bg-[top] bg-cover text-white">
      <div className="flex flex-col h-full bg-gradient-to-b from-black/90 to-black/15">
        <Header welcome={true}/>


          <div className="flex-1 h-full flex flex-col p-4 mt-14 md:p-10 z-40">

            <h1 className="font-semibold text-xl mb-4 mt-4 md:text-3xl text-center"><span className="lg:text-4xl font-extrabold ">Basalt Mobilier PRO</span> : Mobilier Professionnel et Aménagement à La Réunion</h1>

            <div className="flex lg:items-center h-full flex-col">
              <div className="flex h-full lg:h-auto lg:gap-10 xl:w-[70%] lg:mx-auto flex-col lg:flex-row justify-around flex-1">

                <div className="flex justify-around items-center md:flex-1">

                  <p className="leading-7 md:text-xl md:tracking-wide md:leading-8 lg:leading-10 text-justify">
                    Bienvenue chez Basalt Mobilier PRO, spécialiste du <strong>mobilier professionnel</strong> à La Réunion. Nous vous accompagnons dans la conception, l&apos;équipement, et l&apos;ameublement de votre projet en <em>teck de qualité</em>. Experts en aménagement d&apos;intérieur, nous créons des espaces exceptionnels pour <strong>restaurants</strong>, <strong>boutiques</strong>, ou <strong>tiny houses</strong>. Basalt Mobilier PRO à Saint-Pierre est votre concepteur de rêves, offrant une expérience complète pour faire de votre établissement un lieu exceptionnel.
                  </p>
                  
                </div>

                <div className=" flex lg:flex-1 items-center justify-center">
                  <div className="border w-full aspect-video">

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
