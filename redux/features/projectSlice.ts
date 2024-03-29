import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';

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
    link: string
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
    link: string
  }[],
}

export interface Result {
  success: boolean
  message: string
}

type ProjectState = {
  projects: ProjectType[]
  project: ProjectType
  projectForm: ProjectForm
  result: Result
  sendProject: boolean
}


const initialState = {
  projects: [],
  sendProject: false,
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
  },
  result: {
    success: false,
    message: ''
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
    },
    setProjectForm(state, action) {
      state.projectForm = action.payload
    },
    removeImageFromProjectForm(state, action) {
      state.projectForm.images = action.payload
    },
    toggleSendProject(state) {
      state.sendProject = !state.sendProject
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.fulfilled, (state, action) => {
        state.projects = action.payload
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.projects = action.payload
      })
      .addCase(getOneProject.fulfilled, (state, action) => {
        state.project = action.payload
      })
      .addCase(uploadImageToServer.fulfilled, (state, action) => {
        // state.projectForm.images[action.payload.index].link = action.payload.link
      })
      .addCase(addOneProject.fulfilled, (state, action) => {
        state.projects.push(action.payload.results)
      })
      .addCase(editOneProject.fulfilled, (state, action) => {
        state.result.success = action.payload.success
        state.result.message = action.payload.message
      })
      .addCase(uploadImageToVercelBlob.fulfilled, (state, action) => {
        state.projectForm.images[action.payload.index] = {...state.projectForm.images[action.payload.index], link: action.payload.link}
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
  setProjectFormImageName,
  removeImageFromProjectForm,
  setProjectForm,
  toggleSendProject
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

export const getAllProjects = createAsyncThunk(
  'project/getAllProjects',
  async (_, thunkAPI) => {
    const projects = await fetch('/api/project/findAll', {
      method: 'POST'
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

export const uploadImageToServer = createAsyncThunk(
  'project/uploadImageToServer',
  async (imageObj: {image: ProjectForm['images'][0], index: number}, thunkAPI) => {
    const file = imageObj.image.file
    const filename = encodeURIComponent(file.name)
    const fileType = encodeURIComponent(file.type)
    const res = await fetch(
      `/api/projectmanager/s3presign?file=${imageObj.image.coverImage}&fileType=${fileType}`,
    );

    const { post } = await res.json()


    const {url, fields } = post

    const body = new FormData()
    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      body.append(key, value as string);
    })

    const upload = await fetch(url, {
      method: 'POST',
      body,
    })

    if (upload.ok) {

      const link = `https://dimexoi-basalt.s3.eu-west-3.amazonaws.com/${imageObj.image.coverImage}`
      return {link, index: imageObj.index}
    } else {
      console.error('Upload failed.')
    }
    // body.set("file", imageObj.image.file)
    // body.set("slug", imageObj.image.slug)
    // body.set("name", imageObj.image.coverImage)
    // const imageUploaded = await fetch('/api/projectmanager/tobucket', {
    //   method: 'POST',
    //   body
    // })
    // const imageData = await imageUploaded.json()
    // const link = `https://dimexoi-basalt.s3.eu-west-3.amazonaws.com/${imageData.fileName}`
    // return {link, index: imageObj.index}
  }
)

export const uploadImageToVercelBlob = createAsyncThunk(
  'project/uploadImageToVercelBlob',
  async (imageObj: {image: ProjectForm['images'][0], index: number}, thunkAPI) => {
    const file = imageObj.image.file
    const newBlob = await upload(file.name, file, {
      access: 'public',
      handleUploadUrl: '/api/image/upload',
    })

    return {link: newBlob.url, index: imageObj.index}
  
  }
)


export const addOneProject = createAsyncThunk(
  'project/addOneProject',
  async (projectFromForm: ProjectForm, thunkAPI) => {
    const project = await fetch('/api/project/addOne', {
      method: 'POST',
      body: JSON.stringify(projectFromForm)
    })
    const projectData = await project.json()
    return projectData
  }
)

export const editOneProject = createAsyncThunk(
  'project/editOneProject',
  async (projectFromForm: ProjectForm, thunkAPI) => {
    const project = await fetch('/api/project/editOne', {
      method: 'POST',
      body: JSON.stringify(projectFromForm)
    })
    const projectData = await project.json()
    console.log(projectData)
    return projectData
  }
)

export default project.reducer;