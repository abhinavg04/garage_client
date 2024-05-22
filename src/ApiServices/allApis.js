import base_url from "./base_url";
import commonApi from "./commonApi";

export const getCustomer=async()=>{
    return await commonApi("","",`${base_url}/customer/`,"GET")
}