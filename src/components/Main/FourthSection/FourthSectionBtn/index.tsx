import HoveredProduct from '../../../../common/HoveredProduct';
import { useState } from 'react';
import * as S from './FourthSectionBtn.style';

interface Product {
  mainItemName: string;
  mainItemPrice: string | null;
  mainCategoryImg: string;
}

//임의로 데이터 넣어서 가로 스크롤 구현 확인
const DUMMY_DATA: Product[] = [
  {
    mainItemName: '교육 할인가로 Mac 또는 iPad를 더 저렴하게.³',
    mainItemPrice: null,
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-education-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627664746000',
  },
  {
    mainItemName: '대기업부터 중소기업까지 Apple이 함께합니다.³',
    mainItemPrice: null,
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-business-202209?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1660927783133',
  },
  {
    mainItemName: '1년 보증이 제공되는 리퍼비쉬 Apple 제품을 쇼핑하세요.',
    mainItemPrice: null,
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-refurb-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627318783000',
  },
];

const CATEGORY_DATA = ['교육', '비즈니스', '인증 리퍼비쉬 제품'];

const FourthSectionBtn = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {DUMMY_DATA.map((item, index) => {
        const isSecondBox = index === 1;
        const category = CATEGORY_DATA[index];

        return (
          <S.Btn
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <>
              {hoveredIndex === index && (
                <HoveredProduct width={40} height={50} borderRadius={1.8} haveDetailBtn={false} />
              )}
            </>

            <S.ProductInfo $isHovered={hoveredIndex === index} $isSecondBox={isSecondBox}>
              <p>{category}</p>
              <h1>{item.mainItemName}</h1>
            </S.ProductInfo>
            <S.ProductImg src={item.mainCategoryImg} alt={item.mainItemName}></S.ProductImg>
          </S.Btn>
        );
      })}
    </>
  );
};

export default FourthSectionBtn;
