import { ADD_TO_CART } from "../actions";

const initialState = {}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:{
            return {
                ...state,
                cartData: action.data
            }
        }
    
        default:
            break;
    }
}