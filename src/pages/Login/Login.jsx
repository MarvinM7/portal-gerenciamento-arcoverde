import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Alert from '@material-ui/lab/Alert';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

  const loginFunction = () => {
    setShowAlert(false);
    if (login === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher o login'
      })
      setShowAlert(true);
    } else if (password === '') {
      setAlert({
        severity: 'error',
        content: 'Favor preencher a senha'
      })
      setShowAlert(true);
    } else {
      //AJUSTE rotina de logar
      let obj = {
        id: 1,
        name: 'João Bernardo',
        email: 'joao.bernardo@gmail.com',
        imagem: 'imagem',
        token: 'token'
      }
      dispatch({ type: 'LOGIN', obj });
    }
  }

  const forgotPasswordFunction = () => {
    setShowAlert(false);
    //AJUSTE rotina de esqueceu a senha
    let severity;
    let content;
    if (login === '') {
      severity = 'error';
      content = 'Favor preencher o login';
    } else {
      if (true) {
        severity = 'success';
        content = 'Acesse seu e-mail para recuperar a senha';
      } else {
        severity = 'error';
        content = 'Erro';
      }
    }
    
    setAlert({
      severity,
      content
    })
    setShowAlert(true);
  }

  return (
    <React.Fragment>
      {showAlert
        ?<Alert
          severity={alert.severity}
          onClose={() => setShowAlert(false)}
        >
          {alert.content}
        </Alert>
        :null
      }
      <Container>
        <Row className='justify-content-center App-vertical'>
          <Col className='align-self-center' xs='11' sm='10' md='9' lg='7' xl='5'>
            <Row>
              <Col className='text-center'>
                <img src={process.env.PUBLIC_URL + '/imgs/logo.png'} alt={'Logo'} />
              </Col>
            </Row>
            <Row className='login-form'>
              <Col className='text-center'>
                <Typography>
                  Sistema de servidores
                </Typography>
              </Col>
            </Row>
            <Row className='login-form'>
              <TextField
                variant='outlined'
                id='login'
                label='Login'
                defaultValue={login}
                autoComplete='login'
                onChange={(e) => setLogin(e.target.value)}
              />
            </Row>
            <Row className='login-form'>
              <TextField
                variant='outlined'
                id='password'
                label='Senha'
                defaultValue={password}
                autoComplete='current-password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Row>
            <Row className='login-form'>
              <Button
                variant='contained'
                color="primary"
                onClick={loginFunction}
              >
                Acessar
              </Button>
            </Row>
            <Row className='login-form'>
              <Button
                color="primary"
                onClick={forgotPasswordFunction}
              >
                Recuperar senha
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default LoginPage;