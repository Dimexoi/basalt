
import type { Metadata, ResolvingMetadata } from 'next'

import CardProject from '@/app/components/CardProject'
import Header from '@/app/components/Header'

import { ProjectType } from "@/redux/features/projectSlice"

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  if (Number(id) == 6) {
    return {
      title: 'Tous nos projets - Basalt Mobilier PRO',
      description: `Basalt Mobilier PRO vous propose ici d'accéder à tous les projets que nous avons référencés sur notre site`
    }
  } else {
    const response = await fetch(`${process.env.BASE_URL}api/category/findOne`, {
      method: 'POST',
      body: JSON.stringify({id})
    })
    const result = await response.json()

    return {
      title: `${result.name} - Basalt Mobilier PRO`,
      description: `Les projets de ${result.name} réalisés par Basalt mobilier PRO. Du mobilier professionnel spécialement pour ${result.name} installé principalement à La Réunion. Décoration d'intérieur personnalisé spécielement pour ${result.name}.`
    }

  }
}

async function getCategory({ params }: { params: { id: string, slug: string} }) {
  if (params.id == '6') {
    return
  } else {
    const response = await fetch(`${process.env.BASE_URL}api/category/findOne`, {
      method: 'POST',
      body: JSON.stringify({id: params.id}),
      cache: 'no-store'
    })
    const result = await response.json()
    return result
  }
}

async function getProjects({ params }: { params: { id: string, slug: string} }) {

  if (params.id == '6') {
    const res = await fetch(`${process.env.BASE_URL}api/project/findAll`, {
      method: 'POST',
      cache: 'no-store'
    })
    const test = await res.json()
    return test
  } else {
    const response = await fetch(`${process.env.BASE_URL}api/project`, {
      method: 'POST',
      body: JSON.stringify({id: params.id}),
      cache: 'no-store'
    })
    const result = await response.json()
    return result
  }

}

export default async function Category({ params }: { params: { id: string, slug: string} }) {

  const category = params.id == '6' ? 'Tout voir' : await getCategory({params})
  const projects = await getProjects({ params })
  return (
    <main className="mb-8">
      <Header welcome={false}/>
      <div className='md:px-10 lg:w-[80%] lg:mx-auto'>
      <h1 className='font-bold text-center text-3xl text-[#3D6367] mb-4 p-3'>{params.id == '6' ? 'Découvrez tous nos projets' : `Découvrez nos projets ${category.name}`}</h1>
        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid xl:grid-cols-3 gap-4 px-4 w-full'>
          {projects.map((project: ProjectType) => (
            <CardProject project={project} key={project.id}/>
          ))}
        </div>
      </div>
    </main>
  )
}
