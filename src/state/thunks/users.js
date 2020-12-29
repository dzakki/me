import { createAsyncThunk } from '@reduxjs/toolkit'

const dummyAPI = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: {
        name: 'lorem',
        job: 'Duplicate content'
      }
    })
  }, 2000)
})

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await dummyAPI
    return response.data
  }
)
