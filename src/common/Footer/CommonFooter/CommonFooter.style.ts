import styled from 'styled-components';

export const CommonFooterContainer = styled.div`
  width: 98rem;
  height: 50.9rem;
  margin: 0 auto;
  padding: 1.7rem 0 1.1rem;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const Contents = styled.div`
  color: ${({ theme: { colors } }) => colors.grayScale.gray6};
  ${({ theme: { fonts } }) => fonts.caption2};
`;
