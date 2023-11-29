import * as S from './HoveredProduct.style';

interface HoveredProductProps {
  width: number;
  height: number;
  borderRadius: number;
  haveDetailBtn?: boolean;
}

const HoveredProduct = ({ width, height, borderRadius, haveDetailBtn }: HoveredProductProps) => {
  return (
    <S.ProductContainer $width={width} $height={height} $borderRadius={borderRadius}>
      {haveDetailBtn && <S.DetailBtn>제품 자세히 살펴보기</S.DetailBtn>}
    </S.ProductContainer>
  );
};

export default HoveredProduct;
