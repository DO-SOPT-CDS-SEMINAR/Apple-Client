/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface ProductNameContainerProps {
  $productSubname?: string;
}

export const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40rem;
  height: 50rem;

  border-radius: 1.8rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};
`;

export const ProductNameContainer = styled.div<ProductNameContainerProps>`
  width: calc(100% - 6rem);
  margin-top: 5.4rem;
  margin-bottom: ${({ $productSubname }) => ($productSubname ? css`3.2rem` : css`5.6rem`)};

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};

  z-index: 10;
`;

export const ProductName = styled.p`
  ${({ theme: { fonts } }) => fonts.subheading1_1}
`;

export const ProductSubName = styled.p`
  ${({ theme: { fonts } }) => fonts.body1_2}
`;

export const ProductImg = styled.img`
  width: 25.2rem;
  height: 22.5rem;
  margin-bottom: 2.4rem;
`;

export const ColorsContainer = styled.div`
  display: flex;

  margin-bottom: 1.4rem;

  gap: 0.6rem;
`;

export const BottomContainer = styled.div`
  display: flex;

  gap: 15.5rem;

  z-index: 10;
`;

export const ProductPrice = styled.p`
  display: flex;
  align-items: end;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body3_1};
`;
