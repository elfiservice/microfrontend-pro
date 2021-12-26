import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress'

//parei aqui https://www.udemy.com/course/microfrontend-course/learn/lecture/23275292
//https://github.com/elfiservice/microfrontend-pro/pull/2

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'containerApp',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
            <Header />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth" component={AuthLazy} />
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
