import { IcSwatchSmLightsilver, IcSwatchSmSilver } from '../../../assets/icon';
import { BuyButton } from '../../../common/Button/BuyButton';
import * as S from './IpadProducts.style';

interface IpadProductsProps {
  productName: string;
  productSubName?: string;
  price: number;
}

const IpadProducts = ({ productName, productSubName, price }: IpadProductsProps) => {
  const formattedPrice = price.toLocaleString();
  return (
    <S.ProductContainer>
      <S.ProductNameContainer $productSubname={productSubName}>
        <S.ProductName>{productName}</S.ProductName>
        {productSubName && <S.ProductSubName>{productSubName}</S.ProductSubName>}
      </S.ProductNameContainer>

      <S.ProductImg
        src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-pro-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664578794100'
        alt='아이패드 이미지'
      />
      <S.ColorsContainer>
        <IcSwatchSmSilver />
        <IcSwatchSmLightsilver />
      </S.ColorsContainer>

      <S.BottomContainer>
        <S.ProductPrice>₩{formattedPrice}부터</S.ProductPrice>
        <BuyButton>구입하기</BuyButton>
      </S.BottomContainer>
    </S.ProductContainer>
  );
};

export default IpadProducts;
