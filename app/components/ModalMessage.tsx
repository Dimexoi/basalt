import Link from 'next/link'

import { setShowMessageModal } from "@/redux/features/displaySlice"
import { useAppSelector, useAppDispatch } from '@/redux/hooks'

const ModalMessage = () => {

  const dispatch = useAppDispatch()

  const { projectForm } = useAppSelector(state => state.project);

  const handleClickClose = () => {
    dispatch(setShowMessageModal(false));
  }

  return (
    <div className="">
      <button onClick={handleClickClose}>X</button>
      <p>

      </p>
      <Link
        href={`/project/${projectForm.slug}`}
      >
        Voir le nouveau projet
      </Link>
     
    </div>
  )
}

export default ModalMessage