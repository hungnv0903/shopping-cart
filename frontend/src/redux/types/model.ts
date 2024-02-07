export interface ActionProps {
    type?:string ; 
    payload?:any ; 
}

export interface IproductsItem {
    productId:string ; 
    productName:string ; 
    description:string ; 
    price:number ; 
    imageUrl:string ; 
}

export interface IproductsAddtoCart {
    productItem : IproductsItem ; 
    quantity:number ; 
}


export interface IListProduct {
    listProduct:IproductsItem[] ; 
}

export interface IOrder {
    productId:string ; 
    quantity:number ; 
}

export interface ICheckout {
    paySuccess:boolean ; 
    productsInOrder:IOrder[] ; 
}


export interface rootState {
    productReducer:any  ; 
    AddtoCartreducer:any ; 
    productSendDataReducer :any
}