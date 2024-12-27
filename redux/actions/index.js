export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addItems = ( data ) => {
    return (dispatch) => {
        dispatch({ type: ADD_TO_CART, payload: data })
    }
}

export const removeItem = ( id ) => {
    return (dispatch) => {
        dispatch({ type: REMOVE_FROM_CART, payload: id })
    }
}