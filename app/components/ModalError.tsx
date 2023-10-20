import { setShowErrorModal } from "@/redux/features/displaySlice"
import { useAppSelector, useAppDispatch } from '@/redux/hooks'

const ModalError = ({crudAction} : {crudAction: String}) => {

  const dispatch = useAppDispatch()

  const { result } = useAppSelector(state => state.project)
  const handleClickClose = () => {
    dispatch(setShowErrorModal(false))
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
       <div className='bg-white/90 p-5 flex flex-col items-center gap-2'>
          <div onClick={handleClickClose} className=' bg-gray-200 px-3 py-2 hover:cursor-pointer hover:bg-gray-300 duration-300'>
            <span> X </span>
            <span>Fermer</span>
          </div>
          
          <div className='flex flex-col gap-1 items-center'>
            <p className="text-red-500 mb-2 font-bold text-xl">ERREUR</p>
            <span>
              {result.message}
            </span>
          </div>
   
        </div>
     
    </div>
  )
}

export default ModalError