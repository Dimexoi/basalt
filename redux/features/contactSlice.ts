import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

type ContactState = {
  nom: string
  prenom: string
  email: string
  telephone: string
  societe: string
  message: string
  isSubmitting: boolean
};

const initialState = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  societe: "",
  message: "",
  isSubmitting: false
} as ContactState

export const contact = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setNom(state, action) {
      state.nom = action.payload
    },
    setPrenom(state, action) {
      state.prenom = action.payload
    },
    setEmail(state, action) {
      state.email = action.payload
    },
    setTelephone(state, action) {
      state.telephone = action.payload
    },
    setSociete(state, action) {
      state.societe = action.payload
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
  setNom,
  setPrenom,
  setEmail,
  setTelephone,
  setSociete,
  setMessage,
  setIsSubmitting
} = contact.actions

export const submitEmail = createAsyncThunk(
  'contact/submitEmail',
  async (contactForm: ContactState, thunkAPI) => {
    const project = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(contactForm)
    })
    return project.json()
  }
)

export default contact.reducer