import styled from 'styled-components';

interface ProductInfoProps {
  $isHovered: boolean;
}

// interface StyledH2Props extends ProductInfoProps, BtnProps {}

// eslint-disable-next-line prettier/prettier
export const ProductInfo = styled.div<ProductInfoProps>`
  position: absolute;
  z-index: 2;

  bottom: 3.13rem;
  left: 1.8rem;

  & > h1 {
    margin-bottom: 2rem;
    ${({ theme: { fonts } }) => fonts.body1_1};

    color: ${({ $isHovered, theme: { colors } }) =>
      $isHovered ? colors.grayScale.gray4 : colors.grayScale.gray8};
    z-index: 10;
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

export const ProductImg = styled.img`
  position: absolute;

  width: 23rem;
  height: 23rem;
`;

export const ImgWrapper = styled.div`
  width: 27.1rem;
  height: 28.1rem;
  margin-top: 7.07rem;
  margin-left: 1.8rem;

  padding: 0 2.35rem;
`;

export const Btn = styled.div`
  position: relative;

  width: 31.3rem;
  height: 50rem;
  margin-right: 2.2rem;
  border-radius: 1.8rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};

  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
`;

export const FirstBtn = styled.div`
  position: relative;

  width: 40rem;
  height: 50rem;
  margin-right: 2.2rem;

  border-radius: 1.8rem;
  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.08);
  overflow:hidden;
  cursor: pointer;

  & > h1 {

    position: absolute;
    max-width: 30.5rem;
    height: 7.8rem;
    overflow: hidden;

    top: 6rem;
    left: 3rem;
    ${({ theme: { fonts } }) => fonts.subheading1_1};

    z-index: 10;



`;

export const FirstBtnImg = styled.img`
  position: absolute;
  width: 40rem;
`;
