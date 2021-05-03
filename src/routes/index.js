import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  Dashboard, EditNotification, EditOperator, Login, PushNotification, Statistic,
} from '../pages';

function index() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/pushNotification" component={PushNotification} />
      <Route path="/editNotification" component={EditNotification} />
      <Route path="/statistic" component={Statistic} />
      <Route path="/editOperator" component={EditOperator} />
      <Redirect to="/dashboard" />
    </Switch>
  );
}

export default index;
