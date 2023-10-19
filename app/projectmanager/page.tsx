'use client'

import { useDispatch, useSelector } from 'react-redux'
import { type PutBlobResult } from '@vercel/blob'
import { upload } from '@vercel/blob/client'
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
  setProjectImageLink,
  uploadImageToServer
} from '@/redux/features/projectSlice'
// import { setShowMessageModal } from '@/redux/actions/conf'

import styles from './ManageProject.module.scss'
import Image from 'next/image'

import arrowSvg from '@/public/icons/arrow.svg'

// import ModalMessage from '../ModalMessage'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setShowMessageModal } from '@/redux/features/displaySlice'
import ModalMessage from '../components/ModalMessage'

const ProjectManager = () => {

  const dispatch = useAppDispatch()

  const {projectForm} = useAppSelector(state => state.project)
  const {showMessageModal} = useAppSelector(state => state.display.project)

  const { name, description, slug, coverImage, categoryId, images, dragIndex  } = projectForm
  //  const showMessageModal = useSelector(state => state.conf.showMessageModal)

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

  const handleInputChangeImgName = (e: React.FormEvent<HTMLInputElement>, index: number) => {
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

  const handleClickArrow = (e: React.MouseEvent<HTMLDivElement>, index: string, sens: string) => {
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

  // const uploadToServer = async (image: File, slug: string, name: string) => {  
  //   const body = new FormData()
  //   body.set("file", image)
  //   body.set("slug", slug)
  //   body.set("name", name)

  //   const response = await fetch("/api/projectmanager/tobucket", {
  //     method: "POST",
  //     body
  //   })

  //   return response.json()
  // }

  // const updateImageLink = async (indexNumber: number, fileName: string) => {
  //   await dispatch(setProjectImageLink({index: indexNumber, link : `https://dimexoi-basalt.s3.eu-west-3.amazonaws.com/${fileName}`}))
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    images.forEach(async (image, index) => {
      await dispatch(uploadImageToServer({image, index}))
      // const newBlob: {url: string}|void = await upload(image.coverImage, image.file, {
      //   access: 'public',
      //   handleUploadUrl: '/api/image/upload',
      // }).then(async ()=> {

      //   await dispatch(setProjectImageLink({index, link: newBlob!.url}))
      // });


    })
    
    // await images.forEach(async (image, index) => {
    //   const bucketimage = await uploadToServer(image.file!, slug, image.coverImage)
    //   await updateImageLink(index, bucketimage.fileName)
    // })
    // await dispatch(addOneProject(projectForm))
    // dispatch(setShowMessageModal(true))
  }

  return (
    <form className={styles.manageproject} onSubmit={handleSubmit}>

      <div className={styles.manageproject__firstrow}>
        <div className={styles.manageproject__firstrow__container}>

          <div className={styles.manageproject__firstrow__inputs}>
            <h2 className={styles.manageproject__h2}>
              Informations du projet
            </h2>
            <label className={styles.manageproject__firstrow__inputs__label}>
              Catégorie:
              <select name="category_id" value={categoryId} onChange={handleInputChangeCategoryId} required>
                <option value="">-- Choisissez une catégorie --</option>
                <option value="1">Restaurant</option>
                <option value="2">Hotel</option>
                <option value="3">Locations saisonnières</option>
                <option value="5">Moodboards</option>
              </select>
            </label>
            <label className={styles.manageproject__firstrow__inputs__label}>
              Nom du projet:
              <input name="name" type="text" value={name} placeholder='Nom du projet - Obligatoire' onChange={handleInputChangeName} required/>
            </label>

            <label className={styles.manageproject__firstrow__inputs__label}>
              Description du projet:
              <textarea name="description" value={description} placeholder="Description du projet" onChange={handleInputChangeDesc} rows={10} required/>
            </label>

            <label className={styles.manageproject__firstrow__inputs__label}>
              Photos:
              <input name="images" type="file" multiple onChange={handlePhotoUpload} required/>
            </label>

            <button type="submit" className={styles.manageproject__firstrow__inputs__button}>Enregistrer</button>
          </div>

          <div className={styles.manageproject__firstrow__side}>
            <h2 className={styles.manageproject__h2}>Image de couverture</h2>
            <div className={styles.manageproject__firstrow__side__covercontainer}>
              {images[0] &&
                <Image
                height="0"
                width="0"
                sizes="100vw"
                style={{ height: "100%", width: 'auto'}}
                src={URL.createObjectURL(images[0].file!)}
                alt={`Photo ${images[0].file!.name}`}
                />
              }
            </div>
          </div>
          
        </div>
      </div>

      <div className={styles.manageproject__secondrow}>
        {images.map((image, index) => (
          <div className={styles.manageproject__secondrow__thumbnailcontainer} key={index}>
            <Image
              className={`
                ${styles.manageproject__secondrow__thumbnailcontainer__arrow}
              `}
              alt='arrow icon'
              src={arrowSvg}
              width={50}
              height={50}
              onClick={(e) => handleClickArrow(e, String(index), 'pos')}
            />
            
            <div className={styles.manageproject__secondrow__thumbnailcontainer__imgcontainer}>

              <div
                className={`${styles.manageproject__secondrow__thumbnailcontainer__thumbnail} ${dragIndex === index ? styles.manageproject__secondrow__thumbnailcontainer__dragging : ''} `}
                key={image.id}
                draggable
                onDragStart={(e) => handlePhotoDragStart(e, String(index))}
                onDrop={(e) => handlePhotoDrop(e, String(index))}
                onDragOver={handlePhotoDragOver}
                onTouchStart={(e) => handleTouchStart(e, String(index))}
                onTouchMove={(e) =>handleTouchMove(e, String(index))}
                onTouchEnd={(e) => handleTouchEnd(e, String(index))}
              >
                <Image
                  className={styles.manageproject__secondrow__thumbnailcontainer__thumbnail__img}
                  height="0"
                  width="0"
                  sizes="100vw"
                  
                  src={URL.createObjectURL(image.file!)}
                  alt={`Photo ${index}`}
                />
              </div>
              <p onClick={(e) => handleClickDelete(e, String(index))} className='text-center text-red-500 border border-red-500 p-1'>Supprimer photo</p>

              <div className='w-full'>
                <input name="imagetitle" type="text" value={image.name} placeholder="Titre de la photo - obligatoire" onChange={(e) => handleInputChangeImgName(e, index)} className='w-full p-2 text-black' required/>
              </div>

              <div className='w-full'>
                <textarea name="imagedesc" value={image.description} placeholder="Description de la photo - facultatif" onChange={(e) => handleInputChangeImgDesc(e, index)} rows={10} className='w-full p-2 text-black'/>
              </div>
          
            </div>
            <Image
              className={`
                ${styles.manageproject__secondrow__thumbnailcontainer__arrow}
                ${styles.manageproject__secondrow__thumbnailcontainer__lastarrow}
              `}
              alt= 'arrow icon'
              src={arrowSvg}
              width={50}
              height={50}
              onClick={(e) => handleClickArrow(e, String(index), 'neg')}
            />
          </div>
        ))}
      </div>
      { showMessageModal && 
        <ModalMessage/>
      }
    </form>
  )

}

export default ProjectManager