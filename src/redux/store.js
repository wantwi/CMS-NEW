// ** Redux Imports
import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'


const store = configureStore({
  [apiSlice.reducerPath]: apiSlice.reducer,
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})

export { store }
