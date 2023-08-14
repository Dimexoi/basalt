import Image from "next/image"

import logo from '@/public/images/logo_white.png'

interface Props {
    welcome: boolean
}

export default function Header({welcome}: Props) {

  return (
    <header className={welcome ? "flex gap-4 items-center m-8" : " flex gap-2"}>
        <div>

        </div>
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
