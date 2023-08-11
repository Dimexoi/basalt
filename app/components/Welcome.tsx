import Header from "./Header";

export default function Welcome() {
  

  return (
    <div className="bg-[url('/images/imgbg.jpg')] bg-[no-repeat] bg-[center] h-full bg-cover">
      <div className=" h-full bg-gradient-to-b from-black/70 to-black/0">

        <Header welcome={true}/>
        <div className="p-20">
          <h1>Bienvenue</h1>
          <div className="flex">
            <div>

              <p>
                Bienvenue sur notre site dédié aux professionnels de la restauration et de l'hôtellerie. Nous sommes spécialisés dans la vente de mobilier professionnel de qualité supérieure pour répondre aux besoins spécifiques de votre entreprise. Nous savons à quel point il est important d'avoir un mobilier fonctionnel, confortable et esthétique pour garantir le succès de votre établissement.
              </p>
              <p>
                Nous proposons une large gamme de mobilier professionnel de restauration et d'hôtellerie, allant des chaises et des tables aux banquettes et aux tabourets de bar, en passant par les parasols et les accessoires de terrasse. Tous nos produits sont conçus pour répondre aux normes de sécurité et de qualité les plus strictes, tout en étant esthétiquement plaisants pour vos clients.
              </p>

            </div>

            <div>
              caroussel
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
