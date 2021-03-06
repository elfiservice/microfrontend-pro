import { mount } from 'authRemote/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  const config = {
    initialPath: history.location.pathname,
    onNavigate: (location) => {
      const { pathname: nextPathname } = location;
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
    onSignIn
  };

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, config);

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
