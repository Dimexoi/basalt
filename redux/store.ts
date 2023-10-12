import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from '@/redux/features/categorySlice'
import projectReducer from '@/redux/features/projectSlice'
import displayReducer from '@/redux/features/displaySlice'
import contactReducer from '@/redux/features/contactSlice'

const defaultMiddlewareConfig = {
  serializableCheck: false
}

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    project: projectReducer,
    display: displayReducer,
    contact: contactReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(defaultMiddlewareConfig),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch