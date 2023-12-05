import { PlusIconButton } from '../../common/Button/PlusIconButton';
import { ColumnCarouselWrapper } from '../../components/ColumnCarousel/ColumnCarouselWrapper';
import IpadType from '../../components/IpadType';
import * as S from './Purchase.style';

const PurchasePage = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.LeftTitle>
          <S.Title>iPad Pro 구입하기</S.Title>
          <S.Price>₩1,249,000부터 ~ ₩3,972,000까지</S.Price>
        </S.LeftTitle>
        <S.RightButton>
          <PlusIconButton>보상 판매로 ₩40,000 – ₩560,000 더 저렴하게* </PlusIconButton>
          <PlusIconButton>신용 카드 할부 </PlusIconButton>
        </S.RightButton>
      </S.TitleContainer>

      <S.TypeContainer>
        <IpadType />
      </S.TypeContainer>
      <S.CarouselContainer>
        <ColumnCarouselWrapper />
      </S.CarouselContainer>
    </S.Container>
  );
};

export default PurchasePage;
