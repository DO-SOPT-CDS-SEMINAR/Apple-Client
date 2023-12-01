import styled, { css } from 'styled-components';

interface NbBtnProps {
  $isActive: boolean;
}

interface NbWrapperProps {
  $isTab?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const NbWrapper = styled.header<NbWrapperProps>`
  display: flex;
  justify-content: ${({ $isTab }) => $isTab && css`center`};

  width: 100vw;
  height: 6rem;

  padding-left: 12rem;

  border-bottom: ${({ theme: { colors }, $isTab }) =>
    $isTab && css`0.1rem solid ${colors.grayScale.gray3}`};

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};

  gap: ${({ $isTab }) => ($isTab ? css`15.167rem` : css`3.5rem`)};
`;

// eslint-disable-next-line prettier/prettier
export const NbBtn = styled.button<NbBtnProps>`
  display: flex;
  align-items: center;

  padding: 0.5rem 0rem 0.5rem 0.5rem;

  color: ${({ theme: { colors }, $isActive }) =>
    $isActive ? colors.grayScale.black : colors.grayScale.gray8};

  font: ${({ theme: { fonts }, $isActive }) => ($isActive ? fonts.body1 : fonts.body1_2)};
  text-decoration-line: ${({ $isActive }) => ($isActive ? 'underline' : 'none')};
  text-underline-position: under;

  cursor: pointer;
`;
