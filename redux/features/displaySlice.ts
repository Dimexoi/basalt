import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

type DisplayState = {
  carousel: {
    projects: [],
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
      
  }
});

export const {
  setCarouselCurentIndex,
  nextSlide,
  prevSlide
} = display.actions


export default display.reducer;