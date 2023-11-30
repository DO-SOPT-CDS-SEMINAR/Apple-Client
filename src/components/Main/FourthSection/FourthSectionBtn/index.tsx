import HoveredProduct from '../../../../common/HoveredProduct';
import { useState } from 'react';
import * as S from './FourthSectionBtn.style';

interface FourthSectionBtnProps {
  FourthSectionData: Product[];
}
interface Product {
  mainItemName: string;
  mainItemPrice: string | null;
  mainCategoryImg: string;
}

const CATEGORY_DATA = ['교육', '비즈니스', '인증 리퍼비쉬 제품'];

const FourthSectionBtn = ({ FourthSectionData }: FourthSectionBtnProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {FourthSectionData.map((item, index) => {
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
              <h1>{item.mainItemName.replace(/<br>/g, '\n')}</h1>
            </S.ProductInfo>
            <S.ProductImg src={item.mainCategoryImg} alt={item.mainItemName}></S.ProductImg>
          </S.Btn>
        );
      })}
    </>
  );
};

export default FourthSectionBtn;
