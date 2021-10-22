import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [onSmallScreen, setonSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setonSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return onSmallScreen;
};

export default useWindowWidth;
