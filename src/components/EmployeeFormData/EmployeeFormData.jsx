import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import ColumnItem from "../../components/ColumnItem/ColumnItem";
import URL from "../../components/Url/Url";
import ReplaceImage from './ReplaceImage';

const EmployeeFormData = (props) => {
  const [nome, mudarNome] = useState('');
  const [matricula, mudarMatricula] = useState('');
  const [dataAdmissao, mudarDataAdmissao] = useState('');
  const [workCard, setWorkCard] = useState('');

  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [handicapped, setHandicapped] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [estadoCivilOpcoes, setEstadoCivilOpcoes] = useState([]);
  const [welfarePolicy, setWelfarePolicy] = useState('');
  const [regimePrevidenciarioOpcoes, setRegimePrevidenciarioOpcoes] = useState([]);
  const [schooling, setSchooling] = useState('');
  const [escolaridadeOpcoes, setEscolaridadeOpcoes] = useState([]);
  const [workspaceAddress, setWorkspaceAddress] = useState('');

  const [institutionalEmail, setInstitutionalEmail] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');
  const [voterRegistrationCard, setVoterRegistrationCard] = useState('');
  const [typeOfContract, setTypeOfContract] = useState('');
  const [vinculoOpcoes, setVinculoOpcoes] = useState([]);
  const [gender, setGender] = useState('');
  const [generoOpcoes, setGeneroOpcoes] = useState([]);
  const [syndicate, setSyndicate] = useState('');
  const [personalAddress, setPersonalAddress] = useState('');
  const [workspaceDescription, setWorkspaceDescription] = useState('');
  const [enderecoComercial, setEnderecoComercial] = useState('');
   
  const [mothersName, setMothersName] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [nationality, setNationality] = useState('');
  const [nacionalidadeOpcoes, setNacionalidadeOpcoes] = useState([]);
  const [borrowedEmployee, setBorrowedEmployee] = useState('');
  const [retirementOrdinance, setRetirementOrdinance] = useState('');
  const [retirementDate, setRetirementDate] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [retired, setRetired] = useState('');

  const [dependenteNome, setDependenteNome] = useState('');
  const [dependenteCpf, setDependenteCpf] = useState('');
  const [dependenteDataNascimento, setDependenteDataNascimento] = useState('');
  const [dependenteParentesco, setDependenteParentesco] = useState('');

  const [dependentes, setDependentes] = useState([]);
  const [parentescoOpcoes, setParentescoOpcoes] = useState([]);

  useEffect(() => {
    axios.all([
      axios.post(`${URL.backend}escolaridade/lista`),
      axios.post(`${URL.backend}estado_civil/lista`),
      axios.post(`${URL.backend}nacionalidade/lista`),
      axios.post(`${URL.backend}parentesco/lista`),
      axios.post(`${URL.backend}regime_previdenciario/lista`),
      axios.post(`${URL.backend}sexo/lista`),
      axios.post(`${URL.backend}vinculo/lista`),
    ])
    .then(axios.spread((escolaridadeLista, estadoCivilLista, nacionalidadeLista, parentescoLista, regimePrevidenciarioLista, generosLista, vinculoLista) => {
      setEscolaridadeOpcoes(escolaridadeLista.data.data);
      setEstadoCivilOpcoes(estadoCivilLista.data.data);
      setNacionalidadeOpcoes(nacionalidadeLista.data.data);
      setParentescoOpcoes(parentescoLista.data.data);
      setRegimePrevidenciarioOpcoes(regimePrevidenciarioLista.data.data)
      setGeneroOpcoes(generosLista.data.data);
      setVinculoOpcoes(vinculoLista.data.data);
    }))
    .catch(erro => {
      console.log(erro.response.data.messagem)
    });
  }, []);

  useEffect(() => {
    console.log(props.servidor)
    if (props.servidor.matricula) {
      mudarNome(props.servidor.nome ?? '');
      mudarMatricula(props.servidor.matricula ?? '');
      mudarDataAdmissao(props.servidor.data_admissao ?? '');
      setWorkCard(props.servidor.carteira_trabalho ?? '');
      setCpf(props.servidor.cpf ?? '');
      setRg(props.servidor.rg ?? '');
      setHandicapped(props.servidor.portador_deficiencia === 0 ? false : true);
      setMaritalStatus(props.servidor.estado_civil_id ?? '');
      setWelfarePolicy(props.servidor.regime_previdenciario_id ?? '');
      setSchooling(props.servidor.escolaridade_id ?? '');
      setWorkspaceAddress(props.servidor.lotacao_endereco ?? '');
      setInstitutionalEmail(props.servidor.email_funcional ?? '');
      setPersonalEmail(props.servidor.email_pessoal ?? '');
      setVoterRegistrationCard(props.servidor.titulo_eleitor ?? '');
      setTypeOfContract(props.servidor.vinculo_id ?? '');
      setGender(props.servidor.sexo_id ?? '');
      setSyndicate(props.servidor.sindicalizado === 0 ? false : true);
      setPersonalAddress(props.servidor.endereco_residencial ?? '');
      setWorkspaceDescription(props.servidor.lotacao_descricao ?? '');
      setEnderecoComercial(props.servidor.endereco_comercial ?? '');
      setMothersName(props.servidor.mae ?? '');
      setFathersName(props.servidor.pai ?? '');
      setNationality(props.servidor.nacionalidade_id ?? '');
      setBorrowedEmployee(props.servidor.servidor_cedido === 0 ? false : true);
      setRetirementOrdinance(props.servidor.portaria_aposentadoria ?? '');
      setRetirementDate(props.servidor.data_aposentadoria ?? '');
      setBirthDate(props.servidor.data_nascimento ?? '');
      setRetired(props.servidor.aposentado === 0 ? false : true);
      setDependentes(props.servidor.dependentes);
    }
  }, [props.servidor]);
  
  const data = [
    [
      {
        id: 'nome',
        label: 'Nome',
        value: nome,
        onchange: mudarNome,
        type: 'text'
      },
      {
        id: 'registry',
        label: 'Matrícula',
        value: matricula,
        onchange: mudarMatricula,
        type: 'text'
      },
      {
        id: 'service_time',
        label: 'Tempo de serviço',
        value: 'serviceTime',
        onchange: () => {},
        type: 'text',
        readOnly: true
      },
      {
        id: 'cpf',
        label: 'CPF',
        value: cpf,
        onchange: setCpf,
        type: 'text'
      },
      {
        id: 'rg',
        label: 'RG',
        value: rg,
        onchange: setRg,
        type: 'text'
      },
      {
        id: 'handicapped',
        label: 'Portador(a) de deficiência',
        value: handicapped,
        onchange: setHandicapped,
        type: 'select',
        options: [
          {
            id: false,
            nome: 'Não',
          },
          {
            id: true,
            nome: 'Sim',
          }
        ],
      },
      {
        id: 'marital_status',
        label: 'Estado civil',
        value: maritalStatus,
        onchange: setMaritalStatus,
        type: 'select',
        options: estadoCivilOpcoes
      },
      {
        id: 'welfare_policy',
        label: 'Regime previdenciário',
        value: welfarePolicy,
        onchange: setWelfarePolicy,
        type: 'select',
        options: regimePrevidenciarioOpcoes
      },
      {
        id: 'schooling',
        label: 'Escolaridade',
        value: schooling,
        onchange: setSchooling,
        type: 'select',
        options: escolaridadeOpcoes
      },
      {
        id: 'workspace_address',
        label: 'Endereço de lotação',
        value: workspaceAddress,
        onchange: setWorkspaceAddress,
        type: 'text'
      }
    ],
    [
      {
        id: 'data_admissao',
        label: 'Data de admissão',
        value: dataAdmissao,
        onchange: mudarDataAdmissao,
        type: 'date'
      },
      {
        id: 'institutional_email',
        label: 'E-mail institucional',
        value: institutionalEmail,
        onchange: setInstitutionalEmail,
        type: 'text'
      },
      {
        id: 'personal_email',
        label: 'E-mail pessoal',
        value: personalEmail,
        onchange: setPersonalEmail,
        type: 'text'
      },
      {
        id: 'voter_registration_card',
        label: 'Título de eleitor',
        value: voterRegistrationCard,
        onchange: setVoterRegistrationCard,
        type: 'text'
      },
      {
        id: 'type_of_contract',
        label: 'Tipo de vínculo',
        value: typeOfContract,
        onchange: setTypeOfContract,
        type: 'select',
        options: vinculoOpcoes
      },
      {
        id: 'gender',
        label: 'Gênero',
        value: gender,
        onchange: setGender,
        type: 'select',
        options: generoOpcoes
      },
      {
        id: 'syndicate',
        label: 'Sindicalizado',
        value: syndicate,
        onchange: setSyndicate,
        type: 'select',
        options: [
          {
            id: false,
            nome: 'Não',
          },
          {
            id: true,
            nome: 'Sim',
          }
        ],
      },
      {
        id: 'personal_address',
        label: 'Endereço pessoal',
        value: personalAddress,
        onchange: setPersonalAddress,
        type: 'text'
      },
      {
        id: 'workspace_description',
        label: 'Descrição de lotação',
        value: workspaceDescription,
        onchange: setWorkspaceDescription,
        type: 'text'
      },
      {
        id: 'enderecoComercial',
        label: 'Endereço Comercial',
        value: enderecoComercial,
        onchange: setEnderecoComercial,
        type: 'text'
      }
    ],
    [
      {
        id: 'work_card',
        label: 'Carteira de trabalho',
        value: workCard,
        onchange: setWorkCard,
        type: 'text'
      },
      {
        id: 'mothers_name',
        label: 'Nome da mãe',
        value: mothersName,
        onchange: setMothersName,
        type: 'text'
      },
      {
        id: 'fathers_name',
        label: 'Nome do pai',
        value: fathersName,
        onchange: setFathersName,
        type: 'text'
      },
      {
        id: 'nationality',
        label: 'Nacionalidade',
        value: nationality,
        onchange: setNationality,
        type: 'select',
        options: nacionalidadeOpcoes
      },
      {
        id: 'borrowed_employee',
        label: 'Servidor cedido',
        value: borrowedEmployee,
        onchange: setBorrowedEmployee,
        type: 'select',
        options: [
          {
            id: false,
            nome: 'Não',
          },
          {
            id: true,
            nome: 'Sim',
          }
        ],
      },
      {
        id: 'retirement_ordinance',
        label: 'Portaria da aposentadoria',
        value: retirementOrdinance,
        onchange: setRetirementOrdinance,
        type: 'text'
      },
      {
        id: 'retirement_date',
        label: 'Data da aposentadoria',
        value: retirementDate,
        onchange: setRetirementDate,
        type: 'date'
      },
      {
        id: 'birth_date',
        label: 'Data de nascimento',
        value: birthDate,
        onchange: setBirthDate,
        type: 'date'
      },
      {
        id: 'retired',
        label: 'Aposentado',
        value: retired,
        onchange: setRetired,
        type: 'select',
        options: [
          {
            id: false,
            nome: 'Não',
          },
          {
            id: true,
            nome: 'Sim',
          }
        ],
      }
    ]
  ]

  const onChange = (obj) => {
    obj.data.onchange(obj.value)
  }

  const validar = () => {
    if (nome === '') {
      props.criarAlerta('error', 'Favor preencher o campo "nome"');
      return;
    }
    if (cpf === '') {
      props.criarAlerta('error', 'Favor preencher o campo "CPF"');
      return;
    }
    if (rg === '') {
      props.criarAlerta('error', 'Favor preencher o campo "RG"');
      return;
    }
    if (handicapped === '') {
      props.criarAlerta('error', 'Favor preencher se é portador(a) de deficiência"');
      return;
    }
    if (maritalStatus === '') {
      props.criarAlerta('error', 'Favor preencher o campo "estado civil"');
      return;
    }
    if (welfarePolicy === '') {
      props.criarAlerta('error', 'Favor preencher o campo "regime previdenciário"');
      return;
    }
    if (schooling === '') {
      props.criarAlerta('error', 'Favor preencher o campo "escolaridade"');
      return;
    }
    if (workspaceAddress === '') {
      props.criarAlerta('error', 'Favor preencher o campo "endereço de lotação"');
      return;
    }
    if (institutionalEmail === '') {
      props.criarAlerta('error', 'Favor preencher o campo "e-mail institucional"');
      return;
    }
    if (personalEmail === '') {
      props.criarAlerta('error', 'Favor preencher o campo "e-mail pessoal"');
      return;
    }
    if (voterRegistrationCard === '') {
      props.criarAlerta('error', 'Favor preencher o campo "título de eleitor"');
      return;
    }
    if (typeOfContract === '') {
      props.criarAlerta('error', 'Favor preencher o campo "tipo de vínculo"');
      return;
    }
    if (gender === '') {
      props.criarAlerta('error', 'Favor preencher o campo "gênero"');
      return;
    }
    if (syndicate === '') {
      props.criarAlerta('error', 'Favor preencher o campo "sindicato"');
      return;
    }
    if (personalAddress === '') {
      props.criarAlerta('error', 'Favor preencher o campo "endereço pessoal"');
      return;
    }
    if (workspaceDescription === '') {
      props.criarAlerta('error', 'Favor preencher o campo "descrição de lotação"');
      return;
    }

    if (mothersName === '') {
      props.criarAlerta('error', 'Favor preencher o campo "nome da mãe"');
      return;
    }
    if (fathersName === '') {
      props.criarAlerta('error', 'Favor preencher o campo "nome do pai"');
      return;
    }
    if (nationality === '') {
      props.criarAlerta('error', 'Favor preencher o campo "nacionalidade"');
      return;
    }
    if (borrowedEmployee === '') {
      props.criarAlerta('error', 'Favor preencher o campo "servidor cedido"');
      return;
    }
    if (retirementOrdinance === '') {
      props.criarAlerta('error', 'Favor preencher o campo "portaria da aposentadoria"');
      return;
    }
    if (retirementDate === '') {
      props.criarAlerta('error', 'Favor preencher o campo "data da aposentadoria"');
      return;
    }
    if (birthDate === '') {
      props.criarAlerta('error', 'Favor preencher o campo "data de nascimento"');
      return;
    }
    if (retired === '') {
      props.criarAlerta('error', 'Favor preencher o campo "aposentado"');
      return;
    }

    let obj = {
      carteira_trabalho: workCard,
      cpf: cpf,
      data_admissao: dataAdmissao,
      data_nascimento: birthDate,
      data_aposentadoria: retirementDate,
      dependentes: dependentes,
      email_funcional: institutionalEmail,
      email_pessoal: personalEmail,
      endereco_comercial: enderecoComercial,
      endereco_residencial: personalAddress,
      escolaridade_id: schooling,
      estado_civil_id: maritalStatus,
      foto: 'foto',
      lotacao_descricao: workspaceDescription,
      lotacao_endereco: workspaceAddress,
      mae: mothersName,
      matricula,
      nacionalidade_id: nationality,
      nome,
      pai: fathersName,
      portador_deficiencia: handicapped,
      portaria_aposentadoria: retirementOrdinance,
      regime_previdenciario_id: welfarePolicy,
      rg: rg,
      servidor_cedido: borrowedEmployee,
      sexo_id: gender,
      sindicalizado: syndicate,
      titulo_eleitor: voterRegistrationCard,
      vinculo_id: typeOfContract,
    }

    if (props.servidor.matricula) {
      props.editar(obj);
    } else {
      props.salvar(obj);
    }
  }

  const adicionarDependente = () => {
    if (dependenteNome === '') {
      props.criarAlerta('error', 'O nome do dependente não pode ser vazio.');
      return;
    }

    if (dependenteCpf === '') {
      props.criarAlerta('error', 'O CPF do dependente não pode ser vazio.');
      return;
    }

    if (dependenteDataNascimento === '') {
      props.criarAlerta('error', 'A data de nascimento do dependente não pode ser vazio.');
      return;
    }

    if (dependenteParentesco === '') {
      props.criarAlerta('error', 'O parentesco do dependente não pode ser vazio.');
      return;
    }

    let novosDependentes = [];
    dependentes.forEach(dependente => {
      novosDependentes.push(dependente);
    })

    novosDependentes.push({
      nome: dependenteNome,
      cpf: dependenteCpf,
      data_nascimento: dependenteDataNascimento,
      parentesco_id: dependenteParentesco
    })

    setDependentes(novosDependentes);
    setDependenteNome('');
    setDependenteCpf('');
    setDependenteDataNascimento('');
    setDependenteParentesco('');
  }

  return (
    <React.Fragment>
      <Row className='justify-content-evenly'>
        <Col className='align-self-center text-center' xs='10' sm='10' md='8' lg='3' xl='3'>
          <ReplaceImage props={`${process.env.PUBLIC_URL}/imgs/photo_woman_example.png`}/>
        </Col>
      </Row>
      <Row className='justify-content-evenly'>
        {data.map((column, index) => {
          return (
            <Col key={index} className='text-center' xs='10' sm='10' md='8' lg='3' xl='3'>
              {column.map(item => {
                return (
                  <ColumnItem
                    key={item.id}
                    data={item}
                    onChange={onChange}
                  />
                )
              })}
            </Col>
          )
        })}
      </Row>
      <div className="simple-space"></div>
      <div className="simple-space"></div>
      <Row className='justify-content-evenly'>
        <Col xs="10" sm="10" md='10' lg='10' xl='10'>
          <Paper variant="outlined">
            <Row className='justify-content-evenly'>
              <Col>
                <div className="simple-space"></div>
                <div className="simple-space"></div>
                <div className="title-div">
                  <h2 className="title">Dependentes</h2>
                </div>
              </Col>
            </Row>
            <div className="simple-space"></div>
          
            <Row className='justify-content-evenly'>
              <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                <Row>
                  <Col xs='12'>
                    <TextField
                      id='nome_dependente'
                      label='Nome'
                      value={dependenteNome}
                      onChange={(e) => setDependenteNome(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className='top-buffer'>
                  <Col xs='12' className="parentesco-fixed">
                    <FormControl style={{width: '100%'}}>
                      <InputLabel id='parentesco_dependente'>Parentesco</InputLabel>
                      <Select
                        id='parentesco_dependente'
                        value={dependenteParentesco}
                        onChange={(e) => setDependenteParentesco(e.target.value)}
                      >
                        <MenuItem value={''}>
                          Selecionar item
                        </MenuItem>
                        {parentescoOpcoes.map(item => {
                          return (
                            <MenuItem
                              key={item.id}
                              value={item.id}
                            >
                              {item.nome}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
              </Col>
              <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                <TextField
                  id='cpf_dependente'
                  label="CPF"
                  value={dependenteCpf}
                  onChange={(e) => setDependenteCpf(e.target.value)}
                />
              </Col>
              <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                <TextField
                  id='data_nascimento_dependente'
                  label='Data de nascimento'
                  type='date'
                  value={dependenteDataNascimento}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={(e) => setDependenteDataNascimento(e.target.value)}
                />
              </Col>
            </Row>
            <div className="simple-space"></div>
            <div className="simple-space"></div>
            <Row className='justify-content-evenly'>
              <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                <IconButton onClick={() => adicionarDependente()}>
                  <AddIcon />
                </IconButton>
              </Col>
            </Row>
            {dependentes.map((dependente, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="simple-space"></div>
                  <Row>
                    <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                      <h7>{`Dependente ${index + 1}`}</h7> 
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <DeleteIcon className="pointer" onClick={(e) => console.log('Remover dependente', index)}></DeleteIcon>
                    </Col>
                  </Row>
                  <div className="simple-space"></div>
                  <Row className='justify-content-evenly top-buffer'>
                    <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                      <Row>
                        <Col xs='12'>
                          <TextField
                            id={`nome_dependente-${index}`}
                            label="Nome"
                            value={dependente.nome}
                            onChange={(e) => console.log(e.target.value)}
                          />
                        </Col>
                      </Row>
                      <div className="simple-space"></div>
                      <Row>
                        <Col xs='12' className="parentesco-fixed">
                          <FormControl fullWidth={true}>
                            <InputLabel id={`parentesco_dependente-${index}`}>Parentesco</InputLabel>
                            <Select
                              id={`parentesco_dependente-${index}`}
                              value={dependente.parentesco_id}
                              onChange={(e) => console.log(e.target.value)}
                            >
                              <MenuItem value={''}>
                                Selecionar item
                              </MenuItem>
                              {parentescoOpcoes.map(item => {
                                return (
                                  <MenuItem
                                    key={item.id}
                                    value={item.id}
                                  >
                                    {item.nome}
                                  </MenuItem>
                                )
                              })}
                            </Select>
                          </FormControl>
                        </Col>
                      </Row>
                    </Col>
                    <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                      <TextField
                        id={`cpf_dependente-${index}`}
                        label="CPF"
                        value={dependente.cpf}
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </Col>
                    <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
                      <TextField
                        id={`data_nascimento_dependente-${index}`}
                        label="Data de nascimento"
                        type='date'
                        value={dependente.data_nascimento}
                        onChange={(e) => console.log(e.target.value)}
                        inputProps={{
                          readOnly: true,
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Col>
                  </Row>
                </React.Fragment>
              )
            })}
            <div className="simple-space"></div>
            <div className="simple-space"></div>
          </Paper>
        </Col>
      </Row>
      <div className="simple-space"></div>
      <Row className='justify-content-evenly'>
        <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='1'>
          <Button variant="contained" color="primary" disableElevation>Imprimir</Button>
        </Col>
        <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='1'>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => validar()}
          >
            Salvar
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default EmployeeFormData;