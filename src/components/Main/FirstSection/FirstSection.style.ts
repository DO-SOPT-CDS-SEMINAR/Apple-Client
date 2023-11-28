import styled from 'styled-components';

export const SectionWrapper = styled.section`
  height: 60.1rem;
  padding-top: 4.2rem;

  overflow: hidden;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray2};
`;

export const ScrollWrapper = styled.div`
  display: flex;

  overflow-x: auto;
  white-space: nowrap;
`;

export const ScrollContent = styled.div`
  display: flex;
  height: 50rem;


  padding: 0 12rem;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
    scrollbar-width: none; /* 파이어폭스 */
`;
