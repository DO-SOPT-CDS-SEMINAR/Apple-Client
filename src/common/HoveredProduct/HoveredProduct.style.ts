import styled, { css } from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

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
