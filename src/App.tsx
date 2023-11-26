import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/fonts/fonts.css';
import AddAccssoryPage from './pages/AddAccessory/AddAccssory';

function App() {
  console.log('초기세팅 완료');

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AddAccssoryPage />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
