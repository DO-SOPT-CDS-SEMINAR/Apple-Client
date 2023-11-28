import * as S from './ShowEighthSection.style';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ShowIpadHeader from '../../Header';
import CommonSwiper from '../../CommonSwiper';
import EighthCard from '../EighthCard';

const DUMMY = [
  {
    id: 1,
    subTitle: '교육',
    title: ['학생과 교육자를 위한 특별가로', 'iPad를 구입하세요.3'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-education-202108_GEO_KR?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627664723000',
  },
  {
    id: 2,
    subTitle: '비지니스',
    title: ['대기업부터 중소기업까지', 'Apple이 함께합니다.3'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-business-202210_GEO_KR?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1664998875435',
  },
];

const ShowEighthSection = () => {
  return (
    <S.ShowEighthSectionContainer>
      <ShowIpadHeader title='특별 할인.' subTitle='특별한 가격 혜택을 누리세요.' />
      <CommonSwiper slidesPerView={2}>
        {DUMMY.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <EighthCard
                key={item.id}
                subTitle={item.subTitle}
                title={item.title}
                imgUrl={item.imgUrl}
                whiteColor={item.id === 2}
              />
            </SwiperSlide>
          );
        })}
      </CommonSwiper>
    </S.ShowEighthSectionContainer>
  );
};

export default ShowEighthSection;
