import React from 'react';
import ReactDOM from 'react-dom';
// creado esse history para que cada Microfront fique independente na navegação
// https://www.udemy.com/course/microfrontend-course/learn/lecture/23241682#notes
import { createMemoryHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, config) => {
  const { onNavigate } = config;
  const history = createMemoryHistory();

  const noticeContainerApp = {
    onParentNavigate(location) {
      const { pathname: nextPathname } = location;
      const { pathname } = history.location;
      
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  };

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return noticeContainerApp;
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, {});
  }
}

// We are running through container
// and we should export the mount function
export { mount };
