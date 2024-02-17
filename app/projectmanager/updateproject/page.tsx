'use client'

import ModalMessage from '@/app/components/ModalMessage'
import SignOut from '@/app/components/SignOut'
import { setShowErrorModal, setShowMessageModal } from '@/redux/features/displaySlice'
import { editOneProject, getAllProjects, setProject, setProjectForm, setProjectFormCategoryId, setProjectFormDesc, setProjectFormImageName, setProjectFormImageSlug, setProjectFormImages, setProjectFormName, setProjectFormSlug } from '@/redux/features/projectSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { FormEvent, useEffect } from 'react'

const UpdateProject = () => {

  const dispatch = useAppDispatch()
  
  const { projects } = useAppSelector(state => state.project)
  const {projectForm} = useAppSelector(state => state.project)
  const {result} = useAppSelector(state => state.project)
  const { name, description, slug, coverImage, categoryId, images, dragIndex  } = projectForm
  const {showMessageModal} = useAppSelector(state => state.display.project)

  useEffect(() => {
    dispatch(getAllProjects())
  }, [dispatch])

  useEffect(() => {
    if (result.success === true) {
      dispatch(setShowMessageModal(true))
    } else if (result.success === false && result.message !== "") {
      dispatch(setShowErrorModal(true))
    }
  }, [result, dispatch])

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

  const handleChangeProject = (e: React.FormEvent<HTMLSelectElement>) => {
    if (Number(e.currentTarget.value) !== 0) {
      const projectToEdit = projects.find(project => project.id === Number(e.currentTarget.value))
      dispatch(setProjectForm(projectToEdit))
    } else {
      dispatch(setProjectFormSlug(''))
      dispatch(setProjectFormName(''))
      dispatch(setProjectFormCategoryId('0'))
      dispatch(setProjectFormDesc(''))
      dispatch(setProjectFormImages([]))
    }
  }

  const handleInputChangeImgName = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.currentTarget
    let newSlug = value.toLowerCase().replace(/ /g, '-')
    dispatch(setProjectFormImageName({index, value}))
    dispatch(setProjectFormImageSlug({index, value: newSlug}))
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (Number(categoryId) !== 0) {
      e.preventDefault()
      await dispatch(editOneProject(projectForm))
    }
  }

  return (
    <div className='p-4 bg-blue-200'>
      <SignOut/>
      <h1 className='text-[#3D6367] text-xl text-center font-semibold mb-4'>Modifier un projet existant</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <label className='flex flex-col md:flex-row gap-2 items-center justify-center mb-4'>
          <span>
          Projet à modifier : 
          </span>
          <select
            name="project_name"
            id="projectname"
            onChange={handleChangeProject}
            className='border border-[#3D6367] p-2'
          >
            
            <option value='0'>-- Sélectionner un projet --</option>
            {projects.map(project => (
              <option key={project.id} value={project.id}>{project.name} ({project.category.name})</option>
            ))}
          </select>
        </label>

        <div className='flex flex-col md:flex-row justify-around'>
          <div className='w-full md:w-[45%] lg:w-[40%] flex flex-col gap-4 '>
            <div className='flex flex-col gap-4 w-full'>
              <label className='flex flex-col'>
                <span>
                  Nom du projet:
                </span>
                <input
                  name="name"
                  type="text"
                  value={name}
                  placeholder='Nom du projet - Obligatoire'
                  onChange={handleInputChangeName}
                  required
                  className='border border-[#3D6367] p-2'
                />
              </label>
              <label className='flex flex-col'>
                <span>
                  Catégorie:
                </span>
                <select
                  name="category_id"
                  value={categoryId}
                  onChange={handleInputChangeCategoryId}
                  required
                  className='border border-[#3D6367] p-2'
                >
                  <option value="0">-- Choisissez une catégorie --</option>
                  <option value="1">Restaurant</option>
                  <option value="2">Hotel</option>
                  <option value="3">Locations saisonnières</option>
                  <option value="5">Moodboards</option>
                </select>
              </label>
            </div>
            <label className='flex flex-col'>
              <span>
                Description du projet:
              </span>
              <textarea
                name="description"
                value={description}
                placeholder="Description du projet"
                onChange={handleInputChangeDesc}
                rows={10}
                required
                className='border border-[#3D6367] p-2'
              />
            </label>
            <button
              type='submit'
              className='p-4 bg-orange-200 w-full border border-gray-100 mb-4 md:mb-0'
            >
              Enregistrer
            </button>
          </div>

          <div className='w-full md:w-[45%] lg:w-[40%]'>
          {images.map((image, index) => (
            <div className='mb-4 bg-gray-300 p-4 border border-gray-200' key={image.id}>

              <Image
                src={`${image.link ? image.link : `https://dimexoi-basalt.s3.eu-west-3.amazonaws.com/${image.coverImage}`}`}
                alt={`Photo ${image.name} de ${projectForm.name}`}
                sizes='100vw'
                width={0}
                height={0}
                className='w-full h-auto mb-1'
              />
              
              <label className='w-full flex flex-col'>
                <span>
                  Nom de l&apos;image :
                </span>
                
                <input
                  name="imagetitle"
                  type="text"
                  value={image.name}
                  placeholder="Titre de la photo"
                  onChange={(e) => handleInputChangeImgName(e, index)}
                  className='border border-[#3D6367] p-2 w-full'
                />
              </label>
            </div>

          ))}
        </div>
      </div>
              
      </form>
      { showMessageModal && 
        <ModalMessage crudAction='update'/>
      }
    </div>
  )

}

export default UpdateProject