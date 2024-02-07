import { ACTION_TYPE } from "../types/actionType";
import { ActionProps } from "../types/model";

export const productReducer = (state= [], action:ActionProps)=>{
    switch (action.type) {
        case ACTION_TYPE.PRODUCTS_FETCH_SUCCSESS:
            return action.payload ; 
            break;
    
        default:
            return state ; 
            break;
    }
}

export const productSendDataReducer = (state = {} , action:ActionProps)=>{
    switch (action.type) {
        case ACTION_TYPE.PRODUCTS_SEND_SUCCSESS:
            return action.payload ; 
            break;
    
        default:
            return state ; 
            break;
    }
}
