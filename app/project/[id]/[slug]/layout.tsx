import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from "@/redux/provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basalt projet',
  description: 'Page projet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <>{children}</>
  )
}
