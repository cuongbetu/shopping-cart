import * as types from '../constants/ActionTypes'

export const addToCart = (product,quantity) => {
    return{
        type : types.ADD_TO_CART,
        product : product,
        quantity : quantity
    }
}

export const onDelete = (name) => {
    return{
        type : types.DELETE_CART_ITEM,
        name : name,
    }
}

export const addToCartMessage = (productName) => {
    return {
        type : types.ADD_TO_CART_MESSAGE,
        productName : productName
    }
}

export const deleteCartItemMessage = (productName) => {
    return {
        type : types.DELETE_CART_ITEM_MESSAGE,
        productName : productName
    }
}

export const updateQuantity = (productName,quantity) => {
    return {
        type : types.UPDATE_QUANTITY,
        quantity : quantity,
        productName : productName
    }
}
