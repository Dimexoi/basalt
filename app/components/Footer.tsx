import Image from "next/image"
import Link from "next/link"
import FooterDate from "./FooterDate"
import facebooklogo from '@/public/images/icons/social/facebook.webp'
import linkedinlogo from '@/public/images/icons/social/linkedin.webp'

export default function Footer() {

  return (
    <footer className="px-4 py-8 text-sm border-t-2 border-gray-300 bg-[#3D6367] text-white">
      <div className="flex gap-4 mb-8 md:justify-around">

        <div className="">
          <h4 className="mb-2 text-lg">Nos partenaires :</h4>
          <ul className="ml-1">
            <li className="mb-4">
              <Link href='https://www.dimexoi.fr'> <strong>- Dimexoi</strong> : Mobilier en teck pour particulier</Link>
            </li>
            <li>
              <Link href='https://www.chr-discount-reunion.fr/'><strong>- CHR Discount OI</strong> : Matériel professionnel de Restauration</Link>
            </li>
          </ul>
        </div>

        <ul className="flex flex-col justify-between">
          <li className="mb-3">
            <Link href='/mentions-legales'>Mentions légales</Link>
          </li>
          <li className="mb-3">
            <Link href='/politique-de-confidentialite'>Politique de confidentialité</Link>
          </li>
          <li>
            <Link href='/plan-du-site'>Plan du site</Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <h4 className="mb-4 font-medium">Nos Réseaux</h4>
          <ul className="flex gap-4 justify-center">
            <li>
              <Link href='https://www.facebook.com/people/Basalt-Mobilier-PRO/61552525313296/'>
                <Image
                  src={facebooklogo}
                  alt="Logo Facebook"
                  height="35"
                  width="35"
                />
              </Link>
            </li>
            <li>
              <Link href='https://www.linkedin.com/company/basalt-mobilier-pro/'>
                <Image
                  src={linkedinlogo}
                  alt="Logo Likedin"
                  height="35"
                  width="35"
                />
              </Link>
            </li>
          </ul>
        </div>

      </div>
      <div className="md:hidden text-center mb-8">
          <h4 className="mb-4 font-medium">Nos Réseaux</h4>
          <ul className="flex gap-4 justify-center">
            <li>
              <Link href='https://www.facebook.com/people/Basalt-Mobilier-PRO/61552525313296/'>
                <Image
                  src={facebooklogo}
                  alt="Logo Facebook"
                  height="35"
                  width="35"
                />
              </Link>
            </li>
            <li>
              <Link href='https://www.linkedin.com/company/basalt-mobilier-pro/'>
                <Image
                  src={linkedinlogo}
                  alt="Logo Likedin"
                  height="35"
                  width="35"
                />
              </Link>
            </li>
          </ul>
        </div>
      <p className="text-center">©<FooterDate/> Basalt Mobilier PRO</p>
    </footer>
  )
}
