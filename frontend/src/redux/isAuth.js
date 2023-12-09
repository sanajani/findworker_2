import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: null,
}

export const isAuthReducer = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    isAuthFalse: (state,action) => {
      state.isAuth = true
      state.user = action.payload
      // localStorage.setItem("userLogin",true)
      // localStorage.setItem("Auth",JSON.stringify(action.payload))
    },
    isAuthTrue: (state) => {
      state.isAuth = false
      // localStorage.setItem("userLogin",false)
      // localStorage.setItem('Auth','')
    }
  },
})

// Action creators are generated for each case reducer function
export const { isAuthFalse, isAuthTrue } = isAuthReducer.actions

export default isAuthReducer.reducer