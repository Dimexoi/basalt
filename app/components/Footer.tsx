import Image from "next/image"
import Link from "next/link"
import FooterDate from "./FooterDate"

export default function Footer() {

  return (
    <footer className="mt-2 p-2 text-sm border-t-2 border-gray-300">
      <div className="flex gap-4 mb-2 md:justify-around">

        <div className="">
          <p className="">Nos partenaires :</p>
          <ul className="pl-1">
            <li className="mb-3">
              <Link href='https://www.dimexoi.fr'> <strong>- Dimexoi</strong> : Mobilier en teck pour particulier</Link>
            </li>
            <li>
              <Link href='https://www.chr-discount-reunion.fr/'><strong>- CHR Discount OI</strong> : Matériel professionnel de Restauration</Link>
            </li>
          </ul>
        </div>

        <ul className="">
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

      </div>
      <p className="text-center">© <FooterDate/> Basalt mobilier pro</p>
    </footer>
  )
}
