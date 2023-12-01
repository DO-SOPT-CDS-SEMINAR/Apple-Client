import styled, { css } from 'styled-components';

interface ContentsProps {
  $addMarginTop?: number;
}

export const CommonFooterContainer = styled.div`
  width: 98rem;
  /* height: 50.9rem; */
  margin: 0 auto;
  padding: 1.7rem 0 1.1rem;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const Contents = styled.div<ContentsProps>`
  margin-top: ${({ $addMarginTop }) => ($addMarginTop === 5 || $addMarginTop === 10) && css`1rem`};

  color: ${({ theme: { colors } }) => colors.grayScale.gray6};
  ${({ theme: { fonts } }) => fonts.caption2};
`;
