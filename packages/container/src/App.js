import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

// parei aqui https://www.udemy.com/course/microfrontend-course/learn/lecture/23241664#notes

const generateClassName = createGenerateClassName({
  productionPrefix: 'containerApp',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
            <Header />
            <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
