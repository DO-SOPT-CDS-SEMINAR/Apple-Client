import styled from 'styled-components';

export const ShowIpadPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const ContentsContainer = styled.div`
  overflow-x: hidden;
`;

export const NbContainer = styled.div`
  position: sticky;
  top: 0;

  height: 6rem;

  z-index: 15;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 4.6rem 0 4rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray2};
`;
