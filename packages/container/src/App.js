import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

// parei aqui https://www.udemy.com/course/microfrontend-course/learn/lecture/23207052#overview

export default () => {
  return (
    <BrowserRouter>
      <div>
          <Header />
          <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
