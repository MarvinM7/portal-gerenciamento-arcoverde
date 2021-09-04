import React, { useState } from "react";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './EmployeeForm.css';
import logo from './image 7.png';
import theme from './EmployeeFormTheme';
import profile from './Mask Group.png';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import IconButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ColumnItem from "../../components/ColumnItem/ColumnItem";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const EmployeeFormPage = () => {
  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const [serviceTime, setServiceTime] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [handicapped, setHandicapped] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [welfarePolicy, setWelfarePolicy] = useState('');
  const [schooling, setSchooling] = useState('');
  const [workspaceAddress, setWorkspaceAddress] = useState('');

  const [institutionalEmail, setInstitutionalEmail] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');
  const [voterRegistrationCard, setVoterRegistrationCard] = useState('');
  const [typeOfContract, setTypeOfContract] = useState('');
  const [gender, setGender] = useState('');
  const [syndicate, setSyndicate] = useState('');
  const [personalAddress, setPersonalAddress] = useState('');
  const [workspaceDescription, setWorkspaceDescription] = useState('');

  const [mothersName, setMothersName] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [nationality, setNationality] = useState('');
  const [borrowedEmployee, setBorrowedEmployee] = useState('');
  const [retirementOrdinance, setRetirementOrdinance] = useState('');
  const [retirementDate, setRetirementDate] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [retired, setRetired] = useState('');

  const data = [
    [
      {
        id: 'service_time',
        label: 'Tempo de serviço',
        value: serviceTime,
        onchange: setServiceTime,
        type: 'text'
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
        type: 'text'
      },
      {
        id: 'marital_status',
        label: 'Estado civil',
        value: maritalStatus,
        onchange: setMaritalStatus,
        type: 'text'
      },
      {
        id: 'welfare_policy',
        label: 'Regime previdenciário',
        value: welfarePolicy,
        onchange: setWelfarePolicy,
        type: 'text'
      },
      {
        id: 'schooling',
        label: 'Escolaridade',
        value: schooling,
        onchange: setSchooling,
        type: 'text'
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
        type: 'text'
      },
      {
        id: 'gender',
        label: 'Gênero',
        value: gender,
        onchange: setGender,
        type: 'text'
      },
      {
        id: 'syndicate',
        label: 'Sindicato',
        value: syndicate,
        onchange: setSyndicate,
        type: 'text'
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
      }
    ],
    [
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
        type: 'text'
      },
      {
        id: 'borrowed_employee',
        label: 'Servidor cedido',
        value: borrowedEmployee,
        onchange: setBorrowedEmployee,
        type: 'text'
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
        type: 'text'
      },
      {
        id: 'birth_date',
        label: 'Data de nascimento',
        value: birthDate,
        onchange: setBirthDate,
        type: 'text'
      },
      {
        id: 'retired',
        label: 'Aposentado',
        value: retired,
        onchange: setRetired,
        type: 'text'
      }
    ]
  ]

  const onChange = (obj) => {
    obj.data.onchange(obj.value)
  }

  const save = () => {
    if (serviceTime === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "tempo de serviço"'
      })
      setShowAlert(true);
      return;
    }
    if (cpf === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "CPF"'
      })
      setShowAlert(true);
      return;
    }
    if (rg === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "RG"'
      })
      setShowAlert(true);
      return;
    }
    if (handicapped === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher se é portador(a) de deficiência"'
      })
      setShowAlert(true);
      return;
    }
    if (maritalStatus === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "estado civil"'
      })
      setShowAlert(true);
      return;
    }
    if (welfarePolicy === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher regime previdenciário"'
      })
      setShowAlert(true);
      return;
    }
    if (schooling === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "escolaridade"'
      })
      setShowAlert(true);
      return;
    }
    if (workspaceAddress === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "endereço de lotação"'
      })
      setShowAlert(true);
      return;
    }
    if (institutionalEmail === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "e-mail institucional"'
      })
      setShowAlert(true);
      return;
    }
    if (personalEmail === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "e-mail pessoal"'
      })
      setShowAlert(true);
      return;
    }
    if (voterRegistrationCard === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "título de eleitor"'
      })
      setShowAlert(true);
      return;
    }
    if (typeOfContract === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "tipo de vínculo"'
      })
      setShowAlert(true);
      return;
    }
    if (gender === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "gênero"'
      })
      setShowAlert(true);
      return;
    }
    if (syndicate === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "sindicato"'
      })
      setShowAlert(true);
      return;
    }
    if (personalAddress === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "endereço pessoal"'
      })
      setShowAlert(true);
      return;
    }
    if (workspaceDescription === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "descrição de lotação"'
      })
      setShowAlert(true);
      return;
    }

    if (mothersName === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "nome da mãe"'
      })
      setShowAlert(true);
      return;
    }
    if (fathersName === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "nome do pai"'
      })
      setShowAlert(true);
      return;
    }
    if (nationality === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "nacionalidade"'
      })
      setShowAlert(true);
      return;
    }
    if (borrowedEmployee === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "servidor cedido"'
      })
      setShowAlert(true);
      return;
    }
    if (retirementOrdinance === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "portaria da aposentadoria"'
      })
      setShowAlert(true);
      return;
    }
    if (retirementDate === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "data da aposentadoria"'
      })
      setShowAlert(true);
      return;
    }
    if (birthDate === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "data de nascimento"'
      })
      setShowAlert(true);
      return;
    }
    if (retired === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o campo "aposentado"'
      })
      setShowAlert(true);
      return;
    }
  }

  return (
    <React.Fragment>
      {showAlert
        ? <Alert
          severity={alert.severity}
          onClose={() => setShowAlert(false)}
        >
          {alert.content}
        </Alert>
        : null
      }
      <Container>
        <Row>
          <Row>
            <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
              <div className="simple-space"></div>
            </Col>
            <Col>
            </Col>
          </Row>
        </Row>
        <Row className='justify-content-evenly'>
          <Col>
            <div className="title-div">
              <h2 className="title">Servidor</h2>
            </div>
          </Col>
        </Row>
        <Row></Row><Row></Row><Row></Row>
        <Row className='justify-content-evenly'>
          <Row>
            <Col xs='10' sm='4' md='3' lg='3' xl='1'></Col>
            <Col xs='10' sm='4' md='3' lg='3' xl='3'>
              <img src={profile} className="foto-servidor"></img>
            </Col>
            <Col xs='10' sm='4' md='3' lg='3' xl='3'>
              <Row>
                <TextField style={{ "minWidth": "300px" }} id="standard-disabled" label="Nome" defaultValue="Ana Tereza Cristiana da Costa" InputProps={{ readOnly: true }} />
              </Row>
              <Row>
                <TextField style={{ "minWidth": "300px" }} id="standard-disabled" label="CPF" defaultValue="20180123" InputProps={{ readOnly: true }} />
              </Row>
              <Row>
                <TextField style={{ "minWidth": "280px" }} id="standard-disabled" label="Matrícula" defaultValue="13/06/2018" InputProps={{ readOnly: true }} />
              </Row>
            </Col>
            <Col xs='10' sm='4' md='3' lg='3' xl='1'></Col>
            <Col xs='10' sm='4' md='3' lg='3' xl='2'>
              <Row>
                <TextField style={{ "minWidth": "300px" }} id="standard-disabled" label="RG" defaultValue="123.456.789-10" InputProps={{ readOnly: true }} />
              </Row>
              <Row>
                <TextField style={{ "minWidth": "300px" }} id="standard-disabled" label="Data de admissão" defaultValue="987654" InputProps={{ readOnly: true }} />
              </Row>
              <Row>
                <TextField style={{ "minWidth": "300px" }} id="standard-disabled" label="Carteira de trabalho" defaultValue="123456789" InputProps={{ readOnly: true }} />
              </Row>
            </Col>
          </Row>
        </Row>
        <Row className='justify-content-evenly'>
          <Row></Row><Row></Row><Row></Row>
          <Col></Col>
          <div className="simple-space"></div>
          <Col xs='10' sm='4' md='3' lg='3' xl='1'>
            <IconButton component="span"> <PrintIcon /> </IconButton>
          </Col>
          <Col xs='10' sm='4' md='3' lg='3' xl='1'>
            <Button variant="contained" color="primary" disableElevation>Dados cadastrais</Button>
          </Col>
          <Col xs='10' sm='4' md='3' lg='3' xl='1'>
            <Button variant="contained" color="secondary" disableElevation>Ocorrências</Button>
          </Col>
          <Col xs='10' sm='4' md='3' lg='3' xl='1'>
            <Button variant="contained" color="secondary" disableElevation>Afastamentos</Button>
          </Col>
          <Col xs='10' sm='4' md='3' lg='3' xl='1'>
            <IconButton> <EditIcon /> </IconButton>
          </Col>
          <div className="simple-space"></div>
          <div className="simple-space"></div>
        </Row>
        <Row></Row><Row></Row><Row></Row>
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
        <Row className='justify-content-evenly'>
          <Row className='justify-content-evenly'>
            <Col>
              <div className="simple-space"></div>
              <div className="simple-space"></div>
              <div className="title-div">
                <h2 className="title">Dependentes</h2>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-evenly'>
            <Col>
              <div className="simple-space"></div>
              <h7>Dependente 1</h7>
              <div className="simple-space"></div>
            </Col>
          </Row>
          <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
            <Row>
              <TextField id="standard-disabled" label="Nome" defaultValue="Cristina Filha" InputProps={{ readOnly: true }} />
            </Row>
          </Col>
          <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
            <Row>
              <TextField id="standard-disabled" label="CPF" defaultValue="123.456.789-10" InputProps={{ readOnly: true }} />
            </Row>
          </Col>
          <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
            <Row>
              <TextField id="standard-disabled" label="Data de nascimento" defaultValue="10/07/2010" InputProps={{ readOnly: true }} />
            </Row>
          </Col>
        </Row>
        <Row className='justify-content-evenly'>
          <Row>
            <div className="simple-space"></div>
            <div className="simple-space"></div>
          </Row>
          <Row>
            <Col></Col>
            <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
              <Button variant="contained" color="primary" disableElevation>Salvar</Button>
            </Col>
            <Col className='text-center' xs='10' sm='4' md='3' lg='3' xl='3'>
              <Button variant="contained" color="primary" disableElevation>Adicionar dependente</Button>
            </Col>
            <Col></Col>
          </Row>
        </Row>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
        <div className="simple-space"></div>
      </Container>
    </React.Fragment>
  )
}

export default EmployeeFormPage;
