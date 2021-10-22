import { useEffect, useState, useCallback } from 'react';

const useWindowWidth = (screenSize) => {
  const [onSmallScreen, setonSmallScreen] = useState(false);

  const checkScreenSize = useCallback(() => {
    setonSmallScreen(window.innerWidth < screenSize);
  }, [screenSize]);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [checkScreenSize]);

  return onSmallScreen;
};

export default useWindowWidth;
