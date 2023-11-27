import styled from 'styled-components';

interface ButtonProps {
  $isActive: boolean;
}

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  vertical-algin: center;

  width: 59.4rem;
  height: 5rem;
  border-radius: 2.5rem;

  background-color: ${({ theme }) => theme.colors.grayScale.gray2};
`;

// eslint-disable-next-line prettier/prettier
export const Button = styled.button<ButtonProps>`
  width: 11.8rem;
  height: 4.6rem;

  border-radius: 2.3rem;

  color: ${({ theme: { colors }, $isActive }) =>
    $isActive ? colors.grayScale.white : colors.grayScale.gray6};
  background-color: ${({ theme: { colors }, $isActive }) =>
    $isActive ? colors.grayScale.gray8 : colors.grayScale.gray2};

  font: ${({ theme: { fonts } }) => fonts.body1};

  cursor: pointer;
`;
