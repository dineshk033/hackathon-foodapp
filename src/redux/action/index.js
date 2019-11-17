export const addCart = cart => ({
    type: 'ADD_CART',
    payload: cart
})

export const removeCart = cart => ({
    type: 'REMOVE_CART',
    payload: cart
})