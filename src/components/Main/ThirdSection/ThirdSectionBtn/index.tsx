/* eslint-disable react/jsx-key */
import HoveredProduct from '../../../../common/HoveredProduct';
import { useState } from 'react';

import * as S from './ThirdSectionBtn.style';
import { MainIcCard } from '../../../../assets/icon';
import { MainIcTrade } from '../../../../assets/icon';
import { MainIcBoxtruck } from '../../../../assets/icon';
import { MainIcStore } from '../../../../assets/icon';

const iconComponents = [
  <MainIcCard />,
  <MainIcTrade />,
  'Apple 스페셜리스트',
  'Today at Apple',
  <MainIcBoxtruck />,
  <MainIcStore />,
  'Customizing with Apple',
  '캠퍼스에서 만나는 Apple',
];

interface Product {
  mainItemName: string;
  mainItemPrice: string | null;
  mainCategoryImg: string | null;
}

//임의로 데이터 넣어서 가로 스크롤 구현 확인
const DUMMY_DATA: Product[] = [
  {
    mainItemName: '기분 좋은 결제 옵션.',
    mainItemPrice: null,
    mainCategoryImg: null,
  },
  {
    mainItemName: '쓰던 기기를 보상 판매하고 새 기기를 더 저렴하게',
    mainItemPrice: null,
    mainCategoryImg: null,
  },
  {
    mainItemName: '선물을 구할 때 도움을 받아보세요.',
    mainItemPrice: null,
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-specialist-help-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696362492013',
  },
  {
    mainItemName: 'Mac 구성하기.',
    mainItemPrice: null,
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-mac-customize-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698124290015',
  },
  {
    mainItemName: '간편한 무료 배송. 매장 보유 제품은 Apple Store에서 직접 픽업 가능.',
    mainItemPrice: null,
    mainCategoryImg: null,
  },
  {
    mainItemName: '맞춤형 쇼핑을 Apple Store앱에서 경험하세요.',
    mainItemPrice: null,
    mainCategoryImg: null,
  },

  {
    mainItemName: 'Apple Store의 무료 세션에 참여해 보세요',
    mainItemPrice: null,
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-mac-customize-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698124290015',
  },
  {
    mainItemName: 'Apple Store의 무료 세션에 참여해 보세요',
    mainItemPrice: null,
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-video-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1694270835539',
  },
];

const ThirdSectionBtn = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <S.FirstWrapper>
        {DUMMY_DATA.map((item, index) => (
          <S.Btn
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            $isSpecialSize={index === 0 || index === 1 || index === 4 || index === 5}
          >
            <>
              {hoveredIndex === index && (
                <HoveredProduct width={48} height={24} borderRadius={1.8} haveDetailBtn={false} />
              )}
            </>
            {item.mainCategoryImg && (
              <S.ProductImg src={item.mainCategoryImg} alt={item.mainItemName}></S.ProductImg>
            )}
            <S.ProductInfo $isHovered={hoveredIndex === index}>
              <h1>{item.mainItemName}</h1>
            </S.ProductInfo>
            {iconComponents[index] && (
              <S.IconWrapper $isHovered={hoveredIndex === index}>
                {typeof iconComponents[index] === 'string' ? (
                  <p>{iconComponents[index]}</p>
                ) : (
                  <div>{iconComponents[index]}</div>
                )}
              </S.IconWrapper>
            )}
          </S.Btn>
        ))}
      </S.FirstWrapper>
    </>
  );
};

export default ThirdSectionBtn;
