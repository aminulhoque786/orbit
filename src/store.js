import { configureStore } from '@reduxjs/toolkit'
import productSlice  from './components/slice/productSlice'

export const store = configureStore({
  reducer: {
    product:productSlice
  },
})