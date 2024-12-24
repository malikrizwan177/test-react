import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducers";

const ReducerCombiner = combineReducers({
    cartReducer
})

export const RootReducer = (state, action) => {
    return ReducerCombiner(state, action)
}
