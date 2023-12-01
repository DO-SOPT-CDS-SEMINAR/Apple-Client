import * as S from './ShowSixthSection.style';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ShowIpadHeader from '../../Header';
import CommonSwiper from '../../CommonSwiper';
import SixthCard from '../SixthCard';
import { IpadItemProps } from '../../../../libs/hooks/useGetIpadItems';
import { SIXTH_SECTION_ADD_INFO } from '../../../../constant/ipadAdditionalInfo';

/* eslint-disable prettier/prettier */
interface ShowSixthSectionProps {
  data: Array<IpadItemProps> | undefined;
  headerInfo: Array<{
    section: number;
    title: string;
    subtitle: string;
  }>;
}

const ShowSixthSection = ({ data, headerInfo }: ShowSixthSectionProps) => {
  const { title, subtitle } = headerInfo[0];

  const productName = data && data?.map((it) => it.productName.split('<br>'));
  const productImgUrl = data && data?.map((it) => it.productImgUrl);

  const createdSwiperSlide = SIXTH_SECTION_ADD_INFO.filter(
    (it) => it.id === 1 || it.id === 2 || it.id === 4,
  );
  const top = SIXTH_SECTION_ADD_INFO.filter((it) => it.id === 2 || it.id === 4);
  const bottom = SIXTH_SECTION_ADD_INFO.filter((it) => it.id === 3 || it.id === 5);

  return (
    <S.ShowSixthSectionContainer id='section6'>
      <ShowIpadHeader title={title} subTitle={subtitle} />

      <CommonSwiper>
        {createdSwiperSlide.map((it, idx) => {
          const topIdx = top[idx - 1];
          const bottomIdx = bottom[idx - 1];
          return (
            <SwiperSlide key={it.id}>
              {it.id === 1 ? (
                <SixthCard
                  key={it.id}
                  subTitle={it.subTitle}
                  title={productName && productName[idx]}
                  imgUrl={productImgUrl && productImgUrl[idx]}
                  isFirstCard={it.id === 1}
                />
              ) : (
                <S.PositionContainer>
                  {topIdx && (
                    <S.TopContainer>
                      <SixthCard
                        key={topIdx.id}
                        subTitle={topIdx.subTitle}
                        title={productName && productName[topIdx.id - 1]}
                        imgUrl={productImgUrl && productImgUrl[topIdx.id - 1]}
                      />
                    </S.TopContainer>
                  )}

                  {bottomIdx && (
                    <S.BottomContainer>
                      <SixthCard
                        key={bottomIdx.id}
                        subTitle={bottomIdx.subTitle}
                        title={productName && productName[bottomIdx.id - 1]}
                        imgUrl={productImgUrl && productImgUrl[bottomIdx.id - 1]}
                        whiteColor={bottomIdx.id === 5}
                      />
                    </S.BottomContainer>
                  )}
                </S.PositionContainer>
              )}
            </SwiperSlide>
          );
        })}
      </CommonSwiper>
    </S.ShowSixthSectionContainer>
  );
};

export default ShowSixthSection;
