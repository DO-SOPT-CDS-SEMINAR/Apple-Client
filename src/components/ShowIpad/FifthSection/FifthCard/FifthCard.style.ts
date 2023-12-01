/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface ProductNameContainerProps {
  $productSubTag?: string;
  $isMainCard: boolean;
}

interface MainCardProps {
  $isMainCard: boolean;
}

interface ColorPrevProps {
  $isExistColorPrev: boolean;
}

export const ProductContainer = styled.article<MainCardProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isMainCard }) => !$isMainCard && 'center'};
  position: relative;

  width: ${({ $isMainCard }) => ($isMainCard ? css`40rem` : css`31.3rem`)};
  height: 50rem;

  border-radius: 1.8rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};
`;

export const ProductImg = styled.img<MainCardProps>`
  width: 23rem;
  height: 23rem;
  margin-top: 7.07rem;

  ${({ $isMainCard }) =>
    $isMainCard &&
    css`
      position: relative;

      width: 40rem;
      height: 50rem;
      margin: 0;

      border-radius: 1.8rem;
    `};
`;

export const ColorsContainer = styled.div<ColorPrevProps>`
  display: flex;

  margin-top: ${({ $isExistColorPrev }) => $isExistColorPrev && css`2.6rem`};

  gap: 0.6rem;
`;

export const ProductNameContainer = styled.div<ProductNameContainerProps>`
  display: flex;
  flex-direction: column;

  width: calc(100% - 3.6rem);

  margin-top: ${({ $productSubTag }) => ($productSubTag ? css`5.1rem` : css`3.8rem`)};

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};

  ${({ $isMainCard, theme: { colors } }) =>
    $isMainCard &&
    css`
      position: absolute;
      margin-top: 6rem;
      margin-left: 3rem;

      color: ${colors.grayScale.black};
    `};
`;

export const ProductSubTag = styled.p`
  margin-bottom: 0.8rem;

  color: ${({ theme: { colors } }) => colors.pointColor.orange0};
  ${({ theme: { fonts } }) => fonts.caption2}
`;

export const ProductName = styled.p<MainCardProps>`
  ${({ theme: { fonts } }) => fonts.body1_1}

  ${({ $isMainCard, theme: { fonts } }) =>
    $isMainCard &&
    css`
      ${fonts.subheading1_1}
    `};
`;

export const BottomContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;

  width: calc(100% - 3.6rem);
  margin-bottom: 3.13rem;

  z-index: 10;
`;

export const ProductPrice = styled.p`
  display: flex;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body1_2};
`;
