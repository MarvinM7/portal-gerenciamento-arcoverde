import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextField from '@material-ui/core/TextField';

const EmployeeFormPage = () => {
  return (
    <React.Fragment>
      <Row></Row>
      <Row></Row>
      <Row className='justify-content-evenly'>
        <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
        </Col>
        <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
        <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
        </Col>
        <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
        <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
          <Row>
            <TextField id="standard-basic" label="Standard" />
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default EmployeeFormPage;