import { getProductsAPI, postProductAPI } from "../../services/apiService";
import { put } from "redux-saga/effects";
import { ACTION_TYPE } from "../types/actionType";
import { ActionProps } from "../types/model";

export function* fetchProduct():any{
    try {
        const response = yield getProductsAPI('api/products') ; 
        yield put({
            type:ACTION_TYPE.PRODUCTS_FETCH_SUCCSESS,
            payload:response ,
        })
    } catch (error:any) {
        yield put({
            type:ACTION_TYPE.PRODUCTS_FETCH_FAILED,
            message:error.message
        })
    }
}

export function* sendProduct(action:ActionProps):any {
    try {
        const request = yield postProductAPI('/api/checkout',action.payload) ; 
        yield put({
            type:ACTION_TYPE.PRODUCTS_SEND_SUCCSESS,
            payload:request,
        })
    } catch (error:any) {
        yield put({
            type:ACTION_TYPE.PRODUCTS_SEND_FAILED,
            message:error.message
        })
    }
}