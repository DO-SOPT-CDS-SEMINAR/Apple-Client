import styled from 'styled-components';

interface ProductInfoProps {
  $isHovered: boolean;
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
    margin-bottom: 1rem;
    ${({ theme: { fonts } }) => fonts.subheading1_1};
    color: ${({ $isHovered, theme: { colors } }) =>
      $isHovered ? colors.grayScale.gray4 : colors.grayScale.gray8};
    z-index: 10;
  }

  & > h2 {
    margin-bottom: 0.8rem;

    color: ${({ $isHovered, theme: { colors } }) =>
      $isHovered ? colors.grayScale.gray4 : colors.grayScale.gray6};
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

export const ProductImg = styled.img`
  width: 100%;
  position: absolute;
`;

export const Btn = styled.div`
  position: relative;

  width: 48rem;
  height: 50rem;
  margin-right: 2.2rem;
  border-radius: 1.8rem;

  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
`;
