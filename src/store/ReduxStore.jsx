import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './StoreReducer'

export default configureStore({
  reducer: {
    addToCart: cartReducer
  },
})