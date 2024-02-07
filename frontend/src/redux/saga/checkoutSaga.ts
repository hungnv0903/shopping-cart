import { takeLatest } from "redux-saga/effects";
import { ACTION_TYPE } from "../types/actionType";
import { sendProduct } from "./product.saga";


function* checkoutSaga(){
    yield takeLatest(ACTION_TYPE.PRODUCTS_SEND_REQUEST,sendProduct)
}

export default checkoutSaga ; 