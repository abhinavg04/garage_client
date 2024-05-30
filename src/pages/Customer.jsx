import React from 'react'
import { useEffect,useState,useContext } from 'react';
import { Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddCustomer from '../components/AddCustomer';
import AddService from '../components/AddService';
import { getCustomer } from '../ApiServices/allApis';
import { addCustomerResponseContext } from '../ContextApi/CustomerContext';

function Customer() {

  const {addCustomerResponse}=useContext(addCustomerResponseContext)
  const [customers, setCustomers]=useState([])
  useEffect(()=>{
    getData()
  },[addCustomerResponse])

  const getData = async()=>{
    const header={
      "Content-Type":"application/json",
      "Authorization":`Token ${sessionStorage.getItem('token')} `
  }
    const result=await getCustomer(header)
    setCustomers(result.data)
  }

  console.log(customers);
  return (
    <div className='container-fluid p-5'>
      <h2 className='mb-2'>Customers</h2>
      <Row>
        <Col sm={6} md={2}>
          <AddCustomer/>
        </Col>
        <Col sm={6} md={10}>
          <div className='row g-4'>
            {
              customers.length>0 ?
              customers.map((item)=>(
                <Card style={{ width: '35rem' }} className='shadow border g-4'>
                  <Card.Img variant="top" src={item.image?item.image:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F12%2F2014-mercedes-benz-sls-amg-black-series-auction-info-001.jpg?cbr=1&q=90"} />
                  <Card.Body>
                    <Card.Title>{item.vehicle_number}</Card.Title>
                    <Card.Text>
                      <h5>Customer: {item.customer}</h5>
                      <h6>Phone: {item.phone}</h6>
                    </Card.Text>
                    <Link to={`/service/${item.id}`} className='btn btn-outline-light' style={{backgroundColor:'blue'}}>Services</Link>
                  </Card.Body>
          </Card>
              ))
              :
              <h4>No Customers</h4>
            }
          </div>
        </Col>
        
      </Row>
    </div>
  )
}

export default Customer