// import './assets/css/dark.css';
import Tutorial from './components/Tutorial';
import GlobalStyle from './components/styles/Global.styles';
import { ThemeProvider } from 'styled-components';
export default function App() {
  const theme = {
    currentTheme: 'dark',
  };
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme.currentTheme === 'dark' ? 'dark' : 'light'}>
        <Tutorial />
      </ThemeProvider>
    </>
  );
}
