import * as S from './ShowCommonSection.style';
import ShowIpadHeader from '../../Header';
import AdevertisementCard from '../AdvertisementCard';
import CommonSwiper from '../../CommonSwiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IpadItemProps } from '../../../../libs/hooks/useGetIpadItems';

/* eslint-disable prettier/prettier */
interface ShowCommonSectionProps {
  section: number;
  data: Array<IpadItemProps> | undefined;
  subName: Array<string>;
  headerInfo: Array<{
    section: number;
    title: string;
    subtitle: string;
  }>;
}

const ShowCommonSection = ({ section, data, subName, headerInfo }: ShowCommonSectionProps) => {
  const productName = data && data?.map((it) => it.productName.split('<br>'));
  const { title, subtitle } = headerInfo[0];

  return (
    <S.ShowCommonSectionContainer>
      <ShowIpadHeader title={title} subTitle={subtitle} />

      {(section === 2 || section === 4 || section === 8) && (
        <S.ProductContainer>
          {data &&
            data.map((item, idx) => {
              return (
                <AdevertisementCard
                  key={idx}
                  section={section}
                  subTitle={subName[idx]}
                  title={productName && productName[idx]}
                  imgUrl={item.productImgUrl}
                  whiteColor={section === 8 && idx === 1}
                />
              );
            })}
        </S.ProductContainer>
      )}

      {(section === 3 || section === 7) && (
        <CommonSwiper>
          {data &&
            data.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <AdevertisementCard
                    section={section}
                    subTitle={subName[idx]}
                    title={productName && productName[idx]}
                    imgUrl={item.productImgUrl}
                    whiteColor={section === 7 && idx === 0}
                  />
                </SwiperSlide>
              );
            })}
        </CommonSwiper>
      )}
    </S.ShowCommonSectionContainer>
  );
};

export default ShowCommonSection;
