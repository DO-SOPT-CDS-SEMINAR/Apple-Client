import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';

import { IcRightBold } from '../../../assets/icon';
import { IcLeftBold } from '../../../assets/icon';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const settings: Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IcRightBold />,
    prevArrow: <IcLeftBold />,

    swipeToSlide: true,
  };

  return (
    <div>
      <StyledSlider {...settings}>
        <Img>
          <img
            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=728&hei=666&fmt=png-alpha&.v=1664477161220'
            alt='아이패드 프로'
          />
        </Img>
        <Img>
          <img
            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-2-202210?wid=728&hei=666&fmt=png-alpha&.v=1665083965975'
            alt='아이패드 프로'
          />
        </Img>
        <Img>
          <img
            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664578794100'
            alt='아이패드 프로'
          />
        </Img>
        <Img>
          <img
            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664578794100'
            alt='아이패드 프로'
          />
        </Img>
        <Img>
          <img
            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664578794100'
            alt='아이패드 프로'
          />
        </Img>
      </StyledSlider>
    </div>
  );
};

const StyledSlider = styled(Slider)`
  width: 40rem;
  background-color: red;
`;

const Img = styled.div`
  width: 40rem;

  & > img {
    width: 40rem;
  }
`;

export default SimpleSlider;
