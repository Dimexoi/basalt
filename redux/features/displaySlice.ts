import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

type Project = {
  name: string
  description: string
  slug: string
  coverImage: string
  categoryId: number
}

type DisplayState = {
  carousel: {
    projects: Project[],
    currentIndex: number
  }
};

const initialState = {
  carousel: {
    projects: [],
    currentIndex: 0
  }
} as DisplayState

export const display = createSlice({
  name: "display",
  initialState,
  reducers: {
    nextSlide(state) {
      state.carousel.currentIndex = (state.carousel.currentIndex + 1) % state.carousel.projects.length;
    },
    prevSlide(state) {
      state.carousel.currentIndex = (state.carousel.currentIndex - 1 + state.carousel.projects.length) % state.carousel.projects.length;
    },
    setCarouselCurentIndex (state, action)  {
      state.carousel.currentIndex = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarouselProjects.fulfilled, (state, action) => {
        state.carousel.projects = action.payload
      })
      
  }
});

export const {
  setCarouselCurentIndex,
  nextSlide,
  prevSlide
} = display.actions

export const getCarouselProjects = createAsyncThunk(
  'display/getCarouselProjects',
  async (_, thunkAPI) => {
    const carouselProjects = await fetch('/api/project/carousel')
    return carouselProjects.json()
  }
)

export default display.reducer;