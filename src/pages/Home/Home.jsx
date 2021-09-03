import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleIcon from '@material-ui/icons/People';

import Grid from '../../components/Grid/Grid';

const HomePage = (props) => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const menu = [
    {
      id: 1,
      link: '/employee/consultation',
      title: 'Servidores',
      icon: <PeopleIcon className='icon-item'/>
    },
    {
      id: 2,
      link: '/',
      title: 'Relatórios',
      icon: <PeopleIcon className='icon-item' />
    },
    {
      id: 3,
      link: '/',
      title: 'Declaração',
      icon: <PeopleIcon className='icon-item' />
    },
    {
      id: 4,
      link: '/',
      title: 'Financeiro',
      icon: <AttachMoneyIcon className='icon-item' />
    }
  ]

  const changePage = (data) => {
    history.push(data)
  }

  return (
    <Container>
      <Row className='App-vertical'>
        <Col className='align-self-center' xs='12'>
          <Row>
            <Col>
              {user
                ?<div className='text-title'>
                  {`Bem-vindo, ${user.name}`}
                </div>
                :null
              }
            </Col>
          </Row>
          <Row>
            <Grid
              data={menu}
              click={changePage}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage;