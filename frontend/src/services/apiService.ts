import * as request from '../utils/configAPi' ; 

export const getProductsAPI = async (path:string)=>{
    try {
        const response = await  request.getAPI(path) ; 
        return response ; 
    } catch (error) {
        throw error ; 
    }
}

export const postProductAPI = async (path:string,data:any)=>{
    try {
        const response = await request.postAPI(path,data) ; 
        return response ; 
    } catch (error) {
        throw error ; 
    }
}