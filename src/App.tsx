import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import styled, { css } from 'styled-components';
import './styles/fonts/fonts.css';
import { BuyButton } from './common/Button/BuyButton';
import { DefaultButton } from './common/Button/DefaultButton';
import { DisplayTypeButton } from './common/Button/DisplayTypeButton';
import { GigaTypeButton } from './common/Button/GigaTypeButton';
import { AddToCartButton } from './common/Button/AddToCartButton';

function App() {
  console.log('초기세팅 완료');

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* Router 추가해야 함 !  */}
        <BlueHeading>적용 잘됨 확인!</BlueHeading>
        <BuyButton>구입하기</BuyButton>
        <DefaultButton>button</DefaultButton>
        <DisplayTypeButton title='Title' subtext='subtext' price={1729000} disabled />
        <GigaTypeButton giga={128} price={1729000} disabled />
        <AddToCartButton>장바구니에 담기</AddToCartButton>
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
