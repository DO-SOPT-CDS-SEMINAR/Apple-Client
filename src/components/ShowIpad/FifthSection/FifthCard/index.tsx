import * as S from './FifthCard.style';
import ColorPreview from '../../ColorPreview';

interface IpadProductsProps {
  idx: number | string;
  productName: string[];
  productTag?: string;
  imgUrl: string;
  price: number;
}

const FifthCard = ({ productName, productTag, imgUrl, price, idx }: IpadProductsProps) => {
  const formattedPrice = price.toLocaleString();
  return (
    <S.ProductContainer>
      <S.ProductNameContainer $productSubname={productTag}>
        {productName.map((name, idx) => {
          return <S.ProductName key={idx}>{name}</S.ProductName>;
        })}

        {productTag && <S.ProductSubName>{productTag}</S.ProductSubName>}
      </S.ProductNameContainer>

      <S.ProductImg src={imgUrl} alt={`${productName}`} />

      <S.ColorsContainer>
        <ColorPreview idx={idx} />
      </S.ColorsContainer>

      <S.BottomContainer>
        <S.ProductPrice>₩{formattedPrice}부터</S.ProductPrice>
      </S.BottomContainer>
    </S.ProductContainer>
  );
};

export default FifthCard;
