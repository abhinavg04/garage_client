import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddCustomer from '../components/AddCustomer';
import AddService from '../components/AddService';
function Customer() {
  return (
    <div className='container-fluid p-5'>
      <h2 className='mb-2'>Customers</h2>
      <Row>
        <Col sm={6} md={2}>
          <AddCustomer/>
        </Col>
        <Col sm={6} md={10}>
          <div>
          <Card style={{ width: '35rem' }} className='shadow border'>
              <Card.Img variant="top" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F12%2F2014-mercedes-benz-sls-amg-black-series-auction-info-001.jpg?cbr=1&q=90" />
              <Card.Body>
                <Card.Title>KL 11 BB 1</Card.Title>
                <Card.Text>
                  <h5>Customer: Roshan</h5>
                  <h6>Phone: 987654321</h6>
                </Card.Text>
                <Link to={'/service'} className='btn btn-outline-light' style={{backgroundColor:'blue'}}>Services</Link>
              </Card.Body>
          </Card>
          </div>
        </Col>
        
      </Row>
    </div>
  )
}

export default Customer