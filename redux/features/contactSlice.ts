import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"


type ContactState = {
  email: string
  telephone: string
  nom: string
  prenom: string
  message: string
  isSubmitting: boolean
};

const initialState = {
  email: "",
  telephone: "",
  nom: "",
  prenom: "",
  message: "",
  isSubmitting: false
} as ContactState

export const contact = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload
    },
    setTelephone(state, action) {
      state.telephone = action.payload
    },
    setNom(state, action) {
      state.email = action.payload
    },
    setPrenom(state, action) {
      state.prenom = action.payload
    },
    setMessage(state, action) {
      state.message = action.payload
    },
    setIsSubmitting(state, action) {
      state.isSubmitting = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getCarouselProjects.fulfilled, (state, action) => {
  //       action.payload.forEach((carouselProject: CarouselProject) => {
  //         state.carousel.projects.push(carouselProject.project)
  //       })
  //     })
      
  // }
});

export const {
  setEmail,
  setTelephone,
  setNom,
  setPrenom,
  setMessage,
  setIsSubmitting
} = contact.actions



export default contact.reducer