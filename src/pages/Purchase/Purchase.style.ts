import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  padding: 0 12rem;
`;

export const Title = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.heading1};
`;

export const TypeContainer = styled.div`
  display: flex;
  position: fixed;
  top: 20rem;
  left: 10rem;
  width: fit-content;
`;
export const TitleContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  margin: 3rem 0;
`;

export const LeftTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Price = styled.p`
  display: flex;
  ${({ theme }) => theme.fonts.caption2};
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 38.4rem;
  width: 100%;
`;
