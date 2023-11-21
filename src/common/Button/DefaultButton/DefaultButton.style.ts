import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7, 4rem;
  height: 3.6rem;
  padding: 0.7rem 1.5rem;
  border-radius: 99.9rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.grayScale.gray4};
    color: ${theme.colors.grayScale.gray8};
    ${theme.fonts.body3_2};
  `}
`;
