import Image from "next/image"

import logo from '@/public/images/logo_white.png'

interface Props {
    welcome: boolean
}

export default function Header({welcome}: Props) {

  return (
    <header className={welcome ? "flex gap-3 items-center px-4 py-8" : " flex gap-2"}>
        <Image
            src={logo}
            alt="Logo Basalt"
            width={250}

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
