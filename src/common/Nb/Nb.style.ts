import styled from 'styled-components';

export const NbWrapper = styled.header`
  display: flex;

  width: 100vw;
  height: 6rem;
  padding-left: 12rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray1};
`;

export const NbBtn = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem 3.5rem 0.5rem 0.5rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};

  font: ${({ theme: { fonts } }) => fonts.body1_2};

  cursor: pointer;
`;
