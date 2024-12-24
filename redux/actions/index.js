export const ADD_TO_CART = "ADD_TO_CART"

export const addItems = ( data ) => {
    return (dispatch) => {
        dispatch({ type:ADD_TO_CART, payload: data })
    }
}