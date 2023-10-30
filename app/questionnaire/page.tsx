'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { useEffect } from 'react'
import { getOneProject, getProjects, setProject } from '@/redux/features/projectSlice'
import CardProject from '@/app/components/CardProject'
import Header from '@/app/components/Header'

export default function Questionnaire() {
  const dispatch = useAppDispatch()

  return (
    <main className="h-full mb-8">
      <Header welcome={false}/>
      <div className='flex flex-col gap-10 md:px-10 lg:w-[70%] lg:mx-auto lg:px-0'>
        <h1 className='font-bold text-center text-3xl text-[#3D6367]'>Questionnaire préalable</h1>

        <h2 className='text-center italic text-xl'>Vous souhaitez nous faire part de votre projet ? Remplissez le formulaire qui suit.</h2>
        <form action="submit" className='flex flex-col gap-8'>

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
                  value={''}
                  onChange={() => console.log('cvhanged')}
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
                  value={''}
                  onChange={() => console.log('cvhanged')}
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
                  value={''}
                  onChange={() => console.log('cvhanged')}
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
                  value={''}
                  onChange={() => console.log('cvhanged')}
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
                  value={''}
                  onChange={() => console.log('cvhanged')}
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
                  value={''}
                  onChange={() => console.log('cvhanged')}
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
                    value={''}
                    onChange={() => console.log('cvhanged')}
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
                    value={''}
                    onChange={() => console.log('cvhanged')}
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
                    value={''}
                    onChange={() => console.log('cvhanged')}
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
                    value={''}
                    onChange={() => console.log('cvhanged')}
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
                  value={''}
                  onChange={() => console.log('cvhanged')}
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
                      value={''}
                      onChange={() => console.log('cvhanged')}
                      className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                    />
                    <label htmlFor="mood">
                      Le style / l'ambiance
                    </label>
                  </div>
                  <div className='flex gap-2'>
                    <input
                      type="checkbox"
                      id="color"
                      name="modificationType"
                      value={''}
                      onChange={() => console.log('cvhanged')}
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
                      value={''}
                      onChange={() => console.log('cvhanged')}
                      className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                    />
                    <label htmlFor="layout">
                      L'aménagement / La fonctionnalité des espaces
                    </label>
                  </div>
                  <div className='flex gap-2'>
                    <input
                      type="checkbox"
                      id="storage"
                      name="modificationType"
                      value={''}
                      onChange={() => console.log('cvhanged')}
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
                      value={''}
                      onChange={() => console.log('cvhanged')}
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
                    value={''}
                    onChange={() => console.log('cvhanged')}
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
                      value={''}
                      onChange={() => console.log('cvhanged')}
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
                      value={''}
                      onChange={() => console.log('cvhanged')}
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
                      value={''}
                      onChange={() => console.log('cvhanged')}
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
                      value={''}
                      onChange={() => console.log('cvhanged')}
                      className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                    />
                    <label htmlFor="lighting">
                      L'éclairage
                    </label>
                  </div>
                  <div className='flex gap-2'>
                    <input
                      type="checkbox"
                      id="arrangement"
                      name="modificationElement"
                      value={''}
                      onChange={() => console.log('cvhanged')}
                      className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                    />      
                    <label htmlFor="arrangement">
                      L'agencement
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
                    value={''}
                    onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
                        className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                      />      
                      <label htmlFor="boheme">
                        Bohême
                      </label>
                    </div>
                    <div className='flex gap-2'>
                      <input
                        type="checkbox"
                        id="floor"
                        name="campagne"
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                        value={''}
                        onChange={() => console.log('cvhanged')}
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
                      value={''}
                      onChange={() => console.log('cvhanged')}
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
                      value={''}
                      onChange={() => console.log('cvhanged')}
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
                      value={''}
                      onChange={() => console.log('cvhanged')}
                      placeholder="Liste de ce que vous aimez"
                      className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                    />
                  </div>

                  <div className='flex flex-1 flex-col gap-1'>
                    <label htmlFor="whatYouNoLike">
                      Ce que vous n'aimez pas en terme de couleur, matériaux, autres...
                    </label>
                    <textarea
                      id="whatYouNoLike"
                      name="whatYouNoLike"
                      rows={6}
                      value={''}
                      onChange={() => console.log('cvhanged')}
                      placeholder="Liste de ce que vous n'aimez pas"
                      className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                    />
                  </div>

                  <div className='flex flex-1 flex-col gap-1'>
                    <label htmlFor="budget">
                      Quel est votre budget total à investir dans ce projet ?
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      value={''}
                      onChange={() => console.log('cvhanged')}
                      placeholder="Votre budget"
                      className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                    />
                  </div>
              </div>
            </fieldset>
              
            <fieldset className='border border-solid border-[#3D6367] px-3 py-6'>
              <legend className='px-2 font-medium text-lg'>Vos habitudes dans cette/ces pièce(s)</legend>
              <div className='flex flex-col gap-2'>
                
                <div className='flex flex-1 flex-col gap-1'>
                  <label htmlFor="livingHabits">
                    Pour chaque pièce précisez :
                    <ul className='ml-4 list-disc'>
                      <li>
                        Le nombre de personnes y vivant
                      </li>
                      <li>
                        L'âge des personnes y vivant
                      </li>
                      <li>
                        L'activité (cuisine, travail, réception amis, dîner, enfants...)
                      </li>
                    </ul>
                  </label>
                  <textarea
                    id="livingHabits"
                    name="livingHabits"
                    rows={6}
                    value={''}
                    onChange={() => console.log('cvhanged')}
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
                  value={''}
                  onChange={() => console.log('cvhanged')}
                  className="bg-gray-100 p-2 border-b-2 border-[#3D6367] focus:bg-gray-200 focus:border-0 outline-2 outline-[#3D6367]"
                  required
                >
                  <option value="1">Une planche d'ambiance de votre pièce avec les matériaux, couleurs, mobilier et accessoires</option>
                  <option value="2">Une planche shopping avec sélection de mobilier, accesoires, matériaux et couleurs</option>
                  <option value="3">Une liste shopping détaillée respectant votre budget</option>
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
                    onChange={() => console.log('yo')}
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
                    onChange={() => console.log('yo')}
                  />
                </div>

                <div className='flex flex-col gap-1'>
                  <label htmlFor='likedMood'>
                    Des images d'inspiration d'ambiance que vous aimez
                  </label>
                  <input
                    name="likedMood"
                    id="likedMood"
                    type="file"
                    multiple
                    onChange={() => console.log('yo')}
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

      </div>
    </main>
  )
}
