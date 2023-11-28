import HoveredProduct from '../../../../common/HoveredProduct';
import { useState } from 'react';
import * as S from './SecondSectionBtn.style';

interface Product {
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

//임의로 데이터 넣어서 가로 스크롤 구현 확인
const DUMMY_DATA: Product[] = [
  {
    mainItemName: 'MacBook Pro',
    mainItemPrice: '₩1,550,000',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1694014871985',
  },
  {
    mainItemName: 'iPhone 15 Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1617761671000',
  },
  {
    mainItemName: 'iPhone 15 Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1632861342000',
  },
  {
    mainItemName: 'iPhone 15 Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030352',
  },
];

const SecondSectionBtn = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <S.FirstBtn>
        <h1>
          무료 각인을 더해 더 훈훈한 <br />
          선물
        </h1>
        <S.FirstBtnImg
          src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-holiday-engraving-202311?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1696863027293'
          alt='각인'
        ></S.FirstBtnImg>
      </S.FirstBtn>
      {DUMMY_DATA.map((item, index) => (
        <S.Btn
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <>
            {hoveredIndex === index && (
              <HoveredProduct width={31.3} height={50} borderRadius={1.8} haveDetailBtn={true} />
            )}
          </>
          <S.ImgWrapper>
            <S.ProductImg src={item.mainCategoryImg} alt={item.mainItemName}></S.ProductImg>
          </S.ImgWrapper>
          <S.ProductInfo $isHovered={hoveredIndex === index}>
            <h2>무료각인</h2>
            <h1>{item.mainItemName}</h1>
            <p>{item.mainItemPrice}</p>
          </S.ProductInfo>
        </S.Btn>
      ))}
    </>
  );
};

export default SecondSectionBtn;
