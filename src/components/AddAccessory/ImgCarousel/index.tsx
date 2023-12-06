import { Settings } from 'react-slick';
import * as S from './ImgCarousel.style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IcRightBold } from '../../../assets/icon';

interface ImgCarouselProps {
  imgUrls: string[];
}

const ImgCarousel = ({ imgUrls }: ImgCarouselProps) => {
  const settings: Settings = {
    slide: 'div',
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    prevArrow: undefined,
    nextArrow: (
      <S.ArrowWrapper>
        <IcRightBold />
      </S.ArrowWrapper>
    ),

    appendDots: (dots: React.ReactNode) => (
      <S.CustomDotsContainer>
        <ul>{dots}</ul>
      </S.CustomDotsContainer>
    ),
  };

  return (
    <S.Wrapper>
      <S.SliderWrapper {...settings}>
        {imgUrls.map((url, index) => (
          <S.Img key={`carousel-item-${index}`}>
            <img src={url} alt={'상세이미지 ${index+1}'} />
          </S.Img>
        ))}
      </S.SliderWrapper>
    </S.Wrapper>
  );
};

export default ImgCarousel;
