import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ColumnItem from "../../components/ColumnItem/ColumnItem";

const EmployeeFormOcurrences = () => {
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
    </React.Fragment>
  )
}

export default EmployeeFormOcurrences;