import React, { useState } from 'react';

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

const EmployeeFormRemovals = () => {
  const [removal, setRemoval] = useState({
    text: '',
    type: 0
  });
  const [removals, setRemovals] = useState([
    {
      id: 1,
      text: 'Afastamento 1',
      type: 10
    },
    {
      id: 2,
      text: 'Afastamento 2',
      type: 20
    },
    {
      id: 3,
      text: 'Afastamento 3',
      type: 30
    }
  ]);

  const [type, setType] = useState(0);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const data = [
    [
      {
        id: 'name',
        label: 'Nome',
        value: 'Nome',
        onchange: null,
        type: 'text',
        readOnly: true
      },
      {
        id: 'registry',
        label: 'Matrícula',
        value: 'Matrícula',
        onchange: null,
        type: 'text'
      },
      {
        id: 'admission_date',
        label: 'Data de admissão',
        value: 'Data de admissão',
        onchange: null,
        type: 'text'
      }
    ],
    [
      {
        id: 'cpf',
        label: 'CPF',
        value: 'CPF',
        onchange: null,
        type: 'text'
      },
      {
        id: 'rg',
        label: 'RG',
        value: 'RG',
        onchange: null,
        type: 'text'
      },
      {
        id: 'work_card',
        label: 'Carteira de trabalho',
        value: 'Carteira de trabalho',
        onchange: null,
        type: 'text'
      }
    ]
  ]

  const save = () => {
    let obj = {
      id: removals.length + 1,
      text: removal.text,
      type: removal.type
    }

    let newRemovals = [];
    newRemovals.push(obj);

    removals.forEach(item => {
      newRemovals.push(item);
    })

    setRemovals(newRemovals);
    setRemoval({
      text: '',
      type: 0
    });
  }

  const remove = (id) => {
    let newRemovals = [];

    removals.forEach(item => {
      if (item.id !== id) {
        newRemovals.push(item);
      }
    })

    setRemovals(newRemovals);
  }
  
  return (
    <React.Fragment>
      <Row className='justify-content-evenly'>
        <Col className='align-self-center text-center' xs='10' sm='4' md='4' lg='3' xl='3'>
          <img src={`${process.env.PUBLIC_URL}/imgs/photo_woman_example.png`} className="foto-servidor"></img>
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
                placeholder='Digite aqui'
                value={removal.text}
                onChange={(e) => setRemoval({...removal, text: e.target.value})}
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
                      defaultValue="2021-01-01"
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
                      defaultValue="2021-01-01"
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
                          value={removal.type}
                          onChange={(e) => setRemoval({...removal, type: e.target.value})}
                      >
                        <MenuItem value={0}>Selecione</MenuItem>
                        <MenuItem value={10}>Férias</MenuItem>
                        <MenuItem value={20}>Licença Nojo</MenuItem>
                        <MenuItem value={30}>Licença Prêmio</MenuItem>
                        <MenuItem value={40}>Licença por motivo de doença em pessoa família</MenuItem>
                        <MenuItem value={50}>Licença para o serviço militar</MenuItem>
                        <MenuItem value={60}>Licença para atividade política, em conformidade com a Lei Federal</MenuItem>
                        <MenuItem value={70}>Licença para capacitação</MenuItem>
                        <MenuItem value={80}>Licença para tratar de interesses particulares</MenuItem>
                        <MenuItem value={90}>Licença para desempenho de mandato classista</MenuItem>
                        <MenuItem value={100}>Afastamento para cessão a outro órgão</MenuItem>
                        <MenuItem value={110}>Afastamento para exercício de mandato eletivo</MenuItem>
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
      {removals.map(item => {
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
                      value={item.text}
                      placeholder='Digite aqui'
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
                            defaultValue="2021-01-01"
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
                            defaultValue="2021-01-01"
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
                                value={item.type}
                                onChange={(e) => setType(e.target.value)}
                            >
                              <MenuItem value={0}>Selecione</MenuItem>
                              <MenuItem value={10}>Férias</MenuItem>
                              <MenuItem value={20}>Licença Nojo</MenuItem>
                              <MenuItem value={30}>Licença Prêmio</MenuItem>
                            </Select>
                          </FormControl>
                        </Col>
                      </Row>
                    </Col>
                    <Col className='align-self-end' xs='2'>
                      <Row className='justify-content-space-around'>
                        <Col>
                          <SaveIcon htmlColor={'#000'} className='pointer-click-size-big' />
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
      })}
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