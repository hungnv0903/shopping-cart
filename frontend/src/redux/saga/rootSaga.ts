import { takeLatest } from "redux-saga/effects";
import { ACTION_TYPE } from "../types/actionType";
import { fetchProduct } from "./product.saga";

function* rootSaga(){
    yield takeLatest(ACTION_TYPE.PRODUCTS_FETCH_REQUEST,fetchProduct) ; 
}



export default rootSaga ; 