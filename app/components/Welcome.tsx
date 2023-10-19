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
    <div id="content" className="h-screen bg-[url('/images/bg-img/bg.webp')] bg-[no-repeat] bg-[bottom_right_-6rem] md:bg-[center] bg-cover text-white">
      <div className="flex flex-col h-full bg-gradient-to-b from-black/60 to-black/20">
        <Header welcome={true}/>


          <div className="flex-1 h-full flex flex-col p-4 mt-16 md:p-10 z-40">
              <h1 className="font-semibold text-xl md:text-3xl text-center">Le mobilier professionnel pour la restauration et l&apos;hôtellerie</h1>
            <div className="flex lg:items-center h-full">
              <div className="flex h-full lg:h-auto lg:gap-10 xl:w-[70%] lg:mx-auto flex-col lg:flex-row justify-around">

                <div className="flex justify-around items-center md:flex-1">

                  <p className="md:text-xl md:tracking-wide md:leading-10 text-justify">
                    Bienvenue sur notre site dédié aux <strong>professionnels</strong>. <strong>Basalt mobilier pro</strong> est spécialisé dans la vente de <em>mobilier professionnel de qualité supérieure</em> pour répondre aux besoins de votre entreprise. Nous savons à quel point il est important d&apos;avoir un mobilier confortable et esthétique pour garantir le <em>succès</em> de votre établissement. C&apos;est dans ce but que nous vous accompagnons dans la <strong>conception</strong>, l&apos;<strong>équipement</strong>, la <strong>décoration</strong>, et l&apos;<strong>ameublement</strong> de votre projet. 
                  </p>
                  
                </div>

                <div className="md:flex-1 flex items-center">
                  <div className="border h-auto">
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
