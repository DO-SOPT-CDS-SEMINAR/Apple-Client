import HoveredProduct from '../../../../common/HoveredProduct';
import { useState } from 'react';

import * as S from './ThirdSectionBtn.style';
import { MainIcCard } from '../../../../assets/icon';
import { MainIcTrade } from '../../../../assets/icon';
import { MainIcBoxtruck } from '../../../../assets/icon';
import { MainIcStore } from '../../../../assets/icon';

interface Product {
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

//임의로 데이터 넣어서 가로 스크롤 구현 확인
const DUMMY_DATA: Product[] = [
  {
    mainItemName: '선물을 구할 때 도움을 받아보세요.',
    mainItemPrice: 'Apple 스페셜리스트',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-specialist-help-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696362492013',
  },
  {
    mainItemName: 'Mac 구성하기.',
    mainItemPrice: 'Customizing with Apple',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-mac-customize-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698124290015',
  },
  {
    mainItemName: 'Apple Store의 무료 세션에 참여해 보세요',
    mainItemPrice: 'Today at Apple',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-mac-customize-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698124290015',
  },
  {
    mainItemName: 'Apple Store의 무료 세션에 참여해 보세요',
    mainItemPrice: '캠퍼스에서 만나는 Apple',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-video-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1694270835539',
  },
];

const ThirdSectionBtn = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <S.FirstWrapper>
        <S.FirstBtn>
          <S.FirstBtnWrapper>
            <MainIcCard />

            <h1>기분 좋은 결제 옵션.</h1>
          </S.FirstBtnWrapper>
        </S.FirstBtn>
        <S.FirstBtn>
          <S.FirstBtnWrapper>
            <MainIcTrade />

            <h1>
              <span>쓰던 기기를 보상 판매하고</span>
              <br /> 새 기기를 더 저렴하게
            </h1>
          </S.FirstBtnWrapper>
        </S.FirstBtn>
        <S.FirstBtn>
          <S.FirstBtnWrapper>
            <MainIcBoxtruck />
            <h1>
              간편한 무료 배송. 매장 보유
              <br />
              제품은 Apple Store에서
              <br />
              직접 픽업 가능.
            </h1>
          </S.FirstBtnWrapper>
        </S.FirstBtn>
        <S.FirstBtn>
          <S.FirstBtnWrapper>
            <MainIcStore />
            <h1>
              <span>맞춤형 쇼핑</span>을{' '}
              <span>
                Apple Store
                <br /> 앱
              </span>
              에서 경험하세요.
            </h1>
          </S.FirstBtnWrapper>
        </S.FirstBtn>
      </S.FirstWrapper>
      <S.FirstWrapper>
        {DUMMY_DATA.map((item, index) => (
          <S.Btn
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <>
              {hoveredIndex === index && (
                <HoveredProduct width={31.3} height={50} borderRadius={1.8} haveDetailBtn={false} />
              )}
            </>

            <S.ProductInfo $isHovered={hoveredIndex === index}>
              <p>{item.mainItemPrice}</p>
              <h1>{item.mainItemName}</h1>
            </S.ProductInfo>

            <S.ProductImg src={item.mainCategoryImg} alt={item.mainItemName}></S.ProductImg>
          </S.Btn>
        ))}
      </S.FirstWrapper>
    </>
  );
};

export default ThirdSectionBtn;
