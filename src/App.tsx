import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/fonts/fonts.css';
import { ColumnCarouselWrapper } from './components/ColumnCarousel/ColumnCarouselWrapper';

function App() {
  console.log('초기세팅 완료');

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ColumnCarouselWrapper />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
