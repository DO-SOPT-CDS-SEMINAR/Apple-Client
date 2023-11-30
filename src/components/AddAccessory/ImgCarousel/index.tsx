import { Settings } from 'react-slick';
import * as S from './ImgCarousel.style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IcRightBold } from '../../../assets/icon';

const ImgCarousel = () => {
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

  const carouselItems = {
    data: {
      name: 'iPad Pro 12.9(6세대)용 Magic Keyboard - 한국어 - 화이트',
      cost: '519,000',
      imgUrls: [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQL3LL?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1665602254156',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-2-202210?wid=728&hei=666&fmt=png-alpha&.v=1665083965975',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=728&hei=666&fmt=png-alpha&.v=1664477161220',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-2-202210?wid=728&hei=666&fmt=png-alpha&.v=1665083965975',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=728&hei=666&fmt=png-alpha&.v=1664477161220',
      ],
    },
  };

  return (
    <S.Wrapper>
      <S.SliderWrapper {...settings}>
        {carouselItems.data.imgUrls.map((url, index) => (
          <S.Img key={`carousel-item-${index}`}>
            <img src={url} alt={'상세이미지 ${index+1}'} />
          </S.Img>
        ))}
      </S.SliderWrapper>
    </S.Wrapper>
  );
};

export default ImgCarousel;
