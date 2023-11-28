import * as S from './ShowCommonSection.style';
import ShowIpadHeader from '../../Header';
import AdevertisementCard from '../AdvertisementCard';
import CommonSwiper from '../../CommonSwiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface ShowCommonSectionProps {
  section: number;
}

// section에 따라 다른 api 불러주기 !
let DUMMY = [
  {
    id: 1,
    subTitle: 'Apple Trade In',
    title: ['사용하던 iPad를 보상 판매하면', '새 모델 구매 시 쓸 수 있는', '크레딧이.'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-trade-in-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664552247673',
  },
  {
    id: 2,
    subTitle: '편리한 결제 옵션',
    title: ['기분 좋은 결제 옵션'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-monthly-installments-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664396475865',
  },
  {
    id: 3,
    subTitle: '인증 리퍼비쉬 제품',
    title: ['1년 보증이 제공되는 리퍼비쉬', 'Apple 제품을 쇼핑하세요.'],
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-refurb-202202?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1643155828000',
  },
];

const ShowCommonSection = ({ section }: ShowCommonSectionProps) => {
  if (section === 2) {
    DUMMY = [
      {
        id: 1,
        subTitle: '모든 모델 비교하기',
        title: ['당신에게 맞는 iPad는?'],
        imgUrl:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-compare-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1666115025411',
      },
      {
        id: 2,
        subTitle: 'IPAD 스페셜리스트',
        title: ['스페셜리스트와 함께하는 일대일 쇼핑.', '온라인 매장에서도.'],
        imgUrl:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-holiday-specialist-help-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696364016006',
      },
    ];
  }

  if (section === 3) {
    DUMMY = [
      {
        id: 1,
        subTitle: 'Apple Trade In',
        title: ['사용하던 iPad를 보상 판매하면', '새 모델 구매 시 쓸 수 있는', '크레딧이.'],
        imgUrl:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-trade-in-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664552247673',
      },
      {
        id: 2,
        subTitle: '편리한 결제 옵션',
        title: ['기분 좋은 결제 옵션'],
        imgUrl:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-monthly-installments-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664396475865',
      },
      {
        id: 3,
        subTitle: '인증 리퍼비쉬 제품',
        title: ['1년 보증이 제공되는 리퍼비쉬', 'Apple 제품을 쇼핑하세요.'],
        imgUrl:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-refurb-202202?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1643155828000',
      },
    ];
  }

  if (section === 4) {
    DUMMY = [
      {
        id: 1,
        subTitle: '무료 각인',
        title: ['메시지나 이모티콘을 새겨 나만의', 'iPAD 만들기.'],
        imgUrl:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-trade-in-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664552247673',
      },
    ];
  }

  if (section === 7) {
    DUMMY = [
      {
        id: 1,
        subTitle: 'APPLE TV+',
        title: ['iPad를 구입하면 Apple TV+가 3개월', '무료.*'],
        imgUrl:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-why-ipad-202210_GEO_KR?wid=960&hei=1000&fmt=png-alpha&.v=1664988174982',
      },
      {
        id: 2,
        subTitle: 'iPad를 선택하는 이유',
        title: ['생각했던 것은 물론, 생각지도 못했던', '것까지.'],
        imgUrl:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-apple-tv-plus-202211_GEO_KR?wid=960&hei=1000&fmt=png-alpha&.v=1668710791722',
      },
      {
        id: 3,
        subTitle: 'IPADOS',
        title: ['경의롭게. 가뿐하게.'],
        imgUrl:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-ipados-202210_GEO_KR?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664997554593',
      },
    ];
  }

  return (
    <S.ShowCommonSectionContainer>
      {section === 2 && (
        <ShowIpadHeader title='쇼핑 안내.' subTitle='결정을 못하겠다면 여기에서.' />
      )}
      {section === 3 && (
        <ShowIpadHeader title='각종 할인 방법.' subTitle='당신에게 가장 알맞은 방법 찾아보기.' />
      )}
      {section === 4 && (
        <ShowIpadHeader
          title='남다른 Apple Store.'
          subTitle='이곳에서 쇼핑해야 하는 더욱더 많은 이유.'
        />
      )}
      {section === 7 && (
        <ShowIpadHeader title='iPad 경험.' subTitle='Apple의 모든 것과 연결되어 있는 느낌.' />
      )}

      <CommonSwiper slidesPerView={2.5}>
        {DUMMY.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <AdevertisementCard
                key={item.id}
                subTitle={item.subTitle}
                title={item.title}
                imgUrl={item.imgUrl}
                whiteColor={section === 7 && item.id === 1}
              />
            </SwiperSlide>
          );
        })}
      </CommonSwiper>
    </S.ShowCommonSectionContainer>
  );
};

export default ShowCommonSection;
