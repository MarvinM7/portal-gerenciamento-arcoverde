import React from 'react';

import { Switch, Route } from "react-router-dom";

import Header from '../layout/Header';
import Footer from '../layout/Footer';

import LoginPage from './Login/Login';
import HomePage from './Home/Home';
import EmployeeConsultationPage from './EmployeeConsultation/EmployeeConsultation';
import EmployeeFormPage from './EmployeeForm/EmployeeForm';

const Root = () => {
  return (
    <React.Fragment>
      <Header />
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
      <Footer />
    </React.Fragment>
  )
}

export default Root;