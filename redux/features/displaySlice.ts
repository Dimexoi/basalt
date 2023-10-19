import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

type Project = {
  id: number
  name: string
  description: string
  slug: string
  coverImage: string
  categoryId: number
}

type CarouselProject = {
  project: Project
}

type DisplayState = {
  carousel: {
    projects: Project[],
    currentIndex: number
  },
  header: {
    isScrolled: boolean
  },
  project: {
    showMessageModal: boolean
  },
  general: {
    currentDate: Date | null
  }
};

const initialState = {
  carousel: {
    projects: [],
    currentIndex: 0
  },
  header: {
    isScrolled: false
  },
  project: {
    showMessageModal: false
  },
  general: {
    currentDate: null
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
    },
    setHeaderIsScrolled (state, action) {
      state.header.isScrolled = action.payload
    },
    setShowMessageModal (state, action) {
      state.project.showMessageModal = action.payload
    },
    setCarouselProjects (state, action) {
      state.carousel.projects = action.payload
    },
    setCurrentDate (state, action) {
      state.general.currentDate = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarouselProjects.fulfilled, (state, action) => {
        action.payload.forEach((carouselProject: CarouselProject) => {
          state.carousel.projects.push(carouselProject.project)
        })
      })
      
  }
});

export const {
  setCarouselCurentIndex,
  nextSlide,
  prevSlide,
  setHeaderIsScrolled,
  setShowMessageModal,
  setCarouselProjects,
  setCurrentDate
} = display.actions

export const getCarouselProjects = createAsyncThunk(
  'display/getCarouselProjects',
  async (_, thunkAPI) => {
    const carouselProjects = await fetch('/api/project/carousel')
    return carouselProjects.json()
  }
)

export default display.reducer