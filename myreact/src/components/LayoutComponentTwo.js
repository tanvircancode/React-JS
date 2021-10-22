
import useWindowWidth from './hooks/useWindowWidth';

export default function LayoutComponentTwo() {
  const onSmallScreen = useWindowWidth();
  return (
    <div className={onSmallScreen ? 'small' : 'Large'}>
      This is another Component
    </div>
  );
}
