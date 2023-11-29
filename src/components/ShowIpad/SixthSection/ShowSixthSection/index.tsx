import * as S from './ShowSixthSection.style';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ShowIpadHeader from '../../Header';
import CommonSwiper from '../../CommonSwiper';
import SixthCard from '../SixthCard';

const DUMMY = [
  {
    id: 1,
    subTitle: '빠른 시작 설정',
    title: ['현재 사용 중인 iPadOS 및 iOS 기기로', '새로운 iPad 자동 설정하기.'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-setupguide-202310_GEO_KR?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696608051400',
  },
  {
    id: 2,
    subTitle: '캠퍼스에서 만나는 Apple',
    title: ['가방은 가볍게. 기능은', '한가득.'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-limited-time-offer-202109?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1629928305000',
  },
  {
    id: 3,
    subTitle: 'Apple at Work',
    title: ['워크플로에 날개를', '다는 법.'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-setupguide-202310_GEO_KR?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696608051400',
  },
  {
    id: 4,
    subTitle: '데이터 옮기는 일도 간편하게',
    title: ['데이터를 옮길 때는', 'iCloud+ '],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-limited-time-offer-202109?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1629928305000',
  },

  {
    id: 5,
    subTitle: '보고 배우기',
    title: ['든든한 보호자', 'AppleCare+'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-setupguide-202310_GEO_KR?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696608051400',
  },
];

const ShowSixthSection = () => {
  return (
    <S.ShowSixthSectionContainer>
      <ShowIpadHeader title='설명 및 지원.' subTitle='차근차근 스페셜리스트의 도움과 함께.' />
      <CommonSwiper>
        {DUMMY.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <SixthCard
                key={item.id}
                id={item.id}
                subTitle={item.subTitle}
                title={item.title}
                imgUrl={item.imgUrl}
                whiteColor={item.id === 5}
                isFirstCard={item.id === 1}
              />
            </SwiperSlide>
          );
        })}
      </CommonSwiper>
    </S.ShowSixthSectionContainer>
  );
};

export default ShowSixthSection;
