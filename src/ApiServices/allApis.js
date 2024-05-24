import base_url from "./base_url";
import commonApi from "./commonApi";

export const getCustomer=async()=>{
    return await commonApi("","",`${base_url}/customer/`,"GET")
}
export const getSpecificCustomer=async(id)=>{
    return await commonApi("","",`${base_url}/customer/${id}/`,"GET")

}
export const addCustomer=async(header,data)=>{
    return await commonApi(header,data,`${base_url}/customer/`,"POST")

}