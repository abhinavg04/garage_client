import { useState,createContext } from "react"
import React from 'react'

export const addCustomerResponseContext =createContext()
export const addServiceResponseContext =createContext()

function CustomerContext({children}) {
    const [addCustomerResponse, setAddCustomerResponse]=useState({})
    const [addServiceResponse, setServiceResponse]=useState({})
  return (
    <>
    <addCustomerResponseContext.Provider value={{addCustomerResponse, setAddCustomerResponse }}>
      <addServiceResponseContext.Provider value={{addServiceResponse, setServiceResponse}}>
        {children}
      </addServiceResponseContext.Provider> 
    </addCustomerResponseContext.Provider>
    </>
  )
}

export default CustomerContext