import HoveredProduct from '../../../../common/HoveredProduct';
import { useState } from 'react';
import * as S from './FirstSectionBtn.style';

interface Product {
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

//임의로 데이터 넣어서 가로 스크롤 구현 확인
const DUMMY_DATA: Product[] = [
  {
    mainItemName: 'iPhone 15 Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030449',
  },
  {
    mainItemName: 'MacBook Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696865069259',
  },
  {
    mainItemName: 'iPhone 15 Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696872235281',
  },
  {
    mainItemName: 'iPhone 15 Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698188084112',
  },
  {
    mainItemName: 'iPhone 15 Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030352',
  },
];

const FirstSectionBtn = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {DUMMY_DATA.map((item, index) => (
        <S.Btn
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <>
            {hoveredIndex === index && (
              <HoveredProduct width={48} height={50} borderRadius={1.8} haveDetailBtn={true} />
            )}
          </>

          <S.ProductInfo $isHovered={hoveredIndex === index}>
            <h2>NEW</h2>
            <h1>{item.mainItemName}</h1>
            <p>{item.mainItemPrice}</p>
          </S.ProductInfo>
          <S.ProductImg src={item.mainCategoryImg} alt={item.mainItemName}></S.ProductImg>
        </S.Btn>
      ))}
    </>
  );
};

export default FirstSectionBtn;
