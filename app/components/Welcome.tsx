import Carousel from "./Carousel";
import Header from "./Header";

export default function Welcome() {

  return (
    <div className="h-screen bg-[url('/images/imgbg.jpg')] bg-[no-repeat] bg-[center] bg-cover text-white">
      <div className="flex flex-col h-full bg-gradient-to-b from-black/60 to-black/20">

        <Header welcome={true}/>

        <div className=" flex-1 h-full flex flex-col p-2 mt-16">
          <div className="flex h-full flex-col justify-around ">
            
            <h1 className="font-semibold text-lg text-center">Le mobilier professionnel pour la restauration et l&apos;hôtellerie</h1>
            <div className="flex justify-around items-center">

              <p className="md:text-lg md:tracking-wide md:leading-10 text-justify">
                Bienvenue sur notre site dédié aux professionnels. Nous sommes spécialisés dans la vente de mobilier professionnel de qualité supérieure pour répondre aux besoins de votre entreprise. Nous savons à quel point il est important d&apos;avoir un mobilier confortable et esthétique pour garantir le succès de votre établissement.
              </p>
              
            </div>

            <div className="border">
                <Carousel/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
