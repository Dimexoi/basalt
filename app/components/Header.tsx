'use client'
import Image from "next/image"

import logowhite from '@/public/images/logo_white.png'
import logogreen from '@/public/images/logo_green.png'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { setHeaderIsScrolled } from "@/redux/features/displaySlice"
import Link from "next/link"

interface Props {
  welcome: boolean
}

export default function Header({welcome}: Props) {
  const dispatch = useAppDispatch()
  const { isScrolled } = useAppSelector(state => state.display.header)

  useEffect(() => {

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      dispatch(setHeaderIsScrolled(isScrolled))
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch])

  return (
    <header className={`flex top-0 gap-4 items-center justify-around md:justify-start md transition-all z-50 ${isScrolled ?
      welcome ? " fixed w-full bg-white p-2 border border-b shadow-lg" : " sticky bg-white p-2 border-b drop-shadow-lg"
    : welcome ? " fixed w-full bg-transparent p-3" : " sticky bg-white p-3"}`
    }>
      <div className="hidden sm:block">

      </div>
      <Link href='/'>
        <Image
          src={isScrolled ? logogreen : welcome ? logowhite : logogreen}
          alt="Logo Basalt"
          sizes="100vw"
          className={`w-auto ${isScrolled ? "h-12 " : "h-12"}`}
          priority
        />
      </Link>
      <nav className={`${isScrolled ? 'text-black' : ''}`}>
        <ul className="flex gap-2">
          <li className="relative">
            <Link
              className=" hover:text-lg hover:font-bold hover:text-[#3D6367]"
              href='/'
            >
              Accueil
            </Link>
            <span className={`absolute ml-2 top-1/2 -translate-y-1/2 h-4 w-[2px] ${isScrolled ? " bg-[#3D6367]" : welcome ? " bg-white" : " bg-[#3D6367]"}`}></span>
          </li>
          <li className="relative">
            <Link
              className="ml-2 hover:text-lg hover:font-bold hover:text-[#3D6367]"
              href='/#portfolio'
            >
              Portfolio
            </Link>
            <span className={`absolute ml-2 top-1/2 -translate-y-1/2 h-4 w-[2px] ${isScrolled ? " bg-[#3D6367]" : welcome ? " bg-white" : " bg-[#3D6367]"}`}></span>
          </li>
          <li className="relative">
          <Link
              className="ml-2 hover:text-lg hover:font-bold hover:text-[#3D6367]"
              href='/#contact'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
