import { ACTION_TYPE } from "../types/actionType";
import { ICheckout, IproductsAddtoCart } from "../types/model";

export function fetchProductAction(){
    return {
        type:ACTION_TYPE.PRODUCTS_FETCH_REQUEST,
    }
}

export function sendProductAction(value:ICheckout){
    return {
        type:ACTION_TYPE.PRODUCTS_SEND_REQUEST,
        payload:value,
    }
}

export function addToCart(value:IproductsAddtoCart){
    return {
        type:ACTION_TYPE.PRODUCTS_ADD_TO_CART,
        payload:value,
    }
}

export function deteteProducCart(value:IproductsAddtoCart){
    return {
        type:ACTION_TYPE.DELETE_PRODUCT_CART,
        payload:value,
    }
}

export function quantityDecrease(value:IproductsAddtoCart){
    return {
        type:ACTION_TYPE.DECREASE_PRODUCT_CART,
        payload:value,
        
    }
}
export function quantityIncrease(value:IproductsAddtoCart){
    return {
        type:ACTION_TYPE.INCREASE_PRODUCT_CART,
        payload:value,
    }
}

export function resetAction() {
    return {
        type:ACTION_TYPE.RESET_ACTION
    }
}