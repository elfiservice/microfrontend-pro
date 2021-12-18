import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

//parei aqui https://www.udemy.com/course/microfrontend-course/learn/lecture/23275268#notes

const generateClassName = createGenerateClassName({
  productionPrefix: 'containerApp',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
            <Header />
            <Switch>
              <Route path="/auth" component={AuthApp} />
              <Route path="/" component={MarketingApp} />
            </Switch>
            <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
