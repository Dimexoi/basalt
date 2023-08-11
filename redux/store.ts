import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from '@/redux/features/categorySlice'
import displayReducer from '@/redux/features/displaySlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    display: displayReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch