import React from 'react';
import ReactDOM from 'react-dom';
// creado esse history para que cada Microfront fique independente na navegação
// https://www.udemy.com/course/microfrontend-course/learn/lecture/23241682#notes
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, config) => {
  const { onNavigate, onSignIn, defaultHistory, initialPath } = config;
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

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

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return noticeContainerApp;
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    const config = {
      defaultHistory: createBrowserHistory()
    };

    mount(devRoot, config);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
