//Nhung phan cau hinh de goi request 
import axios from "axios";
const browserInfo = navigator.userAgent;
const request = axios.create({
    baseURL:"http://localhost:4000/" ,
})

request.interceptors.request.use((request)=>{
    if(browserInfo){
        request.headers['Browser-Info'] = browserInfo ; 
    }
    return request ; 
}) ; 
request.interceptors.response.use((response)=>response , (error)=>{
    const {response} = error ; 
    if(response.status===500){
        alert("Error with code 500 !")
    }
})

export const getAPI  = async (path:string)=>{
    const response = await request.get(path) ;
    return response.data 
}

export const postAPI = async (path:string , data:any)=>{
    const response =  await request.post(path,data) ;  
    return response.data ; 
}

export const updateAPI = async (path:string , data:any)=>{
    const response = await request.put(path , data) ; 
    return response.data ; 
}

export const deleteAPI = async (path:string)=>{
    const response = await request.delete(path) ; 
    return response.data ; 
}


export default request ; 