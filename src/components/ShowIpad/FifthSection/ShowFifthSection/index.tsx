import * as S from './ShowFifthSection.style';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ShowIpadHeader from '../../Header';
import CommonSwiper from '../../CommonSwiper';
import FifthCard from '../FifthCard';
import { IpadItemProps } from '../../../../libs/hooks/useGetIpadItems';
import { ADDITIONAL_INFO } from '../../../../constant/ipadAdditionalInfo';

/* eslint-disable prettier/prettier */
interface ShowFifthSectionProps {
  data: Array<IpadItemProps> | undefined;
  headerInfo: Array<{
    section: number;
    title: string;
    subtitle: string;
  }>;
}

const ShowFifthSection = ({ data, headerInfo }: ShowFifthSectionProps) => {
  const productName = data && data?.map((it) => it.productName.split('<br>'));
  const { title, subtitle } = headerInfo[0];

  return (
    <S.ShowFifthSectionContainer id='section5'>
      <ShowIpadHeader title={title} subTitle={subtitle} />
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
