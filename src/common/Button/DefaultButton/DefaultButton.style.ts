import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 7px 15px;
  border-radius: 999px;

  ${({ theme }) => css`
    background-color: ${theme.colors.grayScale.gray4};
    color: ${theme.colors.grayScale.gray8};
    ${theme.fonts.body3_2};
  `}
`;
