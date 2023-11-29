import { styled } from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  position: relative;

  width: 100vw;
  height: fit-content;

  .swiper {
    display: flex;
    justify-content: left;
    scroll-behavior: smooth;
  }

  .swiper-wrapper {
    width: 500rem;
    background-color: transparent;
  }

  .swiper-slide {
    width: fit-content;
    background-color: transparent;
  }
`;
