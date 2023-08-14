import Image from "next/image"

import logowhite from '@/public/images/logo_white.png'
import logogreen from '@/public/images/logo_green.png'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { setHeaderIsScrolled } from "@/redux/features/displaySlice"

interface Props {
  welcome: boolean
}

export default function Header({welcome}: Props) {
  const dispatch = useAppDispatch()
  const { isScrolled } = useAppSelector(state => state.display.header)

  const handleScroll = () => {
    const isScrolled = window.scrollY > 100
    dispatch(setHeaderIsScrolled(isScrolled))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch])

  return (
    <header className={`flex sticky top-0 gap-4 items-center transition-all z-50 ${isScrolled ? " bg-white p-2" : "bg-transparent p-8"}`}>
      <div>

      </div>
      <Image
        src={isScrolled ? logogreen : logowhite}
        alt="Logo Basalt"
        width={isScrolled ? 200 : 250}

      />
      <nav className={`${isScrolled ? 'text-black' : ''}`}>
        <ul className="flex gap-2">
          <li className="relative">
            <a className="mr-2">
              Accueil
            </a>
            <span className={`absolute top-1/2 -translate-y-1/2 h-4 w-[2px] ${isScrolled ? "bg-[#3D6367]" : "bg-white"}`}></span>
          </li>
          <li className="relative">
            <a className="mr-2">
              Portfolio
            </a>
            <span className={`absolute top-1/2 -translate-y-1/2 h-4 w-[2px] ${isScrolled ? "bg-[#3D6367]" : "bg-white"}`}></span>
          </li>
          <li className="relative">
            <a>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
