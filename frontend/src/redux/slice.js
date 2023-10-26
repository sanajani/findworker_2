import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoadingState: false,
}

export const isLoading = createSlice({
  name: 'isLoadingState',
  initialState,
  reducers: {
    isLoadingFalse: (state) => {
      state.isLoadingState = true
    },
    isLoadingTrue: (state) => {
      state.isLoadingState = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { isLoadingFalse, isLoadingTrue } = isLoading.actions

export default isLoading.reducer