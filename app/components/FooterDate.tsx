'use client'

import { setCurrentDate } from "@/redux/features/displaySlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"

export default function FooterDate() {
  const dispatch = useAppDispatch()

  const { currentDate } = useAppSelector(state => state.display.general)
  useEffect(() => {
    const date = new Date()
    dispatch(setCurrentDate(date))
  }, [])
  return (
    <span> {currentDate?.getFullYear()} </span>
  )
}
