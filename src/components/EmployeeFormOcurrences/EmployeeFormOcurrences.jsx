import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ColumnItem from "../../components/ColumnItem/ColumnItem";
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import URL from '../Url/Url';
import { Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const EmployeeFormOcurrences = (props) => {
  const { servidor } = props;
  const [descricao, setDescricao] = useState('');
  const [dataRegistro, setDataRegistro] = useState('2021-09-21');
  const [ocorrencias, setOcorrencias] = useState(servidor.ocorrencias ?? []);
  const [pagina, setPagina] = useState(1);

  const data = [
    [
      {
        id: 'nome',
        label: 'Nome',
        value: props.servidor.nome ?? 'Nome',
        onchange: null,
        type: 'text',
        readOnly: true
      },
      {
        id: 'matricula',
        label: 'Matrícula',
        value: props.servidor.matricula ?? 'Matrícula',
        onchange: null,
        type: 'text',
        readOnly: true
      },
      {
        id: 'data_admissao',
        label: 'Data de admissão',
        value: props.servidor.data_admissao ?? '2021-09-21',
        onchange: null,
        type: 'date',
        readOnly: true
      }
    ],
    [
      {
        id: 'cpf',
        label: 'CPF',
        value: props.servidor.cpf ?? 'CPF',
        onchange: null,
        type: 'text',
        readOnly: true
      },
      {
        id: 'rg',
        label: 'RG',
        value: props.servidor.rg ?? 'RG',
        onchange: null,
        type: 'text',
        readOnly: true
      },
      {
        id: 'carteira_trabalho',
        label: 'Carteira de trabalho',
        value: props.servidor.carteira_trabalho ?? 'Carteira de trabalho',
        onchange: null,
        type: 'text',
        readOnly: true
      }
    ]
  ]

  const save = () => {
    if (descricao === '') {
      props.criarAlerta('error', 'Favor preencher o campo "Nova ocorrência"');
      return;
    }
    let obj = {
      servidor_matricula: servidor.matricula,
      descricao,
      data_registro: dataRegistro
    }

    axios.post(`${URL.backend}ocorrencia/criar`, obj)
    .then(resposta => {
      if(resposta.data.sucesso){
        props.criarAlerta('success', 'Ocorrência registrada com sucesso.');
        obj.id = resposta.data.data.id;
      }

      let novasOcorrencias = [];
      novasOcorrencias.push(obj);

      ocorrencias.forEach(item => {
        novasOcorrencias.push(item);
      })

      setOcorrencias(novasOcorrencias);
      setDescricao('');
    })
    .catch(erro => {
      console.log(erro);
      console.log(erro.response.data.message)
    })
  }

  const remove = (id) => {
    let obj = {
      id
    }

    if(id == undefined){
      save();
    }
    
    axios.post(`${URL.backend}ocorrencia/excluir`, obj)
    .then(resposta => {
      props.criarAlerta('success', 'Ocorrência removida com sucesso.');

      let novasOcorrencias = [];

      ocorrencias.forEach(item => {
        if (item.id !== id) {
          novasOcorrencias.push(item);
        }
      })

      setOcorrencias(novasOcorrencias);
    })
    .catch(erro => {
      console.log(erro);
    })
  }

  const editar = (id) => {
    let obj = {};

    ocorrencias.forEach(ocorrencia => {
      if (ocorrencia.id === id) {
        obj = ocorrencia;
      }
    })

    axios.post(`${URL.backend}ocorrencia/editar`, obj)
    .then(resposta => {
      props.criarAlerta('success', 'Ocorrência editada com sucesso.');
      console.log(resposta)
    })
    .catch(erro => {
      console.log(erro);
    })
  }

  const editarDescricao = (id, descricao) => {
    let novasOcorrencias = [];
    ocorrencias.forEach(ocorrencia => {
      if (ocorrencia.id === id) {
        ocorrencia.descricao = descricao;
      }
      novasOcorrencias.push(ocorrencia);
    })

    setOcorrencias(novasOcorrencias);
  }

  return (
    <React.Fragment>
      <Row className='justify-content-evenly'>
        <Col className='align-self-center text-center' xs='10' sm='10' md='4' lg='3' xl='3'>
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/imgs/photo_woman_example.png`}
            className="foto-servidor"
          />
        </Col>
        <Col className='align-self-center text-center' xs='10' sm='10' md='8' lg='9' xl='9'>
          <Row className='justify-content-evenly'>
            {data.map((column, index) => {
              return (
                <Col key={index} className='text-center' xs='12' sm='12' md='5' lg='5' xl='5'>
                  {column.map(item => {
                    return (
                      <ColumnItem
                        key={item.id}
                        data={item}
                        onChange={null}
                      />
                    )
                  })}
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
      <div className="simple-space"></div>
      <div className="simple-space"></div>
      <Row>
        <Col xs='12' sm='10' md='10' >
          <TextField
            fullWidth={true}
            variant='outlined'
            id='new-ocurrence'
            label='Nova ocorrência'
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </Col>
        <Col xs='12' sm='2' md='2'>
          <Box border="2px solid #06933C" padding="8px 8px" marginRight="20px">
            {props => 
              <Button
                {...props}
                variant="outlined"
                color="primary"
                onClick={() => save()}
              >
                <SaveIcon htmlColor={'#000'} />
              </Button> 
            }
          </Box>
        </Col>
      </Row>
      <div className="simple-space"></div>
      <div className="simple-space"></div>
      {ocorrencias.map((item, index) => {
        if((pagina - 1)* 5 <= index && index < (pagina * 5)){
          return (
            <Row key={item.id}>
              <Col xs='12' sm='10' md='10' >
                <Paper variant='outlined' className='MuiPaper-outlined-default-color'>
                  <span className='box-with-title-margin-left'>Ocorrência</span>
                  <TextField
                    className='TextFieldOcorrencias'
                    fullWidth={true}
                    id={`ocorrencia-${item.id}`}
                    value={item.descricao}
                    onChange={(e) => editarDescricao(item.id, e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      disableUnderline: true
                    }}
                  />
                </Paper>
              </Col>
              <Col xs='12' sm='2' md='2' >
                <Box border="2px solid #06933C" padding="8px 8px" marginRight="20px">
                  {props => 
                    <Button
                      {...props}
                      variant="outlined"
                      color="primary"
                      onClick={() => editar(item.id)}
                    >
                      <SaveIcon  htmlColor={'#000'} />
                    </Button> 
                  }
                </Box>
                <Box border="2px solid #06933C" padding="8px 8px"> 
                  {props => 
                    <Button
                      {...props}
                      variant="outlined"
                      color="primary"
                      onClick={() => remove(item.id)}
                    >
                      <DeleteIcon htmlColor={'#000'} />
                    </Button> 
                  }
                </Box>
              </Col>
              <div className="simple-space"></div>
              <div className="simple-space"></div>
            </Row>
          )
        }
      })}
      <Row className='justify-content-evenly'>
        <Col className='align-self-center text-center' xs='12' sm='12' md='12' lg='12' xl='12'>
          <Pagination count={Math.ceil(ocorrencias.length/5)} variant='outlined' onChange={(e, page) => {setPagina(page)}}/>
        </Col>
      </Row>
      <Row className='justify-content-evenly'>
        <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='1'>
          <Button variant="contained" color="primary" disableElevation>Imprimir</Button>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default EmployeeFormOcurrences;