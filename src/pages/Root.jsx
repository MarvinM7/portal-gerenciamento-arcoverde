import React, { useEffect } from 'react';

import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

import LoginPage from './Login/Login';
import HomePage from './Home/Home';
import EmployeeConsultationPage from './EmployeeConsultation/EmployeeConsultation';
import EmployeeFormPage from './EmployeeForm/EmployeeForm';

const Root = () => {
  const usuario = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!usuario) {
      history.push('/login');
    }
  }, [history, usuario])

  return (
    <React.Fragment>
      {usuario
        ?<Header />
        :null
      }
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/servidor/consulta">
          <EmployeeConsultationPage />
        </Route>
        <Route path="/servidor/formulario/:matricula?">
          <EmployeeFormPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      {usuario
        ?<Footer />
        :null
      }
    </React.Fragment>
  )
}

export default Root;