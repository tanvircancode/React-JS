
import useWindowWidth from './hooks/useWindowWidth';

export default function LayoutComponentTwo() {
  const onSmallScreen = useWindowWidth(700);
  return (
    <div className={onSmallScreen ? 'small' : 'Large'}>
      This is another Component
    </div>
  );
}
