import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProjectType } from "./projectSlice"

export type CategoryType = {
  id: number
  name:string
  description:string
  slug:string
  coverImage:string
  createdAt:string
  updatedAt:string,
  projects?: ProjectType[]
}

type CategoryState = {
  categories: CategoryType[],
  category: CategoryType
};

const initialState = {
    categories: [],
    category: {
      id: 0,
      name: '',
      description: '',
      slug: '',
      coverImage: '',
      createdAt: '',
      updatedAt: '',
      projects: []
    }
} as CategoryState

export const category = createSlice({
  name: "category",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
      .addCase(getOneCategory.fulfilled, (state, action) => {
        state.category = action.payload
      })
  }
});

export const {

} = category.actions

export const getCategories = createAsyncThunk(
  'category/getCategories',
  async (_, thunkAPI) => {
    const categories = await fetch('/api/category')
    return categories.json()
  }
)

export const getOneCategory = createAsyncThunk(
  'category/getOneCategory',
  async (categoryId: string, thunkAPI) => {
    const category = await fetch('/api/category/findOne', {
      method: 'POST',
      body: JSON.stringify(categoryId)
    })
    return category.json()
  }
)

export default category.reducer;