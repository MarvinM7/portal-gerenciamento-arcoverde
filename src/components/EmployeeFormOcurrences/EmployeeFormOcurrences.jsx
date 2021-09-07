import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ColumnItem from "../../components/ColumnItem/ColumnItem";
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const EmployeeFormOcurrences = () => {
  const [ocurrence, setOcurrence] = useState('');
  const [ocurrences, setOcurrences] = useState([
    {
      id: 1,
      text: 'Ocorrência 1'
    },
    {
      id: 2,
      text: 'Ocorrência 2'
    },
    {
      id: 3,
      text: 'Ocorrência 3'
    },
  ]);

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
      id: ocurrences.length + 1,
      text: ocurrence
    }

    let newOcurrences = [];
    newOcurrences.push(obj);

    ocurrences.forEach(item => {
      newOcurrences.push(item);
    })

    setOcurrences(newOcurrences);
    setOcurrence('');
  }

  const remove = (id) => {
    let newOcurrences = [];

    ocurrences.forEach(item => {
      if (item.id !== id) {
        newOcurrences.push(item);
      }
    })

    setOcurrences(newOcurrences);
  }

  return (
    <React.Fragment>
      <Row className='justify-content-evenly'>
        <Col className='align-self-center text-center' xs='10' sm='10' md='4' lg='3' xl='3'>
          <img src={`${process.env.PUBLIC_URL}/imgs/photo_woman_example.png`} className="foto-servidor"></img>
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
            value={ocurrence}
            onChange={(e) => setOcurrence(e.target.value)}
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
      {ocurrences.map(item => {
        return (
          <Row key={item.id}>
            <Col xs='12' sm='10' md='10' >
              <TextField
                fullWidth={true}
                variant='outlined'
                id='new-ocurrence'
                label='Nova ocorrência'
                value={item.text}
                onChange={(e) => setOcurrence(e.target.value)}
              />
            </Col>
            <Col xs='12' sm='2' md='2' >
              <Box border="2px solid #06933C" padding="8px 8px" marginRight="20px">
                {props => 
                  <Button
                    {...props}
                    variant="outlined"
                    color="primary"
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
      })}
      <Row className='justify-content-evenly'>
        <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='1'>
          <Button variant="contained" color="primary" disableElevation>Imprimir</Button>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default EmployeeFormOcurrences;