import { useState } from 'react';
import { BuyButton } from '../../../../common/Button/BuyButton';
import ColorPreview from '../../ColorPreview';
import * as S from './IpadProducts.style';
import HoveredProduct from '../../../../common/HoveredProduct';
import { useNavigate } from 'react-router-dom';

interface IpadProductsProps {
  idx: number | string;
  productName: string;
  productSubName?: string;
  imgUrl: string;
  price: string;
}

const IpadProducts = ({ productName, productSubName, imgUrl, price, idx }: IpadProductsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigator = useNavigate();

  const goShopIpad = () => {
    idx === 0 && navigator('/shop-ipad');
  };

  return (
    <S.ProductContainer
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <HoveredProduct width={40} height={49} borderRadius={1.8} haveDetailBtn={true} />
      )}

      <S.ProductNameContainer $productSubname={productSubName} $isHovered={isHovered}>
        <S.ProductName>{productName}</S.ProductName>
        {productSubName && <S.ProductSubName>{productSubName}</S.ProductSubName>}
      </S.ProductNameContainer>

      <S.ProductImg src={imgUrl} alt={`${productName}` + `${productSubName}`} />

      <S.ColorsContainer>
        <ColorPreview idx={idx} />
      </S.ColorsContainer>

      <S.BottomContainer>
        <S.ProductPrice $isHovered={isHovered}>₩{price}</S.ProductPrice>
        <S.BuyBtnContainer onClick={goShopIpad}>
          <BuyButton>구입하기</BuyButton>
        </S.BuyBtnContainer>
      </S.BottomContainer>
    </S.ProductContainer>
  );
};

export default IpadProducts;
