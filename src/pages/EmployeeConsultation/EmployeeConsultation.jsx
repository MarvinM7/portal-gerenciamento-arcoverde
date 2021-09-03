import React, { useState } from "react";

import { useHistory } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';

import Alert from '@material-ui/lab/Alert';

const EmployeeConsultationPage = (props) => {
  const history = useHistory();

  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const [registration, setRegistration] = useState('');

  const search = () => {
    if (registration === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher a matrícula'
      })
      setShowAlert(true);
    } else {

    }
  }

  return (
    <React.Fragment>
      {showAlert
        ?<Alert
          severity={alert.severity}
          onClose={() => setShowAlert(false)}
        >
          {alert.content}
        </Alert>
        :null
      }
      <Container>
        <Row className='justify-content-center App-vertical'>
          <Col className='align-self-center' xs='11' sm='10' md='9' lg='7' xl='5' >
            <Row>
              <Col className='text-center text-title'>
                Consulta de servidores
              </Col>
            </Row>
            <Row className='login-form'>
              <TextField
                variant='outlined'
                id='registration'
                label='Matrícula'
                defaultValue={registration}
                autoComplete='registration'
                onChange={(e) => setRegistration(e.target.value)}
              />
            </Row>

            <Row>
              <Col className='text-center'>
                <Button
                  variant='contained'
                  color="primary"
                  onClick={search}
                  startIcon={<SearchIcon />}
                >
                  Consultar
                </Button>
              </Col>
              <Col className='text-center'>
                <Button
                  variant='contained'
                  color="primary"
                  onClick={() => history.push('/employee/form')}
                  startIcon={<PersonAddIcon />}
                >
                  Novo servidor
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default EmployeeConsultationPage;