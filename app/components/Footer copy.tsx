import Image from "next/image"
import Link from "next/link"
import FooterDate from "./FooterDate"

export default function Footer() {

  return (
    <footer className="mt-2 p-2 bg-gray-400 text-white text-sm">
      <div className="flex mb-2">

        <div className="flex-1">
          <p className="">Nos partenaires :</p>
          <ul className="pl-1">
            <li>
              <Link href='https://www.dimexoi.fr'> <strong>- Dimexoi</strong> : Mobilier en teck</Link>
            </li>
            <li>
              <Link href='https://www.chr-discount-reunion.fr/'><strong>- CHR Discount OI</strong> : Matériel professionnel de Restauration</Link>
            </li>
          </ul>
        </div>

        <ul className=" gap-1">
          <li>
            <Link href='/mentions-legales'>Mentions légales</Link>
          </li>
          <li>
            <Link href='/mentions-legales'>A propos</Link>
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
