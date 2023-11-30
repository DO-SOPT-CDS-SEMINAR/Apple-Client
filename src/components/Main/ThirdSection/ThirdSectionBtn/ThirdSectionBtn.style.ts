import styled from 'styled-components';

interface ProductInfoProps {
  $isHovered: boolean;
}

interface SpecialSizeProps {
  $isSpecialSize: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ProductInfo = styled.div<ProductInfoProps>`
  position: absolute;

  width: 20.4rem;
  top: 8.7rem;
  left: 3rem;

  z-index: 10;

  & > h1 {
    ${({ theme: { fonts } }) => fonts.subheading3};

    color: ${({ $isHovered, theme: { colors } }) =>
      $isHovered ? colors.grayScale.gray4 : colors.grayScale.black};
  }
`;

export const ProductImg = styled.img`
  position: absolute;

  right: 0;
  top: 0;

  width: 24rem;
  height: 24rem;
`;

// eslint-disable-next-line prettier/prettier
export const Btn = styled.div<SpecialSizeProps>`
  position: relative;

  width: ${({ $isSpecialSize }) => ($isSpecialSize ? '31.3rem' : '48rem')};
  height: 24rem;
  border-radius: 1.8rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};

  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
`;

export const FirstWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.1rem;
`;

// eslint-disable-next-line prettier/prettier
export const IconWrapper = styled.div<ProductInfoProps>`
  position: absolute;
  top: 3rem;
  left: 3rem;
  width: 100%;
  height: 100%;

  z-index: 5;

  & > p {
    padding-top: 3.2rem;
       color: ${({ $isHovered, theme: { colors } }) =>
         $isHovered ? colors.grayScale.gray2 : colors.grayScale.gray6};
  }
    ${({ theme: { fonts } }) => fonts.caption1};
  }
`;
