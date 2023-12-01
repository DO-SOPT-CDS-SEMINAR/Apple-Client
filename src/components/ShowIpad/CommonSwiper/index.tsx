import * as S from './CommonSwiper.style';
import { Swiper } from 'swiper/react';
import 'swiper/css';

interface CommonSwiperProps {
  children: React.ReactNode;
}

const CommonSwiper = ({ children }: CommonSwiperProps) => {
  return (
    <S.ProductsContainer>
      <Swiper
        slidesPerView={'auto'}
        // 2.2rem
        spaceBetween={2.2 * 10}
        observer={true}
        observeParents={true}
        mousewheel={true}
      >
        {children}
      </Swiper>
    </S.ProductsContainer>
  );
};

export default CommonSwiper;
