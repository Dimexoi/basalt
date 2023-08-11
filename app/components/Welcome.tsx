import Carousel from "./Carousel";
import Header from "./Header";

export default function Welcome() {
  

  return (
    <div className="bg-[url('/images/imgbg.jpg')] bg-[no-repeat] bg-[center] h-full bg-cover">
      <div className="flex flex-col h-full bg-gradient-to-b from-black/80 to-black/20">

        <Header welcome={true}/>
        <div className="h-100 flex-1 flex gap-8 flex-col w-[80%] mx-auto p-4">
          <h1 className="font-semibold text-3xl">BASALT - Le mobilier professionnel pour la restauration et l'hôtellerie</h1>
          <div className="flex gap-10 flex-1">
            <div className="flex-1">

              <p>
                Bienvenue sur notre site dédié aux professionnels de la restauration et de l'hôtellerie. Nous sommes spécialisés dans la vente de mobilier professionnel de qualité supérieure pour répondre aux besoins spécifiques de votre entreprise. Nous savons à quel point il est important d'avoir un mobilier fonctionnel, confortable et esthétique pour garantir le succès de votre établissement.
              </p>
              <p>
                Nous proposons une large gamme de mobilier professionnel de restauration et d'hôtellerie, allant des chaises et des tables aux banquettes et aux tabourets de bar, en passant par les parasols et les accessoires de terrasse. Tous nos produits sont conçus pour répondre aux normes de sécurité et de qualité les plus strictes, tout en étant esthétiquement plaisants pour vos clients.
              </p>

            </div>

            <div className="flex-1">
              <Carousel/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
