import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/fonts/fonts.css';
import Nb from './common/Nb';
import Gnb from './common/Gnb';

function App() {
  console.log('초기세팅 완료');

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Gnb />
        <Nb />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
