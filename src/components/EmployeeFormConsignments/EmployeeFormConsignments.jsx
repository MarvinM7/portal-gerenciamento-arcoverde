import { Box, Paper, TextField, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ColumnItem from "../ColumnItem/ColumnItem";
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import '../../pages/EmployeeForm/EmployeeForm.css';
import { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import URL from '../Url/Url';
import ReplaceImage from "../EmployeeFormData/ReplaceImage";

const EmployeeFormConsignments = (props) => {
  const data = [
    [
      {
        id: "name",
        label: "Nome",
        value: props.servidor.nome ?? 'Nome',
        onchange: null,
        type: "text",
        readOnly: true,
      },
      {
        id: "registry",
        label: "Matrícula",
        value: props.servidor.matricula ?? 'Matrícula',
        onchange: null,
        type: "text",
      },
      {
        id: "admission_date",
        label: "Data de admissão",
        value: props.servidor.data_admissao ?? new Date().toISOString().slice(0,10),
        onchange: null,
        type: "date",
      },
    ],
    [
      {
        id: "cpf",
        label: "CPF",
        value: props.servidor.cpf ?? 'CPF',
        onchange: null,
        type: "text",
      },
      {
        id: "rg",
        label: "RG",
        value: props.servidor.rg ?? 'RG',
        onchange: null,
        type: "text",
      },
      {
        id: "work_card",
        label: "Carteira de trabalho",
        value: props.servidor.carteira_trabalho ?? 'Carteira de trabalho',
        onchange: null,
        type: "text",
      },
    ],
  ];
  const { servidor } = props;
  let percentualMaximo = 35;
  const [novoValor, setNovoValor] = useState('');
  const [quantoResta, setQuantoResta] = useState(0);
  
  const [pagina, setPagina] = useState(1);
  const [consignados, setConsignados] = useState(servidor.consignacoes ?? []);
  //.reduce((a,b) => Number(a)+Number(b)) ?? 0
  const [jaConsignado, setJaConsignado] = useState(consignados.map(item => { return item.valor ?? [0,0] }).reduce((a,b) => Number(a)+Number(b),0) ?? 0);
  const [banco, setBanco] = useState('');
  const [quantidade_parcelas, setQuantidade_parcelas] = useState(1);
  const [data_inicio, setData_inicio] = useState(new Date().toISOString().slice(0,10))
  const [salario, setSalario] = useState(servidor.salario ?? 0);
  const [margemDisponivel, setMargemDisponivel] = useState((salario*(percentualMaximo/100)) ?? 0);

  // useEffect(console.log(jaConsignado), [jaConsignado]);

  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  // source: https://pt.stackoverflow.com/questions/348030/como-fazer-um-mask-em-javascript-puro

  const editarSalario = (valor) => {
    let obj = {
      salario: valor,
      matricula: servidor.matricula
    };

    axios.post(`${URL.backend}servidor/editar`, obj)
    .then(resposta => {
      props.criarAlerta('success', 'Servidor editado com sucesso.');
    })
    .catch(erro => {
      console.log(erro);
    })

  }

  const editar = (id) => {
    let obj = {};

    consignados.forEach(consignado => {
      if (consignado.id === id) {
        obj = {
          id: consignado.id,
          banco: consignado.banco,
          data_inicio: consignado.data_inicio,
          valor: consignado.valor,
          servidor_matricula: consignado.servidor_matricula,
          quantidade_parcelas: new Number(consignado.quantidade_parcelas)
        }
      }
    })

    axios.post(`${URL.backend}consignacao/editar`, obj)
    .then(resposta => {
      props.criarAlerta('success', 'Consignado editado com sucesso.');
      props.setTela(4);
    })
    .catch(erro => {
      console.log(erro.response.data.messagem)
    })
  }

  const save = () => {
    let obj = {
      servidor_matricula: servidor.matricula,
      valor: novoValor,
      banco,
      quantidade_parcelas,
      data_inicio
    }

    axios.post(`${URL.backend}consignacao/criar`, obj)
    .then(resposta => {
      if(resposta.data.sucesso){
        props.criarAlerta('success', 'Consignação registrada com sucesso.');
        props.setTela(4);
      }
    })

    let novaConsignacao = [];
    novaConsignacao.push(obj);

    consignados.forEach(item => {
      novaConsignacao.push(item);
    })

    setConsignados(novaConsignacao);
    setBanco('');
    setNovoValor('');
    setQuantidade_parcelas('');
    setData_inicio(new Date().toISOString().slice(0,10));
    setJaConsignado( consignados.map(item => { return item.valor ?? 0 }).reduce((a,b) => Number(a)+Number(b),0) ?? 0 );
  }

  const remove = (id) => {
    let obj = {
      id
    }

    if(id == undefined){
      save();
    }
    
    axios.post(`${URL.backend}consignacao/excluir`, obj)
    .then(resposta => {
      props.criarAlerta('success', 'Consignação removida com sucesso.');

      let novaConsignacao = [];

      consignados.forEach(item => {
        if (item.id !== id) {
          novaConsignacao.push(item);
        }
      })

      setConsignados(novaConsignacao);
    })
    .catch(erro => {
      console.log(erro);
    })
  }

  const editarDescricao = (id, descricao, campo) => {
    let novaConsignacao = [];
    consignados.forEach(consignado => {
      if (consignado.id === id) {
        consignado[campo] = descricao;
      }
      novaConsignacao.push(consignado);
    })
    
    setConsignados(novaConsignacao);
  }

  const apenasValores = (e) => {
    // Faz diversas coisas para impossibilitar usuário de digitar 
    // qualquer coisa que não seja número com 2 ou 1 ou nenhuma casa decimal
    e = e.replace(",", ".");
    e = e.replace(/[^0-9.]+/);
    if(e === undefined || e === 'undefined' || e === '' || e.endsWith('undefined')) {
      e = ''
      return e;
    }
    if(e.indexOf('.') !== e.lastIndexOf('.')){
      if(e.slice(-1,) !== '.'){
        e = '0'
      }
      e = e.slice(0,-1);
    }
    return e;
  }

  const atualizarValores = (e) => {
    e.target.value = apenasValores(e.target.value);
    setSalario(e.target.value);
    setMargemDisponivel((salario*(percentualMaximo/100))?? 0);
    setJaConsignado( consignados.map(item => { return item.valor ?? 0 }).reduce((a,b) => Number(a)+Number(b),0) ?? 0 );
  }

  return (
    <React.Fragment>
      <Row className="justify-content-evenly">
        <Col className="align-self-center text-center" xs="10" sm="4" md="4" lg="3" xl="3">
          <ReplaceImage />
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
                    value={salario}
                    onChange={(e) => atualizarValores(e)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id="qtConsignou"
                    label='Quanto já consignou'
                    value={ parseFloat(jaConsignado).toFixed(2) ?? 0}
                    disabled
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='margemDisponivel'
                    label='Margem disponível'
                    value={ parseFloat(salario*(percentualMaximo/100)).toFixed(2) ?? 0 }
                    disabled
                    onChange={''}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='qtRestaMargem'
                    label='Quanto resta da margem'
                    value={ parseFloat(salario*(percentualMaximo/100)-jaConsignado).toFixed(2) ?? 0}
                    disabled
                    onChange={(e) => setQuantoResta(e)}
                  />
                </Col>
              </Row>
              <div className="simple-space"></div>
            </Paper>
          </Row>
        </Col>
        <Col className="align-self-center" xs='12' sm='1' md='1'>
          <Button className="button-fixed" variant="outlined" color="primary" onClick={() => editarSalario(salario)}>
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
              <span className='box-with-title'>Nova consignação</span>
              <Row className='justify-content-evenly'>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='valor'
                    label='Valor'
                    value={novoValor}
                    onChange={(e) => setNovoValor(apenasValores(e.target.value))}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id="instituicao"
                    label='Instituição'
                    value={banco}
                    onChange={(e) => setBanco(e.target.value)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='dataInicio'
                    label='Data de início'
                    type='date'
                    value={data_inicio}
                    onChange={(e) => setData_inicio(e.target.value)}
                  />
                </Col>
                <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                  <TextField
                    id='parcelas'
                    label='Parcelas'
                    value={quantidade_parcelas}
                    onChange={(e) => setQuantidade_parcelas(e.target.value)}
                  />
                </Col>
              </Row>
              <div className="simple-space"></div>
            </Paper>
          </Row>
        </Col>
        <Col className="align-self-center text-center" xs='1' sm='1' md='1'>
          <Button className="button-fixed" variant="outlined" color="primary" onClick = { () => save() }>
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
        {consignados.map((item, index) => {
          if((pagina - 1)* 5 <= index && index < (pagina * 5)){
            return (
              <React.Fragment key={item.id}>
                <Col>
                  <Row key={item.id}>
                    <Paper variant='outlined'>
                    <span className='box-with-title'>Consignação</span>
                    <Row className='justify-content-evenly'>
                      <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                        <TextField
                          id={`valor-${item.id}`}
                          label='Valor'
                          defaultValue=''
                          value={item.valor}
                          onChange={(e) => editarDescricao(item.id, e.target.value, 'valor')}
                        />
                      </Col>
                      <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                        <TextField
                          id={`instituicao-${item.id}`}
                          label='Instituição'
                          defaultValue=''
                          value={item.banco}
                          onChange={(e) => editarDescricao(item.id, e.target.value, 'banco')}
                        />
                      </Col>
                      <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                        <TextField
                          id={`dataInicio-${item.id}`}
                          label='Data de início'
                          type="date"
                          value={item.data_inicio}
                          onChange={(e) => editarDescricao(item.id, e.target.value, 'data_inicio')}
                        />
                      </Col>
                      <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                        <TextField
                          id={`parcelas-${item.id}`}
                          label='Parcelas'
                          defaultValue=''
                          value={item.quantidade_parcelas}
                          onChange={(e) => editarDescricao(item.id, e.target.value, 'quantidade_parcelas')}
                        />
                      </Col>
                    </Row>
                    <div className="simple-space"></div>
                    </Paper>
                  </Row>
                </Col>
                <Col className="align-self-center text-center" xs='1' sm='1' md='1'>
                  <Button className="button-fixed" variant="outlined" color="primary" onClick = { () => editar(item.id) }>
                    <SaveIcon htmlColor={"#000"} />
                  </Button>
                </Col>
                <Col className="align-self-center" xs='1' sm='1' md='1'>
                  <Button className="button-fixed" variant="outlined" color="primary" onClick ={ () => remove(item.id) }>
                    <DeleteIcon htmlColor={"#000"} />
                  </Button>
                </Col>
                <div className="simple-space"></div>
                <div className="simple-space"></div>
                <div className="simple-space"></div>
              </React.Fragment>
            )
          }
        })}
      </Row>
      <Row className='justify-content-evenly'>
        <Col className='align-self-center text-center' xs='12' sm='12' md='12' lg='12' xl='12'>
          <Pagination count={Math.ceil(consignados.length/5)} variant='outlined' onChange={(e, page) => {setPagina(page)}}/>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default EmployeeFormConsignments;
