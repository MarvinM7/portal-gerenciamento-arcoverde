import { Box, Paper, TextField, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import React from "react";
import { Col, Row } from "react-bootstrap";
import ColumnItem from "../ColumnItem/ColumnItem";
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import '../../pages/EmployeeForm/EmployeeForm.css';

function EmployeeFormConsignments() {
  const data = [
    [
      {
        id: "name",
        label: "Nome",
        value: "Nome",
        onchange: null,
        type: "text",
        readOnly: true,
      },
      {
        id: "registry",
        label: "Matrícula",
        value: "Matrícula",
        onchange: null,
        type: "text",
      },
      {
        id: "admission_date",
        label: "Data de admissão",
        value: "Data de admissão",
        onchange: null,
        type: "text",
      },
    ],
    [
      {
        id: "cpf",
        label: "CPF",
        value: "CPF",
        onchange: null,
        type: "text",
      },
      {
        id: "rg",
        label: "RG",
        value: "RG",
        onchange: null,
        type: "text",
      },
      {
        id: "work_card",
        label: "Carteira de trabalho",
        value: "Carteira de trabalho",
        onchange: null,
        type: "text",
      },
    ],
  ];

  let salario = 5500 // fetch from db;
  let jaConsignado = 1750 // fetch from db;
  let percentualMaximo = 35 // fixed amount;
  let consignados = [] // fetch from db;

  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  // source: https://pt.stackoverflow.com/questions/348030/como-fazer-um-mask-em-javascript-puro


  return (
    <React.Fragment>
      <Row className="justify-content-evenly">
        <Col className="align-self-center text-center" xs="10" sm="4" md="4" lg="3" xl="3">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/photo_woman_example.png`}
            className="foto-servidor"
          ></img>
        </Col>
        <Col className="align-self-center text-center" xs="10" sm="9" md="8" lg="9" xl="9">
          <Row className="justify-content-evenly">
            {data.map((column, index) => {
              return (
                <Col
                  key={index} className="text-center" xs="10" sm="10" md="5" lg="5" xl="5"
                >
                  {column.map((item) => {
                    return (
                      <ColumnItem key={item.id} data={item} onChange={null} />
                    );
                  })}
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <div className="simple-space"></div>
      <div className="simple-space"></div>
      <Row className='justify-content-evenly'>
        <Col xs='12' sm='10' md='11'>
          <Row className='justify-content-evenly'>
            <Paper variant='outlined'>
              <span className='box-with-title'>Resumo de consignações</span>
              <Row className='justify-content-evenly'>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='salarioPrincipal'
                    label='Salário principal'
                    value={formatter.format(salario)}
                    onChange={(e) => console.log(e)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id="qtConsignou"
                    label='Quanto já consignou'
                    value={formatter.format(jaConsignado)}
                    disabled
                    onChange={(e) => console.log(e)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='margemDisponivel'
                    label='Margem disponível'
                    value={formatter.format(salario*(percentualMaximo/100))}
                    disabled
                    onChange={(e) => console.log(e)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='qtRestaMargem'
                    label='Quanto resta da margem'
                    value={formatter.format(salario*(percentualMaximo/100)-jaConsignado)}
                    disabled
                    onChange={(e) => console.log(e)}
                  />
                </Col>
              </Row>
              <div className="simple-space"></div>
            </Paper>
          </Row>
        </Col>
        <Col className="align-self-center" xs='12' sm='1' md='1'>
          <Button className="button-fixed" variant="outlined" color="primary">
            <SaveIcon htmlColor={"#000"} />
          </Button>
        </Col>
      </Row>
      <div className="simple-space"></div>
      <div className="simple-space"></div>
      <Row>
        <Col xs='12' sm='10' md='10'>
          <Row className='justify-content-evenly'>
            <Paper variant='outlined'>
              <span className='box-with-title'>Consignação</span>
              <Row className='justify-content-evenly'>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='valor'
                    label='Valor'
                    value=''
                    onChange={(e) => console.log(e)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id="instituicao"
                    label='Instituição'
                    value=''
                    onChange={(e) => console.log(e)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='dataInicio'
                    label='Data de início'
                    type='date'
                    defaultValue='2021-01-01'
                    value=''
                    onChange={(e) => console.log(e)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='parcelas'
                    label='Parcelas'
                    value=''
                    onChange={(e) => console.log(e)}
                  />
                </Col>
              </Row>
              <div className="simple-space"></div>
            </Paper>
          </Row>
        </Col>
        <Col className="align-self-center text-center" xs='1' sm='1' md='1'>
          <Button className="button-fixed" variant="outlined" color="primary">
            <SaveIcon htmlColor={"#000"} />
          </Button>
        </Col>
        <Col className="align-self-center" xs='1' sm='1' md='1'>
          <Button className="button-fixed" variant="outlined" color="primary">
            <DeleteIcon htmlColor={"#000"} />
          </Button>
        </Col>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
      </Row>
      <Row>
        {consignados.map(item => {
          return (
            <Row key={item.id}>
              <Paper variant='outlined'>
              <span className='box-with-title'>Consignação</span>
              <Row className='justify-content-evenly'>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='valor'
                    label='Valor'
                    value={item.valor}
                    onChange={(e) => console.log(e)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id="instituicao"
                    label='Instituição'
                    value={item.instituicao}
                    onChange={(e) => console.log(e)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='dataInicio'
                    label='Data de início'
                    type="date"
                    defaultValue="2021-01-01"
                    value={item.dataInicio}
                    onChange={(e) => console.log(e)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='parcelas'
                    label='Parcelas'
                    value={item.parcelas}
                    onChange={(e) => console.log(e)}
                  />
                </Col>
              </Row>
              <div className="simple-space"></div>
              <div className="simple-space"></div>
              <div className="simple-space"></div>
              </Paper>
            </Row>
          )
        })}
      </Row>
    </React.Fragment>
  );
}

export default EmployeeFormConsignments;
