import styled from 'styled-components';

interface ProductInfoProps {
  $isHovered: boolean;
  $isSecondBox: boolean;
}

export const ProductName = styled.h1`
  position: absolute;
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  z-index: 2;
`;

// eslint-disable-next-line prettier/prettier
export const ProductInfo = styled.div<ProductInfoProps>`
  position: absolute;
  z-index: 2;

  top: 3rem;
  left: 3rem;

  & > h1 {
    margin-top: 1.3rem;
    ${({ theme: { fonts } }) => fonts.subheading1_1};
    color: ${({ $isHovered, $isSecondBox, theme: { colors } }) =>
      $isHovered || $isSecondBox ? colors.grayScale.gray4 : colors.grayScale.gray8};
    z-index: 10;
    white-space: pre-line;
  }

  & > p {
    ${({ theme: { fonts } }) => fonts.caption1};
    color: ${({ $isHovered, $isSecondBox, theme: { colors } }) =>
      $isHovered || $isSecondBox ? colors.grayScale.gray4 : colors.grayScale.gray5};
  }
  z-index: 10;
`;

export const ProductImg = styled.img`
  width: 100%;
  position: absolute;
`;

export const Btn = styled.div`
  position: relative;

  width: 40rem;
  height: 50rem;
  margin-right: 2.2rem;
  border-radius: 1.8rem;

  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
`;
