import * as S from './ShowFifthSection.style';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ShowIpadHeader from '../../Header';
import CommonSwiper from '../../CommonSwiper';
import FifthCard from '../FifthCard';

// 아직 캐러셀을 구현하지 않은 관계로, 스크롤 생기지 않는 범위 내의 카드만 정의해둠.
const DUMMY = [
  {
    id: 'acc_0',
    productName: ['마음이 든든해지는 악세서리'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-story-202210_GEO_KR?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1665516908132',
    price: 1249000,
  },
  {
    id: 'acc_1',
    productName: ['iPad(10세대)용 Smart Folio -', '스카이'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQDU3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1664481896530',
    price: 1249000,
  },
  {
    id: 'acc_2',
    productName: ['Apple Pencil(USB-C)'],
    productTag: 'New',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUWA3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1695933856697',
    price: 1249000,
  },
  {
    id: 'acc_3',
    productName: ['mophie powerstation plus 10K'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HQP82?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1678387309778',
    price: 1249000,
  },
  {
    id: 'acc_4',
    productName: ['iPad Pro 11(4세대) 및', 'iPad Air (5세대)용 Magic...'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJQJ3KH?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1665678027581',
    price: 1249000,
  },
  {
    id: 'acc_5',
    productName: ['Apple Pencil (2세대)'],
    productTag: '무료 각인',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU8F2?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1540596407165',
    price: 1249000,
  },
];

const ShowFifthSection = () => {
  return (
    <S.ShowFifthSectionContainer>
      <ShowIpadHeader title='IPad 액세서리.' subTitle='일도, 취미도 손쉽게.' />
      <CommonSwiper slidesPerView={3}>
        {DUMMY.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <FifthCard
                key={item.id}
                idx={item.id}
                productName={item.productName}
                productTag={item.productTag}
                imgUrl={item.imgUrl}
                price={item.price}
              />
            </SwiperSlide>
          );
        })}
      </CommonSwiper>
    </S.ShowFifthSectionContainer>
  );
};

export default ShowFifthSection;
