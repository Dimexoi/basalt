
import { Metadata } from "next"
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAllProjects, getProjects } from '@/redux/features/projectSlice'
import { getOneCategory } from '@/redux/features/categorySlice'
import CardProject from '@/app/components/CardProject'
import Header from '@/app/components/Header'
import categories from '@/public/data/categories.json'
import CategoryPage from "@/app/components/categoryPage"

export const generateMetadata = ({ params }: { params: { id: number, slug: string} }): Metadata => {
  
  if (params.id == 6 ) {
    return {
      title: `Tous nos projets`,
      description: "Accéder à l&apos;ensemble des projets que nous avons réalisés chez Basalt Mobilier Pro"
    };
  } else {
    const category = categories.find(category => category.id === Number(params.id))
    if (category) {
      return {
        title: `Les ${category.name}`,
        description: `Découvrez les projets réalisés pour les ${category.name}. Ces professionnels nous ont fait confiance pour équiper leur ${category.name} avec notre mobilier en teck, ou nos appareils de restauration. Ils ont pu profiter d&apos;un service sur-mesure allant de la réflexion, à la décoration, jusqu&apos;à l&apos;installation des différents mobiliers.`
      };
    } else {
      return {
        title: 'Nos projets',
      };
    }
  }
  
};

export default function Category({ params }: { params: { id: number, slug: string} }) {


  return (
    <main>
      <CategoryPage id={Number(params.id)}/>
    </main>
  )
}
