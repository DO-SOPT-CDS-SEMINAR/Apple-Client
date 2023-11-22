import styled from 'styled-components';

interface NbBtnProps {
  $isActive: boolean;
}

export const NbWrapper = styled.header`
  display: flex;

  width: 100vw;
  height: 6rem;
  padding-left: 12rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray1};
`;

// eslint-disable-next-line prettier/prettier
export const NbBtn = styled.button<NbBtnProps>`
  display: flex;
  align-items: center;

  padding: 0.5rem 3.5rem 0.5rem 0.5rem;

  color: ${({ theme: { colors }, $isActive }) =>
    $isActive ? colors.grayScale.black : colors.grayScale.gray8};

  font: ${({ theme: { fonts }, $isActive }) => ($isActive ? fonts.body1 : fonts.body1_2)};
  text-decoration-line: ${({ $isActive }) => ($isActive ? 'underline' : 'none')};
  text-underline-position: under;

  cursor: pointer;
`;
