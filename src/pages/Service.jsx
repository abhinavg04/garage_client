import React,{useEffect,useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import AddService from '../components/AddService'
import { useParams } from 'react-router-dom'
import { getSpecificCustomer } from '../ApiServices/allApis'

function Service() {

  const {id}=useParams()
  const [customer,setCustomers]= useState({})

  useEffect(()=>{
    getData()
  },[])

  const getData= async()=>{
    const result= await getSpecificCustomer(id)
    if (result.status == 200){
      setCustomers(result.data)
    }
    else{
      console.log(result)
    }
  }
  console.log(customer)
  
  return (
    <>
      <div className='container-fluid p-5'>
        <h3 className='mb-'>Services</h3>
        <div>
          <h4>Customer :{customer.customer}</h4>
          <h4>Vehicle Number :{customer.vehicle_number}</h4>
        </div>
        <Row>
          <Col sm={6} md={2}>
            <AddService/>
          </Col>
          <Col sm={6} md={10}>
            <table className='table table-info table-bordered'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Notes</th>
                  <th>Amount</th>
                </tr>
              </thead>
              
              <tbody>
                {
                  customer?.services?.length>0 ?
                  customer.services.map(item=> (
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.notes}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))
                  :
                  <h3 className='text-danger'>No services available</h3>
                }
                
              </tbody>

            </table>
          </Col>
          <div className='my-5 p-3 text-center'>
          <h2>Total Amount: <span className='text-success'>{customer.total_amount?customer.total_amount:0}</span></h2>
        </div>
        </Row>

      </div>
    </>
  )
}

export default Service