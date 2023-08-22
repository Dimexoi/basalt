import Carousel from "./Carousel";
import Header from "./Header";

export default function Welcome() {

  return (
    <div className="h-screen bg-[url('/images/imgbg.jpg')] bg-[no-repeat] bg-[center] bg-cover text-white">
      <div className="flex flex-col h-full bg-gradient-to-b from-black/60 to-black/20">

        <Header welcome={true}/>

        <div className="h-100 flex-1 flex flex-col p-2 mt-16">
          <h1 className="font-semibold text-lg text-center">Le mobilier professionnel pour la restauration et l&apos;hôtellerie</h1>
          <div className="flex flex-col justify-around h-full ">
            <div className="flex items-center">

              <p className="flex-1 md:text-lg md:tracking-wide md:leading-10 text-justify">
                Bienvenue sur notre site dédié aux professionnels. Nous sommes spécialisés dans la vente de mobilier professionnel de qualité supérieure pour répondre aux besoins de votre entreprise. Nous savons à quel point il est important d&apos;avoir un mobilier confortable et esthétique pour garantir le succès de votre établissement.
              </p>
              
            </div>

            <div className="h-[250px] border">
                <Carousel/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
