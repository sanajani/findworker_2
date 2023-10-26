import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // isAuth: localStorage.getItem('userLogin'),
  // isAuth: JSON.parse(localStorage.getItem('userLogin')),
  isAuth: typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('userLogin')) : false,
}

export const isAuthReducer = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    isAuthFalse: (state) => {
      state.isAuth = true
      localStorage.setItem("userLogin",true)
    },
    isAuthTrue: (state) => {
      state.isAuth = false
      localStorage.setItem("userLogin",false)
    }
  },
})

// Action creators are generated for each case reducer function
export const { isAuthFalse, isAuthTrue } = isAuthReducer.actions

export default isAuthReducer.reducer