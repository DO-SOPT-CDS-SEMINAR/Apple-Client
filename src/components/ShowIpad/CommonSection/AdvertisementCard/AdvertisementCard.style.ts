/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface ColorProps {
  $whiteColor: boolean;
}

interface SectionProps {
  $isSection8: boolean;
}

export const CardContainer = styled.article<SectionProps>`
  display: flex;

  ${({ $isSection8 }) =>
    $isSection8
      ? css`
          width: 40rem;
          height: 50rem;
        `
      : css`
          width: 48rem;
          height: 50rem;
        `};

  border-radius: 1.8rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};
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

  color: ${({ $whiteColor, theme: { colors } }) =>
    $whiteColor ? colors.grayScale.white : colors.grayScale.gray6};
  ${({ theme: { fonts } }) => fonts.caption1}
`;

export const Title = styled.p<ColorProps>`
  color: ${({ $whiteColor, theme: { colors } }) =>
    $whiteColor ? colors.grayScale.white : colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.subheading1_1}
`;

export const CardImg = styled.img<SectionProps>`
  position: relative;

  ${({ $isSection8 }) =>
    $isSection8
      ? css`
          width: 40rem;
          height: 50rem;
        `
      : css`
          width: 48rem;
          height: 50rem;
        `};

  border-radius: 1.8rem;
`;
