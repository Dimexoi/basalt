'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { useEffect } from 'react'
import { getOneProject, getProjects, setProject } from '@/redux/features/projectSlice'
import CardProject from '@/app/components/CardProject'
import Header from '@/app/components/Header'
import QuestionnaireForm from '../components/questionnaireForm'

export default function Questionnaire() {
  const dispatch = useAppDispatch()

  return (
    <main className="h-full mb-8">
      <Header welcome={false}/>
      <div className='flex flex-col gap-10 md:px-10 lg:w-[70%] lg:mx-auto lg:px-0'>
        <h1 className='font-bold text-center text-3xl text-[#3D6367]'>Questionnaire préalable</h1>

        <h2 className='text-center italic text-xl'>Vous souhaitez nous faire part de votre projet ? Remplissez le formulaire qui suit.</h2>
        
        <QuestionnaireForm/>

      </div>
    </main>
  )
}
