import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Content from './components/Content';
import FirstContent from './components/FirstContent';

export const useRoutes = (isLogin) => {
  if (isLogin) {
    return (
      <Switch>
        <Route path="/techniques" exact component={Content} />
        <Redirect to="/techniques" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/login" exact component={FirstContent} />
      <Redirect to="/login" />
    </Switch>
  )
}