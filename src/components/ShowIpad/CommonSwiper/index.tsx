import * as S from './CommonSwiper.style';
import { Swiper } from 'swiper/react';
import 'swiper/css';

interface CommonSwiperProps {
  children: React.ReactNode;
  slidesPerView: number;
}

const CommonSwiper = ({ children, slidesPerView }: CommonSwiperProps) => {
  return (
    <S.ProductsContainer>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={22}
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
