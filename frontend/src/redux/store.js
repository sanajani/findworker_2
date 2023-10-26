import { configureStore } from '@reduxjs/toolkit'

import isLoadingReducer from './slice'
import isAuthReducer from './isAuth'

export const store = configureStore({
  reducer: {
    isLoadingState : isLoadingReducer,
    isAuthState: isAuthReducer
  },
})