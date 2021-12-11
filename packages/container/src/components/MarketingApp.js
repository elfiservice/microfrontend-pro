import { mount } from 'marketingRemote/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  const config = {
    onNavigate: () => {
      console.log('Container informando Navegação no Marketing App');
    },
  };

  useEffect(() => {
    mount(ref.current, config);
  });

  return <div ref={ref} />;
};
