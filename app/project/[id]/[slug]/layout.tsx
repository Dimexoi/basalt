import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projet - Basalt Mobilier PRO',
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
