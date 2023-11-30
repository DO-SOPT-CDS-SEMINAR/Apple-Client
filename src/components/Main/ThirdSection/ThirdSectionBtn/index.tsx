/* eslint-disable react/jsx-key */
import HoveredProduct from '../../../../common/HoveredProduct';
import { IconComponents } from '../../../../constant/iconComponents';
import { useState } from 'react';
import * as S from './ThirdSectionBtn.style';

interface ThirdSectionBtnProps {
  ThirdSectionData: Product[];
}
interface Product {
  mainItemAsset: number;
  mainItemName: string;
  mainItemPrice: string | null;
  mainCategoryImg: string | null;
}

const ThirdSectionBtn = ({ ThirdSectionData }: ThirdSectionBtnProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <S.FirstWrapper>
        {ThirdSectionData.map((item, index) => (
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
              <h1>{item.mainItemName.replace(/<br>/g, '\n')}</h1>
            </S.ProductInfo>
            {IconComponents[index] && (
              <S.IconWrapper $isHovered={hoveredIndex === index}>
                {typeof IconComponents[index] === 'string' ? (
                  <p>{IconComponents[index]}</p>
                ) : (
                  <div>{IconComponents[index]}</div>
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
