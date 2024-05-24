import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCustomer } from '../ApiServices/allApis';
import { toast } from 'react-toastify';

function AddCustomer() {
    const [show, setShow] = useState(false);
    const [customer,setCustomers]=useState({
      customer:"",phone:"",vehicle_number:"",kilometeres:"",image:""
    })
    // console.log(customer)

    const handleSubmit=()=>{
      console.log(customer);
    }



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn btn-outline-light' onClick={handleShow} style={{backgroundColor:'green'}}>Add Customer +</button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingName" label="Customer Name" className="mb-3"
      >
        <Form.Control type="text" placeholder="" onChange={(e)=>{setCustomers({...customer,customer:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
        <Form.Control type="number" placeholder="" onChange={(e)=>{setCustomers({...customer,phone:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="Kilom" label="Running Kilometers" className="mb-3">
        <Form.Control type="number" placeholder="" onChange={(e)=>{setCustomers({...customer,kilometeres:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="Vehicle" label="Vehicle Registration" className="mb-3">
        <Form.Control type="text" placeholder="" onChange={(e)=>{setCustomers({...customer,vehicle_number:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="Vehicleimg" label="Vehicle Image" className="mb-3">
        <Form.Control type="file" placeholder="" onChange={(e)=>{setCustomers({...customer,image:e.target.files[0]})}}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
)
}

export default AddCustomer