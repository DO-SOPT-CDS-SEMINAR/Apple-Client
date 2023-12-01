import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/fonts/fonts.css';
import Router from './Router';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
