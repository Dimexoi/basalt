import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CheckBoxObj {
  isChecked: boolean
  value: string
}
interface TypeModification {
  mood: CheckBoxObj
  color: CheckBoxObj
  layout: CheckBoxObj
  storage: CheckBoxObj
  brightness: CheckBoxObj
}

interface ElementAModifier {
  floor: CheckBoxObj
  wall: CheckBoxObj
  furnitures: CheckBoxObj
  lighting: CheckBoxObj
  arrangement: CheckBoxObj
}

interface AmbianceSouhaiter {
  contemporaine: CheckBoxObj
  scandinave: CheckBoxObj
  vintage: CheckBoxObj
  industrielle: CheckBoxObj
  boheme: CheckBoxObj
  campagne: CheckBoxObj
  espbdm: CheckBoxObj
  zen: CheckBoxObj
  ethique: CheckBoxObj
  moderne: CheckBoxObj
  baroque: CheckBoxObj
  orientale: CheckBoxObj
}

type QuestionnaireState = {
  nom: string
  prenom: string
  email: string
  telephone: string
  typeProjet: string
  societe: string
  anneeConstruction: number | string
  surfaceTotale: number | string
  nbPiece: number | string
  orientation: string
  descriptionPieces: string
  typeModification: TypeModification
  autreModification: string
  elementAModifier: ElementAModifier
  autreElement: string
  ambianceSouhaiter: AmbianceSouhaiter
  autreAmbiance: string
  contraintes: string
  aime: string
  pasAime: string
  budget: string
  habitudesVie: string
  prestation: string
  plans: File[]
  photos: File[]
  imageExemples: File[]
  isSubmitting: boolean
}

const initialState = {
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  typeProjet: '',
  societe: '',
  anneeConstruction: '',
  surfaceTotale: '',
  nbPiece: '',
  orientation: '',
  descriptionPieces: '',
  typeModification: {
    mood: {
      isChecked: false,
      value: "Le style / L'ambiance"
    },
    color: {
      isChecked: false,
      value: "Les matériaux / Les couleurs"
    },
    layout: {
      isChecked: false,
      value: "L'aménagement / La Fonctionnalité des espaces"
    },
    storage: {
      isChecked: false,
      value: 'Les rangements'
    },
    brightness: {
      isChecked: false,
      value: 'La luminosité'
    },
  },
  autreModification: '',
  elementAModifier: {
    floor: {
      isChecked: false,
      value: "Le sol"
    },
    wall: {
      isChecked: false,
      value: "Les murs"
    },
    furnitures: {
      isChecked: false,
      value: "Le mobilier"
    },
    lighting: {
      isChecked: false,
      value: "L'éclairage"
    },
    arrangement: {
      isChecked: false,
      value: "L'agencement"
    },
  },
  autreElement: '',
  ambianceSouhaiter: {
    contemporaine:  {
      isChecked: false,
      value: "Contemporaine"
    },
    scandinave:  {
      isChecked: false,
      value: "Scandinave"
    },
    vintage:  {
      isChecked: false,
      value: "Vintage"
    },
    industrielle:  {
      isChecked: false,
      value: "Industrielle / Loft"
    },
    boheme: {
      isChecked: false,
      value: "Industrielle / Loft"
    },
    campagne:  {
      isChecked: false,
      value: "Campagne"
    },
    espbdm:  {
      isChecked: false,
      value: "Esprit bord de mer"
    },
    zen:  {
      isChecked: false,
      value: "Zen / Nature"
    },
    ethique:  {
      isChecked: false,
      value: "Ethique"
    },
    moderne:  {
      isChecked: false,
      value: "Moderne"
    },
    baroque:  {
      isChecked: false,
      value: "Baroque"
    },
    orientale:  {
      isChecked: false,
      value: "Orientale"
    },
  },
  autreAmbiance: '',
  contraintes: '',
  aime: '',
  pasAime: '',
  budget: '',
  habitudesVie: '',
  prestation: '',
  plans: [],
  photos: [],
  imageExemples: [],
  isSubmitting: false
} as QuestionnaireState

export const questionnaire = createSlice({
  name: "questionnaire",
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
    setAnneeConstruction(state, action) {
      state.anneeConstruction = action.payload
    },
    setSurfaceTotale(state, action) {
      state.surfaceTotale = action.payload
    },
    setNbPiece(state, action) {
      state.nbPiece = action.payload
    },
    setOrientation(state, action) {
      state.orientation = action.payload
    },
    setDescriptionPieces(state, action) {
      state.descriptionPieces = action.payload
    },
    setTypeModification(state, action) {
      state.typeModification = action.payload
    },
    setAutreModification(state, action) {
      state.autreModification = action.payload
    },
    setElementAModifier(state, action) {
      state.elementAModifier = action.payload
    },
    setAutreElement(state, action) {
      state.autreElement = action.payload
    },
    setAmbianceSouhaiter(state, action) {
      state.ambianceSouhaiter = action.payload
    },
    setAutreAmbiance(state, action) {
      state.autreAmbiance = action.payload
    },
    setContraintes(state, action) {
      state.contraintes = action.payload
    },
    setAime(state, action) {
      state.aime = action.payload
    },
    setPasAime(state, action) {
      state.pasAime = action.payload
    },
    setBudget(state, action) {
      state.budget = action.payload
    },
    setHabitudesVie(state, action) {
      state.habitudesVie = action.payload
    },
    setPrestation(state, action) {
      state.prestation = action.payload
    },
    setPlans(state, action) {
      state.plans = action.payload
    },
    setPhotos(state, action) {
      state.photos = action.payload
    },
    setImageExemple(state, action) {
      state.imageExemples = action.payload
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
  setAnneeConstruction,
  setSurfaceTotale,
  setNbPiece,
  setOrientation,
  setDescriptionPieces,
  setTypeModification,
  setAutreModification,
  setElementAModifier,
  setAutreElement,
  setAmbianceSouhaiter,
  setAutreAmbiance,
  setContraintes,
  setAime,
  setPasAime,
  setBudget,
  setHabitudesVie,
  setPrestation,
  setPlans,
  setPhotos,
  setImageExemple,
  setIsSubmitting
} = questionnaire.actions

export const submitEmail = createAsyncThunk(
  'contact/submitEmail',
  async (questionnaireForm: QuestionnaireState, thunkAPI) => {
    const project = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(questionnaireForm)
    })
    return project.json()
  }
)

export default questionnaire.reducer