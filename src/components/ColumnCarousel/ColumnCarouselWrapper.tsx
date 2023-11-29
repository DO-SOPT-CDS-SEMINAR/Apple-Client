import { AddToCartButton } from '../../common/Button/AddToCartButton';
import { ColorCarouselComponent } from './ColorCarouselComponent';
import * as S from './ColumnCarousel.style';
import { ConnectCarouselComponent } from './ConnectCarouselComponent';
import { GigaCarouselComponent } from './GigaCarouselComponent';
import { ModelCarouselComponent } from './ModelCarouselComponent';

export const ColumnCarouselWrapper = () => {
  return (
    <S.Wrapper>
      <ModelCarouselComponent />
      <ColorCarouselComponent />
      <GigaCarouselComponent />
      <ConnectCarouselComponent />
      <S.PriceWrapper>
        <S.FinalPrice>₩1,249,000</S.FinalPrice>
        <S.VATText>약 ₩285,364의 VAT 포함</S.VATText>
        <S.CardText>최대 12개월 신용 카드 할부</S.CardText>
      </S.PriceWrapper>
      <S.ItemWrapper>
        <S.ItemBox>픽업 : 재고확인</S.ItemBox>
        <S.ItemBox>도착 : 수 2023/11/15 - 무료 배송 추가 배송 옵션 확인</S.ItemBox>
      </S.ItemWrapper>
      <AddToCartButton>장바구니에 담기</AddToCartButton>
    </S.Wrapper>
  );
};
