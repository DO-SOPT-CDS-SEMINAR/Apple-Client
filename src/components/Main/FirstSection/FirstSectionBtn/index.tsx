import HoveredProduct from '../../../../common/HoveredProduct';
import { useState } from 'react';
import * as S from './FirstSectionBtn.style';

interface FirstSectionBtnProps {
  firstSectionData: Product[];
}
interface Product {
  mainItemAsset: number;
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

const FirstSectionBtn = ({ firstSectionData }: FirstSectionBtnProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {firstSectionData.map((item, index) => (
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
            {(index === 1 || index === 2 || index === 3 || index === 5) && <h2>NEW</h2>}
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
