'use client'

import { setProjectFormName,
  setProjectFormDesc,
  setProjectFormSlug,
  setProjectFormCategoryId,
  setProjectFormImages,
  setProjectFormDragIndex,
  setProjectFormImageDesc,
  setProjectFormImageSlug,
  addOneProject,
  setProjectFormImageName,
  uploadImageToVercelBlob,
  toggleSendProject,
} from '@/redux/features/projectSlice'

import Image from 'next/image'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setShowMessageModal, setStatusMessage, toggleStatusMessage } from '@/redux/features/displaySlice'
import ModalMessage from '../components/ModalMessage'
import { useEffect } from 'react'

const ProjectManager = () => {

  const dispatch = useAppDispatch()

  const {projectForm, sendProject} = useAppSelector(state => state.project)
  const {showMessageModal} = useAppSelector(state => state.display.project)

  const { name, description, slug, coverImage, categoryId, images, dragIndex  } = projectForm

  useEffect(() => {
    const fetchAddProject = async () => {
      dispatch(setStatusMessage('Enregistrement du projet'))
      await dispatch(addOneProject(projectForm))
      dispatch(toggleSendProject())
      dispatch(setStatusMessage(null))
    }

    if (sendProject) {
      fetchAddProject()
    }

  }, [dispatch, sendProject, projectForm])

  const handleInputChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    if (name === "name") {
      let newSlug = value.toLowerCase().replace(/ /g, '-')
      dispatch(setProjectFormSlug(newSlug))
    }
    dispatch(setProjectFormName(value))
  }

  const handleInputChangeCategoryId = (e: React.FormEvent<HTMLSelectElement> ) => {
    const { name, value } = e.currentTarget

    dispatch(setProjectFormCategoryId(value))
  }

  const handleInputChangeDesc = (e: React.FormEvent<HTMLTextAreaElement>,) => {
    const { name, value } = e.currentTarget

    dispatch(setProjectFormDesc(value))
  }

  const handleInputChangeImgDesc = (e: React.FormEvent<HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.currentTarget
    dispatch(setProjectFormImageDesc({index, value}))
  }

  const handleInputChangeImgName = (e: React.FormEvent<HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.currentTarget
    let newSlug = value.toLowerCase().replace(/ /g, '-')
    dispatch(setProjectFormImageName({index, value}))
    dispatch(setProjectFormImageSlug({index, value: newSlug}))
  }

  const buildImageName = (index : number, extension: string) => {
    if(String(index).length == 1) return  categoryId + "_" + projectForm.slug + "_00" + (index + 1) + '.' + extension
    if(String(index).length == 2) return categoryId + "_" + projectForm.slug + "_0" + (index + 1) + '.' + extension
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhotos = [...images]
    const files = e.target.files
    if (files) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          newPhotos.push({
            file: file,
            id: Number(Math.random().toString(36).substring(7)),
            name: '',
            description: '',
            slug: '',
            projectId: 0,
            coverImage: buildImageName(i, file.name.split('.')[file.name.split('.').length - 1])!,
            createdAt: '',
            updatedAt: '',
            originY: 0,
            currentY: 0,
            extension: file.name.split('.')[file.name.split('.').length - 1],
            link: ''
          })
        }
        dispatch(setProjectFormImages(newPhotos))
    }
  }

  const handlePhotoDragStart = (e: React.DragEvent<HTMLDivElement>, index: string) => {
    e.dataTransfer.setData('text/plain', index)
    e.currentTarget.setAttribute('data-index', index)
  }

  const handlePhotoDrop = (e: React.DragEvent<HTMLDivElement>, index: string) => {
    e.preventDefault()
    const dragIndex = e.dataTransfer ? e.dataTransfer.getData('text/plain') : e.currentTarget.getAttribute('data-index')
    const newPhotos = [...images]
    const dragPhoto = newPhotos[Number(dragIndex)]
    newPhotos.splice(Number(dragIndex), 1)
    newPhotos.splice(Number(index), 0, dragPhoto)
    const copyNewPhotos = newPhotos.map((image, index) => ({
      ...image
    }))
    copyNewPhotos.forEach((image, index) => image.coverImage = buildImageName(index, image.extension)!)
    dispatch(setProjectFormImages(copyNewPhotos))
  }

  const handlePhotoDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }


  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>, index: string) => {

    const touch = e.touches[0]
    dispatch(setProjectFormDragIndex(index))
    e.currentTarget.classList.add('dragging')
    const test = (prevPhotos: typeof images) => {
      const newPhotos = prevPhotos.map((photo) => ({ ...photo, isDragging: false }))
      newPhotos[Number(index)].isDragging = true
      newPhotos[Number(index)].originY = touch.clientY
      newPhotos[Number(index)].currentY = touch.clientY
      
      return newPhotos
    }
    
    const newPhotos = test(images)
    newPhotos.forEach((image, index) => image.coverImage = buildImageName(index, image.extension)!)

    dispatch(setProjectFormImages(newPhotos))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>, index: string) => {
    e.preventDefault()
    document.body.style.overflow = 'hidden'
    const touch = e.touches[0]

    const test = (prevPhotos:  typeof images) => {
      const newPhotos = prevPhotos.map((photo) => ({ ...photo }))
      newPhotos[Number(index)].currentY = touch.clientY
      return newPhotos
    }
    const newPhotos = test(images)
    newPhotos.forEach((image, index) => image.coverImage = buildImageName(index, image.extension)!)

    dispatch(setProjectFormImages(newPhotos))
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>, index: string) => {
    const test = (prevPhotos: typeof images) => {
      const newPhotos = prevPhotos.map((photo) => ({ ...photo, isDragging: false }))
      const dragPhoto = newPhotos[Number(index)]
      const dragY = dragPhoto.currentY! - dragPhoto.originY!
      if (dragY < 0) {
        newPhotos.splice(Number(index), 1)
        newPhotos.splice(Number(index) - 1, 0, dragPhoto)
      } else if (dragY > 0) {
        newPhotos.splice(Number(index), 1)
        newPhotos.splice(Number(index) + 1, 0, dragPhoto)
      }
      return newPhotos
    }

    const newPhotos = test(images)
    newPhotos.forEach((image, index) => image.coverImage = buildImageName(index, image.extension)!)

    dispatch(setProjectFormImages(newPhotos))
    dispatch(setProjectFormDragIndex(null))
    document.body.style.overflow = 'auto'
    e.currentTarget.classList.remove('dragging') 
  }

  const handleClickArrow = (e: React.MouseEvent<HTMLSpanElement>, index: string, sens: string) => {
    e.preventDefault()
    const newPhotos = [...images]
    const dragPhoto = newPhotos[Number(index)]
    let newIndex
    if (sens === "pos") {
      if (Number(index) + 1 < images.length) newIndex = index + 1
      else return
    } else {
      if (Number(index) === 0)return
      else newIndex = Number(index) - 1
      
    }
    newPhotos.splice(Number(index), 1)
    newPhotos.splice(Number(newIndex), 0, dragPhoto)
    const copyNewPhotos = newPhotos.map((image, index) => ({
      ...image
    }))
    copyNewPhotos.forEach((image, index) => image.coverImage = buildImageName(index, image.extension)!)
    dispatch(setProjectFormImages(copyNewPhotos))
  }

  const handleClickDelete = (e: React.MouseEvent<HTMLDivElement>, index: string) => {
    const newPhotos = [...images]
    newPhotos.splice(Number(index), 1)
    dispatch(setProjectFormImages(newPhotos))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let index = 0

    dispatch(setShowMessageModal(true))

    for (const image of images) {
      dispatch(setStatusMessage(`Envoie photo ${index + 1} / ${images.length}`))

      await dispatch(uploadImageToVercelBlob({image, index}))
      index++

    }
    
    dispatch(toggleSendProject())
  }

  return (
    <form className= "flex flex-col lg:flex-row p-2 md:p-4 lg:p-8 lg:h-screen " onSubmit={handleSubmit}>

      <div className="flex-1 p-2">
  
        <h2 className=" mb-2 text-xl text-center">
          Informations du projet
        </h2>
        <label className="mb-2 hover:cursor-pointer">
          Catégorie:
          <select name="category_id" value={categoryId} className='bg-[#94ccb8] border-none border-b w-full p-2 hover:cursor-pointer' onChange={handleInputChangeCategoryId} required>
            <option value="">-- Choisissez une catégorie --</option>
            <option value="1">Restaurant</option>
            <option value="2">Hotel</option>
            <option value="3">Locations saisonnières</option>
            <option value="5">Moodboards</option>
          </select>
        </label>
        <label className="mb-2">
          Nom du projet:
          <input name="name" type="text" value={name} placeholder='Nom du projet - Obligatoire' className='bg-[#94ccb8] border-none border-b w-full p-2' onChange={handleInputChangeName} required/>
        </label>

        <label className="mb-2">
          Description du projet:
          <textarea name="description" value={description} className='bg-[#94ccb8] border-none border-b w-full p-2' placeholder="Description du projet" onChange={handleInputChangeDesc} rows={10} required/>
        </label>

        <label className="flex gap-2 items-center mb-2 bg-[#94ccb8] border-none border-b w-full p-2">
          Photos:
          <input name="images" type="file" className='' multiple onChange={handlePhotoUpload} required/>
        </label>

        <button type="submit" className=" bg-[#94ccb8] p-2 duration-300 hover:bg-[#5b9782]">Enregistrer</button>

      </div>

      <div className=" flex-1 flex flex-col gap-8 overflow-y-scroll">
        {images.map((image, index) => (
          <div className={ ` w-full  p-2 ${index === 0 ? 'bg-blue-400' : 'bg-blue-200' }`} key={index}>
            {index === 0 ? <p className='text-lg text-center border mb-2 bg-violet-600 text-white p-2'>Image de couverture</p> : null}
            <div className="flex flex-col md:flex-row w-full mb-2 ">
              <div className='w-full md:w-3/6 mb-2'>
                <div
                  className=' relative w-full aspect-square mb-2'
                  key={image.id}
                >
                  <Image         
                    src={URL.createObjectURL(image.file!)}
                    alt={`Photo ${index}`}
                    fill
                    style={{'objectFit':'cover'}}
                  />
                </div>
                <p
                  onClick={(e) => handleClickDelete(e, String(index))}
                  className='text-center text-red-500 border border-red-500 bg-red-300 p-1 hover:font-semibold hover:cursor-pointer duration-300'
                >
                  Supprimer photo
                </p>
              </div>

              <div className='w-full md:w-3/6 p-2'>

                <div className='w-full mb-2'>
                  <textarea name="imagetitle" value={image.name} placeholder="Texte de la photo - obligatoire" onChange={(e) => handleInputChangeImgName(e, index)} className='w-full p-2 text-black border bg-gray-200' required/>
                </div>

                <div className='flex gap-2 md:gap-3 lg:gap-4'>
                  <div onClick={(e) => handleClickArrow(e, String(index), 'pos')} className='flex-1 flex flex-col border border-dashed border-black items-center hover:cursor-pointer hover:bg-black/50 duration-400'>
                    <span className='text-lg'>⬇️</span>
                    <span className='text-center'>Déplacer image vers le bas</span>
                  </div>
                  <div onClick={(e) => handleClickArrow(e, String(index), 'neg')} className='flex-1 flex flex-col border border-dashed border-black items-center hover:cursor-pointer hover:bg-black/50 duration-400'>
                    <span className='text-lg'>⬆️</span>
                    <span className='text-center'>Déplacer image vers le haut</span>
                  </div>

     

                </div>

              </div>

          
            </div>
            
          </div>
        ))}
      </div>
      { showMessageModal && 
        <ModalMessage crudAction='create'/>
      }
    </form>
  )

}

export default ProjectManager