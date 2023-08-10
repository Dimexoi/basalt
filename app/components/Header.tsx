import Image from "next/image"

import logo from '@/public/images/LOGO BASALT.png'

interface Props {
    welcome: boolean
}

export default function Header({welcome}: Props) {

  return (
    <header className={welcome ? "flex gap-3 items-center text-black ml-3 border border-b-black" : " flex gap-2"}>
        <Image
            src={logo}
            alt="Logo Basalt"
            width={300}

        />
        <nav>
            <ul className="flex gap-2">
                <li>Accueil</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}
