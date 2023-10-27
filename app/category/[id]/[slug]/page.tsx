
import { Metadata } from "next"
import { useEffect } from 'react'

import CardProject from '@/app/components/CardProject'
import Header from '@/app/components/Header'
import categories from '@/public/data/categories.json'
import CategoryPage from "@/app/components/CategoryPage"

import { ProjectType } from "@/redux/features/projectSlice"

async function getCategory({ params }: { params: { id: number, slug: string} }) {
  if (params.id == 6) {
    return
  } else {
    const res = await fetch(`${process.env.BASE_URL}api/category/findOne`, {
      method: 'POST',
      body: JSON.stringify(String(params.id))
    })
    return res.json()
  }
  // console.log('-------------**-----------**-------');
  // console.log(res);
  // console.log('-------------**-----------**-------');

  // if (res.ok) {
  //   throw new Error('Failed to fetch data')
  // }
}

async function getProjects({ params }: { params: { id: number, slug: string} }) {

  if (params.id == 6) {
    const res = await fetch(`${process.env.BASE_URL}api/project/findAll`, {
      method: 'POST',
      cache: 'no-store'
    })
    const test = res.json()
    return test
  } else {
    const res = await fetch(`${process.env.BASE_URL}api/project`, {
      method: 'POST',
      body: JSON.stringify(params.id),
      cache: 'no-store'
    })
    return res.json()
  }
  
  // console.log('-------------**-----------**-------');
  // console.log(res);
  // console.log('-------------**-----------**-------');

  // if (res.ok) {
  //   throw new Error('Failed to fetch data')
  // }

}

export default async function Category({ params }: { params: { id: number, slug: string} }) {

  const category = params.id == 6 ? 'Tout voir' : await getCategory({params})
  const projects = await getProjects({ params })
  return (
    <main className="mb-8">
      <Header welcome={false}/>
      <div className='md:px-10 lg:w-[80%] lg:mx-auto'>
      <h1 className='font-bold text-center text-3xl text-[#3D6367] mb-4 p-3'>{params.id == 6 ? 'Découvrez tous nos projets' : `Découvrez nos projets ${category.name}`}</h1>
        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid xl:grid-cols-3 gap-4 px-4 w-full'>
          {projects.map((project: ProjectType) => (
            <CardProject project={project} key={project.id}/>
          ))}
        </div>
      </div>
    </main>
  )
}
