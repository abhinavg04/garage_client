import React from 'react'
import { useEffect,useState } from 'react'
import { getCustomer } from '../ApiServices/allApis'

function Home() {
    const [customerData,setCustomerdata]=useState([])
    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        const result=await getCustomer()
        const customers = result.data
        console.log(customers)

        const current_date = new Date()
        const date = current_date.getUTCDate()
        const month = current_date.getUTCMonth()+1 
        const year = current_date.getUTCFullYear()
        const pMonth = month.toString().padStart(2,"0");
        const pDay = date.toString().padStart(2,"0");
        const cdate=`${year}-${pMonth}-${pDay}`

        const res = customers?.filter(item => item.added_date == cdate)
        console.log(result)
        setCustomerdata(res)
    }



  return (
    <>
        <h2 className='text-center text-warning'>Today's Chart</h2>
        <table className='table table-dark table-bordered shadow mt-5'>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                    <th>Vehicle Number</th>
                    <th>Services</th>
                    <th>Notes</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Roshan</td>
                    <td>8338112233</td>
                    <td>KL 11 AG 1</td>
                    <td>Oil Change</td>
                    <td>Use Premium</td>
                    <td>1000</td>
                    <td>Pending...<i className="fa-solid fa-clock" /></td>
                    <td></td>
                </tr>
            </tbody>

             
        </table>
    </>
  )
}

export default Home