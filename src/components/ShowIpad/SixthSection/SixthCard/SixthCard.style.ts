/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface ColorProps {
  $whiteColor?: boolean;
  $isHovered: boolean;
}

interface FirstCardProps {
  $isFirstCard?: boolean;
}

export const SixthCardContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div<FirstCardProps>`
  height: ${({ $isFirstCard }) => ($isFirstCard ? css`48rem` : css`24rem`)};

  border-radius: 1.8rem;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 3rem;
  margin-left: 3rem;
  z-index: 10;
`;

export const SubTitle = styled.p<ColorProps>`
  margin-bottom: 0.8rem;

  color: ${({ $isHovered, $whiteColor, theme: { colors } }) =>
    $isHovered
      ? colors.grayScale.gray2
      : $whiteColor
        ? colors.grayScale.white
        : colors.grayScale.gray6};

  ${({ theme: { fonts } }) => fonts.caption1}
`;

export const Title = styled.p<ColorProps>`
  color: ${({ $isHovered, $whiteColor, theme: { colors } }) =>
    $isHovered || $whiteColor ? colors.grayScale.white : colors.grayScale.gray8};

  ${({ theme: { fonts } }) => fonts.subheading1_1}
`;

export const CardImg = styled.img<FirstCardProps>`
  position: relative;

  ${({ $isFirstCard }) =>
    $isFirstCard
      ? css`
          width: 48rem;
          height: 50rem;
        `
      : css`
          width: 48rem;
          height: 24rem;
        `};

  border-radius: 1.8rem;
`;
