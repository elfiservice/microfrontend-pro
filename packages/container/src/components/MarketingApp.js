import { mount } from 'marketingRemote/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  const config = {
    onNavigate: (location) => {
      const { pathname: nextPathname } = location;
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, config);

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
