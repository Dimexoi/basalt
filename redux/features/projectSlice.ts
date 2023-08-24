import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ProjectType = {
  id: number
  name:string
  description:string
  slug:string
  coverImage:string
  createdAt:string
  updatedAt:string
  images: {
    id: number
    name: string
    description: string
    slug: string
    coverImage: string
    projectId: number
    createdAt: string
    updatedAt: string
  }[],
  category: {
    id: number
    name: string
    description: string
    slug: string
    coverImage: string
    createdAt: string
    updatedAt: string
  }
}

export interface ProjectForm {
  id: number
  name: string
  description: string
  slug: string
  coverImage: string
  categoryId: string
  dragIndex: number
  images: {
    id: number
    name: string
    description: string
    slug: string
    coverImage: string
    projectId: number
    createdAt: string
    updatedAt: string
    file: File
    originY: number
    currentY: number
    extension: string
  }[],
}


type ProjectState = {
  projects: ProjectType[]
  project: ProjectType
  projectForm: ProjectForm
}


const initialState = {
  projects: [],
  project: {
    id: 0,
    name: '',
    description: '',
    slug: '',
    coverImage: '',
    createdAt: '',
    updatedAt: '',
    images: [],
    category: {
      id: 0,
      name: "",
      description: '',
      slug: '',
      coverImage: '',
      createdAt: '',
      updatedAt: ''
    }
  },
  projectForm: {
    id: 0,
    name: '',
    description: '',
    slug: '',
    coverImage: '',
    categoryId: '',
    dragIndex: 0,
    images: []
  }
} as ProjectState

export const project = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject(state, action) {
      state.project = action.payload
    },
   setProjectFormName(state, action) {
    state.projectForm.name = action.payload
   },
   setProjectFormDesc(state, action) {
    state.projectForm.description = action.payload
   },
   setProjectFormSlug(state, action) {
    state.projectForm.slug = action.payload
   },
   setProjectFormCategoryId(state, action) {
    state.projectForm.categoryId = action.payload
   },
   setProjectFormImages(state, action) {
    state.projectForm.images = action.payload
   },
   setProjectFormImageName(state, action) {
    state.projectForm.images[action.payload.index].name = action.payload.value
   },
   setProjectFormImageDesc(state, action) {
    state.projectForm.images[action.payload.index].description = action.payload.value
   },
   setProjectFormImageSlug(state, action) {
    state.projectForm.images[action.payload.index].slug = action.payload.value
   },
   setProjectFormDragIndex(state, action) {
    state.projectForm.dragIndex = action.payload
   }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.fulfilled, (state, action) => {
        state.projects = action.payload
      })
      .addCase(getOneProject.fulfilled, (state, action) => {
        state.project = action.payload
      })
      .addCase(addOneProject.fulfilled, (state, action) => {
        state.projects.push(action.payload)
      })
      
  }
});

export const {
  setProject,
  setProjectFormName,
  setProjectFormDesc,
  setProjectFormSlug,
  setProjectFormCategoryId,
  setProjectFormImages,
  setProjectFormDragIndex,
  setProjectFormImageDesc,
  setProjectFormImageSlug,
  setProjectFormImageName
} = project.actions

export const getProjects = createAsyncThunk(
  'project/getProjects',
  async (id: number, thunkAPI) => {
    const projects = await fetch('/api/project', {
      method: 'POST',
      body: JSON.stringify(id)
    })
    return projects.json()
  }
)

export const getOneProject = createAsyncThunk(
  'project/getOneProject',
  async (id: number, thunkAPI) => {
    const project = await fetch('/api/project/findOne', {
      method: 'POST',
      body: JSON.stringify(id)
    })
    return project.json()
  }
)

export const addOneProject = createAsyncThunk(
  'project/addOneProject',
  async (projectFromForm: ProjectForm, thunkAPI) => {
    const project = await fetch('/api/project/addOne', {
      method: 'POST',
      body: JSON.stringify(projectFromForm)
    })
    return project.json()
  }
)

export default project.reducer;