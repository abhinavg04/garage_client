import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'


function AddService() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
      <>
       <button className='btn btn-outline-light' onClick={handleShow} style={{backgroundColor:'green'}}>Add Service +</button>
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
                    <FloatingLabel controlId="floatingName" label="Title" className="mb-3"
                >
                    <Form.Control type="text" placeholder="" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingNotes" label="Notes" className="mb-3">
                    <Form.Control type="text" placeholder="" />
                </FloatingLabel>
                <FloatingLabel controlId="Amount" label="amount" className="mb-3">
                    <Form.Control type="number" placeholder="" />
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

export default AddService