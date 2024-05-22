import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AddService from '../components/AddService'

function Service() {
  return (
    <>
      <div className='container-fluid p-5'>
        <h3 className='mb-'>Services</h3>
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
                <tr>
                  <td>Oil Change</td>
                  <td>Use premium</td>
                  <td>500</td>
                </tr>
              </tbody>

            </table>
          </Col>
          <div className='container-fluid p-5'>
          <h2>Total Amount: <span className='text-success'>500</span></h2>
        </div>
        </Row>

      </div>
    </>
  )
}

export default Service