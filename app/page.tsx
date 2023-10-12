
import { getCategories } from '@/redux/features/categorySlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'
import Welcome from './components/Welcome'
import CardCategory from './components/CardCategory'
import categories from '@/public/data/categories.json'

export default function Home() {
  // const dispatch = useAppDispatch()

  // const {categories} = useAppSelector(state => state.category)
  // useEffect(() => {
  //   dispatch(getCategories())
  // }, [dispatch])

  const handleChangeEmail = () => {
    console.log('email change');
  }

  const handleChangeNom = () => {
    console.log('nom change');
  }

  const handleChangePrenom = () => {
    console.log('prenom change');
  }

  const handleChangeMessage = () => {
    console.log('message change');
  }

  const handleSubmit = () => {
    console.log('submit');
  }

  return (
    <main className="h-full">
      <Welcome/>
      <div className='mt-3 md:px-10 lg:w-[80%] lg:mx-auto' id='portfolio'>
        <h2 className='font-bold text-center text-xl text-[#3D6367]'>Découvrez nos projets</h2>

        <div className='flex flex-col gap-3 p-3 lg:grid xl:grid-cols-2'>
          {categories.filter(category => (
            category.active === true
          )).map(category => (
              <CardCategory category={category} key={category.id}/>
          ))}
        </div>

        <div id='contact'>
          <h2 className='font-bold text-center text-xl text-[#3D6367]'>Contactez-nous</h2>
          <div className='p-2'>
            <div className='flex justify-between'>

              <div className='mb-2'>
                <p className='text-center'>Téléphone</p>
                <a href="tel:+262262350679">0262 35 06 79</a>
              </div>
              <div>
                <p className='text-center'>Email</p>
                <a href="mailto:contact@basalt-mobilier.fr">contact@basalt-mobilier.fr</a>
              </div>
            </div>

            <div className='text-center'>
              <p>Adresse</p>
              <p>8, rue Benjamin Hoarau 97410 Saint-Pierre</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.firstName}
                  onChange={handleChangeNom}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.lastName}
                  onChange={handleChangePrenom}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChangeEmail}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChangeMessage}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 rounded-md">
                Submit
              </button>
            </form>
          </div>
          
          
          
        </div>
      </div> 
    </main>
  )
}
