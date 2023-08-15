import Carousel from "./Carousel";
import Header from "./Header";

export default function Welcome() {
  

  return (
    <div className="bg-[url('/images/imgbg.jpg')] bg-[no-repeat] bg-[center] h-full bg-cover text-white">
      <div className="flex flex-col h-full bg-gradient-to-b from-black/80 to-black/20">

        <Header welcome={true}/>
        <div className="h-100 flex-1 flex md:gap-20 flex-col md:w-[80%] mx-auto md:p-10 p-2">
          <h1 className="font-semibold text-lg md:text-3xl text-center">Le mobilier professionnel pour la restauration et l&apos;hôtellerie</h1>
          <div className="flex flex-col md:gap-10 flex-1 md:p-10">
            <div className="flex-1 flex items-center">

              <p className="md:text-lg md:tracking-wide md:leading-10 text-justify">
                Bienvenue sur notre site dédié aux professionnels de la restauration et de l&apos;hôtellerie. Nous sommes spécialisés dans la vente de mobilier professionnel de qualité supérieure pour répondre aux besoins spécifiques de votre entreprise. Nous savons à quel point il est important d&apos;avoir un mobilier fonctionnel, confortable et esthétique pour garantir le succès de votre établissement.
              </p>
              
            </div>

            <div className="flex-1 max-h-[500px] border ">
              <Carousel/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
