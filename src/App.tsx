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
<<<<<<< HEAD
=======
        <Router />
>>>>>>> 068e8ee7511e4c05afebd2cf98daab6ae3350f25
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
