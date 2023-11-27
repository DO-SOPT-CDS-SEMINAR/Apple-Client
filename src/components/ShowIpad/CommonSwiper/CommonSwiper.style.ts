import { styled } from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  position: relative;

  height: 55rem;

  .swiper {
    display: flex;
    scroll-behavior: smooth;
  }
  .swiper-slide {
    width: fit-content;
    background-color: transparent;
  }
`;
