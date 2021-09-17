import React, { useState } from "react";

import './EmployeeForm.css';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from '@material-ui/core/Button';

import EmployeeFormData from '../../components/EmployeeFormData/EmployeeFormData';
import EmployeeFormOcurrences from '../../components/EmployeeFormOcurrences/EmployeeFormOcurrences';
import EmployeeFormRemovals from '../../components/EmployeeFormRemovals/EmployeeFormRemovals';

const EmployeeFormPage = () => {
  

  const [screen, setScreen] = useState(1);
  

  return (
    <React.Fragment>
      <Container>
        <Row className='justify-content-evenly'>
          <Col>
            <div className="title-div">
              <h2 className="title">Servidor</h2>
            </div>
          </Col>
        </Row>
        <div className="simple-space"></div>
        <Row className='justify-content-evenly'>
          <Col className='text-center' xs='12' sm='12' md='3' lg='3' xl='3'>
            <Button
              variant="contained"
              color={screen === 1 ? 'primary' : 'secondary'}
              disableElevation
              onClick={() => setScreen(1)}
            >
              Informações
            </Button>
            <div className="simple-space"></div>
          </Col>
          <Col className='text-center' xs='12' sm='12' md='3' lg='3' xl='3'>
            <Button
              variant="contained"
              color={screen === 2 ? 'primary' : 'secondary'}
              disableElevation
              onClick={() => setScreen(2)}
            >
              Ocorrências
            </Button>
            <div className="simple-space"></div>
          </Col>
          <Col className='text-center' xs='12' sm='12' md='3' lg='3' xl='3'>
            <Button
              variant="contained"
              color={screen === 3 ? 'primary' : 'secondary'}
              disableElevation
              onClick={() => setScreen(3)}
            >
              Afastamentos
            </Button>
            <div className="simple-space"></div>
          </Col>
        </Row>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        {screen === 1?
          <EmployeeFormData />
        :screen === 2?
          <EmployeeFormOcurrences />
        :screen === 3?
          <EmployeeFormRemovals />
        :null
        }
      </Container>
    </React.Fragment>
  )
}

export default EmployeeFormPage;
