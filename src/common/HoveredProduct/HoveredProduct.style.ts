import styled, { css } from 'styled-components';

export const ProductContainer = styled.div<{
  // eslint-disable-next-line prettier/prettier
  $width: number;
  $height: number;
  $borderRadius: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ $width }) => css`
    ${$width}rem
  `};
  height: ${({ $height }) => css`
    ${$height}rem
  `};
  border-radius: ${({ $borderRadius }) => css`
    ${$borderRadius}rem
  `};

  background-color: rgba(0, 0, 0, 0.5);
`;

export const DetailBtn = styled.button`
  width: 15.4rem;
  height: 3.6rem;
  border-radius: 99.9rem;

  background-color: ${({ theme }) => theme.colors.grayScale.gray3};

  ${({ theme }) => css`
    color: ${theme.colors.grayScale.gray8};
    ${theme.fonts.body3};
  `};
`;
