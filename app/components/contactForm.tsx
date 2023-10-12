'use client'
import { setEmail, setMessage, setNom, setPrenom, setSociete, setTelephone, submitEmail } from "@/redux/features/contactSlice";
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
    dispatch(submitEmail({nom, prenom, email, telephone, societe, message, isSubmitting}))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
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
          className="mt-1 p-2 w-full border rounded-md valid:border-[#3D6367]"
          required
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
          minLength={2}
          maxLength={26}
          value={prenom}
          onChange={handleChangePrenom}
          className="mt-1 p-2 w-full border rounded-md valid:border-[#3D6367]"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600 ">
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
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="telephone" className="block text-sm font-medium text-gray-600">
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
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="societe" className="block text-sm font-medium text-gray-600">
          Société
        </label>
        <input
          type="text"
          id="societe"
          name="societe"
          value={societe}
          onChange={handleChangeSociete}
          className="mt-1 p-2 w-full border rounded-md valid:border-[#3D6367]"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChangeMessage}
          className="mt-1 p-2 w-full border rounded-md valid:border-[#3D6367]"
          required
        />
      </div>

      <button disabled={isSubmitting} className="border border-[#3D6367] text-[#3D6367] p-2 rounded-md hover:border-white hover:text-white hover:bg-[#3D6367]">
        Submit
      </button>
    </form>
  )
}
