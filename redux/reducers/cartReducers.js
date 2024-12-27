// import { createSlice } from "@reduxjs/toolkit";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartData: []
//   },
//   reducers: {
//     ADD_TO_CART: (state, action) => {
//       return {
//         ...state,
//         cartData: [...state.cartData, action.payload]
//       }
//     },
//     REMOVE_FROM_CART: (state, action) => {
//       return {
//         ...state,
//         cartData: [action.payload]
//       }
//     }
//   }
// })

// export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions

// export const cartReducer = cartSlice.reducer

const initialState = {
  cartData: [], 
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartData: [...state.cartData, action.payload], 
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state
  }
};
