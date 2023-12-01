import styled from 'styled-components';

interface ProductInfoProps {
  $isHovered: boolean;
  $isFirst: boolean;
}
interface FirstBtnProps {
  $isFirst: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ProductInfo = styled.div<ProductInfoProps>`
  position: absolute;
  z-index: 2;

  bottom: ${({ $isFirst }) => ($isFirst ? '36.2rem' : '3.13rem')};
  left: 1.8rem;

  & > h1 {
    margin-bottom: 2rem;
    ${({ $isFirst, theme: { fonts } }) => ($isFirst ? fonts.subheading1_1 : fonts.body1_1)};

    color: ${({ $isHovered, theme: { colors }, $isFirst }) =>
      $isFirst
        ? colors.grayScale.gray8
        : $isHovered
          ? colors.grayScale.gray4
          : colors.grayScale.gray8};

    z-index: 10;
    white-space: pre-line;
  }

  & > h2 {
    margin-bottom: 0.8rem;

    color: ${({ $isHovered, theme: { colors } }) =>
      $isHovered ? colors.grayScale.gray4 : colors.pointColor.orange0};
    ${({ theme: { fonts } }) => fonts.caption1};

    z-index: 10;
  }

  & > p {
    ${({ theme: { fonts } }) => fonts.body1_2};
    color: ${({ $isHovered, theme: { colors } }) =>
      $isHovered ? colors.grayScale.gray4 : colors.grayScale.gray8};
  }
  z-index: 10;
`;

// eslint-disable-next-line prettier/prettier
export const ProductImg = styled.img<FirstBtnProps>`
  position: absolute;

  width: ${({ $isFirst }) => ($isFirst ? '42rem' : '23rem')};
  left: ${({ $isFirst }) => ($isFirst ? '-1rem' : '4.15rem')};
`;

// eslint-disable-next-line prettier/prettier
export const ImgWrapper = styled.div<FirstBtnProps>`
  width: 27.1rem;
  height: 28.1rem;

  margin-top: ${({ $isFirst }) => ($isFirst ? '0' : '7.07rem')};
  margin-left: ${({ $isFirst }) => ($isFirst ? '0' : '1.8rem')};

  padding: 0 2.35rem;
`;

// eslint-disable-next-line prettier/prettier
export const Btn = styled.div<FirstBtnProps>`
  position: relative;

  width: ${({ $isFirst }) => ($isFirst ? '40rem' : '31.3rem')};
  height: 50rem;
  margin-right: 2.2rem;
  border-radius: 1.8rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};

  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
`;
