import styled from 'styled-components';

interface ProductInfoProps {
  $isHovered: boolean;
}

// interface StyledH2Props extends ProductInfoProps, BtnProps {}

// eslint-disable-next-line prettier/prettier
export const ProductInfo = styled.div<ProductInfoProps>`
  position: absolute;

  width: 20.4;
  top: 6.2rem;
  left: 3rem;

  z-index: 2;

  & > h1 {
    margin-top: 0.8rem;
    ${({ theme: { fonts } }) => fonts.subheading3};

    color: ${({ $isHovered, theme: { colors } }) =>
      $isHovered ? colors.grayScale.gray4 : colors.grayScale.black};
    z-index: 10;
  }

  & > p {
    ${({ theme: { fonts } }) => fonts.caption1};
    color: ${({ $isHovered, theme: { colors } }) =>
      $isHovered ? colors.grayScale.gray4 : colors.grayScale.gray6};
  }
  z-index: 10;
`;

export const ProductImg = styled.img`
  position: absolute;

  right: 0;
  top: 0;

  width: 24rem;
  height: 24rem;
`;

export const Btn = styled.div`
  position: relative;

  width: 48rem;
  height: 24rem;
  margin-right: 2.2rem;
  border-radius: 1.8rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};

  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
`;

export const FirstBtn = styled.div`
  position: relative;

  width: 31.3rem;
  height: 24rem;
  margin-right: 2.2rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};
  border-radius: 1.8rem;
  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

export const FirstBtnWrapper = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
  & > h1 {
    ${({ theme: { fonts } }) => fonts.subheading2};

    z-index: 10;
  }

  & > h1 > span {
    color: ${({ theme: { colors } }) => colors.pointColor.red0};
    ${({ theme: { fonts } }) => fonts.subheading2};
  }
`;

export const FirstWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
