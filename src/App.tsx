import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import styled, { css } from 'styled-components';
import './styles/fonts/fonts.css';
import { Dropdown } from './components/Dropdown';

function App() {
  console.log('초기세팅 완료');
  const handleSelectChange = (combinedValue: string) => {
    console.log(combinedValue);
  };

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* Router 추가해야 함 !  */}
        <BlueHeading>적용 잘됨 확인!</BlueHeading>
        <Dropdown onSelection={handleSelectChange} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

const BlueHeading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.pointColor.blue0};
    ${theme.fonts.heading1};
  `}
`;

export default App;
