import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ProjectType = {
  id: number
  name:string
  description:string
  slug:string
  coverImage:string
  createdAt:string
  updatedAt:string
}

type ProjectState = {
  projects: ProjectType[]
  project: ProjectType
};

const initialState = {
  projects: [],
  project: {
    id: 0,
    name: '',
    description: '',
    slug: '',
    coverImage: '',
    createdAt: '',
    updatedAt: ''
  }
} as ProjectState

export const project = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject(state, action) {
      state.project = action.payload
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
      
  }
});

export const {
  setProject
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

export default project.reducer;