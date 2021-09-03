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
  const user = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user])

  return (
    <React.Fragment>
      {user
        ?<Header />
        :null
      }
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/employee/consultation">
          <EmployeeConsultationPage />
        </Route>
        <Route path="/employee/form">
          <EmployeeFormPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      {user
        ?<Footer />
        :null
      }
    </React.Fragment>
  )
}

export default Root;