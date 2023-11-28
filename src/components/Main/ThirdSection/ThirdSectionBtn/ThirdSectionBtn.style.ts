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