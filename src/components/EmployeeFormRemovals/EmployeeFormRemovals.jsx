import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputBase from '@material-ui/core/InputBase';

import ColumnItem from "../../components/ColumnItem/ColumnItem";
import URL from '../../components/Url/Url';
import Pagination from '@material-ui/lab/Pagination';
import ReplaceImage from '../EmployeeFormData/ReplaceImage';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const EmployeeFormRemovals = (props) => {
  const [afastamentoTipos, setAfastamentoTipos] = useState([]);

  const [afastamento, setAfastamento] = useState({
    descricao: '',
    data_inicio: '',
    data_fim: '',
    afastamento_id: 0
  });
  
  const [afastamentos, setAfastamentos] = useState(props.servidor.afastamentos ?? []);
  const [pagina, setPagina] = useState(1);
  const [type, setType] = useState(0);

  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  const data = [
    [
      {
        id: 'name',
        label: 'Nome',
        value: props.servidor.nome ?? 'Nome',
        onchange: null,
        type: 'text',
        readOnly: true
      },
      {
        id: 'registry',
        label: 'Matrícula',
        value: props.servidor.matricula ?? 'Matrícula',
        onchange: null,
        type: 'text'
      },
      {
        id: 'admission_date',
        label: 'Data de admissão',
        value: props.servidor.data_admissao ?? new Date().toISOString().slice(0,10),
        onchange: null,
        type: 'date'
      }
    ],
    [
      {
        id: 'cpf',
        label: 'CPF',
        value: props.servidor.cpf ?? 'CPF',
        onchange: null,
        type: 'text'
      },
      {
        id: 'rg',
        label: 'RG',
        value: props.servidor.rg ?? 'RG',
        onchange: null,
        type: 'text'
      },
      {
        id: 'work_card',
        label: 'Carteira de trabalho',
        value: props.servidor.carteira_trabalho ?? 'Carteira de trabalho',
        onchange: null,
        type: 'text'
      }
    ]
  ]

  useEffect(() => {
    axios.post(`${URL.backend}afastamento/lista`)
    .then(resposta => {
      setAfastamentoTipos(resposta.data.data);
    })
    .catch(erro => {
      console.log(erro);
    })
  }, []);

  const save = () => {
    if (afastamento.descricao === '') {
      props.criarAlerta('error', 'Favor preencher o campo "Descrição"');
      return;
    }
    
    if (afastamento.data_inicio === '') {
      props.criarAlerta('error', 'Favor preencher o primeiro campo de data (De)');
      return;
    }

    if (afastamento.data_fim === '') {
      props.criarAlerta('error', 'Favor preencher o segundo campo de data (Até)');
      return;
    }

    if (afastamento.afastamento_id === 0) {
      props.criarAlerta('error', 'Favor preencher o campo "Tipo"');
      return;
    }

    let obj = {
      servidor_matricula: props.servidor.matricula,
      descricao: afastamento.descricao,
      afastamento_id: afastamento.afastamento_id,
      data_inicio: afastamento.data_inicio,
      data_fim: afastamento.data_fim
    }

    axios.post(`${URL.backend}servidor_afastamento/criar`, obj)
    .then(resposta => {
      let novosAfastamentos = [];
      novosAfastamentos.push(resposta.data.data);

      afastamentos.forEach(item => {
        novosAfastamentos.push(item);
      })

      setAfastamentos(novosAfastamentos);
      setAfastamento({
        descricao: '',
        data_inicio: '',
        data_fim: '',
        afastamento_id: 0
      });
      props.setTela(3);
    })
    .catch(erro => {
      console.log(erro);
    })
  }

  const editarItem = (id, campo, valor) => {
    let novosAfastamentos = [];

    afastamentos.forEach(afastamento => {
      console.log()
      if (id !== afastamento.id) {
        novosAfastamentos.push(afastamento);
      } else {
        console.log('id')
        if (campo === 'descricao') {
          afastamento.descricao = valor;
        } else if (campo === 'data_inicio') {
          afastamento.data_inicio = valor;
        } else if (campo === 'data_fim') {
          afastamento.data_fim = valor;
        } else if (campo === 'afastamento_id') {
          console.log('teste');
          afastamento.afastamento_id = valor;
        }
        novosAfastamentos.push(afastamento);
      }
    })

    setAfastamentos(novosAfastamentos);
  }

  const editar = (item) => {
    axios.post(`${URL.backend}servidor_afastamento/editar`, item)
    .then(resposta => {
      console.log(resposta);
      props.setTela(3);
    })
    .catch(erro => {
      console.log(erro);
    })
  }

  const remove = (id) => {
    let obj = {
      id
    }

    axios.post(`${URL.backend}servidor_afastamento/excluir`, obj)
    .then(resposta => {
      let novosAfastamentos = [];

      afastamentos.forEach(item => {
        if (item.id !== id) {
          novosAfastamentos.push(item);
        }
      })

      setAfastamentos(novosAfastamentos);
    })
    .catch(erro => {
      console.log(erro);
    })    
  }
  
  return (
    <React.Fragment>
      <Row className='justify-content-evenly'>
        <Col className='align-self-center text-center' xs='10' sm='4' md='4' lg='3' xl='3'>
          <ReplaceImage />
        </Col>
        <Col className='align-self-center text-center' xs='10' sm='9' md='8' lg='9' xl='9'>
          <Row className='justify-content-evenly'>
            {data.map((column, index) => {
              return (
                <Col key={index} className='text-center' xs='10' sm='10' md='5' lg='5' xl='5'>
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
        <Col xs='12'>
          <Card
            className={classes.root}
            style={{border: '1px solid #06933C'}}
            variant="outlined"
          >
            <CardContent>
              <InputBase
                id="standard-textarea"
                placeholder='Descrição'
                value={afastamento.descricao}
                onChange={(e) => setAfastamento({...afastamento, descricao: e.target.value})}
                fullWidth = {true}
                multiline
              />
            </CardContent>
            <hr
              style={{marginBlockEnd: '0'}}
            />
            <Row
              style={{
                padding: 10
              }}
            >
              <Col xs='10'>
                <Row>
                  <Col xs='10' sm='10' md='5' lg='4'>
                    <TextField
                      id="from"
                      label="De"
                      type="date"
                      value={afastamento.data_inicio}
                      onChange={(e) => setAfastamento({...afastamento, data_inicio: e.target.value})}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Col>
                  <Col xs='10' sm='10' md='5' lg='4'>
                    <TextField
                      id="to"
                      label="Até"
                      type="date"
                      value={afastamento.data_fim}
                      onChange={(e) => setAfastamento({...afastamento, data_fim: e.target.value})}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Col>
                  <Col xs='10' sm='10' md='5' lg='4'>
                    <FormControl>
                      <InputLabel id="afastment-type-label">Tipo</InputLabel>
                      <Select
                          labelId="Tipo"
                          id="afastmento-tipo"
                          value={afastamento.afastamento_id}
                          onChange={(e) => setAfastamento({...afastamento, afastamento_id: e.target.value})}
                      >
                        {afastamentoTipos.map(tipo => {
                          return (
                            <MenuItem
                              key={tipo.id}
                              value={tipo.id}
                            >
                              {tipo.nome}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
              </Col>
              <Col className='align-self-end' xs='2'>
                <Row className='justify-content-space-around'>
                  <Col>
                    <SaveIcon
                      htmlColor={'#000'}
                      className='pointer-click-size-big'
                      onClick={() => save()}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <div className="simple-space"></div>
      <div className="simple-space"></div>
      {afastamentos.map((item, index) => {
        if((pagina - 1)* 5 <= index && index < (pagina * 5)){
          return (
            <React.Fragment key={item.id}>
              <Row>
                <Col xs='12'>
                  <Card
                    className={classes.root}
                    style={{border: '1px solid #06933C'}}
                    variant="outlined"
                  >
                    <CardContent>
                      <InputBase
                        id="standard-textarea"
                        value={item.descricao}
                        placeholder='Digite aqui'
                        fullWidth = {true}
                        onChange={(e) => editarItem(item.id, 'descricao', e.target.value)}
                        multiline
                      />
                    </CardContent>
                    <hr
                      style={{marginBlockEnd: '0'}}
                    />
                    <Row
                      style={{
                        padding: 10
                      }}
                    >
                      <Col xs='10'>
                        <Row>
                          <Col xs='10' sm='10' md='5' lg='4'>
                            <TextField
                              id="from"
                              label="De"
                              type="date"
                              value={item.data_inicio}
                              onChange={(e) => editarItem(item.id, 'data_inicio', e.target.value)}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </Col>
                          <Col xs='10' sm='10' md='5' lg='4'>
                            <TextField
                              id="to"
                              label="Até"
                              type="date"
                              value={item.data_fim}
                              onChange={(e) => editarItem(item.id, 'data_fim', e.target.value)}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </Col>
                          <Col xs='10' sm='10' md='5' lg='4'>
                            <FormControl>
                              <InputLabel id="afastment-type-label">Tipo</InputLabel>
                              <Select
                                  labelId="Tipo"
                                  id="afastment-type"
                                  value={item.afastamento_id}
                                  onChange={(e) => editarItem(item.id, 'afastamento_id', e.target.value)}
                                  style={{maxWidth: '250px'}}
                              >
                                {afastamentoTipos.map(tipo => {
                                  return (
                                    <MenuItem
                                      key={tipo.id}
                                      value={tipo.id}
                                    >
                                      {tipo.nome}
                                    </MenuItem>
                                  )
                                })}
                              </Select>
                            </FormControl>
                          </Col>
                        </Row>
                      </Col>
                      <Col className='align-self-end' xs='2'>
                        <Row className='justify-content-space-around'>
                          <Col>
                            <SaveIcon
                              htmlColor={'#000'}
                              className='pointer-click-size-big'
                              onClick={() => editar(item)}
                            />
                          </Col>
                          <Col>
                            <DeleteIcon
                              htmlColor={'#000'}
                              className='pointer-click-size-big'
                              onClick={() => remove(item.id)}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <div className="simple-space"></div>
              <div className="simple-space"></div>  
            </React.Fragment>
          )
        }
      })}
      <Row className='justify-content-evenly'>
        <Col className='align-self-center text-center' xs='12' sm='12' md='12' lg='12' xl='12'>
          <Pagination count={Math.ceil(afastamentos.length/5)} variant='outlined' onChange={(e, page) => {setPagina(page)}}/>
        </Col>
      </Row>
      <div className="simple-space"></div>
      <div className="simple-space"></div>
      <Row className='justify-content-evenly'>
        <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='1'>
          <Button variant="contained" color="primary" disableElevation>Imprimir</Button>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default EmployeeFormRemovals;