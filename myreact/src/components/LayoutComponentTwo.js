import { useEffect, useState } from 'react';

export default function LayoutComponentOne() {
  const [onSmallScreen, setonSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setonSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  });
  return (
    <div className={onSmallScreen ? 'small' : 'Large'}>
      This is another Component{' '}
    </div>
  );
}
