import base_url from "./base_url";
import commonApi from "./commonApi";

export const getCustomer=async(header)=>{
    return await commonApi(header,"",`${base_url}/customer/`,"GET")
}
export const getSpecificCustomer=async(id,header)=>{
    return await commonApi(header,"",`${base_url}/customer/${id}/`,"GET")

}
export const addCustomer=async(header,data)=>{
    return await commonApi(header,data,`${base_url}/customer/`,"POST")

}
export const addService=async(id,data,header)=>{
    return await commonApi(header,data,`${base_url}/customer/${id}/add_service/`,"POST")

}
export const userRegister=async(data)=>{
    return await commonApi("",data,`${base_url}/user/`,"POST")
}
export const getToken=async(data)=>{
    return await commonApi("",data,`${base_url}/token/`,"POST")
}