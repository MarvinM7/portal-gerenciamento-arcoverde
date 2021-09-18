import React, { useState } from "react";

import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';

import Alert from '@material-ui/lab/Alert';

import URL from '../../components/Url/Url';

const EmployeeConsultationPage = (props) => {
  const history = useHistory();

  const [alerta, setAlerta] = useState({});
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const [matricula, setMatricula] = useState('');

  const procurar = () => {
    setMostrarAlerta(false);
    setAlerta({});

    if (matricula === '') {
      setAlerta({
        tipo: 'error',
        conteudo: 'Favor preencher a matrícula'
      })
      setMostrarAlerta(true);
    } else {
      let obj = {
        matricula
      }
      axios.post(`${URL.backend}servidor/procurar`, obj)
      .then(resposta => {
        if (resposta.data.data.length === 0) {
          setAlerta({
            tipo: 'warning',
            conteudo: 'Nenhum servidor encontrado.'
          })
          setMostrarAlerta(true);
        } else if (resposta.data.data.length === 1) {
          history.push(`/servidor/formulario/${resposta.data.data[0].matricula}`)
        }
      })
      .catch(erro => {
        console.log(erro);
      })
    }
  }

  return (
    <React.Fragment>
      {mostrarAlerta
        ?<Alert
          severity={alerta.tipo}
          onClose={() => setMostrarAlerta(false)}
        >
          {alerta.conteudo}
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
                id='matricula'
                label='Matrícula'
                value={matricula}
                autoComplete='registration'
                onChange={(e) => setMatricula(e.target.value)}
                onKeyPress={(ev) => {
                  if (ev.key === 'Enter') {
                    procurar();
                    ev.preventDefault();
                  }
                }}
              />
            </Row>
            <Row>
              <Col className='text-center'>
                <Button
                  variant='contained'
                  color="primary"
                  onClick={procurar}
                  startIcon={<SearchIcon />}
                >
                  Consultar
                </Button>
              </Col>
              <Col className='text-center'>
                <Button
                  variant='contained'
                  color="primary"
                  onClick={() => history.push('/servidor/formulario')}
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