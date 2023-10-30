import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('userLogin')) : false,
  user: typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem("Auth")): null,
}

export const isAuthReducer = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    isAuthFalse: (state,action) => {
      state.isAuth = true
      state.user = action.payload
      localStorage.setItem("userLogin",true)
      localStorage.setItem("Auth",JSON.stringify(action.payload))
    },
    isAuthTrue: (state) => {
      state.isAuth = false
      localStorage.setItem("userLogin",false)
      localStorage.setItem('Auth','')
    }
  },
})

// Action creators are generated for each case reducer function
export const { isAuthFalse, isAuthTrue } = isAuthReducer.actions

export default isAuthReducer.reducer