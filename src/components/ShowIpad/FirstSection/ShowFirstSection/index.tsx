import * as S from './ShowFirstSection';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ShowIpadHeader from '../../Header';
import IpadProducts from '../IpadProducts';
import CommonSwiper from '../../CommonSwiper';
import useGetIpad from '../../../../libs/hooks/useGetIpad';

/* eslint-disable prettier/prettier */
interface ShowFirstSectionProps {
  headerInfo: Array<{
    section: number;
    title: string;
    subtitle: string;
  }>;
}

const ShowFirstSection = ({ headerInfo }: ShowFirstSectionProps) => {
  const { res } = useGetIpad();
  const { title, subtitle } = headerInfo[0];

  return (
    <S.ShowFirstSectionContainer>
      <ShowIpadHeader title={title} subTitle={subtitle} />
      <CommonSwiper>
        {res &&
          res.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <IpadProducts
                  idx={idx}
                  productName={item.productName}
                  productSubName={item.productSubName}
                  imgUrl={item.productImgUrl}
                  price={item.productCost}
                />
              </SwiperSlide>
            );
          })}
      </CommonSwiper>
    </S.ShowFirstSectionContainer>
  );
};

export default ShowFirstSection;
