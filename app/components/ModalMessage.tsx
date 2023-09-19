import Link from 'next/link'
import Image from 'next/image'

import { setShowMessageModal } from "@/redux/features/displaySlice"
import { useAppSelector, useAppDispatch } from '@/redux/hooks'

const ModalMessage = () => {

  const dispatch = useAppDispatch()

  const { projectForm } = useAppSelector(state => state.project)
  const { projects } = useAppSelector(state => state.project)
  const lastProject = projects[projects.length -  1]

  const { images } = projectForm

  const handleClickClose = () => {
    dispatch(setShowMessageModal(false));
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className='bg-white/90 p-5 flex flex-col items-center gap-2'>
        <div onClick={handleClickClose} className=' bg-gray-200 px-3 py-2 hover:cursor-pointer hover:bg-gray-300 duration-300'>
          <span> X </span>
          <span>Fermer</span>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <span>
            Projet ajouté avec succès
          </span>
        </div>
        <Link
          href={`/project/${lastProject.id}/${lastProject.slug}`}
          className='flex flex-col items-center gap-2 hover:cursor-pointer text-blue-500 hover:text-blue-700 hover:bg-black/20 duration-500'
          rel="noopener noreferrer" target="_blank"
        >
          <span className='font-semibold'>
            {lastProject.name}
          </span>
          <div className='h-[200px] w-[200px]'>
            <Image
              height="0"
              width="0"
              sizes="100vw"
              style={{ height: "100%", width: 'auto'}}
              src={URL.createObjectURL(images[0].file!)}
              alt={`Photo ${images[0].file!.name}`}
            />
          </div>
          <span>
            Cliquer ici pour voir le nouveau projet
          </span>
        </Link>
      </div>
     
    </div>
  )
}

export default ModalMessage