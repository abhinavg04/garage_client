import React from 'react'
import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCustomer } from '../ApiServices/allApis';
import { toast } from 'react-toastify';
import { addCustomerResponseContext } from '../ContextApi/CustomerContext';

function AddCustomer() {

    const {setAddCustomerResponse}=useContext(addCustomerResponseContext)
    const [show, setShow] = useState(false);
    const [customerData,setCustomers]=useState({
      customer:"",phone:"",vehicle_number:"",kilometeres:"",image:""
    })
    // console.log(customer)

    const handleSubmit=async()=>{
      console.log(customerData)
      const {customer,phone,vehicle_number,kilometeres,image}=customerData
      if(!customer || !phone || !vehicle_number || !kilometeres || !image){
        toast.warning("Enter Valid Inputs !!")
      }
      else{
        const formData=new FormData()
        formData.append("customer",customerData.customer)
        formData.append("phone",customerData.phone)
        formData.append("vehicle_number",customerData.vehicle_number)
        formData.append("kilometeres",customerData.kilometeres)
        formData.append("image",customerData.image)
        const header ={
          "Content-Type":"multipart/form-data",
          "Authorization":`Token ${sessionStorage.getItem('token')} `

        }

        const result=await addCustomer(header,formData,header)

        if(result.status==201){
          toast.success("Customer Added Successfully !!")
          handleClose()
          setCustomers({
            customer:"",phone:"",vehicle_number:"",kilometeres:"",image:""
          })
          setAddCustomerResponse(result)
        }
        else{
          console.log(result)
          toast.error("Customer Registraion Failed")
        }
      }
      
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
        <Form.Control type="text" placeholder="" onChange={(e)=>{setCustomers({...customerData,customer:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
        <Form.Control type="number" placeholder="" onChange={(e)=>{setCustomers({...customerData,phone:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="Kilom" label="Running Kilometers" className="mb-3">
        <Form.Control type="number" placeholder="" onChange={(e)=>{setCustomers({...customerData,kilometeres:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="Vehicle" label="Vehicle Registration" className="mb-3">
        <Form.Control type="text" placeholder="" onChange={(e)=>{setCustomers({...customerData,vehicle_number:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="Vehicleimg" label="Vehicle Image" className="mb-3">
        <Form.Control type="file" placeholder="" onChange={(e)=>{setCustomers({...customerData,image:e.target.files[0]})}}/>
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