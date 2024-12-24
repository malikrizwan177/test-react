import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '../../redux/reducers/cartReducers'

export default configureStore({
  reducer: {
    cart: cartReducer
  },
})