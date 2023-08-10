import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

type CounterState = {
  categories: []
};

const initialState = {
    categories: [],
} as CounterState

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
export default category.reducer;