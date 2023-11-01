'use client'
import { setEmail, setIsSubmitting, setMessage, setNom, setPrenom, setSociete, setTelephone, submitEmail } from "@/redux/features/contactSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function ContactForm() {

  const dispatch = useAppDispatch()

  const {nom, prenom, email, telephone, societe, message, isSubmitting} = useAppSelector(state => state.contact)

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

  const handleChangeSociete = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSociete(e.target.value))
  }

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setMessage(e.target.value))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setIsSubmitting(true))
    dispatch(submitEmail({nom, prenom, email, telephone, societe, message, isSubmitting}))
    dispatch(setNom(''))
    dispatch(setPrenom(''))
    dispatch(setEmail(''))
    dispatch(setTelephone(''))
    dispatch(setSociete(''))
    dispatch(setMessage(''))
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="md:flex md:gap-2">
        <div className="md:flex-1 mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-white">
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
            className="mt-1 p-2 w-full border rounded-md valid:border-[#3D6367]"
            required
          />
        </div>

        <div className="flex-1 mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-white">
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
            className="mt-1 p-2 w-full  rounded-md  "
            required
          />
        </div>
      </div>
      
      <div className="md:flex md:gap-2">

        <div className="md:flex-1 mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white ">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+\-\@]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{1,}$"
            value={email}
            onChange={handleChangeEmail}
            className="mt-1 p-2 w-full border rounded-md valid:border-[#3D6367]"
            placeholder="abc@xyz.com"
            required
          />
        </div>

        <div className="md:flex-1 mb-4">
          <label htmlFor="telephone" className="block text-sm font-medium text-white">
            Téléphone
          </label>
          <input
            type="text"
            minLength={10}
            id="telephone"
            name="telephone"
            value={telephone}
            onChange={handleChangeTelephone}
            className="mt-1 p-2 w-full border rounded-md valid:border-[#3D6367]"
            placeholder="0692123456"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="societe" className="block text-sm font-medium text-white">
          Société
        </label>
        <input
          type="text"
          minLength={3}
          id="societe"
          name="societe"
          value={societe}
          onChange={handleChangeSociete}
          placeholder="Votre société"
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChangeMessage}
          className="mt-1 p-2 w-full border rounded-md valid:border-[#3D6367]"
          placeholder="Votre message"
          required
        />
      </div>
      
      {isSubmitting && <p className="text-white p-2 font-semibold mb-4 text-center">Votre message a bien été envoyé</p> }

      <button disabled={isSubmitting} className="w-full border border-white text-white p-2 rounded-md hover:border-white hover:text-[#3D6367] hover:bg-white disabled:bg-gray-500 disabled:text-gray-800 duration-300">
        Envoyer
      </button>
    </form>
  )
}
