import { BuyButton } from '../../../common/Button/BuyButton';
import * as S from './IpadProducts.style';

interface IpadProductsProps {
  productName: string;
  price: number;
}

const IpadProducts = ({ productName, price }: IpadProductsProps) => {
  const formattedPrice = price.toLocaleString();
  return (
    <S.ProductContainer>
      <S.ProductName>{productName}</S.ProductName>
      <S.ProductImg
        src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-pro-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664578794100'
        alt='아이패드 이미지'
      />
      <S.ColorsContainer>
        <S.ProductColorsImg
          src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202210_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1664559395059'
          alt='아이패드 색상'
        />
        <S.ProductColorsImg
          src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-select-wifi-silver-202210_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1664559395063'
          alt='아이패드 색상'
        />
      </S.ColorsContainer>

      <S.BottomContainer>
        <S.ProductPrice>₩{formattedPrice}부터</S.ProductPrice>
        <BuyButton>구입하기</BuyButton>
      </S.BottomContainer>
    </S.ProductContainer>
  );
};

export default IpadProducts;
