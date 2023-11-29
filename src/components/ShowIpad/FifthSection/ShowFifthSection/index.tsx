import * as S from './ShowFifthSection.style';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ShowIpadHeader from '../../Header';
import CommonSwiper from '../../CommonSwiper';
import FifthCard from '../FifthCard';
import { IpadItemProps } from '../../../../pages/ShowIpad';
import { ADDITIONAL_INFO } from '../../../../constant/ipadAdditionalInfo';

interface ShowFifthSectionProps {
  data: Array<IpadItemProps> | undefined;
}

const ShowFifthSection = ({ data }: ShowFifthSectionProps) => {
  const productName = data && data?.map((it) => it.productName.split('<br>'));

  return (
    <S.ShowFifthSectionContainer>
      <ShowIpadHeader title='IPad 액세서리.' subTitle='일도, 취미도 손쉽게.' />
      <CommonSwiper>
        {data &&
          data.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <FifthCard
                  id={ADDITIONAL_INFO[idx].id}
                  productName={productName && productName[idx]}
                  productTag={ADDITIONAL_INFO[idx].productTag}
                  imgUrl={item.productImgUrl}
                  price={item.productCost}
                />
              </SwiperSlide>
            );
          })}
      </CommonSwiper>
    </S.ShowFifthSectionContainer>
  );
};

export default ShowFifthSection;
