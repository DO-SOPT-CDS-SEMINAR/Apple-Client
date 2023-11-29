import * as S from './ShowSixthSection.style';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ShowIpadHeader from '../../Header';
import CommonSwiper from '../../CommonSwiper';
import SixthCard from '../SixthCard';
import { IpadItemProps } from '../../../../pages/ShowIpad';
import { SIXTH_SECTION_ADD_INFO } from '../../../../constant/ipadAdditionalInfo';

interface ShowSixthSectionProps {
  data: Array<IpadItemProps> | undefined;
}

const ShowSixthSection = ({ data }: ShowSixthSectionProps) => {
  const productName = data && data?.map((it) => it.productName.split('<br>'));
  const productImgUrl = data && data?.map((it) => it.productImgUrl);

  const createdSwiperSlide = SIXTH_SECTION_ADD_INFO.filter(
    (it) => it.id === 1 || it.id === 2 || it.id === 4,
  );
  const top = SIXTH_SECTION_ADD_INFO.filter((it) => it.id === 2 || it.id === 4);
  const bottom = SIXTH_SECTION_ADD_INFO.filter((it) => it.id === 3 || it.id === 5);

  return (
    <S.ShowSixthSectionContainer>
      <ShowIpadHeader title='설명 및 지원.' subTitle='차근차근 스페셜리스트의 도움과 함께.' />

      <CommonSwiper>
        {createdSwiperSlide.map((it, idx) => {
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
                  {top[idx - 1] && (
                    <S.TopContainer>
                      <SixthCard
                        key={top[idx - 1].id}
                        subTitle={top[idx - 1].subTitle}
                        title={productName && productName[idx + 1]}
                        imgUrl={productImgUrl && productImgUrl[top[idx - 1].id - 1]}
                      />
                    </S.TopContainer>
                  )}

                  {bottom[idx - 1] && (
                    <S.BottomContainer>
                      <SixthCard
                        key={bottom[idx - 1].id}
                        subTitle={bottom[idx - 1].subTitle}
                        title={productName && productName[idx + 2]}
                        imgUrl={productImgUrl && productImgUrl[bottom[idx - 1].id - 1]}
                        whiteColor={bottom[idx - 1].id === 5}
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
