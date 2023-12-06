import { useState } from 'react';
import { AddToCartButton } from '../../common/Button/AddToCartButton';
import { PlusIconButton } from '../../common/Button/PlusIconButton';
import { ColumnCarouselWrapper } from '../../components/ColumnCarousel/ColumnCarouselWrapper';
import IpadType from '../../components/IpadType';
import * as S from './Purchase.style';
import AddAccssoryPage from '../AddAccessory';
import { IpadproIcScrabNormal } from '../../assets/icon';
import CommonFooter from '../../common/Footer/CommonFooter';
import FirstSection from '../../components/BottomComponents/FirstSection';
import SecondSection from '../../components/BottomComponents/SecondSection';
import ThirdSection from '../../components/BottomComponents/ThirdSection';

const PurchasePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModal = () => {
    setIsModalOpen(true);
    const element = document.getElementById('top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      {isModalOpen && <AddAccssoryPage />}
      <S.Container id='top'>
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
          <AddToCartButton onClick={handleModal}>장바구니에 담기</AddToCartButton>
          <S.LastText>
            <p>시간이 좀 더 필요하신가요?</p>선택한 기기를 관심 목록에 모두 저장해두고 언제든
            살펴보던곳부터 다시 이어 보세요.
            <S.SaveText>
              <IpadproIcScrabNormal />
              나중을 위해 저장
            </S.SaveText>
          </S.LastText>
        </S.CarouselContainer>
      </S.Container>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <S.FooterWrapper>
        <CommonFooter />
      </S.FooterWrapper>
    </>
  );
};

export default PurchasePage;
