import React from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';
import ListAltIcon from '@material-ui/icons/ListAlt';

import Grid from '../../components/Grid/Grid';

const HomePage = (props) => {
  const usuario = useSelector((state) => state.user);
  const historico = useHistory();

  const menu = [
    {
      id: 1,
      link: '/servidor/consulta',
      title: 'Servidores',
      disabled: false,
      icon: <PeopleIcon className='icon-item'/>
    },
    {
      id: 2,
      link: '/',
      title: 'Relatórios',
      disabled: false,
      icon: <ListAltIcon className='icon-item' />
    },
    {
      id: 3,
      link: '/',
      title: 'Declaração',
      disabled: false,
      icon: <DescriptionIcon className='icon-item' />
    },
    {
      id: 4,
      link: '/2',
      title: 'Financeiro',
      disabled: true,
      icon: <AttachMoneyIcon className='icon-item' />
    }
  ]

  const mudarPagina = (data) => {
    if(data === '/'){
      alert('Em construção!')
    } else if (data === '/2') {
      alert('A ser desenvolvido!')
    } else {
      historico.push(data)
    }
  }

  return (
    <Container>
      <Row className='App-vertical'>
        <Col className='align-self-center' xs='12'>
          <Row>
            <Col>
              {usuario?
                <div className='text-title'>
                  {`Bem-vindo, ${usuario.nome}`}
                </div>
              :
                null
              }
            </Col>
          </Row>
          <Row>
            <Grid
              data={menu}
              click={mudarPagina}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage;