import { createSlice } from '@reduxjs/toolkit'

export const cartReducer = createSlice({
  name: 'addToCart',
  initialState: {
    value: [],
    cartCount: 0
  },
  reducers: {
    increment: (state, action) => {
      try {
        state.value.push([...value, action.payload])
        cartCount += 1
        console.log(state);
      } catch (error) {
        throw new Error(error)
      }
      
    },
  },
})

export const { increment } = cartReducer.actions

export default cartReducer.reducer