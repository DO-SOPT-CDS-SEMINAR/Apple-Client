import { BuyButton } from '../../../../common/Button/BuyButton';
import ColorPreview from '../../ColorPreview';
import * as S from './IpadProducts.style';

interface IpadProductsProps {
  idx: number | string;
  productName: string;
  productSubName?: string;
  imgUrl: string;
  price: number;
}

const IpadProducts = ({ productName, productSubName, imgUrl, price, idx }: IpadProductsProps) => {
  const formattedPrice = price.toLocaleString();

  return (
    <S.ProductContainer>
      <S.ProductNameContainer $productSubname={productSubName}>
        <S.ProductName>{productName}</S.ProductName>
        {productSubName && <S.ProductSubName>{productSubName}</S.ProductSubName>}
      </S.ProductNameContainer>

      <S.ProductImg src={imgUrl} alt={`${productName}` + `${productSubName}`} />

      <S.ColorsContainer>
        <ColorPreview idx={idx} />
      </S.ColorsContainer>

      <S.BottomContainer>
        <S.ProductPrice>₩{formattedPrice}부터</S.ProductPrice>
        <BuyButton>구입하기</BuyButton>
      </S.BottomContainer>
    </S.ProductContainer>
  );
};

export default IpadProducts;
