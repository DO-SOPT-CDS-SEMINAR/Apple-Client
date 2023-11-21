import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/fonts/fonts.css';
import Gnb from './common/Gnb/index';
import Banner from './common/Banner';
import Nb from './common/Nb';

function App() {
  console.log('초기세팅 완료');

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Gnb />
        <Banner />
        <Nb />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
