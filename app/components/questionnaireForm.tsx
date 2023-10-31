'use client'

import { setAime, setAmbianceSouhaiter, setAnneeConstruction, setAutreAmbiance, setAutreElement, setAutreModification, setBudget, setContraintes, setDescriptionPieces, setElementAModifier, setEmail, setHabitudesVie, setImageExemple, setIsSubmitting, setNbPiece, setNom, setOrientation, setPasAime, setPhotos, setPlans, setPrenom, setPrestation, setSociete, setSurfaceTotale, setTelephone, setTypeModification, setTypeProjet, submitEmail } from "@/redux/features/questionnaireSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function QuestionnaireForm() {

  const dispatch = useAppDispatch()

  const questionnaire = useAppSelector(state => state.questionnaire)

  const {
    nom,
    prenom,
    email,
    telephone,
    typeProjet,
    societe,
    anneeConstruction,
    surfaceTotale,
    nbPiece,
    orientation,
    descriptionPieces,
    typeModification,
    autreModification,
    elementAModifier,
    autreElement,
    ambianceSouhaiter,
    autreAmbiance,
    contraintes,
    aime,
    pasAime,
    budget,
    habitudesVie,
    prestation,
    plans,
    photos,
    imageExemples,
    isSubmitting
  } = questionnaire

  const handleChangeNom = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNom(e.target.value))
  }

  const handleChangePrenom = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPrenom(e.target.value))
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value))
  }

  const handleChangeTelephone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTelephone(e.target.value))
  }

  const handleChangeTypeProjet = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTypeProjet(e.target.value))
  }

  const handleChangeSociete = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSociete(e.target.value))
  }

  const handleChangeAnneeConstruction = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAnneeConstruction(e.target.value))
  }

  const handleChangeSurfaceTotale = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSurfaceTotale(e.target.value))
  }

  const handleChangeNbPiece = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNbPiece(e.target.value))
  }

  const handleChangeOrientation = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOrientation(e.target.value))
  }

  const handleChangeDescriptionPieces = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setDescriptionPieces(e.target.value))
  }

  const handleCheckTypeModification = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTypeModification(e.target.id))
  }

  const handleChangeAutreModification = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAutreModification(e.target.value))
  }

  const handleCheckElementAModifier = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setElementAModifier(e.target.id))
  }

  const handleChangeAutreElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAutreElement(e.target.value))
  }

  const handleCheckAmbianceSouhaiter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAmbianceSouhaiter(e.target.id))
  }

  const handleChangeAutreAmbiance = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAutreAmbiance(e.target.value))
  }

  const handleChangeContraintes = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setContraintes(e.target.value))
  }

  const handleChangeAime = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setAime(e.target.value))
  }

  const handleChangePasAime = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setPasAime(e.target.value))
  }

  const handleChangeBudget= (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBudget(e.target.value))
  }

  const handleChangeHabitudesVie = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setHabitudesVie(e.target.value))
  }

  const handleChangePrestation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPrestation(e.target.value))
  }

  const handleChangePlans = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      const allFiles = Array.from(e.target.files)
      dispatch(setPlans(allFiles))
    }
  }

  const handleChangePhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      const allFiles = Array.from(e.target.files)
      dispatch(setPhotos(allFiles))
    }
  }

  const handleChangeImageExemple = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      const allFiles = Array.from(e.target.files)
      dispatch(setImageExemple(allFiles))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setIsSubmitting(true))
    dispatch(submitEmail(questionnaire))

  }
  return (
    <form action="submit" onSubmit={handleSubmit} className='flex flex-col gap-8'>

    <h3 className='text-xl font-semibold'>Vos informations et caractéristiques du projet</h3>

    <fieldset className='border border-solid border-[#3D6367] px-3 py-6'>
      <legend className='px-2 font-medium text-lg'>Vos informations</legend>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="lastName">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            minLength={2}
            maxLength={26}
            value={nom}
            onChange={handleChangeNom}
            placeholder="Votre nom"
            className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            required
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="firstName">
            Prénom
          </label>
          
          <input
            type="text"
            id="firstName"
            name="firstName"
            minLength={2}
            maxLength={26}
            value={prenom}
            onChange={handleChangePrenom}
            placeholder="Votre prénom"
            className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            required
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+\-\@]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{1,}$"
            value={email}
            onChange={handleChangeEmail}
            className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            placeholder="abc@xyz.com"
            required
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="telephone">
            Téléphone
          </label>
          <input
            type="text"
            minLength={10}
            id="telephone"
            name="telephone"
            value={telephone}
            onChange={handleChangeTelephone}
            className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            placeholder="0692123456"
            required
          />
        </div>
      </div>
    </fieldset>

    <fieldset className='border border-solid border-[#3D6367] px-3 py-6'>

      <legend className='px-2 font-medium text-lg'>Votre projet</legend>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="projectType">
            Type de projet
          </label>
          <select
            id="projectType"
            name="projectType"
            value={typeProjet}
            onChange={handleChangeTypeProjet}
            className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            required
          >
            <option value="Restaurant">Restaurant</option>
            <option value="Hotel">Hotel</option>
            <option value="Location saisonnière">Location saisonnière</option>
            <option value="Réalisation de moodboards">Réalisation de moodboards</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="society">
            Société
          </label>
          <input
            type="text"
            id="society"
            name="society"
            value={societe}
            onChange={handleChangeSociete}
            className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            placeholder="Nom de votre société"
            required
          />
        </div>

        <div className='flex gap-4'>
          <div className='flex flex-1 flex-col gap-1'>
            <label htmlFor="yearOfConstruction">
              Année de construction
            </label>
            
            <input
              type="number"
              id="yearOfConstruction"
              name="yearOfConstruction"
              value={anneeConstruction}
              onChange={handleChangeAnneeConstruction}
              placeholder="Année de construction"
              className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            />
          </div>
          <div className='flex flex-1 flex-col gap-1'>
            <label htmlFor="totaleSurface">
              Surface totale en m²
            </label>
            
            <input
              type="number"
              id="totaleSurface"
              name="totaleSurface"
              value={surfaceTotale}
              onChange={handleChangeSurfaceTotale}
              placeholder="Surface totale du lieu"
              className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            />
          </div>
        </div>

        <div className='flex gap-4'>
          <div className='flex flex-1 flex-col gap-1'>
            <label htmlFor="numberOfRoom">
              Nombre de pièces
            </label>
            
            <input
              type="number"
              id="numberOfRoom"
              name="numberOfRoom"
              value={nbPiece}
              onChange={handleChangeNbPiece}
              placeholder="Nombre de pièces"
              className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            />
          </div>
          <div className='flex flex-1 flex-col gap-1'>
            <label htmlFor="orientation">
              Orientation du lieu
            </label>
            
            <input
              type="text"
              id="orientation"
              name="orientation"
              value={orientation}
              onChange={handleChangeOrientation}
              placeholder="Orientation du lieu"
              className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            />
          </div>
        </div>

      </div>
    </fieldset>

    <fieldset className='border border-solid border-[#3D6367] px-3 py-6'>
      <legend className='px-2 font-medium text-lg'> Pièces à aménager et/ou décorer</legend>
      
      <div className='grid grid-cols-1 gap-8'>
        
        <div className='flex flex-1 flex-col gap-1'>
          <label htmlFor="roomDescription">
            Indiquez le type de chacune des pièces ainsi que la surface de celles-ci
          </label>
          
          <textarea
            id="roomDescription"
            name="roomDescription"
            rows={5}
            value={descriptionPieces}
            onChange={handleChangeDescriptionPieces}
            placeholder="Détails des pièces à travailler"
            className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
          />
        </div>
        

      </div>
    </fieldset>

    <h3 className='text-xl font-semibold'>Vos modifications</h3>
    
    <div className='grid grid-cols-1 gap-8'>
        
      <fieldset className='border border-solid border-[#3D6367] px-3 py-6'>
        <legend className='px-2 font-medium text-lg'>Quelles modification souhaitez-vous ?</legend>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>

            <div className='flex gap-2'>
              <input
                type="checkbox"
                id="mood"
                name="modificationType"
                checked={typeModification.mood.isChecked}
                onChange={handleCheckTypeModification}
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
              <label htmlFor="mood">
                Le style / L&apos;ambiance
              </label>
            </div>
            <div className='flex gap-2'>
              <input
                type="checkbox"
                id="color"
                name="modificationType"
                checked={typeModification.color.isChecked}
                onChange={handleCheckTypeModification}
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
              <label htmlFor="color">
                Les matériaux / Les couleurs
              </label>
            </div>
            <div className='flex gap-2'>
              <input
                type="checkbox"
                id="layout"
                name="modificationType"
                checked={typeModification.layout.isChecked}
                onChange={handleCheckTypeModification}
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
              <label htmlFor="layout">
                L&apos;aménagement / La fonctionnalité des espaces
              </label>
            </div>
            <div className='flex gap-2'>
              <input
                type="checkbox"
                id="storage"
                name="modificationType"
                checked={typeModification.storage.isChecked}
                onChange={handleCheckTypeModification}
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
              <label htmlFor="storage">
                Les rangements
              </label>
            </div>
            <div className='flex gap-2'>
              <input
                type="checkbox"
                id="brightness"
                name="modificationType"
                checked={typeModification.brightness.isChecked}
                onChange={handleCheckTypeModification}
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />      
              <label htmlFor="brightness">
                La luminosité
              </label>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="otherModification">
              Autre (précisez ci-dessous) :
            </label>
        
            <input
              type="text"
              id="otherModification"
              name="otherModification"
              value={autreModification}
              onChange={handleChangeAutreModification}
              placeholder="précisions"
              className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            />
          </div>
        </div>
      </fieldset>
        
      <fieldset className='border border-solid border-[#3D6367] px-3 py-6'>
        <legend className='px-2 font-medium text-lg'>Quelles éléments souhaitez-vous modifier ?</legend>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>

            <div className='flex gap-2'>
              <input
                type="checkbox"
                id="floor"
                name="modificationElement"
                checked={elementAModifier.floor.isChecked}
                onChange={handleCheckElementAModifier}
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
              <label htmlFor="floor">
                Les sols
              </label>
            </div>
            <div className='flex gap-2'>
              <input
                type="checkbox"
                id="wall"
                name="modificationElement"
                checked={elementAModifier.wall.isChecked}
                onChange={handleCheckElementAModifier}
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
              <label htmlFor="wall">
                Les murs
              </label>
            </div>
            <div className='flex gap-2'>
              <input
                type="checkbox"
                id="furnitures"
                name="modificationElement"
                checked={elementAModifier.furnitures.isChecked}
                onChange={handleCheckElementAModifier}
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
              <label htmlFor="furnitures">
                Le mobilier
              </label>
            </div>
            <div className='flex gap-2'>
              <input
                type="checkbox"
                id="lighting"
                name="modificationElement"
                checked={elementAModifier.lighting.isChecked}
                onChange={handleCheckElementAModifier}
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
              <label htmlFor="lighting">
                L&apos;éclairage
              </label>
            </div>
            <div className='flex gap-2'>
              <input
                type="checkbox"
                id="arrangement"
                name="modificationElement"
                checked={elementAModifier.arrangement.isChecked}
                onChange={handleCheckElementAModifier}
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />      
              <label htmlFor="arrangement">
                L&apos;agencement
              </label>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="otherElement">
              Autre (précisez ci-dessous) :
            </label>
        
            <input
              type="text"
              id="otherElement"
              name="otherElement"
              value={autreElement}
              onChange={handleChangeAutreElement}
              placeholder="précisions"
              className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            />
          </div>
        </div>
      </fieldset>
        
      <fieldset className='border border-solid border-[#3D6367] px-3 py-6'>
        <legend className='px-2 font-medium text-lg'>Quelle(s) ambiance(s) souhaitez-vous retrouver ?</legend>

          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>

              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="contemporaine"
                  name="desiredMood"
                  checked={ambianceSouhaiter.contemporaine.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />
                <label htmlFor="contemporaine">
                  Contemporaine
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="scandinave"
                  name="desiredMood"
                  checked={ambianceSouhaiter.scandinave.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />
                <label htmlFor="scandinave">
                  Scandinave
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="vintage"
                  name="desiredMood"
                  checked={ambianceSouhaiter.vintage.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />
                <label htmlFor="vintage">
                  Vintage
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="industrielle"
                  name="desiredMood"
                  checked={ambianceSouhaiter.industrielle.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />
                <label htmlFor="industrielle">
                  Industrielle/Loft
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="boheme"
                  name="desiredMood"
                  checked={ambianceSouhaiter.boheme.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />      
                <label htmlFor="boheme">
                  Bohême
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="campagne"
                  name="desiredMood"
                  checked={ambianceSouhaiter.campagne.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />
                <label htmlFor="campagne">
                  Campagne
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="espbdm"
                  name="desiredMood"
                  checked={ambianceSouhaiter.espbdm.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />
                <label htmlFor="espbdm">
                  Esprit bord de mer
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="zen"
                  name="desiredMood"
                  checked={ambianceSouhaiter.zen.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />
                <label htmlFor="zen">
                  Zen/Nature
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="ethique"
                  name="desiredMood"
                  checked={ambianceSouhaiter.ethique.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />
                <label htmlFor="ethique">
                  Éthique
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="moderne"
                  name="desiredMood"
                  checked={ambianceSouhaiter.moderne.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />      
                <label htmlFor="moderne">
                  Moderne
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="baroque"
                  name="desiredMood"
                  checked={ambianceSouhaiter.baroque.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />      
                <label htmlFor="baroque">
                  Baroque
                </label>
              </div>
              <div className='flex gap-2'>
                <input
                  type="checkbox"
                  id="orientale"
                  name="desiredMood"
                  checked={ambianceSouhaiter.orientale.isChecked}
                  onChange={handleCheckAmbianceSouhaiter}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                />      
                <label htmlFor="orientale">
                  Orientale
                </label>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="otherMood">
                Autre (précisez ci-dessous) :
              </label>
          
              <input
                type="text"
                id="otherMood"
                name="otherMood"
                value={autreAmbiance}
                onChange={handleChangeAutreAmbiance}
                placeholder="précisions"
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
            </div>

            <div className='flex flex-1 flex-col gap-1'>
              <label htmlFor="roomContrainte">
                Votre espace présente-t-il des contraintes ? (ouverture, poteaux, faux plafond, etc...)
              </label>
              <textarea
                id="roomContrainte"
                name="roomContrainte"
                rows={6}
                value={contraintes}
                onChange={handleChangeContraintes}
                placeholder="Liste des contraintes si il y en a"
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
            </div>

            <div className='flex flex-1 flex-col gap-1'>
              <label htmlFor="whatYouLike">
                Ce que vous aimez en terme de couleur, matériaux, autres...
              </label>
              <textarea
                id="whatYouLike"
                name="whatYouLike"
                rows={6}
                value={aime}
                onChange={handleChangeAime}
                placeholder="Liste de ce que vous aimez"
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
            </div>

            <div className='flex flex-1 flex-col gap-1'>
              <label htmlFor="whatYouNoLike">
                Ce que vous n&apos;aimez pas en terme de couleur, matériaux, autres...
              </label>
              <textarea
                id="whatYouNoLike"
                name="whatYouNoLike"
                rows={6}
                value={pasAime}
                onChange={handleChangePasAime}
                placeholder="Liste de ce que vous n'aimez pas"
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
            </div>

            <div className='flex flex-1 flex-col gap-1'>
              <label htmlFor="budget">
                Quel est votre budget total à investir dans ce projet ?
              </label>
              <input
              type='texte'
                id="budget"
                name="budget"
                value={budget}
                onChange={handleChangeBudget}
                placeholder="Votre budget"
                className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
              />
            </div>
        </div>
      </fieldset>
        
      <fieldset className='border border-solid border-[#3D6367] px-3 py-6'>
        <legend className='px-2 font-medium text-lg'>Vos habitudes de vie dans cette/ces pièce(s)</legend>
        <div className='flex flex-col gap-2'>
          
          <div className='flex flex-1 flex-col gap-1'>
            <label htmlFor="livingHabits">
              Pour chaque pièce précisez :
              <ul className='ml-4 list-disc'>
                <li>
                  Le nombre de personnes y vivant
                </li>
                <li>
                  L&apos;âge des personnes y vivant
                </li>
                <li>
                  L&apos;activité (cuisine, travail, réception amis, dîner, enfants...)
                </li>
              </ul>
            </label>
            <textarea
              id="livingHabits"
              name="livingHabits"
              rows={6}
              value={habitudesVie}
              onChange={handleChangeHabitudesVie}
              placeholder="Liste des habitudes par pièce"
              className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            />
          </div>        
        </div>
      </fieldset>
        
      <fieldset className='border border-solid border-[#3D6367] px-3 py-6'>
        <legend className='px-2 font-medium text-lg'>Choix des prestations</legend>
          
        <div className='flex flex-col gap-1'>
          <label htmlFor="prestations">
            Choisissez les prestations dont vous avez besoin pour chaque espace de votre habitation
          </label>
          <select
            id="prestations"
            name="prestations"
            value={prestation}
            onChange={handleChangePrestation}
            className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
            required
          >
            <option value="Une planche d&apos;ambiance de votre pièce avec les matériaux, couleurs, mobilier et accessoires">Une planche d&apos;ambiance de votre pièce avec les matériaux, couleurs, mobilier et accessoires</option>
            <option value="Une planche shopping avec sélection de mobilier, accesoires, matériaux et couleurs">Une planche shopping avec sélection de mobilier, accesoires, matériaux et couleurs</option>
            <option value="Une liste shopping détaillée respectant votre budget">Une liste shopping détaillée respectant votre budget</option>
          </select>
        </div>

      </fieldset>

      <h3 className='text-xl font-semibold'>Documents à joindre</h3>

      <fieldset className='border border-solid border-[#3D6367] px-3 py-6'>
        <legend className='px-2 font-medium text-lg'>Merci de joindre avec le questionnaire</legend>
        <div className='flex flex-col gap-4'>
        
          <div className='flex flex-col gap-1'>
            <label htmlFor='plan'>
              Un plan de/des espace(s) avec cotations (un plan à la main est suffisant)
            </label>
            <input
              name="plan"
              id="plan"
              type="file"
              multiple
              onChange={handleChangePlans}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='roomPicture'>
              Des photos des pièces à travailler
            </label>
            <input
              name="roomPicture"
              id="roomPicture"
              type="file"
              multiple
              onChange={handleChangePhotos}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='likedMood'>
              Des images d&apos;inspiration d&apos;ambiance que vous aimez
            </label>
            <input
              name="likedMood"
              id="likedMood"
              type="file"
              multiple
              onChange={handleChangeImageExemple}
              className=''
            />
          </div>
        </div>    

      </fieldset>

    </div>
    <button type='submit'>
      Soumettre le formulaire
    </button>
  </form>
  )
}
