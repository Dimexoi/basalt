import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

type ProjectState = {
  projects: []
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
  async (_, thunkAPI) => {
    const categories = await fetch('/api/project')
    return categories.json()
  }
)
export default project.reducer;