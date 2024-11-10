import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        console.log(action.payload);
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions

export default productSlice.reducer