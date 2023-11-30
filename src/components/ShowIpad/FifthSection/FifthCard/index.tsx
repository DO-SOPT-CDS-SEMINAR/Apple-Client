import * as S from './FifthCard.style';
import ColorPreview from '../../ColorPreview';

interface IpadProductsProps {
  id: number | string;
  productName: string[] | undefined;
  productTag?: string;
  imgUrl: string;
  price?: string | null;
}

const FifthCard = ({ productName, productTag, imgUrl, price, id }: IpadProductsProps) => {
  return (
    <S.ProductContainer $isMainCard={id === 'acc_0'}>
      <S.ProductImg src={imgUrl} alt={`${productName}`} $isMainCard={id === 'acc_0'} />

      <S.ColorsContainer $isExistColorPrev={id === 'acc_1' || id === 'acc_3' || id === 'acc_4'}>
        <ColorPreview idx={id} />
      </S.ColorsContainer>

      <S.ProductNameContainer $productSubTag={productTag} $isMainCard={id === 'acc_0'}>
        {productTag && <S.ProductSubTag>{productTag}</S.ProductSubTag>}
        {productName &&
          productName.map((name, idx) => {
            return (
              <S.ProductName key={idx} $isMainCard={id === 'acc_0'}>
                {name}
              </S.ProductName>
            );
          })}
      </S.ProductNameContainer>

      {id !== 'acc_0' && (
        <S.BottomContainer>
          <S.ProductPrice>₩{price}</S.ProductPrice>
        </S.BottomContainer>
      )}
    </S.ProductContainer>
  );
};

export default FifthCard;
