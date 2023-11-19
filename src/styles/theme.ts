import { css, DefaultTheme } from 'styled-components';

const colors = {
  grayScale: {
    white: '#ffffff',
    gray1: '#81B7FF',
    gray2: '#fafafa',
    gray3: '#f5f5f7',
    gray4: '#ebebee',
    gray5: '#e2e2e4',
    gray6: '#86868b',
    gray7: '#6e6e73',
    gray8: '#424245',
    black: '#000000',
  },
  pointColor: {
    red0: '#e30000',
    orange0: '#b74800',
    blue0: '#0066cc',
    blue1: '#0071e3',
    blue2: '#2997ff',
  },
  subColor: {
    purple: '#635b61',
  },
  swatchColor: {
    yellow: '#EFD96B',
    coral: '#DD7282',
    silver: '#B5B7B9',
    navy: '#768DAA',
    turquoise: '#95B7C6',
    skyblue: '#ABD0F0',
    pink: '#E8D1CE',
    purple: '#C1C0D6',
    beige: '#e7e3dd',
    spacegray: '#4F4B4A',
    lightSilver: '#F2F1EF',
  },
};

const fonts = {
  heading1: css`
    font-family: 'SF-Pro-Display-Semibold';
    font-size: 4.8rem;
    line-height: 140%;
    letter-spacing: -0.4rem;
  `,
  heading2: css`
    font-family: 'SF-Pro-Display-Semibold';
    font-size: 4rem;
    line-height: 140%;
    letter-spacing: 0rem;
  `,
  heading3: css`
    font-family: 'SF-Pro-Display-Semibold';
    font-size: 3.6rem;
    line-height: 140%;
    letter-spacing: 0rem;
  `,
  heading4: css`
    font-family: 'SF-Pro-Display-Semibold';
    font-size: 3.2rem;
    line-height: 140%;
    letter-spacing: 0rem;
  `,
  subheading1: css`
    font-family: 'SF-Pro-Display-Bold';
    font-size: 2.8rem;
    line-height: 140%;
    letter-spacing: -0.1rem;
  `,
  subheading1_1: css`
    font-family: 'SF-Pro-Display-Bold';
    font-size: 2.8rem;
    line-height: 140%;
    letter-spacing: -0.18rem;
  `,
  subheading2: css`
    font-family: 'SF-Pro-Display-Semibold';
    font-size: 2.4rem;
    line-height: 160%;
    letter-spacing: -0.18rem;
  `,
  subheading3: css`
    font-family: 'SF-Pro-Display-Semibold';
    font-size: 2.4rem;
    line-height: 140%;
    letter-spacing: -0.14rem;
  `,
  footnote: css`
    font-family: 'SF-Pro-Display-Bold';
    font-size: 2.4rem;
    line-height: 140%;
    letter-spacing: -0.18rem;
  `,
  subheading4: css`
    font-family: 'SF-Pro-Display-Bold';
    font-size: 2.1rem;
    line-height: 140%;
    letter-spacing: 0rem;
  `,
  body1: css`
    font-family: 'SF-Pro-Display-Semibold';
    font-size: 1.7rem;
    line-height: 140%;
    letter-spacing: 0rem;
  `,
  body1_1: css`
    font-family: 'SF-Pro-Display-Semibold';
    font-size: 1.7rem;
    line-height: 140%;
    letter-spacing: -0.06rem;
  `,
  body1_2: css`
    font-family: 'SF-Pro-Display-Regular';
    font-size: 1.6rem;
    line-height: 140%;
    letter-spacing: 0rem;
  `,
  body2: css`
    font-family: 'SF-Pro-Display-Regular';
    font-size: 1.4rem;
    line-height: 140%;
    letter-spacing: 0rem;
  `,
  body3: css`
    font-family: 'SF-Pro-Display-Semibold';
    font-size: 1.4rem;
    line-height: 160%;
    letter-spacing: 0rem;
  `,
  body3_1: css`
    font-family: 'SF-Pro-Display-Regular';
    font-size: 1.4rem;
    line-height: 160%;
    letter-spacing: -0.1rem;
  `,
  body3_2: css`
    font-family: 'SF-Pro-Display-Regular';
    font-size: 1.2rem;
    line-height: 140%;
    letter-spacing: 0rem;
  `,
  caption1: css`
    font-family: 'SF-Pro-Display-Semibold';
    font-size: 1.2rem;
    line-height: 140%;
    letter-spacing: 0rem;
  `,
  caption2: css`
    font-family: 'SF-Pro-Display-Regular';
    font-size: 1.2rem;
    line-height: 140%;
    letter-spacing: 0rem;
  `,
  nb_en: css`
    font-family: 'SF-Pro-Display-Regular';
    font-size: 1.2rem;
    line-height: 140%;
    letter-spacing: -0.02rem;
  `,
  nb_kr: css`
    font-family: 'SF-Pro-Display-Regular';
    font-size: 1.2rem;
    line-height: 140%;
    letter-spacing: -0.16rem;
  `,
};

const Theme: DefaultTheme = {
  colors,
  fonts,
};

export default Theme;
