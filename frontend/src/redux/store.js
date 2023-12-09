import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import isLoadingReducer from './slice'
import isAuthReducer from './isAuth'

const rootReducer = combineReducers({
  isLoadingState : isLoadingReducer,
  isAuthState: isAuthReducer
})
const persistConfig = {
  version: 1,
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
})
})

export const persistor = persistStore(store)