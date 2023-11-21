import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/fonts/fonts.css';
import Gnb from './common/Gnb/index';
import Banner from './common/Banner';

function App() {
  console.log('초기세팅 완료');

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* Router 추가해야 함 !  */}
        <Gnb />
        <Banner />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
