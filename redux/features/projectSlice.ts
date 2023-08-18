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
};

const initialState = {
  projects: [],
} as ProjectState

export const project = createSlice({
  name: "project",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.fulfilled, (state, action) => {
        state.projects = action.payload
      })
      
  }
});

export const {

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
export default project.reducer;