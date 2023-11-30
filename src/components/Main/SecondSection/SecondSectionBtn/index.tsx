import HoveredProduct from '../../../../common/HoveredProduct';
import { useState } from 'react';
import * as S from './SecondSectionBtn.style';

interface SecondSectionBtnProps {
  SecondSectionData: Product[];
}
interface Product {
  mainItemAsset: number;
  mainItemName: string;
  mainItemPrice: string | null;
  mainCategoryImg: string;
}

const SecondSectionBtn = ({ SecondSectionData }: SecondSectionBtnProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {SecondSectionData.map((item, index) => (
        <S.Btn
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          $isFirst={index === 0}
        >
          <>
            {hoveredIndex === index && index !== 0 && (
              <HoveredProduct width={31.3} height={50} borderRadius={1.8} haveDetailBtn={true} />
            )}
          </>
          <S.ImgWrapper $isFirst={index === 0}>
            <S.ProductImg
              src={item.mainCategoryImg}
              alt={item.mainItemName}
              $isFirst={index === 0}
            ></S.ProductImg>
          </S.ImgWrapper>
          <S.ProductInfo $isHovered={hoveredIndex === index} $isFirst={index === 0}>
            {index >= 1 && index <= 5 && <h2>무료각인</h2>}
            <h1>{item.mainItemName}</h1>
            <p>{item.mainItemPrice}</p>
          </S.ProductInfo>
        </S.Btn>
      ))}
    </>
  );
};

export default SecondSectionBtn;
