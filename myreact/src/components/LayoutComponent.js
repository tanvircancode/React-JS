import useWindowWidth from './hooks/useWindowWidth';

export default function LayoutComponentOne() {
  const onSmallScreen = useWindowWidth();

  return <div>You are working on {onSmallScreen ? 'small' : 'Large'}</div>;
}
