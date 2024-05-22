import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddCustomer() {
    const [show, setShow] = useState(false);

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
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
        <Form.Control type="number" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="Kilom" label="Running Kilometers" className="mb-3">
        <Form.Control type="number" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="Vehicle" label="Vehicle Registration" className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="Vehicleimg" label="Vehicle Image" className="mb-3">
        <Form.Control type="file" placeholder="" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
)
}

export default AddCustomer