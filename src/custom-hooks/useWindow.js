import { useState, useLayoutEffect } from 'react';

const useWindowResize = () => {
  const [sizes, setSizes] = useState({
    width: null,
    height: null,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSizes({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { sizes };
};

export default useWindowResize;
