import { AddtoCartreducer } from './../reducers/addtocartReducer';
import createSagaMiddleware from 'redux-saga';
import { productReducer, productSendDataReducer } from './../reducers/productReducer';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import rootSaga from '../saga/rootSaga';
import checkoutSaga from '../saga/checkoutSaga';

const allReducer = combineReducers({productReducer,AddtoCartreducer,productSendDataReducer}) ; 
const sagaMiddleware = createSagaMiddleware() ; 
const mainStore = createStore(allReducer,applyMiddleware(sagaMiddleware)) ; 
sagaMiddleware.run(rootSaga) ;
sagaMiddleware.run(checkoutSaga) ;  

export default mainStore ; 