import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Alert from '@material-ui/lab/Alert';

import Button from '@material-ui/core/Button';

import EmployeeFormData from '../../components/EmployeeFormData/EmployeeFormData';
import EmployeeFormOcurrences from '../../components/EmployeeFormOcurrences/EmployeeFormOcurrences';
import EmployeeFormRemovals from '../../components/EmployeeFormRemovals/EmployeeFormRemovals';
import EmployeeFormConsignments from "../../components/EmployeeFormConsignments/EmployeeFormConsignments";
import URL from "../../components/Url/Url";

import './EmployeeForm.css';

const EmployeeFormPage = () => {
  const history = useHistory()
  const { matricula } = useParams();
  const [alerta, setAlerta] = useState({});
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const [tela, setTela] = useState(1);
  const [servidor, setServidor] = useState({});

  useEffect(() => {
    if (matricula) {
      let obj = {
        matricula
      }
      axios.post(`${URL.backend}servidor/procurar`, obj)
      .then(resposta => {
        console.log(resposta);
        setServidor(resposta.data.data[0]);
      })
      .catch(erro => {
        console.log(erro);
      })
    }
  }, []);

  const trocarTela = (tela_numero) => {
    if (matricula) {
      setTela(tela_numero);
    } else {
      if (tela_numero !== 1) {
        criarAlerta('error', 'Para acessar as outras telas, crie o perfil do servidor primeiro.');
      }
    }
  }

  const criarAlerta = (tipo, conteudo) => {
    setAlerta({
      tipo,
      conteudo
    })
    setMostrarAlerta(true);
  }

  const criarServidor = (obj) => {
    axios.post(`${URL.backend}servidor/criar`, obj)
    .then(resposta => {
      history.push(`/servidor/formulario/${resposta.data.data.matricula}`)
      criarAlerta('success', 'Usuário cadastrado com sucesso.');
    })
    .catch(erro => {
      criarAlerta('error', erro?.response?.data?.message ?? 'Tente novamente.');
    })
  }

  const editarServidor = (obj) => {
    axios.post(`${URL.backend}servidor/editar`, obj)
    .then(resposta => {
      criarAlerta('success', 'Usuário editado com sucesso.');
    })
    .catch(erro => {
      criarAlerta('error', erro?.response?.data?.message ?? 'Tente novamente.');
    })
  }

  const criarOcorrencia = () => {
    console.log('criarOcorrencia');
  }

  const editarOcorrencia = () => {
    console.log('editarOcorrencia');
  }

  const excluirOcorrencia = () => {
    console.log('excluirOcorrencia');
  }

  const criarAfastamento = () => {
    console.log('criarAfastamento');
  }

  const editarAfastamento = () => {
    console.log('editarAfastamento');
  }

  const excluirAfastamento = () => {
    console.log('excluirAfastamento');
  }

  const criarConsignacao = () => {
    console.log('criarConsignacao');
  }

  const editarConsignacao = () => {
    console.log('editarConsignacao');
  }

  const excluirConsignacao = () => {
    console.log('excluirConsignacao');
  }

  const salvarSalario = (salario) => {
    console.log('salvarSalario');
    console.log(salario);
  }

  return (
    <React.Fragment>
      {mostrarAlerta?
        <Alert
          severity={alerta.tipo}
          onClose={() => setMostrarAlerta(false)}
        >
          {alerta.conteudo}
        </Alert>
      :
        null
      }
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
              color={tela === 1 ? 'primary' : 'secondary'}
              disableElevation
              onClick={() => trocarTela(1)}
              style={{fontFamily: "'Montserrat'", fontWeight: "bold"}}
            >
              Informações
            </Button>
            <div className="simple-space"></div>
          </Col>
          <Col className='text-center' xs='12' sm='12' md='3' lg='3' xl='3'>
            <Button
              variant="contained"
              color={tela === 2 ? 'primary' : 'secondary'}
              disableElevation
              onClick={() => trocarTela(2)}
              style={{fontFamily: "'Montserrat'", fontWeight: "bold"}}
            >
              Ocorrências
            </Button>
            <div className="simple-space"></div>
          </Col>
          <Col className='text-center' xs='12' sm='12' md='3' lg='3' xl='3'>
            <Button
              variant="contained"
              color={tela === 3 ? 'primary' : 'secondary'}
              disableElevation
              onClick={() => trocarTela(3)}
              style={{fontFamily: "'Montserrat'", fontWeight: "bold"}}
            >
              Afastamentos
            </Button>
            <div className="simple-space"></div>
          </Col>
          {true?
            <Col className='text-center' xs='12' sm='12' md='3' lg='3' xl='3'>
              <Button
                variant="contained"
                color={tela === 4 ? 'primary' : 'secondary'}
                disableElevation
                onClick={() => trocarTela(4)}
                style={{fontFamily: "'Montserrat'", fontWeight: "bold"}}
              >
                Consignações
              </Button>
              <div className="simple-space"></div>
            </Col>
          :
            null
          }
        </Row>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        {tela === 1?
          <EmployeeFormData
            servidor={servidor}
            criarAlerta={criarAlerta}
            salvar={criarServidor}
            editar={editarServidor}
          />
        :tela === 2?
          <EmployeeFormOcurrences
            servidor={servidor}
            criarAlerta={criarAlerta}
            salvar={criarOcorrencia}
            editar={editarOcorrencia}
            excluir={excluirOcorrencia}
          />
        :tela === 3?
          <EmployeeFormRemovals
            servidor={servidor}
            salvar={criarAfastamento}
            criarAlerta={criarAlerta}
            editar={editarAfastamento}
            excluir={excluirAfastamento}
          />
        :tela === 4?
          <EmployeeFormConsignments
            servidor={servidor}
            salvar={criarConsignacao}
            criarAlerta={criarAlerta}
            editar={editarConsignacao}
            excluir={excluirConsignacao}
            salvarSalario={salvarSalario}
          />
        :null
        }
      </Container>
    </React.Fragment>
  )
}

export default EmployeeFormPage;
