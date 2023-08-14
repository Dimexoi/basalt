import Carousel from "./Carousel";
import Header from "./Header";

export default function Welcome() {
  

  return (
    <div className="bg-[url('/images/imgbg.jpg')] bg-[no-repeat] bg-[center] h-full bg-cover text-white">
      <div className="flex flex-col h-full bg-gradient-to-b from-black/80 to-black/20">

        <Header welcome={true}/>
        <div className="h-100 flex-1 flex gap-20 flex-col w-[80%] mx-auto p-10">
          <h1 className="font-semibold text-3xl text-center">Le mobilier professionnel pour la restauration et l&apos;hôtellerie</h1>
          <div className="flex gap-10 flex-1 p-10">
            <div className="flex-1 flex items-center">

              <p className="text-lg tracking-wide leading-10 text-justify">
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
