import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/fonts/fonts.css';
import FirstSection from './components/Main/FirstSection';
import SecondSection from './components/Main/SecondSection';
import ThirdSection from './components/Main/ThirdSection';
import FourthSection from './components/Main/FourthSection';

function App() {
  console.log('초기세팅 완료');

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
